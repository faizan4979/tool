// blog-script.js - small enhancements: FAQ accordion, copy link, basic accessibility

document.addEventListener("DOMContentLoaded", function () {
  // Accordion
  document.querySelectorAll(".faq-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      const panel = button.nextElementSibling;
      if (expanded) {
        button.setAttribute("aria-expanded", "false");
        panel.hidden = true;
      } else {
        button.setAttribute("aria-expanded", "true");
        panel.hidden = false;
      }
    });
  });

  // Copy link button
  const copyBtn = document.getElementById("copyLinkBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        copyBtn.textContent = "Link copied!";
        setTimeout(() => (copyBtn.textContent = "Copy article link"), 2000);
      } catch (e) {
        copyBtn.textContent = "Copy failed";
      }
    });
  }
});
