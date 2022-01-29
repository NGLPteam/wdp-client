/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ParentSelectorFragment = {
    readonly __typename: "Collection";
    readonly entityId: string;
    readonly parent: {
        readonly " $fragmentRefs": FragmentRefs<"ParentSelectorCollectionFragment">;
    } | null;
    readonly " $refType": "ParentSelectorFragment";
} | {
    readonly __typename: "Item";
    readonly entityId: string;
    readonly parent: {
        readonly " $fragmentRefs": FragmentRefs<"ParentSelectorItemFragment">;
    } | null;
    readonly " $refType": "ParentSelectorFragment";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "ParentSelectorFragment";
};
export type ParentSelectorFragment$data = ParentSelectorFragment;
export type ParentSelectorFragment$key = {
    readonly " $data"?: ParentSelectorFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ParentSelectorFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": "entityId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ParentSelectorFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "parent",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ParentSelectorCollectionFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "parent",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ParentSelectorItemFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = 'ffb57fca9fefb3ffe0833894ddaca08f';
export default node;
