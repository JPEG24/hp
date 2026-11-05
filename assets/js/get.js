document.addEventListener("DOMContentLoaded", async () => {
  const ratingElement = document.querySelector("#atcoder-rating");

  if (!ratingElement) return;

  try {
    const response = await fetch("/api/rating");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const rating = data.rating;

    if (rating === null) {
      ratingElement.textContent = "Unrated";
      return;
    }

    ratingElement.textContent = rating;

    const colors = [
      [400, "#808080"],
      [800, "#804000"],
      [1200, "#008000"],
      [1600, "#00C0C0"],
      [2000, "#0000FF"],
      [2400, "#C0C000"],
      [2800, "#FF8000"],
      [Infinity, "#FF0000"]
    ];

    const color = colors.find(([border]) => rating < border)[1];

    ratingElement.style.color = color;
		ratingElement.style.fontWeight = "bold";

  } catch (error) {
    ratingElement.textContent = "取得失敗";
    console.error("AtCoder API:", error);
  }
});