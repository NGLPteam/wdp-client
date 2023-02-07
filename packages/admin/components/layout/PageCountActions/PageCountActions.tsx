import { Trans, useTranslation } from "react-i18next";
import * as Styled from "./PageCountActions.styles";
import { PageInfo } from "types/graphql-schema";

/**
 * Shows number of items or number of selected items.
 *
 * If items are selected, shows multisection actions.
 */
const PageCountActions = ({
  pageInfo,
  selectedCount = 0,
  multiselectActions,
  loading,
}: Props) => {
  const { t } = useTranslation();
  const hasSelected = selectedCount > 1;
  const page = pageInfo?.page || 1;
  const perPage = pageInfo?.perPage || 10;
  const totalCount = pageInfo?.totalCount || 0;
  const start = totalCount > 0 ? (page - 1) * perPage + 1 : 0;
  const end =
    totalCount < perPage || page * perPage > totalCount
      ? totalCount
      : page * perPage;

  return (
    <Styled.Wrapper>
      <Styled.Count className="t-label-md a-color-light">
        {loading ? (
          t("common.loading_ellipsis")
        ) : hasSelected ? (
          <Trans
            i18nKey="lists.selected_count"
            values={{
              count: selectedCount,
              total: totalCount.toLocaleString("en-US"),
            }}
            components={[<span key="color" className="a-color-accent"></span>]}
          />
        ) : (
          <Trans
            i18nKey="lists.showing_count"
            values={{
              start: start.toLocaleString("en-US"),
              end: end.toLocaleString("en-US"),
              total: totalCount.toLocaleString("en-US"),
            }}
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
  pageInfo?: Partial<PageInfo>;
  /** Number of selected items */
  selectedCount?: number;
  /** Multiselect multiselectActions, an array of buttons */
  multiselectActions?: JSX.Element | JSX.Element[];
  /** Loading state */
  loading?: boolean;
}

export default PageCountActions;
