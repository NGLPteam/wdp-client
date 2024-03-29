import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Field = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  min-height: ${pxToRem(42)};

  > *:first-child {
    flex: 1 1 auto;
  }

  > *:last-child {
    flex: 0 0 auto;
    padding-inline-start: ${pxToRem(16)};
    padding-inline-end: ${pxToRem(16)};
    margin-inline-start: ${pxToRem(16)};
  }
`;
