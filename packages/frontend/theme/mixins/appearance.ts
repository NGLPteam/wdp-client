import { css } from "styled-components";
import {
  baseColors,
  borderRadius,
  boxShadow,
  transition,
} from "../base/variables";
import { tLabel } from "./typography";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CssContent = string | any; // TODO: Get the return type of styled-compoonents css function

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
    --button-secondary-bg-focus-color: var(--color-custom10);

    ${aBgProps}
  `;
}

export function aBgNeutral80() {
  return css`
    --background-color: ${baseColors.neutral80};
    --color-base: ${baseColors.neutral00};
    --color-light: ${baseColors.neutral30};
    --button-primary-text-color: ${baseColors.neutral90};
    --button-primary-text-focus-color: ${baseColors.neutral00};
    --button-primary-bg-color: var(--color-custom20);
    --button-primary-bg-hover-color: ${baseColors.neutral80};
    --button-primary-bg-focus-color: var(--color-custom20);
    --button-secondary-bg-color: ${baseColors.neutral90};
    --button-secondary-bg-hover-color: ${baseColors.neutral70};
    --button-secondary-bg-focus-color: ${baseColors.neutral70};
    --button-secondary-text-color: ${baseColors.neutral00};
    --border-color-focus: ${baseColors.neutral00};

    ${aBgProps}
  `;
}

export function aBgNeutral90() {
  return css`
    ${aBgNeutral80}
    --background-color: ${baseColors.neutral90};
    --color-light: ${baseColors.neutral60};
    --button-secondary-bg-color: ${baseColors.neutral80};

    ${aBgProps}
  `;
}

export function aButton(style: "primary" | "secondary", size: "sm" | "lg") {
  return css`
    background: var(--button-${style}-bg-color);
    color: var(--button-${style}-text-color);
    border-radius: ${borderRadius.xlg};
    padding-block-start: ${size === "sm" ? "6px" : "14px"};
    padding-block-end: ${size === "sm" ? "9px" : "17px"};
    padding-inline: ${size === "sm" ? "16px" : "30px"};
    transition: ${transition.color}, ${transition.background},
      ${transition.opacity};
    ${tLabel("mix")}

    ${aFocus(`
      background: var(--button-${style}-bg-focus-color);
    `)}

    &:disabled {
      opacity: 0.35;
    }

    &:hover {
      background: var(--button-${style}-bg-hover-color);
      color: var(--button-${style}-text-hover-color);
    }
  `;
}

export function aFocus(content?: CssContent) {
  return css`
    &:focus {
      outline: none;
    }

    &:focus-visible {
      box-shadow: inset 0px 0px 0px 1px var(--border-color-focus),
        ${boxShadow.focusGlow};
      ${content}
    }
  `;
}
