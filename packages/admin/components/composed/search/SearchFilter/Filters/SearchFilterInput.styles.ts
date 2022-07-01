import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const FlexWrapper = styled.div`
  display: flex;
  gap: ${pxToRem(24)};
`;
