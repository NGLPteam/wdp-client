/**
 * @generated SignedSource<<255c92664351ea98d1b18e1640214582>>
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
        readonly schemaDefinition?: {
          readonly identifier: string;
          readonly name: string;
        };
        readonly slug?: string;
        readonly " $fragmentSpreads": FragmentRefs<"EntitySummaryFragment">;
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

(node as any).hash = "09d3948284f38958305b74c68afff88d";

export default node;
