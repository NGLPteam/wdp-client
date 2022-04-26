/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ModelListPageSearchFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CurrentSearchFiltersFragment" | "SearchWithFiltersFragment">;
    readonly " $refType": "ModelListPageSearchFragment";
};
export type ModelListPageSearchFragment$data = ModelListPageSearchFragment;
export type ModelListPageSearchFragment$key = {
    readonly " $data"?: ModelListPageSearchFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageSearchFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ModelListPageSearchFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CurrentSearchFiltersFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchWithFiltersFragment"
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};
(node as any).hash = '56923e286328361257e85b0c47115442';
export default node;
