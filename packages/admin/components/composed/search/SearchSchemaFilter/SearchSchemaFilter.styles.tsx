import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const ExpandableWrapper = styled.div<{ $oneCol?: boolean }>`
  columns: ${({ $oneCol }) => ($oneCol ? 1 : 2)};

  > * + * {
    margin-top: ${pxToRem(16)};
  }

  & + & {
    margin-top: ${pxToRem(8)};
  }
`;
