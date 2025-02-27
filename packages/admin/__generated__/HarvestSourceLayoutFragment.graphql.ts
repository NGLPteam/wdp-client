/**
 * @generated SignedSource<<cd1ff82917d9b37d38a63c96924b3a72>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestSourceLayoutFragment$data = {
  readonly __typename: "HarvestSource";
  readonly name: string;
  readonly slug: string;
  readonly " $fragmentType": "HarvestSourceLayoutFragment";
};
export type HarvestSourceLayoutFragment$key = {
  readonly " $data"?: HarvestSourceLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestSourceLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestSourceLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "HarvestSource",
  "abstractKey": null
};

(node as any).hash = "cd990d9cdc2c1725bc72e9d4108aae88";

export default node;
