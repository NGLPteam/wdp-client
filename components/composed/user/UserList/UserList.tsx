import React from "react";
import useModelList from "hooks/useModelList";
import { columns } from "components/composed/model/ModelTable";
import { ModelList } from "components/composed/model";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import {
  Connectionish,
  ExtractsConnection,
  ExtractConnectionNodeType,
} from "types/graphql-helpers";

function UserList<
  Query extends OperationType,
  ConnectionType extends Connectionish
>({
  query,
  queryVars,
  toConnection,
  defaultOrder,
}: {
  query: GraphQLTaggedNode;
  queryVars?: Partial<Query["variables"]>;
  toConnection: ExtractsConnection<Query, ConnectionType>;
  defaultOrder: Query["variables"]["order"];
}) {
  const { entityListProps } = useModelList<Query, ConnectionType>({
    query,
    queryVars,
    defaultOrder,
    toConnection,
    handleEdit: ({ row }) => console.info(`edit ${row.original.slug}`), // eslint-disable-line
    handleDelete: ({ row }) => console.info(`delete ${row.original.slug}`), // eslint-disable-line
    handleSelection: ({ selection }) => console.table(selection), // eslint-disable-line
    columns: [
      columns.nameFactory("userDetail", "name", "name"),
      columns.createdAt,
      columns.updatedAt,
      {
        Header: "Email",
        accessor: "email",
        disableSortBy: true,
      },
      {
        Header: "Admin?",
        accessor: "globalAdmin",
        disableSortBy: true,
        Cell: ({ value }) => (value === true ? "Yes" : "No"),
      },
    ],
  });

  return (
    <>
      <ModelList<ExtractConnectionNodeType<ConnectionType>>
        entityName="user"
        {...entityListProps}
      />
    </>
  );
}

export default UserList;
