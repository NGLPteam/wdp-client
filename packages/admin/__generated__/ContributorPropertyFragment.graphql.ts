/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorPropertyFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "ContributorPropertyFragment";
};
export type ContributorPropertyFragment$data = ContributorPropertyFragment;
export type ContributorPropertyFragment$key = {
    readonly " $data"?: ContributorPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "ContributorProperty",
  "abstractKey": null
};
(node as any).hash = '5a154cfa89839f4320fdab1311d62c77';
export default node;
