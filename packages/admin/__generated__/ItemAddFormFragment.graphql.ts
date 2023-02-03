/**
 * @generated SignedSource<<0fb5f49554f05d960bd2cb00bba71278>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemAddFormFragment$data = {
  readonly collection: {
    readonly id: string;
  } | null;
  readonly item: {
    readonly id: string;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaSelectFragment">;
  readonly " $fragmentType": "ItemAddFormFragment";
};
export type ItemAddFormFragment$key = {
  readonly " $data"?: ItemAddFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemAddFormFragment">;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaSelectFragment"
    },
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "9bf90a2b44cd59a533480fdcf96e1eed";

export default node;
