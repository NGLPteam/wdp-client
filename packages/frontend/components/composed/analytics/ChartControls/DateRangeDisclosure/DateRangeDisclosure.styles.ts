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

  ${respond(`width: 100%; justify-content: space-between;`, 100)}
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const Label = styled.span`
  ${tLabel("sm")}
  white-space: nowrap;

  ${respond(`display: none;`, 50)}
`;

export const Selected = styled.span`
  ${tLabel("mix")}
  margin-inline-end: 2px;
  white-space: nowrap;
`;
