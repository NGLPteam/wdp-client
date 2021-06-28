import { useState } from "react";
import Table from ".";
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
} from "@react-stately/table";

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
  { name: "Type", key: "type", allowsSorting: false },
  { name: "Date Modified", key: "date", allowsSorting: true },
];

const rows = [
  { id: 1, name: "Games", date: "6/7/2020", type: "File folder" },
  { id: 2, name: "Program Files", date: "4/7/2021", type: "File folder" },
  { id: 3, name: "bootmgr", date: "11/20/2010", type: "System file" },
  { id: 4, name: "log.txt", date: "1/18/2016", type: "Text Document" },
];

export const Default = (args) => {
  const [sort, setSort] = useState({ column: "name", direction: "ascending" });
  function onSortChange(value) {
    setSort(value);
  }

  return (
    <>
      <Table
        aria-label="Example dynamic collection table"
        onSortChange={onSortChange}
        sortDescriptor={sort}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <Column allowsSorting={column.allowsSorting}>{column.name}</Column>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => <Row>{(columnKey) => <Cell>{item[columnKey]}</Cell>}</Row>}
        </TableBody>
      </Table>
    </>
  );
};

Default.args = {
  title: "Page Header",
};
