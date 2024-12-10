/**
 * @generated SignedSource<<8534dbc491d68ebecc13ceeb985f586b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPageLayoutFactoryFragment$data = {
  readonly page?: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPageLayoutFragment" | "IssuePageLayoutFragment">;
  } | null | undefined;
  readonly schemaDefinition?: {
    readonly identifier: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"IssueSidebarNavFragment">;
  readonly " $fragmentType": "EntityPageLayoutFactoryFragment";
};
export type EntityPageLayoutFactoryFragment$key = {
  readonly " $data"?: EntityPageLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityPageLayoutFactoryFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntityPageLayoutFactoryFragment"
};

(node as any).hash = "3847114578881f73154a65b60e5803c6";

export default node;
