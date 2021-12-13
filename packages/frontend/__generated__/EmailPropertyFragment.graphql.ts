/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EmailPropertyFragment = {
    readonly fullPath: string;
    readonly label: string;
    readonly address: string | null;
    readonly defaultAddress: string | null;
    readonly " $refType": "EmailPropertyFragment";
};
export type EmailPropertyFragment$data = EmailPropertyFragment;
export type EmailPropertyFragment$key = {
    readonly " $data"?: EmailPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EmailPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EmailPropertyFragment",
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
      "name": "address",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultAddress",
      "storageKey": null
    }
  ],
  "type": "EmailProperty",
  "abstractKey": null
};
(node as any).hash = 'b2d81afac19abeee3f3bf99762a6ed61';
export default node;
