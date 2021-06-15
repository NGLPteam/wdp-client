import { updateI18n } from "../helpers/i18n";
// import { useRouter } from "next/router";

/**
 * Usage of this library is typically via hook inside a view:
 *      import { useTranslation } from "react-i18next";
 *      ...
 *      const { t } = useTranslation();
 *      ...
 *      t('translation-key-here');
 */

/**
 * This hook sets locale
 *
 * @param locale
 * @returns void
 */
export function useSetLocale(locale = "en"): void {
  // TODO: do this from the router query string, or get from user setting?
  //   const {query} = useRouter();
  //   if (query.lang) {}

  // TODO: more langs? Remember that locale doesn't necessarily line up
  // with locale strings filename. E.g. locale === "en-US", filename "en"
  locale === "es" ? updateI18n("es") : updateI18n("en");
}
