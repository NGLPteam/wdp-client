import { useTranslation } from "react-i18next";
import { IconFactory } from "components/factories";
import * as Styled from "./Table.styles";

const TableSortIcon = ({ desc, isSorted, ...buttonProps }: Props) => {
  const { t } = useTranslation();

  const arrowRotation = desc ? 0 : 180;

  const sortLabel = isSorted
    ? desc
      ? t("sort.ascending")
      : t("sort.descending")
    : t("sort.label");

  return (
    <Styled.SortIcon {...buttonProps}>
      {isSorted === false ? (
        <IconFactory icon="sortable" aria-hidden="true" />
      ) : (
        <IconFactory icon="chevron" rotate={arrowRotation} aria-hidden="true" />
      )}
      <span className="a-hidden">{sortLabel}</span>
    </Styled.SortIcon>
  );
};

interface Props {
  desc?: boolean;
  isSorted?: boolean;
}

export default TableSortIcon;
