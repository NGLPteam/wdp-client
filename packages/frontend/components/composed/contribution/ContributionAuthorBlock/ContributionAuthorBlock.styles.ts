import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { tLineClamp } from "@wdp/lib/theme/mixins";

export const Inner = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-md);
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

export const Bio = styled.p`
  margin-block-start: var(--padding-xs);
  ${tLineClamp(3)}
`;
