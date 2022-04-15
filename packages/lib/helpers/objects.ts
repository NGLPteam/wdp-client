export function removeEmptyKeys(data: Record<string, string>) {
  Object.keys(data).forEach((key) => {
    if (!data[key]) {
      delete data[key];
    }
  });
}
