/**
 * @generated SignedSource<<40b09ae792228427b5e647418d6d7591>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainLayoutFragment$data = {
  readonly allHidden: boolean;
  readonly templates: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"FactoryTemplatesFragment">;
  }>;
  readonly " $fragmentType": "MainLayoutFragment";
};
export type MainLayoutFragment$key = {
  readonly " $data"?: MainLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allHidden",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "templates",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FactoryTemplatesFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MainLayoutInstance",
  "abstractKey": null
};

(node as any).hash = "485e8c990b799c4aa92e4119fea5c23c";

export default node;
