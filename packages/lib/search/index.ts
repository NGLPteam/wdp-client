const FILTER_SEARCH_PATHS = [
  "$core.published",
  "$core.doi",
  "props.open_access#boolean",
  "props.peer_reviewed#boolean",
  "props.cc_license#select",
  "props.access#select",
  "props.publisher#string",
];

type Property = Readonly<{ readonly searchPath?: string | undefined }>;

// Filter searchableProperties by their searchPath, using the above array.
// Example: filterSearchableProperties<FilterNode>(searchData.coreProperties)
export function filterSearchableProperties<T extends Property>(
  properties: Readonly<T[]>
) {
  if (!properties) return [];

  return properties.filter(
    (prop: T) =>
      prop.searchPath && FILTER_SEARCH_PATHS.includes(prop.searchPath)
  );
}

export function getFilterInputType(operator: string) {
  switch (operator) {
    case "date":
    case "dateGTE":
    case "dateLTE":
      return "date";

    case "numeric":
    case "numericLTE":
    case "numericGTE":
      return "number";

    default:
      return "text";
  }
}

export function getFilterInputLabel(label: string, operator: string) {
  switch (operator) {
    case "dateGTE":
      return `${label} After`;

    case "dateLTE":
      return `${label} Before`;

    default:
      return label;
  }
}
