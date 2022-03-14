/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserGrantCollectionAccessFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CollectionTypeaheadFragment">;
    readonly " $refType": "UserGrantCollectionAccessFormFragment";
};
export type UserGrantCollectionAccessFormFragment$data = UserGrantCollectionAccessFormFragment;
export type UserGrantCollectionAccessFormFragment$key = {
    readonly " $data"?: UserGrantCollectionAccessFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserGrantCollectionAccessFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserGrantCollectionAccessFormFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionTypeaheadFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'c371d61167f18d36f90138742e1c9b85';
export default node;
