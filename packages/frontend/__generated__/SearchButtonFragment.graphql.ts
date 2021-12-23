/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchButtonFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SearchModalFragment">;
    readonly " $refType": "SearchButtonFragment";
};
export type SearchButtonFragment$data = SearchButtonFragment;
export type SearchButtonFragment$key = {
    readonly " $data"?: SearchButtonFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchButtonFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchButtonFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchModalFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = 'e71087e526da864b14017e47c4140f0c';
export default node;
