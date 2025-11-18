/**
 * @generated SignedSource<<9cff5ec323d3af0ab8b32c5c410f9c45>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPageAddFormFragment$data = {
  readonly id?: string;
  readonly " $fragmentType": "EntityPageAddFormFragment";
};
export type EntityPageAddFormFragment$key = {
  readonly " $data"?: EntityPageAddFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityPageAddFormFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityPageAddFormFragment",
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
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "2a0d71a655e3dbf8d5375cb0eca365ce";

export default node;
