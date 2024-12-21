// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Til sozlamalari
const resources = {
  uz: {
    translation: {
      "name": "Abduhamid Botirov",
    }
  },
  ru: {
    translation: {
      "name": "Абдухамид Ботиров",
    }
  },
  eng: {
    translation: {
      "name": "Abduhamid Botirov",
    }
  }
};

i18n
  .use(initReactI18next) // React bilan integratsiya qilish
  .init({
    resources,
    lng: 'uz', // dastlabki til
    fallbackLng: 'uz', // agar til topilmasa, shu tilni ishlatish
    interpolation: {
      escapeValue: false // XSS himoyasi
    }
  });

export default i18n;
