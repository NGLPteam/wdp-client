import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: ${pxToRem(40)};
  padding-block-end: ${pxToRem(8)};
`;

export const Count = styled.div`
  padding-inline-end: ${pxToRem(12)};
`;

export const Actions = styled.div``;
