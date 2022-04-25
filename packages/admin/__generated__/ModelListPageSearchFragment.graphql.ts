/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ModelListPageSearchFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CurrentSearchFiltersFragment" | "SearchFragment">;
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
      "name": "SearchFragment"
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};
(node as any).hash = '745b3c1ddaf2eba18c647e3b96aba8fa';
export default node;
