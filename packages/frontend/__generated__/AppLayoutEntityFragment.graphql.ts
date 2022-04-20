/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppLayoutEntityFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityNavBarEntityFragment" | "AppBodyEntityFragment">;
    readonly " $refType": "AppLayoutEntityFragment";
};
export type AppLayoutEntityFragment$data = AppLayoutEntityFragment;
export type AppLayoutEntityFragment$key = {
    readonly " $data"?: AppLayoutEntityFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppLayoutEntityFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppLayoutEntityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavBarEntityFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBodyEntityFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '997a6b71c59e2999fb7d56e69d3739f4';
export default node;
