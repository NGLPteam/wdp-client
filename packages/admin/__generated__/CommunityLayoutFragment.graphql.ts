/**
 * @generated SignedSource<<b184e418c8880d06d5c0dc80aa0fc263>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutFragment$data = {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"useChildRouteLinksFragment">;
  readonly " $fragmentType": "CommunityLayoutFragment";
};
export type CommunityLayoutFragment$key = {
  readonly " $data"?: CommunityLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useChildRouteLinksFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "69e59ffd889e59b50f71b243bd57de10";

export default node;
