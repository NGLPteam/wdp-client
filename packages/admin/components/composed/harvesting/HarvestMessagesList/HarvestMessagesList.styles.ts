import styled from "styled-components";
import { ButtonControlRoute } from "components/atomic/buttons/ButtonControl";

export const Toggle = styled(ButtonControlRoute)<{ iconChecked: boolean }>`
  svg {
    color: ${({ iconChecked }) =>
      iconChecked ? "inherit" : "var(--neutral40)"};
  }

  &:hover {
    [data-toggle-indicator] {
      color: ${({ iconChecked }) =>
        iconChecked ? "var(--brand100)" : "inherit"};
      fill: ${({ iconChecked }) =>
        iconChecked ? "var(--brand100)" : "var(--neutral00)"};
    }
  }
`;
