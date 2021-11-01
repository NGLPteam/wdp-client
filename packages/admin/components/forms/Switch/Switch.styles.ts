import styled from "styled-components";
import { aGlow } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { IconFactory } from "components/factories";

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid var(--color-lighter);
  padding-block-start: ${pxToRem(8)};
  padding-block-end: ${pxToRem(8)};

  &:hover {
    border-bottom-color: var(--accent-color);
  }
`;

export const Icon = styled(IconFactory)`
  width: 46px;
  height: 26px;
  cursor: pointer;
  display: inline-block;
  color: var(--color-lighter);
  border-radius: var(--border-radius-xlg);
  transition: color var(--base-duration) var(--base-timing);

  [data-toggle-indicator] {
    transition: transform var(--base-duration) var(--base-timing);
  }

  input:hover + & {
    color: var(--color-light);
  }

  input:checked + & {
    color: var(--accent-color);

    [data-toggle-indicator] {
      transform: translateX(19px);
    }
  }

  input:disabled + & {
    opacity: 0.7;
  }

  input:focus:not(:checked) + & {
    ${aGlow("lightMode")}
    color: var(--color-light);
  }
`;
