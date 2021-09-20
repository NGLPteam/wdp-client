import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export const ConfirmButtonWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justifycontent: space-between;
  paddingblockstart: ${basePadding(10)};
  gap: 15px;
`;

interface Props {
  isMobile?: boolean | 0 | undefined;
}
