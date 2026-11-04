document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".highlight").forEach((block) => {
    const pre = block.querySelector("pre");
    if (!pre) return;

    const button = document.createElement("button");
    button.className = "copy-button";
    button.textContent = "Copy";

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(pre.innerText);
        button.textContent = "Copied!";
      } catch (error) {
        button.textContent = "Copy failed";
      }

      setTimeout(() => {
        button.textContent = "Copy";
      }, 2000);
    });

    block.appendChild(button);
  });
});