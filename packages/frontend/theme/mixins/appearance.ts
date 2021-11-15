import { css } from "styled-components";
import { baseColors, borderRadius } from "../base/variables";
import { tLabel } from "./typography";

const aBgProps = `
    background-color: var(--background-color);
    color: var(--color-base);
`;

export function aBgNeutral00() {
  return css`
    --background-color: ${baseColors.neutral00};

    ${aBgProps}
  `;
}

export function aBgCustom10() {
  return css`
    --background-color: var(--color-custom10);
    --color-light: ${baseColors.neutral80};
    --button-secondary-bg-color: ${baseColors.neutral00};

    ${aBgProps}
  `;
}

export function aBgCustom20() {
  return css`
    --background-color: var(--color-custom20);
    --color-light: ${baseColors.neutral80};
    --button-secondary-bg-color: ${baseColors.neutral00};

    ${aBgProps}
  `;
}

export function aBgNeutral80() {
  return css`
    --background-color: ${baseColors.neutral80};
    --color-base: ${baseColors.neutral00};
    --color-light: ${baseColors.neutral30};
    --button-primary-bg-color: var(--color-custom20);
    --button-primary-text-color: ${baseColors.neutral90};
    --button-secondary-bg-color: ${baseColors.neutral90};
    --button-secondary-text-color: ${baseColors.neutral00};

    ${aBgProps}
  `;
}

export function aBgNeutral90() {
  return css`
    --background-color: ${baseColors.neutral90};
    --color-base: ${baseColors.neutral00};
    --color-light: ${baseColors.neutral60};
    --button-primary-bg-color: var(--color-custom20);
    --button-primary-text-color: ${baseColors.neutral90};
    --button-secondary-bg-color: ${baseColors.neutral80};
    --button-secondary-text-color: ${baseColors.neutral00};

    ${aBgProps}
  `;
}

export function aButton(style: "primary" | "secondary", size: "sm" | "lg") {
  return css`
    background-color: var(--button-${style}-bg-color);
    color: var(--button-${style}-text-color);
    border-radius: ${borderRadius.xlg};
    padding-block-start: ${size === "sm" ? "6px" : "14px"};
    padding-block-end: ${size === "sm" ? "9px" : "17px"};
    padding-inline: ${size === "sm" ? "16px" : "30px"};
    ${tLabel("mix")}
  `;
}
