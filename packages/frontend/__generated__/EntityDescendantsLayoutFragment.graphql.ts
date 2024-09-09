/**
 * @generated SignedSource<<57eff3c26ea6bd40d60c73d1f2b954e8>>
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

(node as any).hash = "1afad91c9f44d7947fa5c634851b3cfa";

export default node;
