import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Banner = styled.div`
  padding-block: ${pxToRem(36)};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Buttons = styled.div`
  margin-inline-start: ${pxToRem(24)};
`;
