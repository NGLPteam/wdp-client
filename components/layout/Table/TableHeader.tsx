import React from "react";
import TableHeaderRow from "./TableHeaderRow";
import * as Styled from "./Table.styles";
import TableSortButton from "./TableSortButton";
import { Checkbox } from "components/atomic/forms";
import { HeaderGroupProperties } from "types/react-table";
import { CheckboxProps } from "types/form-fields";

const TableHeader = ({
  headerGroups = [],
  withCheckbox,
  checkboxProps,
}: Props) => {
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
                      <TableSortButton desc={column.isSortedDesc} />
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
};

interface Props {
  headerGroups: HeaderGroupProperties[];
  withCheckbox?: boolean;
  checkboxProps?: CheckboxProps;
}

export default TableHeader;
