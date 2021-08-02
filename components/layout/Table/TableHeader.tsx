import React, { ReactNode } from "react";
import TableHeaderRow from "./TableHeaderRow";
import * as Styled from "./Table.styles";
import TableSortButton from "./TableSortButton";
import { Checkbox } from "components/atomic/forms";
import { TableHeaderProps, HeaderGroup, TableCommonProps } from "react-table";
import { CheckboxProps } from "types/form-fields";

function TableHeader<
  T extends Record<string, unknown> = Record<string, unknown>
>({ headerGroups = [], withCheckbox, checkboxProps }: Props<T>) {
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

interface Props<T extends Record<string, unknown> = Record<string, unknown>> {
  headerGroups: HeaderGroup<T>[];
  withCheckbox?: boolean;
  checkboxProps?: CheckboxProps;
}

export default TableHeader;
