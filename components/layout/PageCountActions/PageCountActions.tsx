import React from "react";
import { Trans } from "react-i18next";
import { PageInfo } from "types/graphql-schema";
import * as Styled from "./PageCountActions.styles";

/**
 * Shows number of items or number of selected items.
 *
 * If items are selected, shows multisection actions.
 */
const PageCountActions = ({
  pageInfo,
  selectedCount = 0,
  multiselectActions,
}: Props) => {
  if (!pageInfo) return;
  const hasSelected = selectedCount > 1;
  const { page = 1, perPage = 10, totalCount = 0 } = pageInfo;
  const start = totalCount > 0 ? (page - 1) * perPage + 1 : 0;
  const end = totalCount < perPage ? totalCount : page * perPage;

  return (
    <Styled.Wrapper>
      <Styled.Count className="t-label-md a-color-light">
        {hasSelected ? (
          <Trans
            ns="common"
            i18nKey="selected.count"
            values={{ count: selectedCount, total: totalCount }}
            components={[<span key="color" className="a-color-accent"></span>]}
          />
        ) : (
          <Trans
            ns="common"
            i18nKey="showing.count"
            values={{ start, end, total: totalCount }}
            components={[<span key="color" className="a-color-accent"></span>]}
          />
        )}
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
