import styled from "styled-components";
import Dialog from "components/layout/Dialog";
import { respond, fluidScale } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";

export const Content = styled(Dialog.Content)`
  --fieldset-bg-color: var(--neutral10);
  --dialog-content-padding: ${fluidScale("24px", "12px")};

  inline-size: ${pxToRem(697)};
  block-size: max-content;

  ${respond(`inline-size: 100%;`, 50)}
`;

export const Header = styled.h2`
  color: var(--accent-color);
  margin-block-start: 0.75rem;
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
  padding-block-start: ${pxToRem(24)};
  gap: 1rem;
`;

export const Note = styled.p`
  margin-block-start: ${pxToRem(40)};
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: var(--dialog-content-padding);
  color: var(--accent-color);
`;

export const Instructions = styled.div`
  > ul {
    margin-inline-start: ${fluidScale("16px", "8px")};

    li {
      list-style-position: outside;
      list-style-type: disc;
      margin-inline-start: 1rem;
    }
  }

  > * + * {
    display: block;
    margin-block-start: 0.5rem;
  }
`;
