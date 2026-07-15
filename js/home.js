document.getElementById("current-year").textContent = new Date().getFullYear();

document.querySelectorAll(".disabled-link").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

document.querySelectorAll("[data-event]").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", link.dataset.event);
    }
  });
});
