document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach(a => {
    const url = new URL(a.href, location.href);

    if (url.origin !== location.origin) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });
});