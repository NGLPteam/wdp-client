/**
 * @generated SignedSource<<90c849936bc230e849029ecd96916836>>
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
  readonly " $fragmentSpreads": FragmentRefs<"ContentHeaderFragment" | "useChildRouteLinksFragment">;
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
      "name": "ContentHeaderFragment"
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

(node as any).hash = "52309d17ecfbeff93f46843dadd04af6";

export default node;
