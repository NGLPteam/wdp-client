/**
 * @generated SignedSource<<5991e74165ccde72ad8dea5e9c1216ff>>
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

(node as any).hash = "fd003403c7377fb7ccf5df4882af8bc9";

export default node;
