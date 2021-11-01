import styled, { css } from "styled-components";
import { aTextGlow } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import TabLink from "./TabLink";
type Props = React.ComponentProps<typeof TabLink>;

const activeState = css`
  color: var(--accent-color);
  border-color: var(--accent-color);
`;

export const Tab = styled.a<Pick<Props, "active" | "bottomBorder">>`
  /* Setting default values lets tabs work with any background */
  --tab-color: inherit;
  --tab-hover-color: var(--color-light);

  display: block;
  cursor: pointer;
  border-bottom: 2px solid
    ${({ bottomBorder }) =>
      bottomBorder ? "var(--color-light)" : "transparent"};
  padding-block-end: ${pxToRem(8)};
  color: var(--tab-color);
  transition: var(--border-transition), var(--color-transition);

  .a-bg-neutral00 & {
    /* Specific values for white backgrounds */
    --tab-color: var(--neutral80);
    --tab-hover-color: var(--neutral60);
  }

  .a-bg-brand100 & {
    --tab-color: inherit;
    --tab-hover-color: var(--color-light);
  }

  &:hover {
    color: var(--tab-hover-color);
  }

  &:focus-visible {
    outline: 0;
    color: var(--accent-light);
    ${aTextGlow("lightMode")}
  }

  &:active {
    ${activeState}
  }

  ${({ active }) => (active ? activeState : "")}
`;
