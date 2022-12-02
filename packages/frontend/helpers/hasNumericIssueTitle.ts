export default function hasNumericIssueTitle(title?: string) {
  if (!title) return false;

  const titleRegex = /Issue\s[0-9]+/i;
  return titleRegex.test(title);
}
