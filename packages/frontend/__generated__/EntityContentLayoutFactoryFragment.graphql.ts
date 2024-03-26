/**
 * @generated SignedSource<<8bb6785ff9c4cc7b7e0294b6c3d39ce6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityContentLayoutFactoryFragment$data = {
  readonly contributions?: {
    readonly " $fragmentSpreads": FragmentRefs<"ArticleContributorFragment">;
  };
  readonly schemaDefinition?: {
    readonly identifier: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ArticleTextFragment" | "EntityLayoutFactoryFragment" | "EntityOrderingLayoutFactoryFragment" | "HowToCiteFragment" | "JournalContentFragment">;
  readonly " $fragmentType": "EntityContentLayoutFactoryFragment";
};
export type EntityContentLayoutFactoryFragment$key = {
  readonly " $data"?: EntityContentLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityContentLayoutFactoryFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntityContentLayoutFactoryFragment"
};

(node as any).hash = "9e4be7ec512c8d817589d7288a169fd4";

export default node;
