export function flattenParam(s: string | string[]): string {
  if (isStringArray(s)) {
    return s[0];
  } else if (isString(s)) {
    return String(s);
  }
}

export function isString(v: any): boolean {
  return typeof v === "string";
}

export function isStringArray(v: any): boolean {
  return Array.isArray(v) && v.length && v.every(isString);
}