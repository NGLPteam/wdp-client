import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Banner = styled.div`
  padding-block-start: ${pxToRem(36)};
  padding-block-end: ${pxToRem(36)};
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  > * + * {
    margin-inline-start: ${pxToRem(20)};
  }
`;

export const Buttons = styled.div`
  > * + * {
    margin-inline-start: ${pxToRem(12)};
  }
`;
