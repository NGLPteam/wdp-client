/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetPropertyFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "AssetPropertyFragment";
};
export type AssetPropertyFragment$data = AssetPropertyFragment;
export type AssetPropertyFragment$key = {
    readonly " $data"?: AssetPropertyFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"AssetPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "AssetProperty",
  "abstractKey": null
};
(node as any).hash = 'b5350e723b29dd9dd0e0b7181bb7e48d';
export default node;
