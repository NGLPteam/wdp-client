import { formatDate } from "helpers";
import { NamedLink, Image } from "components/atomic";
import React from "react";

const createdAt = {
  Header: "Created At",
  id: "createdAt",
  disableSortBy: true,
  accessor: (row) => formatDate(row.createdAt),
  truncate: true,
};

const updatedAt = {
  Header: "Updated At",
  id: "updatedAt",
  accessor: (row) => formatDate(row.updatedAt),
  truncate: true,
};

// collection, title, title
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nameFactory = (route: string, label: string, accessor: any) => ({
  Header: label,
  accessor: accessor,
  disableSortBy: true,
  Cell: ({ row, value }) => {
    return (
      <NamedLink
        route={route}
        routeParams={{ slug: row.original.slug }}
        passHref
      >
        <a className="t-weight-md a-link">{value}</a>
      </NamedLink>
    );
  },
});

const thumbnail = {
  Header: <span className="a-hidden">Thumbnail</span>,
  id: "thumbnail",
  accessor: "thumbnail",
  disableSortBy: true,
  // TODO: Find a way to pass size or view (table/grid) down to a single Cell render
  GridCell: ({ value }) => {
    return value?.image?.png ? (
      <Image
        image={{ ...value?.image?.png, width: 150, height: 180 }}
        objectFit="contain"
      />
    ) : null;
  },
  Cell: ({ value }) => {
    return value?.image?.png ? (
      <Image
        image={{ ...value?.image?.png, width: 50, height: 50 }}
        objectFit="contain"
        objectPosition="center"
      />
    ) : null;
  },
};

const columns = { createdAt, updatedAt, nameFactory, thumbnail };

export default columns;
