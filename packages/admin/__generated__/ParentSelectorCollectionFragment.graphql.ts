/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ParentSelectorCollectionFragment = {
    readonly id?: string | undefined;
    readonly title?: string | undefined;
    readonly " $refType": "ParentSelectorCollectionFragment";
};
export type ParentSelectorCollectionFragment$data = ParentSelectorCollectionFragment;
export type ParentSelectorCollectionFragment$key = {
    readonly " $data"?: ParentSelectorCollectionFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ParentSelectorCollectionFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ParentSelectorCollectionFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Community",
      "abstractKey": null
    }
  ],
  "type": "CollectionParent",
  "abstractKey": "__isCollectionParent"
};
})();
(node as any).hash = '73eb8154a6682d68b204861fc8b2f6aa';
export default node;
