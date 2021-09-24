/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DatePropertyFragment = {
    readonly date: unknown | null;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "DatePropertyFragment";
};
export type DatePropertyFragment$data = DatePropertyFragment;
export type DatePropertyFragment$key = {
    readonly " $data"?: DatePropertyFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"DatePropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DatePropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "DateProperty",
  "abstractKey": null
};
(node as any).hash = '6fe4e0dfdb11093a0e5e9737344be60b';
export default node;
