/**
 * @generated SignedSource<<0ea9ba4b3a82e0bf732ae6ff7b6275f3>>
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
  readonly id: string;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "HarvestSource",
  "abstractKey": null
};

(node as any).hash = "fbde8bc9049688e04588369bce7b4546";

export default node;
