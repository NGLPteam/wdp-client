import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { tLabel } from "theme/mixins";

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
  padding-inline-end: var(--padding-rg);
`;

export const SidebarGroup = styled.div`
  max-width: 278px;

  & + & {
    margin-block-start: var(--padding-xl);
  }
`;

export const SidebarHeader = styled.div`
  min-height: ${pxToRem(30)};
  margin-bottom: ${pxToRem(20)};
  padding-top: ${pxToRem(4)};
  border-bottom: 1px solid var(--border-color);
  ${tLabel("sm")}
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
  & + & {
    margin-block-start: var(--padding-xl);
  }
`;
