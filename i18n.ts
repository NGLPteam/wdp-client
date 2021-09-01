import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import * as resources from "./locales";

export const updateI18n = (lang: string) => {
  i18n.language !== lang && i18n.changeLanguage(lang);
};

const DEFAULT_LANG = "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    lng: DEFAULT_LANG,
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: {
      default: [DEFAULT_LANG],
    },
    react: {
      transSupportBasicHtmlNodes: true,
    },
  });

export default i18n;
