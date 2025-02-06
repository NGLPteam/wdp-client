export function normalizeDoiUrl(doi: string): {
  url: string;
  displayUrl: string;
} {
  // Normalize the URL and display text
  if (doi.match(/^https?:\/\//i)) {
    const url = new URL(doi);
    return {
      url: url.toString(),
      displayUrl: url.pathname,
    };
  } else {
    return {
      url: `https://doi.org/${doi}`,
      displayUrl: doi,
    };
  }
}
