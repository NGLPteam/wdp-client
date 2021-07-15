import format from "date-fns/format";
import parse from "date-fns/parse";

/** Formats a date from the backend, default is `PPp`, ie `MMM d, yyyy, h:mm a`  */
export function formatDate(dateString: string, formatString?: string) {
  const parsedDate = parse(dateString, `yyyy-MM-dd'T'kk:mm:ss'Z'`, new Date());
  return format(parsedDate, formatString || "PPp");
}
