export function getTruncatedText(text: string, charCount = 300) {
  return text && text.length > charCount
    ? `${text.substring(0, charCount)}...`
    : text;
}
