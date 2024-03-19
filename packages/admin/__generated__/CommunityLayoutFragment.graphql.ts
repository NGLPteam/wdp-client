/**
 * @generated SignedSource<<be0eb55c873987e50197da2442a4d1c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutFragment$data = {
  readonly allowedActions: ReadonlyArray<string>;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allowedActions",
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

(node as any).hash = "98066e304b4ac8e327f91473228304e0";

export default node;
