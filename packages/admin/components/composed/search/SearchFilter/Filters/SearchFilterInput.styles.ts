import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${pxToRem(24)};

  > * {
    flex: 1 1 auto;
  }
`;
