import React from "react";
import * as Styled from "./Table.styles";
import { IconFactory } from "components/factories";
import { useTranslation } from "react-i18next";

const TableSortIcon = ({ desc, isSorted, ...buttonProps }: Props) => {
  const { t } = useTranslation();
  const arrowRotation = desc ? 180 : 0;
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
