/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ParentSelectorFragment = {
    readonly entityId?: string | undefined;
    readonly parent?: {
        readonly id?: string | undefined;
        readonly title?: string | undefined;
    } | null | undefined;
    readonly " $refType": "ParentSelectorFragment";
};
export type ParentSelectorFragment$data = ParentSelectorFragment;
export type ParentSelectorFragment$key = {
    readonly " $data"?: ParentSelectorFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ParentSelectorFragment">;
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
  "name": "ParentSelectorFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": "entityId",
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "parent",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": (v0/*: any*/),
              "type": "Community",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": (v0/*: any*/),
              "type": "Collection",
              "abstractKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = '4f4db0f64bece2be2fd00e31802d82c9';
export default node;
