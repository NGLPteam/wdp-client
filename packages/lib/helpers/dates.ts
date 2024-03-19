import { format, parseISO } from "date-fns";

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

export function getYear(dateString: string | null | undefined) {
  return dateString ? formatDate(dateString, "yyyy") : undefined;
}

export function getMonth(dateString: string | null | undefined) {
  return dateString ? formatDate(dateString, "M") : undefined;
}

export function getDay(dateString: string | null | undefined) {
  return dateString ? formatDate(dateString, "d") : undefined;
}

export function getMonthName(month: number) {
  const date = new Date();
  date.setMonth(month);
  return format(new Date(date), "MMMM");
}

export function getDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export function dateLeadingZero(date?: number) {
  // Return value with a leading zero, or return 01
  return date ? date.toString().padStart(2, "0") : "01";
}
