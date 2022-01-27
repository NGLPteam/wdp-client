/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppBodyFragment = {
    readonly " $fragmentRefs": FragmentRefs<"AppHeaderFragment" | "AppFooterFragment">;
    readonly " $refType": "AppBodyFragment";
};
export type AppBodyFragment$data = AppBodyFragment;
export type AppBodyFragment$key = {
    readonly " $data"?: AppBodyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppBodyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBodyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppHeaderFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppFooterFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '0b80e432410931ef158f4127a60aa12e';
export default node;
