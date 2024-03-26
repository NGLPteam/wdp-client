/**
 * @generated SignedSource<<9b2146925d1c1b6e9a61edb8bd59ed0d>>
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
  readonly " $fragmentSpreads": FragmentRefs<"EntityLayoutFactoryFragment" | "IssueSidebarNavFragment">;
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

(node as any).hash = "efb6f87f667cec862fbe7ddc594bc20f";

export default node;
