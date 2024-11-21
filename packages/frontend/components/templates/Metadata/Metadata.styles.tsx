import styled from "styled-components";
import { lGrid, respond } from "theme/mixins";
import BaseContainer from "@/components/layout/Container";

export const Container = styled(BaseContainer)`
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-xxl);
`;

export const List = styled.dl`
  ${lGrid()}
  padding-block-start: var(--padding-xl);
  grid-row-gap: var(--padding-xl);
  grid-column-gap: var(--padding-md);

  ${respond(`grid-row-gap: var(--padding-lg);`, 100)}
  ${respond(`grid-template-columns: 1fr`, 50)}
`;

export const Column = styled.div`
  grid-column: span 3;

  ${respond(`grid-column: span 6;`, 100)}
  ${respond(`grid-column: span 1;`, 50)}
`;
