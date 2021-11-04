/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BooleanPropertyFragment = {
    readonly checked: boolean | null;
    readonly checkedByDefault: boolean | null;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "BooleanPropertyFragment";
};
export type BooleanPropertyFragment$data = BooleanPropertyFragment;
export type BooleanPropertyFragment$key = {
    readonly " $data"?: BooleanPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BooleanPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BooleanPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "checked",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "checkedByDefault",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "BooleanProperty",
  "abstractKey": null
};
(node as any).hash = '34f292394556d1f07d4a91bc14a1cda0';
export default node;
