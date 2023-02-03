/**
 * @generated SignedSource<<2eb8a58205ed31338191b2af50262c33>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SchemaSelectorSchemasFragment$data = {
  readonly schemaVersions: {
    readonly nodes: ReadonlyArray<{
      readonly kind: SchemaKind;
      readonly name: string;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"SchemaSelectorModalOptionsFragment">;
  };
  readonly " $fragmentType": "SchemaSelectorSchemasFragment";
};
export type SchemaSelectorSchemasFragment$key = {
  readonly " $data"?: SchemaSelectorSchemasFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaSelectorSchemasFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "SchemaSelectorSchemasFragment"
};

(node as any).hash = "a0ef8b06118896e2bb26590dc5ddd239";

export default node;
