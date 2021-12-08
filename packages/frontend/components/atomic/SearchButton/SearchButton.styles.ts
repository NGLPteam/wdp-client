import styled from "styled-components";
import { aButtonBase } from "theme/mixins";

export const ButtonWrapper = styled.button`
  ${aButtonBase("secondary")}
  justify-content: center;
  border-radius: 50%;
  width: var(--search-button-size);
  height: var(--search-button-size);
`;
