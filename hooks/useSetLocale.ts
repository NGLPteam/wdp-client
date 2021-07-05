import { updateI18n } from "../helpers/i18n";

export function useSetLocale(locale = "en"): void {
  // TODO: do this from the router query string, or get from user setting?
  //   const {query} = useRouter();
  //   if (query.lang) {}

  // TODO: more langs? Remember that locale doesn't necessarily line up
  // with locale strings filename. E.g. locale === "en-US", filename "en"
  locale === "es" ? updateI18n("es") : updateI18n("en");
}

export default useSetLocale;
