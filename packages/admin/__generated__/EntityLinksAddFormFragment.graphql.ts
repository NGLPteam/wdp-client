/**
 * @generated SignedSource<<c58af76e6e6d5ece117c5ee591a66e0b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityLinksAddFormFragment$data = {
  readonly id?: string;
  readonly slug?: string;
  readonly title?: string;
  readonly " $fragmentType": "EntityLinksAddFormFragment";
};
export type EntityLinksAddFormFragment$key = {
  readonly " $data"?: EntityLinksAddFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityLinksAddFormFragment">;
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
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityLinksAddFormFragment",
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
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "c39b23ed5fb12039b9bd72f94c490d96";

export default node;
