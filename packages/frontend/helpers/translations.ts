import { TFunction } from "i18next";

export function getSchemaTranslationKey(schemaSlug: string): string {
  return `schema.${schemaSlug.replace(":", ".")}`;
}

export function getSchemaPluralName(
  slug: string,
  fallback: string,
  t: TFunction,
) {
  const translationKey = getSchemaTranslationKey(slug);
  const translation = t(translationKey, { count: 2 });

  return translation === translationKey && fallback ? fallback : translation;
}
