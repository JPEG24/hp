document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".post-content");
  const toc = document.querySelector("#toc-list");

  if (!content || !toc) return;

  const headings = content.querySelectorAll("h1, h2, h3");

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#${heading.id}`;

    const clonedHeading = heading.cloneNode(true);

    clonedHeading.querySelectorAll("a").forEach(link => {
      link.replaceWith(...link.childNodes);
    });

    a.innerHTML = clonedHeading.innerHTML;

    li.classList.add(`toc-${heading.tagName.toLowerCase()}`);

    li.appendChild(a);
    toc.appendChild(li);
  });
});