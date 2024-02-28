import { FragmentRefs, OperationType } from "relay-runtime";
import type { PageInfo } from "./graphql-schema";

export type PathProxy<TRoot, T> = {
  [P in keyof T]: PathProxy<TRoot, T[P]>;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HasEdgesWithNode {
  edges: ReadonlyArray<{ node: any }>;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HasNodes {
  nodes: ReadonlyArray<any>;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export interface HasPageInfo {
  pageInfo: PageInfo;
}

export type HasAnyNodes = HasEdgesWithNode | HasNodes;

// export type Connectionish = HasAnyNodes & HasPageInfo;
export type Connectionish = HasAnyNodes;

export type ExtractsConnection<T extends OperationType, ConnectionType> = (
  data: T["response"],
) => ConnectionType | null;

/**
 * Tries to extract the Connection type from a response
 */
export type ExtractConnectionType<
  ResponseType,
  ConnectionName extends keyof ResponseType,
> = ResponseType[ConnectionName] extends Connectionish
  ? ResponseType[ConnectionName]
  : never;

export type HasFragment<FragmentName> = {
  " $fragmentSpreads": FragmentRefs<FragmentName>;
};
