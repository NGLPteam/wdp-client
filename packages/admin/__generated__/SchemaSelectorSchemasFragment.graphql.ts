/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type SchemaSelectorSchemasFragment = {
    readonly schemaVersions: {
        readonly nodes: ReadonlyArray<{
            readonly name: string;
            readonly kind: SchemaKind;
        }>;
        readonly " $fragmentRefs": FragmentRefs<"SchemaSelectorModalOptionsFragment">;
    };
    readonly " $refType": "SchemaSelectorSchemasFragment";
};
export type SchemaSelectorSchemasFragment$data = SchemaSelectorSchemasFragment;
export type SchemaSelectorSchemasFragment$key = {
    readonly " $data"?: SchemaSelectorSchemasFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectorSchemasFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "SchemaSelectorSchemasFragment"
};
(node as any).hash = 'a0ef8b06118896e2bb26590dc5ddd239';
export default node;
