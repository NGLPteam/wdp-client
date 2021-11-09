export function embedFont(
  name: string,
  filename: string,
  style = "normal",
  weight = 400
) {
  return `
    @font-face {
      font-family: ${name};
      font-style: ${style};
      font-weight: ${weight};
      font-display: block;
      src: url("/fonts/${filename}.woff2") format("woff2"),
        url("/fonts/${filename}.woff") format("woff");
    }
  `;
}

export const tTruncate = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export function tLineClamp(lines: number) {
  return `
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;
}
