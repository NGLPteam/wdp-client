/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Connectionish,
  HasEdgesWithNode,
  HasNodes,
} from "types/graphql-helpers";
import has from "lodash/has";
import reject from "lodash/reject";
import isNil from "lodash/isNil";

function connectionHasEdges(connection: any): connection is HasEdgesWithNode {
  return Array.isArray(connection?.edges) && has(connection.edges[0], "node");
}

function connectionHasNodes(connection: any): connection is HasNodes {
  return (
    Array.isArray(connection?.nodes) && !!reject(connection.nodes, isNil)[0]
  );
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export function toEntities<
  ConnectionType extends Connectionish,
  NodeType extends Record<string, unknown>
>(connection: ConnectionType | undefined | null): readonly NodeType[] {
  if (!connection) return [];
  // Remove null nodes. Nodes can become null when they are removed with a @deleteRecord
  // gql directive,
  if (connectionHasEdges(connection)) {
    return reject<NodeType>(
      connection.edges.map(({ node }) => node),
      isNil
    );
  } else if (connectionHasNodes(connection)) {
    return reject<NodeType>(connection.nodes, isNil);
  } else {
    return [];
  }
}
