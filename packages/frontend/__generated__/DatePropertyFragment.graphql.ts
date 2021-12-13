/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DatePropertyFragment = {
    readonly fullPath: string;
    readonly label: string;
    readonly date: string | null;
    readonly " $refType": "DatePropertyFragment";
};
export type DatePropertyFragment$data = DatePropertyFragment;
export type DatePropertyFragment$key = {
    readonly " $data"?: DatePropertyFragment$data | undefined;
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
      "name": "date",
      "storageKey": null
    }
  ],
  "type": "DateProperty",
  "abstractKey": null
};
(node as any).hash = '8078d205b103e104f02b4f0879c501d2';
export default node;
