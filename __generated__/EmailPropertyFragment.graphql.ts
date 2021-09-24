/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EmailPropertyFragment = {
    readonly address: string | null;
    readonly defaultAddress: string | null;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "EmailPropertyFragment";
};
export type EmailPropertyFragment$data = EmailPropertyFragment;
export type EmailPropertyFragment$key = {
    readonly " $data"?: EmailPropertyFragment$data;
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
      "name": "address",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultAddress",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "EmailProperty",
  "abstractKey": null
};
(node as any).hash = '3788d833d7ae4a71c4a6e6e3655ec09c';
export default node;
