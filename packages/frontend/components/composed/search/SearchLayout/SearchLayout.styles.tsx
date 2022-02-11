import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { respond } from "theme/mixins";

const FILTER_BREAK = 70;

export const Inner = styled.div`
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-lg);
  display: flex;
  flex-wrap: wrap;
`;

export const Search = styled.div`
  flex: 1 0 100%;
`;

export const Sidebar = styled.div`
  flex-basis: 278px;
  flex-grow: 1;
  padding-inline-end: var(--container-v-padding);

  ${respond("display: none;", FILTER_BREAK)}
`;

export const Filters = styled.div`
  max-width: 278px;

  > * + * {
    margin-block-start: var(--padding-xl);
  }
`;

export const FiltersToggle = styled.div`
  flex: 1 0 100%;
  margin-block-end: var(--padding-lg);

  ${respond("display: none;", FILTER_BREAK, "min")}
`;

export const Results = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: 60%;
  max-width: 823px;
`;

export const ResultsHeader = styled.div`
  border-bottom: 1px solid var(--border-color);
  min-height: ${pxToRem(30)};
`;

export const ResultsList = styled.ul``;

export const ResultsListItem = styled.li`
  margin-block-start: var(--padding-xl);
`;
