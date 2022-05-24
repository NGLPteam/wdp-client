/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ParentSelectorFragment = {
    readonly __typename: "Collection";
    readonly entityId: string;
    readonly parent: {
        readonly id?: string | undefined;
        readonly slug?: string | undefined;
        readonly title?: string | undefined;
    } | null;
    readonly " $refType": "ParentSelectorFragment";
} | {
    readonly __typename: "Item";
    readonly entityId: string;
    readonly parent: {
        readonly id?: string | undefined;
        readonly slug?: string | undefined;
        readonly title?: string | undefined;
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
},
v2 = [
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
    "name": "slug",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  }
],
v3 = {
  "kind": "InlineFragment",
  "selections": (v2/*: any*/),
  "type": "Collection",
  "abstractKey": null
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
            (v3/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": (v2/*: any*/),
              "type": "Community",
              "abstractKey": null
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
            (v3/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": (v2/*: any*/),
              "type": "Item",
              "abstractKey": null
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
(node as any).hash = '4fa46e3627b1dbeef36c146d167521a3';
export default node;
