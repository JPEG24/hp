document.addEventListener("DOMContentLoaded", async () => {
  const ratingElement = document.querySelector("#atcoder-rating");

  if (!ratingElement) return;

  try {
    const response = await fetch("/api/rating");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    ratingElement.textContent = data.rating ?? "Unrated";

  } catch (error) {
    ratingElement.textContent = "取得失敗";
    console.error("AtCoder API:", error);
  }
});