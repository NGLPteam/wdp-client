/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemAddFormFragment = {
    readonly item: {
        readonly id: string;
    } | null;
    readonly collection: {
        readonly id: string;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectFragment">;
    readonly " $refType": "ItemAddFormFragment";
};
export type ItemAddFormFragment$data = ItemAddFormFragment;
export type ItemAddFormFragment$key = {
    readonly " $data"?: ItemAddFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemAddFormFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "entitySlug"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "entitySlug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemAddFormFragment",
  "selections": [
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "item",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaSelectFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '9bf90a2b44cd59a533480fdcf96e1eed';
export default node;
