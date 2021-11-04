/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorsPropertyFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "ContributorsPropertyFragment";
};
export type ContributorsPropertyFragment$data = ContributorsPropertyFragment;
export type ContributorsPropertyFragment$key = {
    readonly " $data"?: ContributorsPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorsPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorsPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "ContributorsProperty",
  "abstractKey": null
};
(node as any).hash = '9b0bc1b2159365fce4b9d32ab50c93a6';
export default node;
