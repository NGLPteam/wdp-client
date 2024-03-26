/**
 * @generated SignedSource<<b598c08ff3d8485bc62b5d06f2005b68>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityDescendantsLayoutFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly descendant: {
        readonly slug?: string;
        readonly " $fragmentSpreads": FragmentRefs<"EntitySummaryFactoryFragment">;
      };
    };
  }>;
  readonly pageInfo: {
    readonly " $fragmentSpreads": FragmentRefs<"BrowseListLayoutFragment">;
  };
  readonly " $fragmentType": "EntityDescendantsLayoutFragment";
};
export type EntityDescendantsLayoutFragment$key = {
  readonly " $data"?: EntityDescendantsLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityDescendantsLayoutFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntityDescendantsLayoutFragment"
};

(node as any).hash = "ab5b02a810c11e532c97fba695dfa32c";

export default node;
