import isEqual from "lodash/isEqual";

export function matchPaths(firstPath, secondPath) {
  return firstPath === secondPath;
}

export function fuzzyMatchPaths(firstPath, secondPath) {
  const paths = [firstPath, secondPath];
  const adjusted = paths.map((path) =>
    path.startsWith("/") ? path.substr(1) : path
  );
  const tokenized = adjusted.map((path) => path.split("/"));
  const [firstTokens, secondTokens] = tokenized;

  return isEqual(firstTokens, secondTokens.slice(0, firstTokens.length));
}
