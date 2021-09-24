/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScalarPropertyFragment = {
    readonly name: string;
    readonly label: string;
    readonly path: string;
    readonly required: boolean;
    readonly type: string;
    readonly " $refType": "ScalarPropertyFragment";
};
export type ScalarPropertyFragment$data = ScalarPropertyFragment;
export type ScalarPropertyFragment$key = {
    readonly " $data"?: ScalarPropertyFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ScalarPropertyFragment",
  "selections": [
    {
      "alias": "name",
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
      "name": "path",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "required",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    }
  ],
  "type": "ScalarProperty",
  "abstractKey": "__isScalarProperty"
};
(node as any).hash = 'bea525bdc10c373a22b791ca4bcd0d3b';
export default node;
