import React from "react";
import { PageInfo } from "helpers/sharedTypes";
import * as Styled from "./PageCountActions.styles";

/**
 * Shows number of items or number of selected items.
 *
 * If items are selected, shows multisection actions.
 */
const PageCountActions = ({
  pageInfo,
  selectedCount,
  multiselectActions,
}: Props) => {
  if (!pageInfo) return;
  const hasSelected = selectedCount > 1;
  const label = hasSelected ? `Selected: ` : `Showing `;
  const displayCount = hasSelected
    ? selectedCount
    : pageInfo.totalCount < pageInfo.perPage
    ? pageInfo.totalCount
    : pageInfo.perPage;

  return (
    <Styled.Wrapper>
      <Styled.Count className="t-label-md a-color-light">
        <span className={hasSelected ? "a-color-accent" : null}>{label}</span>
        <span className="a-color-accent">{displayCount}</span>
        {` of `}
        <span className="a-color-accent">{pageInfo.totalCount}</span>
      </Styled.Count>
      {multiselectActions && selectedCount ? (
        <Styled.Actions>{multiselectActions}</Styled.Actions>
      ) : null}
    </Styled.Wrapper>
  );
};

interface Props {
  /** Page info object (page, perPage, pageCount...) */
  pageInfo?: PageInfo;
  /** Number of selected items */
  selectedCount?: number;
  /** Multiselect multiselectActions, an array of buttons */
  multiselectActions?: JSX.Element | JSX.Element[];
}

export default PageCountActions;
