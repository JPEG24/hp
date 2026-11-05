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
        element.style.color = getColor(rating);
				element.style.fontWeight = "bold";
				element.style.fontFamily = "Squada One";
				element.style.fontSize = "1.2em";
      }
    }
  } catch (error) {
    for (const element of Object.values(elements)) {
      if (element) element.textContent = "取得失敗";
    }

    console.error("AtCoder API:", error);
  }
});