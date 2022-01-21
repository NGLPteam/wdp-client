import styled from "styled-components";
import { respond } from "theme/mixins";

export const Inner = styled.div`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-xl);
`;

export const Header = styled.div`
  margin-block-end: var(--padding-xl);
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  column-gap: var(--grid-column-gap-xl);
  row-gap: var(--grid-row-gap-xl);

  ${respond(`grid-template-columns: 1fr;`, 50)}
`;
