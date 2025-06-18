import styled from "styled-components";
import Dialog from "components/layout/Dialog";
import { fluidScale, respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";

export const Content = styled(Dialog.Content)`
  --modal-padding-inline: ${fluidScale("40px", "24px")};
  --form-grid-item-width: 100%;
  --fieldset-bg-color: var(--neutral10);

  inline-size: ${pxToRem(697)};
  block-size: max-content;

  ${respond(`inline-size: 100%;`, 50)}
`;

export const Header = styled.h2`
  color: var(--accent-color);
  margin-block-start: 0.5rem;
`;

export const Subheader = styled.span`
  color: var(--accent-color);
  display: block;
  margin-block-start: 0.5rem;
  white-space: nowrap;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-block-start: ${pxToRem(40)};
  gap: 1rem;
`;

export const Note = styled.p`
  margin-block-start: ${pxToRem(40)};
`;

export const Test = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
