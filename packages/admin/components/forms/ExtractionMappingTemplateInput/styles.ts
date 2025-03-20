import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  row-gap: ${pxToRem(10)};

  > div {
    * + * {
      margin-inline-start: ${pxToRem(10)};
    }
  }
`;
