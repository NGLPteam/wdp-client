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
  const { entityListProps } = useModelList<Query, ConnectionType>({
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
      <ModelList<ExtractConnectionNodeType<ConnectionType>>
        entityName="collection"
        {...entityListProps}
      />
    </>
  );
}

export default CollectionList;
