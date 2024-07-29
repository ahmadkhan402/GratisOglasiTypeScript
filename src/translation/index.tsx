import i18n from "i18next";
import "intl-pluralrules";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { bs } from "./bs";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    bs: {
      translation: bs,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
