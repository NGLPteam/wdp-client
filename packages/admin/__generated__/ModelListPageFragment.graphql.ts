/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ModelListPageFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ModelPageCountActionsFragment" | "ModelPaginationFragment">;
    readonly " $refType": "ModelListPageFragment";
};
export type ModelListPageFragment$data = ModelListPageFragment;
export type ModelListPageFragment$key = {
    readonly " $data"?: ModelListPageFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ModelListPageFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPageCountActionsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPaginationFragment"
    }
  ],
  "type": "Paginated",
  "abstractKey": "__isPaginated"
};
(node as any).hash = 'c70fd573a1bca336f61cdd2ffac055bc';
export default node;
