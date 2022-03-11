/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type useChildRouteLinksFragment = {
    readonly allowedActions: ReadonlyArray<string>;
    readonly " $refType": "useChildRouteLinksFragment";
};
export type useChildRouteLinksFragment$data = useChildRouteLinksFragment;
export type useChildRouteLinksFragment$key = {
    readonly " $data"?: useChildRouteLinksFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"useChildRouteLinksFragment">;
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
(node as any).hash = 'a6750f30478df340431ae2f3d7be0982';
export default node;
