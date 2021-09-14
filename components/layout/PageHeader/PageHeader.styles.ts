import styled, { css } from "styled-components";
import { basePadding } from "theme/mixins/appearance";

import PageHeader from "./PageHeader";
type Props = React.ComponentProps<typeof PageHeader>;

export const Header = styled.header<Pick<Props, "headerStyle">>`
  ${({ headerStyle }) =>
    headerStyle !== "secondary" &&
    css`
      padding-block-start: ${basePadding(6)};
    `}

  padding-block-end: ${basePadding(6)};
`;

export const TabsWrapper = styled.div`
  padding-block-end: ${basePadding(5)};
`;
