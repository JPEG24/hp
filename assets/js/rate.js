document.addEventListener("DOMContentLoaded", async () => {
  const ratingElement = document.querySelector("#atcoder-rating");

  if (!ratingElement) return;

  try {
    const response = await fetch(
      "https://atcoder.jp/users/WebP/history/json"
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const history = await response.json();

    const latest = [...history]
      .reverse()
      .find(contest => contest.NewRating >= 0);

    ratingElement.textContent = latest
      ? latest.NewRating
      : "Unrated";

  } catch (error) {
    ratingElement.textContent = "取得失敗";
    console.error("AtCoder API:", error);
  }
});