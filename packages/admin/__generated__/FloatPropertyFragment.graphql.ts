/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FloatPropertyFragment = {
    readonly floatValue: number | null;
    readonly defaultFloat: number | null;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "FloatPropertyFragment";
};
export type FloatPropertyFragment$data = FloatPropertyFragment;
export type FloatPropertyFragment$key = {
    readonly " $data"?: FloatPropertyFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"FloatPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FloatPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "floatValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultFloat",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "FloatProperty",
  "abstractKey": null
};
(node as any).hash = '67e4459ee339294263f524d2e5f2d25d';
export default node;
