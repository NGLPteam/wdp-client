/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionAddFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectFragment" | "CommunitySelectFragment">;
    readonly " $refType": "CollectionAddFormFragment";
};
export type CollectionAddFormFragment$data = CollectionAddFormFragment;
export type CollectionAddFormFragment$key = {
    readonly " $data"?: CollectionAddFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionAddFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionAddFormFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaSelectFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunitySelectFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'e7972a082b813ade3092ab5fe481e726';
export default node;
