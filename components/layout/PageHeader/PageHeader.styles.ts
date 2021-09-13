import styled, { css } from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import { noFlexGapSupport, respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";

const MOBILE_BREAK = 40;

export const Header = styled.header`
  padding-block-start: ${basePadding(6)};
  padding-block-end: ${basePadding(6)};
`;

export const TabsWrapper = styled.div`
  padding-block: ${basePadding(5)};
`;

export const TitleWrapper = styled.div`
  --page-header-gap: ${pxToRem(5)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-block-end: var(--page-header-gap);
  border-bottom: 2px solid var(--accent-color);
  gap: var(--page-header-gap);

  ${noFlexGapSupport(`
    > * + * {
      margin-inline-start: var(--page-header-gap);
    }
  `)}

  ${respond(
    `
      --page-header-gap: ${basePadding(5)};
      flex-direction: column;
      align-items: stretch;
      border-bottom: none;
    `,
    MOBILE_BREAK
  )}
`;

export const Title = styled.h1`
  ${respond(
    css`
      padding-block-end: ${pxToRem(5)};
      border-bottom: 2px solid var(--accent-color);
    `,
    MOBILE_BREAK
  )}
`;

export const ButtonsWrapper = styled.div``;
