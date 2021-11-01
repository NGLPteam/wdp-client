import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: ${pxToRem(16)} var(--container-column-margin);
  text-align: center;
`;
