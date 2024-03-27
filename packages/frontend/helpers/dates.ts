import { formatDate } from "@wdp/lib/helpers/dates";
import { DatePrecision } from "types/graphql-schema";

export function getPrecisionDateDisplay(
  precision: DatePrecision,
  value: string,
) {
  switch (precision) {
    case "YEAR":
      return formatDate(value, "yyyy");

    case "MONTH":
      return formatDate(value, "MMMM yyyy");

    default:
      return formatDate(value, "MMMM d, yyyy");
  }
}

/**
 * For citation guidelines, see https://scholar.google.com/intl/en/scholar/inclusion.html#indexing
 */
export function getPrecisionCitationDateDisplay(
  precision?: DatePrecision,
  value?: string | null,
) {
  if (!value) return null;

  switch (precision) {
    case "YEAR":
      return formatDate(value, "yyyy");

    case "MONTH":
      return formatDate(value, "yyyy/LL/01");

    default:
      return formatDate(value, "yyyy/LL/dd");
  }
}
