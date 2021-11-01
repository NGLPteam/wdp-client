export function flattenParam(s: string | string[]): string | undefined {
  if (isStringArray(s)) {
    return s[0];
  } else if (isString(s)) {
    return String(s);
  }
}

export function isString(v: string | string[]): boolean {
  return typeof v === "string";
}

export function isStringArray(v: string | string[]): boolean {
  return Array.isArray(v) && !!v.length && v.every(isString);
}
