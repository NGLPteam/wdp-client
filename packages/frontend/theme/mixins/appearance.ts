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
    --color-base: ${baseColors.neutral90};
    --color-light: ${baseColors.neutral80};
    --color-lighter: ${baseColors.neutral70};

    ${aBgProps}
  `;
}

export function aBgCustom10() {
  return css`
    @media screen {
      --background-color: var(--color-custom10);
      --color-base: ${baseColors.neutral90};
      --color-light: ${baseColors.neutral80};
      --color-lighter: ${baseColors.neutral80};
      --button-secondary-bg-color: ${baseColors.neutral00};
    }

    ${aBgProps}
  `;
}

export function aBgCustom20() {
  return css`
    @media screen {
      --background-color: var(--color-custom20);
      --color-base: ${baseColors.neutral90};
      --color-light: ${baseColors.neutral80};
      --color-lighter: ${baseColors.neutral80};
      --button-secondary-bg-color: var(--color-custom10);
      --button-secondary-bg-focus-color: var(--color-custom20);
    }

    ${aBgProps}
  `;
}

export function aBgNeutral80() {
  return css`
    @media screen {
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
    }

    ${aBgProps}
  `;
}

export function aBgNeutral90() {
  return css`
    ${aBgNeutral80}

    @media screen {
      --background-color: ${baseColors.neutral90};
      --color-light: ${baseColors.neutral60};
      --button-secondary-bg-color: ${baseColors.neutral80};
    }

    ${aBgProps}
  `;
}

/* Button styles, including padding and border radius */
export function aButton(style: "primary" | "secondary", size: "sm" | "lg") {
  return css`
    ${aButtonBase(style)}
    border-radius: ${borderRadius.xlg};
    padding-block-start: ${size === "sm" ? "6px" : "14px"};
    padding-block-end: ${size === "sm" ? "8px" : "17px"};
    padding-inline-start: ${size === "sm" ? "16px" : "30px"};
    padding-inline-end: ${size === "sm" ? "16px" : "30px"};
    ${tLabel("mix")}
  `;
}

/* Button hover styles */
export function aButtonBase(style: "primary" | "secondary") {
  return css`
    display: inline-flex;
    align-items: center;
    background: var(--button-${style}-bg-color);
    color: var(--button-${style}-text-color);
    transition: ${transition.color}, ${transition.background},
      ${transition.opacity};

    &:disabled {
      opacity: 0.35;
    }

    &:hover:not(:focus) {
      background: var(--button-${style}-bg-hover-color);
      color: var(--button-${style}-text-hover-color);
    }

    ${aFocus(`
      background: var(--button-${style}-bg-focus-color);
    `)}
  `;
}

/* General focus styles */
export const aFocusBase = `
  box-shadow: 0px 0px 0px 1px var(--border-color-focus), ${boxShadow.focusGlow};
`;

export const aFocusReset = `
  &:focus {
    outline: none;
  }
`;

/* General focus styles */
export function aFocus(content?: CssContent) {
  return css`
    ${aFocusReset}

    &:focus-visible,
    &:focus-within {
      ${aFocusBase}
      ${content}
    }
  `;
}

// The box shadow's line height should be the same - .07em,
// but it's placement changes based on the font style
function getBoxShadow(fontStyle: string): string {
  switch (fontStyle) {
    case "style3":
      return "inset 0 -0.11em 0 0 var(--background-color), inset 0 -0.18em 0 0 var(--color-light)";

    case "style2":
      return "inset 0 -0.07em 0 0 var(--background-color), inset 0 -0.14em 0 0 var(--color-light)";

    default:
      return "0 0.01em 0 0 var(--color-light), inset 0 -0.06em 0 0 var(--color-light)";
  }
}

export const aLinkHoverFocus = css`
  color: var(--color-base);
  text-shadow: 0.04em 0.04em var(--background-color),
    -0.04em 0.04em var(--background-color),
    -0.04em -0.04em var(--background-color),
    0.04em -0.04em var(--background-color), -0.04em 0 var(--background-color),
    0.04em 0 var(--background-color);
  box-shadow: ${({ theme }) => getBoxShadow(theme.fontStyle)};
`;

export const aLinkBase = `
  cursor: pointer;
  transition: ${transition.color}, box-shadow 0.17s ease-in,
    text-shadow 0.17s ease-in;
    

  &[aria-current] {
    font-weight: var(--font-weight-medium);
  }
`;

export const aLink = css`
  ${aLinkBase}

  &:hover {
    ${aLinkHoverFocus}
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    ${aLinkHoverFocus}
  }
`;

// Use this mixin to style text that is inside a link
export const aLinkText = css`
  display: inline;
  ${aLinkBase}

  a:hover &,
  a:focus-visible &
  button:hover &
  button:focus-visible & {
    ${aLinkHoverFocus}
  }
`;

export const aImageHover = `
  box-shadow: ${boxShadow.popUp}, 0px 0px 0px 1px var(--border-color-focus);
  border-color: var(--border-color);
`;

export const aImageFocus = `
  box-shadow: 0px 0px 0px 1px var(--border-color-focus), ${boxShadow.focusGlow};
`;
