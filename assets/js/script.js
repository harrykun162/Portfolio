const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentYearElements = document.querySelectorAll("[data-current-year]");
const currentYear = new Date().getFullYear();

currentYearElements.forEach((element) => {
  element.textContent = currentYear;
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.16
  });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const copyEmailButton = document.querySelector(".copy-email");

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.copy;

    if (!email) {
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = "Email Copied";
    } catch (error) {
      copyEmailButton.textContent = "Copy Unavailable";
    }
  });
}
