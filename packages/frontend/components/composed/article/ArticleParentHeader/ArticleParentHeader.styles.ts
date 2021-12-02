import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const ParentBlock = styled.div`
  padding-block-start: ${pxToRem(10)};
  padding-block-end: ${pxToRem(10)};
`;

export const JournalBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-block-end: ${pxToRem(10)};
  border-bottom: 1px solid var(--border-color);
`;

export const IssueBlock = styled.div`
  display: flex;
  align-items: flex-end;
  padding-block-start: ${pxToRem(10)};

  > * + * {
    padding-inline-start: ${pxToRem(12)};

    &:last-child {
      margin-inline-start: auto;
    }
  }
`;
