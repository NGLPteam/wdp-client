import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Inner = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding-block: var(--container-padding-lg);
  border-bottom: 1px solid var(--border-color);
`;

export const AvatarWrapper = styled.div`
  max-width: 60px;
  margin-inline-end: var(--padding-lg);
`;

export const Info = styled.div`
  max-width: ${pxToRem(676)};
`;

export const Name = styled.h4``;

export const Roles = styled.div`
  margin-block-start: var(--padding-xs);
`;

export const Role = styled.span`
  & + & {
    &:before {
      content: " \\2022\  ";
    }
  }
`;

export const Bio = styled.p`
  margin-block-start: var(--padding-xs);
`;
