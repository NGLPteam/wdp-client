import styled from "styled-components";
import { lGrid, respond } from "theme/mixins";

export const SectionInner = styled.div`
  ${lGrid({ rowGap: "var(--padding-lg)" })}
  padding-block-start: var(--container-padding-xl);
  padding-block-end: var(--container-padding-xl);
`;

export const HeaderBlock = styled.header`
  border-bottom: 1px solid var(--border-color);
  padding-block-end: var(--padding-rg);
  grid-column: 2 / 12;
  ${respond(`grid-column: 1 / -1;`, 70)}
`;

export const List = styled.ul`
  border-bottom: 1px solid var(--border-color);
  padding-block-end: var(--padding-xl);
  grid-column: 2 / 12;
  ${respond(`grid-column: 1 / -1;`, 70)}
`;

export const ListItem = styled.li`
  break-inside: avoid;

  & + & {
    padding-block-start: var(--padding-xl);
  }
`;

export const ButtonWrapper = styled.div`
  grid-column: 2 / 12;
  ${respond(`grid-column: 1 / -1;`, 70)}

  @media print {
    display: none;
  }
`;
