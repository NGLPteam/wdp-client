/**
 * @generated SignedSource<<b995a08fe0c3b1d5a9fa345f6c2ed2b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityLayoutFactoryFragment$data = {
  readonly schemaDefinition?: {
    readonly identifier: string;
  };
  readonly slug?: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleLayoutFragment" | "EntityLayoutFragment" | "IssueLayoutFragment" | "JournalLayoutFragment" | "SeriesLayoutFragment" | "VolumeLayoutFragment">;
  readonly " $fragmentType": "EntityLayoutFactoryFragment";
};
export type EntityLayoutFactoryFragment$key = {
  readonly " $data"?: EntityLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityLayoutFactoryFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntityLayoutFactoryFragment"
};

(node as any).hash = "b9a9a2dbc744d155f9ba69e91eb89763";

export default node;
