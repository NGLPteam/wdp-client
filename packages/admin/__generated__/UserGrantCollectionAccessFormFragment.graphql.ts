/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserGrantCollectionAccessFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CollectionTypeaheadFragment" | "RoleSelectFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoleSelectFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '11813b8f2939869faf28f5567587f00c';
export default node;
