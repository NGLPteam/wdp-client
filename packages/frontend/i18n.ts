import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import get from "lodash/get";
import * as resources from "./locales";

export const updateI18n = (lang: string) => {
  i18n.language !== lang && i18n.changeLanguage(lang);
};

export const DEFAULT_LNG = "en-US";

export const SUPPORTED_LOCALES: Record<string, string | undefined> = {};

Object.keys(resources).forEach(
  (key) => (SUPPORTED_LOCALES[key] = get(resources, `${key}.translation.key`))
);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: DEFAULT_LNG,
    resources,
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) =>
        format === "number" ? new Intl.NumberFormat(lng).format(value) : value,
    },
    fallbackLng: {
      default: [DEFAULT_LNG],
    },
    react: {
      transSupportBasicHtmlNodes: true,
    },
  });

export default i18n;

// TODO: Upgrade to ^21.3.0
// i18n.services.formatter?.add("capitalize", (value: string) => {
//   return capitalize(value);
// });
