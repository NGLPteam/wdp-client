import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { localeData } from "./localeStrings";

export const updateI18n = (lang: string) => {
  i18n.language !== lang && i18n.changeLanguage(lang);
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    lng: "en",
    resources: localeData,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: {
      default: ["en"],
    },
    react: {
      transSupportBasicHtmlNodes: true,
    },
  });

export default i18n;
