/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StringPropertyFragment = {
    readonly content: string | null;
    readonly default: string | null;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "StringPropertyFragment";
};
export type StringPropertyFragment$data = StringPropertyFragment;
export type StringPropertyFragment$key = {
    readonly " $data"?: StringPropertyFragment$data;
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
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "default",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "StringProperty",
  "abstractKey": null
};
(node as any).hash = 'a7296c7bf5f2b78ffc7c65353af9218c';
export default node;
