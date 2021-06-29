import { ButtonControl } from "components/atomic";
import { useState } from "react";
import Table from "./Table";
import { SortProps } from "helpers/sharedTypes";

export default {
  title: "Components/Layout/Table",
  component: Table,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const columns = [
  { name: "Name", key: "name", allowsSorting: true },
  { name: "Type", key: "type", allowsSorting: true },
  { name: "Date Modified", key: "date" },
  { name: "Actions", key: "actions", hideLabel: true },
];

const rows = [
  { key: 1, name: "Item Name 1", date: "6/7/2020", type: "Schema Type" },
  { key: 2, name: "Item Name 2", date: "4/7/2021", type: "Schema Type" },
  { key: 3, name: "Item Name 3", date: "11/20/2010", type: "Schema Type" },
  { key: 4, name: "Item Name 4", date: "1/18/2016", type: "Schema Type" },
];

export const Default = ({ multiselect, ...args }) => {
  const [sort, setSort] = useState<SortProps>({
    column: "name",
    direction: "descending",
  });
  const handleSort = (sort) => {
    console.log("sort", sort);
    setSort(sort);
  };

  return (
    <div className="l-container-max">
      <Table aria-label={args["aria-label"]} multiselect={multiselect}>
        <Table.Header columns={columns} multiselect={multiselect}>
          {({ key, name, allowsSorting, hideLabel }) => (
            <Table.Column
              key={key}
              columnKey={key}
              allowsSorting={allowsSorting}
              sort={sort}
              onSortChange={handleSort}
            >
              <span className={hideLabel ? "a-hidden" : ""}>{name}</span>
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body rows={rows} columns={columns} multiselect={multiselect}>
          {({ row, column }, i) => (
            <Table.Cell
              key={column.key}
              role={i === 0 ? "rowheader" : "gridcell"}
              align={column.key === "actions" ? "right" : "left"}
            >
              {column.key === "name" ? (
                <a href="#">{row[column.key]}</a>
              ) : column.key === "actions" ? (
                <ButtonControl icon="delete" aria-label="Delete" />
              ) : (
                row[column.key]
              )}
            </Table.Cell>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

Default.args = {
  "aria-label": "Example plain table",
  multiselect: false,
};

export const WithMultiselect = Default.bind({});
WithMultiselect.args = {
  "aria-label": "Example plain table",
  multiselect: true,
};
