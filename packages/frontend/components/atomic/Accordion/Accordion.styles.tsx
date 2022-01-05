import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { tLabel, tCopySmall } from "theme/mixins";
import { IconFactory } from "components/factories";

export const Accordion = styled.details``;

export const Label = styled.summary`
  ${tLabel("lg")}
  list-style: none;

  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};
`;

export const Arrow = styled(IconFactory)`
  margin-block-start: ${pxToRem(3)};
`;

export const List = styled.ul`
  padding-inline-start: ${pxToRem(20)};
  padding-block-start: var(--padding-rg);
`;

export const Item = styled.li`
  white-space: nowrap;
  ${tCopySmall}

  & + & {
    margin-block-start: var(--padding-rg);
  }
`;
