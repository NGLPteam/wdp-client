import { formatDate } from "@wdp/lib/helpers";
import type { DatePrecision } from "types/graphql-schema";

export function getPrecisionDateDisplay(
  precision: DatePrecision,
  value: string
) {
  return formatDate(
    value,
    precision === "YEAR"
      ? "yyyy"
      : precision === "MONTH"
      ? "MMMM yyyy"
      : "MMMM d, yyyy"
  );
}
