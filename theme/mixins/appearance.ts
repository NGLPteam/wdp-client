import { css } from "styled-components";
import { pxToRem } from "./functions";

export function aTextGlow(type: "darkMode" | "lightMode") {
  return type === "lightMode"
    ? css`
        text-shadow: 0 0 ${pxToRem("6px")} hsla(var(--brand100), 0.2);
      `
    : css`
        text-shadow: 0 0 ${pxToRem("8px")} var(--brand30);
      `;
}

export function aGlow(type: "darkMode" | "lightMode") {
  return type === "lightMode"
    ? css`
        box-shadow: 0 0 ${pxToRem("6px")} hsla(var(--brand100), 0.2);
        outline: 0;
        transition: box-shadow var(--base-duration) var(--base-timing);
      `
    : css`
        box-shadow: 0 0 ${pxToRem("8px")} var(--brand30);
        outline: 0;
        transition: box-shadow var(--base-duration) var(--base-timing);
      `;
}

export function aBgDark(bgColor = "brand100") {
  return css`
    --background-color: var(--${bgColor});
    --color: var(--brand20);
    --color-light: var(--brand50);
    background-color: var(--background-color);
    color: var(--color);
  `;
}

export function aBgLight(bgColor = "neutral00") {
  return css`
    --background-color: var(--${bgColor});
    --color: var(--neutral90);
    --color-light: var(--neutral70);
    background-color: var(--background-color);
    color: var(--color);
  `;
}

// Returns padding at base 4
// size 1 = 4px, size 2 = 8px, etc
export function basePadding(size: number) {
  return pxToRem(`${size * 4}px`);
}
