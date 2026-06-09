(function () {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const year = document.querySelector("[data-year]");
  const formSection = document.querySelector("#diagnostic-form");
  const stickyCta = document.querySelector(".mobile-sticky-cta");
  const programInterest = document.querySelector("#program-interest");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (formSection && stickyCta) {
    const updateStickyCta = () => {
      const rect = formSection.getBoundingClientRect();
      const formIsActive = rect.top < window.innerHeight * 0.72 && rect.bottom > window.innerHeight * 0.25;
      stickyCta.classList.toggle("is-hidden", formIsActive);
    };

    updateStickyCta();
    window.addEventListener("scroll", updateStickyCta, { passive: true });
    window.addEventListener("resize", updateStickyCta);
    window.addEventListener("hashchange", updateStickyCta);

    document.querySelectorAll('a[href="#diagnostic-form"]').forEach((link) => {
      link.addEventListener("click", () => {
        const interest = link.getAttribute("data-interest");
        if (interest && programInterest instanceof HTMLSelectElement) {
          programInterest.value = interest;
        }
        stickyCta.classList.add("is-hidden");
        window.setTimeout(updateStickyCta, 450);
      });
    });
  }

  if (!navToggle || !navMenu) {
    return;
  }

  const closeMenu = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
})();
