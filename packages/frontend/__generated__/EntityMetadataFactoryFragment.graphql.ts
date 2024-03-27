/**
 * @generated SignedSource<<9f31bffe5005d4f327a2bab561a6e1e2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityMetadataFactoryFragment$data = {
  readonly schemaDefinition?: {
    readonly identifier: string;
    readonly kind: SchemaKind;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ArticleMetadataFragment" | "DissertationMetadataFragment" | "PaperMetadataFragment">;
  readonly " $fragmentType": "EntityMetadataFactoryFragment";
};
export type EntityMetadataFactoryFragment$key = {
  readonly " $data"?: EntityMetadataFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityMetadataFactoryFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntityMetadataFactoryFragment"
};

(node as any).hash = "0cf6d496e3782e8804f465be5f7fe2e5";

export default node;
