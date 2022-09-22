import styled from "styled-components";
import { respond, tLabel } from "theme/mixins";

export const Wrapper = styled.button`
  position: relative;
  display: flex;
  gap: 6px;
  flex-wrap: nowrap;
  align-items: center;
  border: 1px solid var(--color-custom70);
  border-radius: 78px;
  height: 32px;
  width: auto;
  background-color: var(--color-base-neutral00);
  padding-inline-start: 16px;
  padding-inline-end: 12px;
  color: var(--color-custom70);

  & > svg {
    margin-block-start: 3px;
  }

  ${respond(`width: 100%; justify-content: space-between;`, 60)}
`;

export const Label = styled.span`
  ${tLabel("sm")}
`;

export const Selected = styled.span`
  ${tLabel("mix")}
  margin-inline-start: 6px;
  margin-inline-end: 2px;
`;
