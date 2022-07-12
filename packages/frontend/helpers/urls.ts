export function normalizeDoiUrl(doi: string): {
  url: string;
  displayUrl: string;
} {
  // Normalize the URL and display text
  if (doi.startsWith("https://doi.org/")) {
    return {
      url: doi,
      displayUrl: doi.replace("https://doi.org/", ""),
    };
  } else {
    return {
      url: `https://doi.org/${doi}`,
      displayUrl: doi,
    };
  }
}
