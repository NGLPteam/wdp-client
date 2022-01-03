export function getSchemaTranslationKey(schemaSlug: string): string {
  return `schema.${schemaSlug.replace(":", ".")}`;
}
