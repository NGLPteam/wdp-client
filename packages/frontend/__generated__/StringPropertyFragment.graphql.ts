/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type StringPropertyFragment = {
    readonly fullPath: string;
    readonly label: string;
    readonly content: string | null;
    readonly " $refType": "StringPropertyFragment";
};
export type StringPropertyFragment$data = StringPropertyFragment;
export type StringPropertyFragment$key = {
    readonly " $data"?: StringPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"StringPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StringPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "StringProperty",
  "abstractKey": null
};
(node as any).hash = '3bf3aa26d2c2526f8ee9b1a9171525fb';
export default node;
