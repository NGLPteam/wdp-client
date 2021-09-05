import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

/** Formats a date from the backend, default is `PPp`, ie `MMM d, yyyy, h:mm a`  */
export function formatDate(dateString: string, formatString?: string) {
  const parsedDate = parseISO(dateString);
  try {
    return format(parsedDate, formatString || "PPp");
  } catch (error) {
    return "";
  }
}
