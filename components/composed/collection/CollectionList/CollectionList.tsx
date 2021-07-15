import React from "react";
import useEntityList from "hooks/useEntityList";
import { columns } from "components/composed/entity/EntityTable";
import { EntityList } from "components/composed/entity";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import {
  Connectionish,
  ExtractsConnection,
  ExtractConnectionNodeType,
} from "types/graphql-helpers";

function CollectionList<
  Query extends OperationType,
  ConnectionType extends Connectionish
>({
  query,
  queryVars = {},
  toConnection,
  defaultOrder,
}: {
  query: GraphQLTaggedNode;
  queryVars?: Partial<Query["variables"]>;
  toConnection: ExtractsConnection<Query, ConnectionType>;
  defaultOrder: Query["variables"]["order"];
}) {
  const { entityListProps } = useEntityList<Query, ConnectionType>({
    query,
    queryVars,
    defaultOrder,
    toConnection,
    handleEdit: ({ row }) => console.info(`edit ${row.original.slug}`), // eslint-disable-line
    handleDelete: ({ row }) => console.info(`delete ${row.original.slug}`), // eslint-disable-line
    handleSelection: ({ selection }) => console.table(selection), // eslint-disable-line
    columns: [
      columns.nameFactory("collectionDetail", "title", "title"),
      columns.createdAt,
      columns.updatedAt,
    ],
  });

  return (
    <>
      <EntityList<ExtractConnectionNodeType<ConnectionType>>
        entityName="collection"
        {...entityListProps}
      />
    </>
  );
}

export default CollectionList;
