import styled from "styled-components";
import { tHeading, tLabel, respond } from "theme/mixins";

export const Outer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-custom70);
`;

export const Stat = styled.span<{ $level: 1 | 3 }>`
  ${({ $level }) => tHeading($level)}
  display: block;
  padding-block-start: 20px;

  ${respond(tHeading(2), 100)}
`;

export const Label = styled.span`
  ${tLabel("sm")}
  padding-block-end: 6px;
  border-bottom: 1px solid;
`;
