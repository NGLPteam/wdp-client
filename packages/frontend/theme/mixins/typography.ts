import { css } from "styled-components";
export { tTruncate, tLineClamp } from "@wdp/lib/theme/mixins";

// Base heading styling
export function tHeading(size: 1 | 2 | 3 | 4 | 5 | 6) {
  return `
    font-size: var(${`--font-size-h${size}`});
    font-weight: var(${`--font-weight-h${size}, 400`});
    line-height: var(${`--line-height-h${size}`});
    letter-spacing: var(${`--letter-spacing-h${size}`});
  `;
}

export const tCopy = css`
  font-family: var(--font-face-base);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  letter-spacing: var(--letter-spacing-base);
`;

export const tCopySmall = css`
  font-size: var(--font-size-base-sm);
  line-height: var(--line-height-base-sm);
  letter-spacing: var(--letter-spacing-base-sm);
`;

export function tLabel(style: "sm" | "lg" | "mix") {
  return `
    text-transform: ${style === "mix" ? "none" : "uppercase"};
    font-size: var(--font-size-label-${style});
    font-weight: var(--font-weight-label-${style});
    letter-spacing: var(--letter-spacing-label-${style});
    line-height: var(--line-height-label-${style});
  `;
}
