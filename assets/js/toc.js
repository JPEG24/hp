document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".post-content");
  const toc = document.querySelector("#toc-list");

  if (!content || !toc) return;

  const headings = content.querySelectorAll("h2, h3");

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;

    if (heading.tagName === "H3") {
      li.classList.add("toc-h3");
    }

    li.appendChild(a);
    toc.appendChild(li);
  });
});