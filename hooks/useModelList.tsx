import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { PageInfo } from "types/graphql-schema";
import { ModelTableActionProps } from "components/composed/model/ModelList/ModelList";
import { useRouter } from "next/router";

import type {
  ExtractsConnection,
  ExtractConnectionNodeType,
  Connectionish,
  HasEdgesWithNode,
  HasNodes,
} from "types/graphql-helpers";
import { Column } from "react-table";

interface ModelListArguments<
  T extends OperationType,
  ConnectionType extends Connectionish,
  U = ExtractConnectionNodeType<ConnectionType>
> {
  query: GraphQLTaggedNode;
  queryVars?: Partial<T["variables"]>;
  defaultOrder: T["variables"]["order"];
  toConnection: ExtractsConnection<T, ConnectionType>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: Column<any>[];
  initialPage?: number;
  handleEdit?: (props: ModelTableActionProps<U>) => void;
  handleDelete?: (props: ModelTableActionProps<U>) => void;
  handleSelection?: (props: { selection: string[] }) => void;
}

export default function useModelList<
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
}: ModelListArguments<T, ConnectionType>) {
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

  const connection = useMemo(() => toConnection(data) || null, [
    toConnection,
    data,
  ]);
  const models = useMemo(() => toEntities<ConnectionType>(connection), [
    connection,
  ]);
  const pageInfo = useMemo(() => toPageInfo<ConnectionType>(connection), [
    connection,
  ]);
  const memoizedColumns = useMemo(() => columns, [columns]);

  const modelListProps = {
    error,
    isLoading,
    selection,
    onSort: handleSort,
    onSelectionChange: handleSelection,
    models,
    pageInfo,
    columns: memoizedColumns,
    actions,
  };

  return {
    data,
    order,
    page,
    ...modelListProps,
    modelListProps,
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
  connection: ConnectionType | undefined | null
): readonly ExtractConnectionNodeType<ConnectionType>[] {
  if (!connection) return [];
  if (connectionHasEdges(connection)) {
    return connection.edges.map(({ node }) => node);
  } else if (connectionHasNodes(connection)) {
    return connection.nodes;
  } else {
    return [];
  }
}

function toPageInfo<ConnectionType extends Connectionish>(
  connection?: ConnectionType | undefined | null
): PageInfo | undefined {
  if (!connection) return undefined;
  return connection.pageInfo;
}
