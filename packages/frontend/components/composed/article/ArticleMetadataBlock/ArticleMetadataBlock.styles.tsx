import styled from "styled-components";
import { lGrid } from "theme/mixins";

export const Section = styled.section`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-xlg);
`;

export const List = styled.ul`
  ${lGrid()}
  padding-block-start: var(--padding-xl);
  grid-row-gap: var(--padding-xl);
`;

export const ListItem = styled.li`
  grid-column: span 3;
`;
