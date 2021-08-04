import React from "react";
import TableHeaderRow from "./TableHeaderRow";
import * as Styled from "./Table.styles";
import TableSortButton from "./TableSortButton";
import { Checkbox } from "components/atomic/forms";
import { HeaderGroup, ColumnInstance } from "react-table";
import { CheckboxProps } from "types/form-fields";

function TableHeader<T extends Record<string, unknown>>({
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

type RequiredHeaderProps<T extends Record<string, unknown>> = Pick<
  ColumnInstance<T>,
  "getHeaderProps" | "render"
>;

type OptionalHeaderProps<T extends Record<string, unknown>> = Partial<
  Pick<ColumnInstance<T>, "getSortByToggleProps" | "isSorted" | "isSortedDesc">
>;

type PartialHeader<T extends Record<string, unknown>> = RequiredHeaderProps<T> &
  OptionalHeaderProps<T>;

interface PartialHeaderGroup<T extends Record<string, unknown>>
  extends Pick<HeaderGroup<T>, "getHeaderGroupProps"> {
  headers: PartialHeader<T>[];
}

interface Props<T extends Record<string, unknown>> {
  headerGroups: PartialHeaderGroup<T>[];
  withCheckbox?: boolean;
  checkboxProps?: CheckboxProps;
}

export default TableHeader;
