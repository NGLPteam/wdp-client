import { formatDate } from "helpers";

const createdAt = {
  Header: "Created At",
  id: "createdAt",
  disableSortBy: true,
  accessor: (row) => formatDate(row.createdAt),
};

const updatedAt = {
  Header: "Updated At",
  id: "updatedAt",
  accessor: (row) => formatDate(row.updatedAt),
};

const columns = { createdAt, updatedAt };

export default columns;
