import React, { useEffect } from "react";
import { HeaderGroup, ColumnInstance } from "react-table";
import TableHeaderRow from "./TableHeaderRow";
import * as Styled from "./Table.styles";
import TableSortIcon from "./TableSortIcon";
import useTableContext from "./hooks/useTableContext";
import { CheckboxProps } from "types/form-fields";
import { Checkbox } from "components/forms";

function TableHeader<T extends Record<string, unknown>>({
  headerGroups = [],
  withCheckbox,
  checkboxProps,
}: Props<T>) {
  /* eslint-disable react/jsx-key */
  /* keys are injected using the get props functions */
  const { setColumnCount } = useTableContext();

  useEffect(() => {
    if (headerGroups.length > 0 && setColumnCount) {
      const { headers } = headerGroups[0];
      const columnCount = headers.length;
      setColumnCount(columnCount);
    }
  }, [headerGroups, setColumnCount]);

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
                    {column.canSort && (
                      <TableSortIcon
                        desc={column.isSortedDesc}
                        isSorted={column.isSorted}
                      />
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
  "getHeaderProps" | "render" | "canSort"
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
