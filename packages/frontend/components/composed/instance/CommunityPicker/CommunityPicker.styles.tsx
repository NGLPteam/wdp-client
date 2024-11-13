import styled from "styled-components";
import Button from "@/components/atomic/Button";

export const Label = styled.span`
  display: inline;

  span[data-active="true"] + & {
    display: none;
  }
`;

export const Disclosure = styled(Button)`
  svg {
    margin-block-start: 4px;
  }
`;
