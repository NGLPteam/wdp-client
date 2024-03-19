/**
 * @generated SignedSource<<a66b181d85adddeb804ff6436115d9a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutFragment$data = {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"useBreadcrumbsFragment" | "useChildRouteLinksFragment">;
  readonly " $fragmentType": "CollectionLayoutFragment";
};
export type CollectionLayoutFragment$key = {
  readonly " $data"?: CollectionLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionLayoutFragment",
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
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "050dd3e39b47be4f5038e6ead083c61c";

export default node;
