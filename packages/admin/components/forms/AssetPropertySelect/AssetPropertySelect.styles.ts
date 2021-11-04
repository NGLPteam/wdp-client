import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Field = styled.div`
  --input-border-top-right-radius: 0;
  --input-border-bottom-right-radius: 0;

  display: flex;
  align-items: stretch;
  justify-content: space-between;
  min-height: ${pxToRem(42)};

  > *:first-child {
    flex: 1 1 auto;
  }

  > *:last-child {
    border-color: var(--input-border-color);
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding-inline-start: ${pxToRem(16)};
    padding-inline-end: ${pxToRem(16)};
    margin-inline-start: -1px;
  }
`;
