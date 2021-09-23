import styled from "styled-components";
import { aTextGlow } from "theme/mixins/appearance";
import { tLabel } from "theme/mixins/typography";

export const AuthLink = styled.button`
  --nav-link-border: 2px solid transparent;
  display: inline-block;
  color: var(--accent-light);
  ${tLabel("md")}
  text-align: start;

  &:hover {
    --nav-link-border: 2px solid var(--accent-lighter);
    color: var(--accent-lighter);
  }

  &:focus-visible {
    outline: 0;
    ${aTextGlow("darkMode")}
  }

  &:active,
  &[aria-expanded="true"] {
    --nav-link-border: 2px solid var(--accent-lighter);
    color: var(--accent-color);
    border-color: var(--accent-color);
  }
`;

export const Text = styled.span`
  transition: var(--border-transition), var(--color-transition);
  border-bottom: var(--nav-link-border);
  padding-block-end: 1px;
  white-space: nowrap;
`;
