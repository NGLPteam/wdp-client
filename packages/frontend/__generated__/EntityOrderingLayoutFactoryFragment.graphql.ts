/**
 * @generated SignedSource<<975e9a9f7772a73dfeb3bf630f1ae465>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingLayoutFactoryFragment$data = {
  readonly initialOrdering: {
    readonly disabled: boolean;
    readonly identifier: string;
  } | null | undefined;
  readonly schemaDefinition: {
    readonly identifier: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"IssueSidebarNavFragment">;
  readonly " $fragmentType": "EntityOrderingLayoutFactoryFragment";
};
export type EntityOrderingLayoutFactoryFragment$key = {
  readonly " $data"?: EntityOrderingLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingLayoutFactoryFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntityOrderingLayoutFactoryFragment"
};

(node as any).hash = "0edbb7bb0d0308cafa3f00ae9a75aa54";

export default node;
