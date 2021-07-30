import { OperationType } from "relay-runtime";

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

export type Connectionish = HasAnyNodes & HasPageInfo;

export type ExtractsConnection<T extends OperationType, ConnectionType> = (
  data: T["response"]
) => ConnectionType | null;

export type ExtractsNodes<T extends Connectionish> = (
  data: T
) => ExtractConnectionNodeType<T>[];

export type ExtractsPageInfo<T extends Connectionish> = (
  data: T
) => ExtractConnectionPageInfo<T>;

/**
 * Tries to extract the Connection type from a response
 */
export type ExtractConnectionType<
  ResponseType,
  ConnectionName extends keyof ResponseType
> = ResponseType[ConnectionName] extends Connectionish
  ? ResponseType[ConnectionName]
  : never;

/**
 * Tries to extract a node type from a connection,
 * whether it is nested under an `edges` array or
 * directly under `nodes`.
 */
export type ExtractConnectionNodeType<
  ConnectionType extends Connectionish
> = ConnectionType extends Connectionish
  ? ConnectionType extends HasEdgesWithNode
    ? ConnectionType["edges"][number]["node"]
    : ConnectionType extends HasNodes
    ? ConnectionType["nodes"][number]
    : never
  : never;

/**
 * Tries to extract the PageInfo type from a connection
 */
export type ExtractConnectionPageInfo<
  ConnectionType
> = ConnectionType extends HasPageInfo ? ConnectionType["pageInfo"] : never;

/**
 * Tries to extract a node type from a response or fragment's type by connection name.
 */
export type ExtractNodeType<
  ResponseType,
  ConnectionName extends keyof ResponseType
> = ExtractConnectionNodeType<ResponseType[ConnectionName]>;

/**
 * Tries to extract the PageInfo type from a response or fragment's type by connection name
 */
export type ExtractPageInfo<
  ResponseType,
  ConnectionName extends keyof ResponseType
> = ExtractConnectionPageInfo<ResponseType[ConnectionName]>;
