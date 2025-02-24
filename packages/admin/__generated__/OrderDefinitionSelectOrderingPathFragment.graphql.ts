/**
 * @generated SignedSource<<a2fbda2dd7e63c95332121e6354ee4f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type OrderingPathGrouping = "ANCESTOR_PROPS" | "ANCESTOR_STATIC" | "ENTITY" | "LINK" | "PROPS" | "SCHEMA" | "%future added value";
export type SchemaPropertyType = "ASSET" | "ASSETS" | "BOOLEAN" | "CONTRIBUTOR" | "CONTRIBUTORS" | "CONTROLLED_VOCABULARIES" | "CONTROLLED_VOCABULARY" | "DATE" | "EMAIL" | "ENTITIES" | "ENTITY" | "FLOAT" | "FULL_TEXT" | "GROUP" | "INTEGER" | "MARKDOWN" | "MULTISELECT" | "SELECT" | "STRING" | "TAGS" | "TIMESTAMP" | "UNKNOWN" | "URL" | "VARIABLE_DATE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type OrderDefinitionSelectOrderingPathFragment$data = {
  readonly description: string | null | undefined;
  readonly grouping: OrderingPathGrouping;
  readonly label: string;
  readonly labelPrefix: string | null | undefined;
  readonly path: string;
  readonly type: SchemaPropertyType;
  readonly " $fragmentType": "OrderDefinitionSelectOrderingPathFragment";
};
export type OrderDefinitionSelectOrderingPathFragment$key = {
  readonly " $data"?: OrderDefinitionSelectOrderingPathFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderDefinitionSelectOrderingPathFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "OrderDefinitionSelectOrderingPathFragment"
};

(node as any).hash = "046f4ae7a967536f0fc75ac37039688f";

export default node;
