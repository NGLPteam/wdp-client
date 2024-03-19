/**
 * @generated SignedSource<<e64ede45c50482f786501bdec3ece2af>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useChildRouteLinksFragment$data = {
  readonly allowedActions: ReadonlyArray<string>;
  readonly " $fragmentType": "useChildRouteLinksFragment";
};
export type useChildRouteLinksFragment$key = {
  readonly " $data"?: useChildRouteLinksFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useChildRouteLinksFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useChildRouteLinksFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allowedActions",
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "a6750f30478df340431ae2f3d7be0982";

export default node;
