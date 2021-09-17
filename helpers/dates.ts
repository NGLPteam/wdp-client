import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

/** Formats a date from the backend, default is `PPp`, ie `MMM d, yyyy, h:mm a`  */
export function formatDate(dateString: string, formatString?: string) {
  // Removes 'Z' and parses dates - ignoring timezones in conversion
  const parsedDate = parseISO(dateString.replace("Z", ""));
  try {
    return format(parsedDate, formatString || "PPp");
  } catch (error) {
    return "";
  }
}

/** Returns just the date from a date string.
 * Example date string: `MMM d, yyyy, h:mm a`,
 * example returned: `yyyy-mm-dd` */
export function getDateOnly(dateString: string | null | undefined) {
  return dateString ? formatDate(dateString, "yyyy-MM-dd") : undefined;
}
