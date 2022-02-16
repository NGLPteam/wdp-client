export function formatNumberToString(num: number, digits?: 0): string {
  return num.toLocaleString(undefined, { minimumFractionDigits: digits });
}
