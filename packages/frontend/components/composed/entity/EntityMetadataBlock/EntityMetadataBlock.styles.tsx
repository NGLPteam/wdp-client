import styled from "styled-components";
import { lGrid, respond } from "theme/mixins";

export const Section = styled.section`
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-xxl);
`;

export const List = styled.ul`
  ${lGrid()}
  padding-block-start: var(--padding-xl);
  grid-row-gap: var(--padding-xl);

  ${respond(`grid-template-columns: 1fr`, 50)}
`;
