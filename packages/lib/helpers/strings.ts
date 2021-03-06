export function formatFileSize(bytes: number, decimalPoint?: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1000;
  const dm = decimalPoint || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export function convertToSlug(text?: string): string {
  if (!text) return "";

  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
