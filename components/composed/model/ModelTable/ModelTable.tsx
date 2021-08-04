import React, { useMemo } from "react";
import { Table } from "components/layout";
import { ModelTableGridProps } from "components/composed/model/ModelList";

function ModelTable<T extends Record<string, unknown>>({
  title,
  withRowSelection,
  checkboxProps,
  tableProps,
  headerGroups,
  rows,
  tableBodyProps,
}: ModelTableGridProps<T>) {
  const showCheckboxes = useMemo(
    () =>
      checkboxProps && (checkboxProps.indeterminate || checkboxProps.checked),
    [checkboxProps]
  );

  return (
    <Table
      aria-label={title}
      withRowSelection={withRowSelection}
      showCheckboxes={showCheckboxes}
      {...tableProps}
    >
      <Table.Header
        withCheckbox={withRowSelection}
        checkboxProps={checkboxProps}
        headerGroups={headerGroups}
      />
      <Table.Body rows={rows} {...tableBodyProps} />
    </Table>
  );
}

export default ModelTable;
