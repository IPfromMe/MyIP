const translations = {
  fr: {
    title: "Quelle est mon adresse IP ?",
    ip: "Adresse IP :",
    country: "Pays :",
    city: "Ville :",
    postal: "Code postal :",
    org: "Fournisseur :",
    vpn: "Nos partenaires VPN recommandés"
  },
  en: {
    title: "What is my IP address?",
    ip: "IP Address:",
    country: "Country:",
    city: "City:",
    postal: "Postal Code:",
    org: "ISP:",
    vpn: "Our recommended VPN partners"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.getElementById("languageSwitcher").addEventListener("change", e => {
  setLanguage(e.target.value);
});

window.addEventListener("load", () => {
  // Detect browser language and default to fr or en
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.startsWith("fr") ? "fr" : "en";
  document.getElementById("languageSwitcher").value = lang;
  setLanguage(lang);
});
