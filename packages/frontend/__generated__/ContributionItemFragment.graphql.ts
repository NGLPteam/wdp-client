/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributionItemFragment = {
    readonly slug?: string | undefined;
    readonly title?: string | undefined;
    readonly subtitle?: string | null | undefined;
    readonly summary?: string | null | undefined;
    readonly " $refType": "ContributionItemFragment";
};
export type ContributionItemFragment$data = ContributionItemFragment;
export type ContributionItemFragment$key = {
    readonly " $data"?: ContributionItemFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributionItemFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "subtitle",
    "storageKey": null
  },
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "summary",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionItemFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/)
      ],
      "type": "Sluggable",
      "abstractKey": "__isSluggable"
    },
    {
      "kind": "InlineFragment",
      "selections": (v1/*: any*/),
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v1/*: any*/),
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = '34ab939d5ef8cd39879d9a0d4f94f819';
export default node;
