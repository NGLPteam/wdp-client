import React, { ReactNode } from "react";
import TableHeaderRow from "./TableHeaderRow";
import * as Styled from "./Table.styles";
import TableSortButton from "./TableSortButton";
import { Checkbox } from "components/atomic/forms";
import {
  TableHeaderProps,
  HeaderGroup,
  TableCommonProps,
  ColumnInstance,
} from "react-table";
import { CheckboxProps } from "types/form-fields";

function TableHeader<T extends object = {}>({
  headerGroups = [],
  withCheckbox,
  checkboxProps,
}: Props<T>) {
  /* eslint-disable react/jsx-key */
  /* keys are injected using the get props functions */
  return (
    <thead>
      {headerGroups.map((headerGroup) => {
        const headerGroupProps = {
          ...(headerGroup.getHeaderGroupProps &&
            headerGroup.getHeaderGroupProps()),
        };
        return (
          <TableHeaderRow {...headerGroupProps}>
            {withCheckbox ? (
              <Styled.HeaderCell role="columnheader" data-select-cell="true">
                <Styled.SelectCellInner>
                  <Checkbox {...checkboxProps} />
                </Styled.SelectCellInner>
              </Styled.HeaderCell>
            ) : (
              <Styled.HeaderCell role="presentation" />
            )}

            {headerGroup.headers.map((column) => {
              return (
                <Styled.HeaderCell
                  {...column.getHeaderProps()}
                  {...(column.getSortByToggleProps &&
                    column.getSortByToggleProps())}
                >
                  <Styled.HeaderCellInner>
                    {column.render("Header")}
                    {column.isSorted && (
                      <TableSortButton desc={column.isSortedDesc || null} />
                    )}
                  </Styled.HeaderCellInner>
                </Styled.HeaderCell>
              );
            })}
            <Styled.HeaderCell role="presentation" />
          </TableHeaderRow>
        );
      })}
    </thead>
  );
  /* eslint-enable react/jsx-key */
}

interface Header {
  id: string;
  render: (
    type?: "Header" | "Footer" | string,
    props?: Record<string, unknown>
  ) => ReactNode;
  getHeaderProps: () => TableHeaderProps;
  getSortByToggleProps?: () => TableCommonProps;
  isSorted?: boolean;
  isSortedDesc?: boolean;
}

interface RequiredHeaderProps<T extends object = {}>
  extends Pick<ColumnInstance<T>, "getHeaderProps" | "render"> {}

interface OptionalHeaderProps<T extends object = {}>
  extends Partial<
    Pick<
      ColumnInstance<T>,
      "getSortByToggleProps" | "isSorted" | "isSortedDesc"
    >
  > {}

type PartialHeader<T extends object = {}> = RequiredHeaderProps<T> &
  OptionalHeaderProps<T>;

interface PartialHeaderGroup<T extends object = {}>
  extends Pick<HeaderGroup<T>, "getHeaderGroupProps"> {
  headers: PartialHeader<T>[];
}

interface Props<T extends object = {}> {
  headerGroups: PartialHeaderGroup<T>[];
  withCheckbox?: boolean;
  checkboxProps?: CheckboxProps;
}

export default TableHeader;
