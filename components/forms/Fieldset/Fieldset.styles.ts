import styled, { css } from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: var(--fieldset-field-spacing, ${basePadding(4)});
`;

export const Legend = styled.legend`
  padding-block-end: var(--fieldset-field-spacing, ${basePadding(4)});
`;

export const Fields = styled.div<Props>`
  --table-border: 1px solid var(--border-color);

  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  gap: var(--fieldset-field-spacing, ${basePadding(4)});
  align-items: start;
  border-bottom: ${({ isMobile }) =>
    isMobile ? "var(--table-border)" : "none"};
`;

export const Field = styled.div<Props>`
  ${({ isMobile }) => {
    return isMobile
      ? css`
          width: 100%;
        `
      : css`
          flex: 1 1 auto;
        `;
  }}
`;

export const Actions = styled.div<Props>`
  flex: 0;

  ${({ isMobile }) => {
    return isMobile
      ? css`
          width: 100%;
          display: flex;
          justify-content: flex-end;
          padding-block-end: ${basePadding(4)};
        `
      : css`
          padding-block-start: ${pxToRem(25)};
        `;
  }}
`;

interface Props {
  isMobile: boolean | 0 | undefined;
}
