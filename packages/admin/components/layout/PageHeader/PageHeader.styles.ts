import styled, { css } from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { respond } from "theme/mixins/base";
import PageHeader from "./PageHeader";

type Props = React.ComponentProps<typeof PageHeader>;

export const Header = styled.header<{ $headerStyle: Props["headerStyle"] }>`
  ${({ $headerStyle }) =>
    $headerStyle !== "secondary" &&
    css`
      padding-block-start: ${pxToRem(24)};
    `}
`;

export const TabsWrapper = styled.div`
  margin-block-end: ${pxToRem(24)};

  ${respond(`display: none`, 70)}
`;

export const MobileNavWrapper = styled.div`
  margin-block-end: ${pxToRem(42)};
  display: none;

  ${respond(`display: block;`, 70)}
`;
