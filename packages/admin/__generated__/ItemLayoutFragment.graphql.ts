/**
 * @generated SignedSource<<679409aa757cdae9ae1d7c9595ef3ad1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemLayoutFragment$data = {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"useBreadcrumbsFragment" | "useChildRouteLinksFragment">;
  readonly " $fragmentType": "ItemLayoutFragment";
};
export type ItemLayoutFragment$key = {
  readonly " $data"?: ItemLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
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
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useBreadcrumbsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useChildRouteLinksFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};

(node as any).hash = "2978a482fefa7366fb8fe40d8f56473d";

export default node;
