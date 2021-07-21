import styled, { css } from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import { respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";

const MOBILE_BREAK = 40;

export const Header = styled.header`
  padding-block-end: ${basePadding(6)};
`;

export const TabsWrapper = styled.div`
  padding-block: ${basePadding(5)};
`;

export const TitleWrapper = styled.div`
  --page-header-gap: ${pxToRem(5)};
  --page-header-gap-mobile: ${basePadding(5)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-block-end: var(--page-header-gap);
  border-bottom: 2px solid var(--accent-color);
  gap: var(--page-header-gap);

  ${respond(
    css`
      flex-direction: column;
      align-items: stretch;
      border-bottom: none;
      gap: var(--page-header-gap-mobile);
    `,
    MOBILE_BREAK
  )}
`;

export const H1 = styled.h1`
  ${respond(
    css`
      padding-block-end: var(--page-header-gap);
      border-bottom: 2px solid var(--accent-color);
    `,
    MOBILE_BREAK
  )}
`;

export const ButtonsWrapper = styled.div``;
