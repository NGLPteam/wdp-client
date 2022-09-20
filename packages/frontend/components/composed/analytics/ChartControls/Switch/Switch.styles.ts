import styled from "styled-components";
import { aButton } from "theme/mixins";

export const Wrapper = styled.div`
  display: flex;
`;

export const SwitchButton = styled.button<{ $active?: boolean }>`
  ${({ $active }) => aButton($active ? "primary" : "secondary", "sm")}

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &[aria-disabled="true"],
  &[aria-disabled="true"]:hover {
    opacity: 1;
    background: var(--button-primary-bg-color);
    cursor: default;
  }
`;
