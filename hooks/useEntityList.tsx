import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { PageInfo } from "types/graphql-schema";
import { ColumnOptions } from "types/react-table";
import { EntityTableActionProps } from "components/composed/entity/EntityTable/EntityTable";
import { useRouter } from "next/router";

import type {
  ExtractsConnection,
  ExtractConnectionNodeType,
  Connectionish,
  HasEdgesWithNode,
  HasNodes,
} from "types/graphql-helpers";

interface EntityListArguments<
  T extends OperationType,
  ConnectionType extends Connectionish,
  U = ExtractConnectionNodeType<ConnectionType>
> {
  query: GraphQLTaggedNode;
  queryVars?: Partial<T["variables"]>;
  defaultOrder: T["variables"]["order"];
  toConnection: ExtractsConnection<T, ConnectionType>;
  columns: ColumnOptions<U>[];
  initialPage?: number;
  handleEdit?: (props: EntityTableActionProps<U>) => void;
  handleDelete?: (props: EntityTableActionProps<U>) => void;
  handleSelection?: (props: { selection: string[] }) => void;
}

export default function useEntityList<
  T extends OperationType,
  ConnectionType extends Connectionish
>({
  query,
  queryVars = {},
  defaultOrder,
  initialPage = 1,
  toConnection,
  handleEdit,
  handleDelete,
  columns,
  handleSelection: originalHandleSelection,
}: EntityListArguments<T, ConnectionType>) {
  const router = useRouter();
  const routerPage = parseInt(router.query.page as string) || 1;
  const didMountRef = useRef(false);
  const [order, setOrder] = useState<T["variables"]["order"]>(defaultOrder);
  const [page, setPage] = useState(initialPage || routerPage);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    const page = parseInt(router.query.page as string, 10);
    if (!page) return;
    setPage(page);
  }, [router.query.page]);

  const { data, error, isLoading } = useAuthenticatedQuery<T>(query, {
    ...queryVars,
    order,
    page,
  });

  const handleSort = useCallback(({ order }) => {
    setOrder(order);
  }, []);

  const handleSelection = useCallback(
    ({ selectedRowIds }) => {
      if (!didMountRef) return;
      setSelection(selectedRowIds);
      if (originalHandleSelection)
        originalHandleSelection({ selection: selectedRowIds });
    },
    [originalHandleSelection]
  );

  const actions = useMemo(
    () => ({
      ...(handleEdit && { edit: { handleClick: handleEdit } }),
      ...(handleDelete && { delete: { handleClick: handleDelete } }),
    }),
    [handleEdit, handleDelete]
  );

  const connection = useMemo(() => toConnection(data), [toConnection, data]);
  const entities = useMemo(() => toEntities<ConnectionType>(connection), [
    connection,
  ]);
  const pageInfo = useMemo(() => toPageInfo<ConnectionType>(connection), [
    connection,
  ]);
  const memoizedColumns = useMemo(() => columns, [columns]);

  const entityListProps = {
    error,
    isLoading,
    selection,
    onSort: handleSort,
    onSelectionChange: handleSelection,
    entities,
    pageInfo,
    columns: memoizedColumns,
    actions,
  };

  return {
    data,
    order,
    selection,
    page,
    pageInfo,
    entities,
    ...entityListProps,
    entityListProps,
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function connectionHasEdges(connection: any): connection is HasEdgesWithNode {
  return Array.isArray(connection?.edges) && !!connection.edges[0]?.node;
}

function connectionHasNodes(connection: any): connection is HasNodes {
  return Array.isArray(connection?.nodes) && !!connection.nodes[0];
}
/* eslint-enable @typescript-eslint/no-explicit-any */

function toEntities<ConnectionType extends Connectionish>(
  connection?: ConnectionType
): readonly ExtractConnectionNodeType<ConnectionType>[] {
  if (!connection) return null;
  if (connectionHasEdges(connection)) {
    return connection.edges.map(({ node }) => node);
  } else if (connectionHasNodes(connection)) {
    return connection.nodes;
  } else {
    return [];
  }
}

function toPageInfo<ConnectionType extends Connectionish>(
  connection?: ConnectionType
): PageInfo {
  if (!connection) return null;
  return connection.pageInfo;
}
