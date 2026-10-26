const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuButton?.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  siteNav?.classList.toggle("is-open", !isExpanded);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
    siteNav.classList.remove("is-open");
  });
});

const form = document.querySelector("#enquiry-form");
const status = document.querySelector("#form-status");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!(form instanceof HTMLFormElement) || !form.reportValidity()) return;

  const values = new FormData(form);
  const name = String(values.get("name") || "").trim();
  const phone = String(values.get("phone") || "").trim();
  const space = String(values.get("space") || "").trim();
  const message = String(values.get("message") || "").trim();
  const enquiry = [
    "Hello RAHA INTERIOR DECORS, I would like to enquire about an interior design project.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    space ? `Interested in: ${space}` : "",
    message ? `Project details: ${message}` : "",
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/919080612510?text=${encodeURIComponent(enquiry)}`;
  const windowRef = window.open(url, "_blank", "noopener,noreferrer");
  if (status) {
    status.textContent = windowRef
      ? "Your message is ready in WhatsApp. Review it there before sending."
      : "If the WhatsApp window did not open, call +91 90806 12510 and share your enquiry.";
  }
});

document.querySelector("#year")?.replaceChildren(String(new Date().getFullYear()));

// Interactive Selector (Home Screen Accordion)
const selectorOptions = document.querySelectorAll(".selector-option");
selectorOptions.forEach((option) => {
  const activate = () => {
    if (option.classList.contains("is-active")) return;
    selectorOptions.forEach((opt) => opt.classList.remove("is-active"));
    option.classList.add("is-active");
  };
  option.addEventListener("click", activate);
  option.addEventListener("mouseenter", activate);
  option.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
    }
  });
});
