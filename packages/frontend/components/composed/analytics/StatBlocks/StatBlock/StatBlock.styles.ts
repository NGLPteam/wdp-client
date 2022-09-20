import styled from "styled-components";
import { tHeading, tLabel } from "theme/mixins";

export const Outer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: var(--color-base-neutral10);
`;

export const Stat = styled.span`
  ${tHeading(2)}
  display: block;
`;

export const Label = styled.span`
  ${tLabel("lg")}
`;
