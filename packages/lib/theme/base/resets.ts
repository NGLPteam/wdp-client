// Resets
// --------------------
import { css } from "styled-components";

export default css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  html,
  body,
  ul,
  ol {
    padding: 0;
  }

  /* Remove default margin */
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
    font-size: 100%;
  }

  /* Set core body defaults */
  body {
    min-block-size: 100vh;
    text-rendering: geometricPrecision;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  ul,
  ol {
    list-style-position: inside;
  }

  /* Make images easier to work with */
  img,
  picture {
    display: block;
    max-width: 100%;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select,
  option {
    font: inherit;
    letter-spacing: inherit;
    text-rendering: inherit;
    margin: 0;
  }

  /* Change scroll behavior if reduce motion is on */
  /* stylelint-disable scss/media-feature-value-dollar-variable, declaration-no-important */
  @media (prefers-reduced-motion: reduce) {
    * {
      scroll-behavior: auto !important;
    }
  }

  /* Set svg fill to current color */
  svg {
    fill: currentColor;
  }

  /* Remove button styling */
  button {
    padding: 0;
    color: inherit;
    cursor: pointer;
    background: transparent;
    border: 0;
    appearance: none;

    &:focus {
      outline: none;
    }
  }

  /* Remove link styling */
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  /* Remove table styling */
  table,
  thead,
  tbody,
  tfoot,
  tr,
  th,
  td {
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
    border-collapse: inherit;
    border-spacing: 0;
    border-color: inherit;
    text-align: start;
    font-weight: inherit;
  }

  /* Remove fieldset and legend styling */
  fieldset {
    border: 0;
    padding: 0.01em 0 0 0;
    margin: 0;
    min-width: 0;
  }

  legend {
    display: table;
    float: inline-start;
    margin: 0;
    padding: 0;
    width: 100%;

    + * {
      clear: both;
    }
  }

  /* Reset common details gotchas */
  details summary {
    cursor: pointer;

    > * {
      display: inline;
    }
  }
`;
