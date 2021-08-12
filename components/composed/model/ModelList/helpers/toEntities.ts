/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Connectionish,
  HasEdgesWithNode,
  HasNodes,
} from "types/graphql-helpers";

function connectionHasEdges(connection: any): connection is HasEdgesWithNode {
  return Array.isArray(connection?.edges) && !!connection.edges[0]?.node;
}

function connectionHasNodes(connection: any): connection is HasNodes {
  return Array.isArray(connection?.nodes) && !!connection.nodes[0];
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export function toEntities<
  ConnectionType extends Connectionish,
  NodeType extends Record<string, unknown>
>(connection: ConnectionType | undefined | null): readonly NodeType[] {
  if (!connection) return [];
  if (connectionHasEdges(connection)) {
    return connection.edges.map(({ node }) => node);
  } else if (connectionHasNodes(connection)) {
    return connection.nodes;
  } else {
    return [];
  }
}
