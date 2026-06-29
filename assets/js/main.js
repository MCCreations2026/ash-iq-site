const toggle = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
const yearTargets = document.querySelectorAll("[data-year]");
const siteConfig = window.ASH_IQ_SITE_CONFIG || {};

const isConfiguredUrl = (value, placeholder) => {
  return typeof value === "string" && value.startsWith("https://") && value !== placeholder;
};

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }
  });
}

yearTargets.forEach((target) => {
  target.innerHTML = "&copy; 2026 Pine &amp; Ash. All rights reserved.";
});

const formPublicUrl = siteConfig.GOOGLE_FORM_PUBLIC_URL;
const formEmbedUrl = siteConfig.GOOGLE_FORM_EMBED_URL;
const hasPublicForm = isConfiguredUrl(formPublicUrl, "GOOGLE_FORM_PUBLIC_URL");
const hasEmbedForm = isConfiguredUrl(formEmbedUrl, "GOOGLE_FORM_EMBED_URL");

document.querySelectorAll("[data-google-form-link]").forEach((link) => {
  const configuredLabel = link.dataset.configuredLabel || link.textContent;
  if (hasPublicForm) {
    link.href = formPublicUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.removeAttribute("aria-disabled");
    link.dataset.formState = "configured";
    link.textContent = configuredLabel;
  } else {
    link.href = "#google-form-placeholder";
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.setAttribute("aria-disabled", "true");
    link.dataset.formState = "placeholder";
    if (link.dataset.placeholderLabel) {
      link.textContent = link.dataset.placeholderLabel;
    }
  }
});

const formEmbed = document.querySelector("[data-google-form-embed]");
const formPlaceholder = document.querySelector("[data-google-form-placeholder]");
const formStatus = document.querySelector("[data-google-form-status]");
const sheetNameTargets = document.querySelectorAll("[data-google-sheet-name]");

sheetNameTargets.forEach((target) => {
  target.textContent = siteConfig.GOOGLE_SHEET_PRIVATE_NAME || "Ash IQ Waitlist Responses";
});

if (formEmbed && formPlaceholder) {
  if (hasEmbedForm) {
    formEmbed.src = formEmbedUrl;
    formEmbed.hidden = false;
    formPlaceholder.hidden = true;
  } else {
    formEmbed.hidden = true;
    formPlaceholder.hidden = false;
  }
}

if (formStatus) {
  formStatus.textContent = hasPublicForm || hasEmbedForm
    ? "The Ash IQ Google Form is configured and ready for public responses."
    : "The Ash IQ waitlist and contact form is being connected. No app account is created from this website.";
}
