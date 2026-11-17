document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-tag");
  const articles = document.querySelectorAll(".article-item");
  const noArticles = document.getElementById("no-articles");

  function filterArticles(tag) {
    let visibleCount = 0;

    articles.forEach(article => {
      const tags = JSON.parse(article.dataset.tags);
      const visible = tag === "all" || tags.includes(tag);

      article.hidden = !visible;

      if (visible) visibleCount++;
    });

    noArticles.hidden = visibleCount !== 0;

    filterButtons.forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.filter === tag
      );
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterArticles(button.dataset.filter);
    });
  });
});