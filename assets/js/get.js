document.addEventListener("DOMContentLoaded", async () => {
  const elements = {
    algorithm: document.querySelector("#atcoder-algo"),
    heuristic: document.querySelector("#atcoder-heur")
  };

  if (!elements.algorithm && !elements.heuristic) return;

  const getColor = rating => {
    if (rating < 400) return "#808080";
    if (rating < 800) return "#804000";
    if (rating < 1200) return "#008000";
    if (rating < 1600) return "#00C0C0";
    if (rating < 2000) return "#0000FF";
    if (rating < 2400) return "#C0C000";
    if (rating < 2800) return "#FF8000";
    return "#FF0000";
  };
  const getColorDark = rating => {
    if (rating < 400) return "#808080";
    if (rating < 800) return "#9a6324";
    if (rating < 1200) return "#18794e";
    if (rating < 1600) return "#00b8d4";
    if (rating < 2000) return "#2463d4";
    if (rating < 2400) return "#e6c700";
    if (rating < 2800) return "#ed8617";
    return "#d83232";
  };

  try {
    const response = await fetch("/api/rating");

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();

    for (const [type, element] of Object.entries(elements)) {
      if (!element) continue;

      const rating = data[type];

      if (rating === null) {
        element.textContent = "Unrated";
      } else {
        element.textContent = rating;
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        element.style.color = isDarkMode ? getColorDark(rating) : getColor(rating);
				element.style.fontFamily = '"Squada One", sans-serif';
				element.style.fontSize = "30px";
      }
		}
  } catch (error) {
    for (const element of Object.values(elements)) {
      if (element) element.textContent = "取得失敗";
    }

    console.error("AtCoder API:", error);
  }
});