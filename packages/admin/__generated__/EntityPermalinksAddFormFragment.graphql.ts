/**
 * @generated SignedSource<<d531b113833e765ad07739ce58fa0661>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPermalinksAddFormFragment$data = {
  readonly id?: string;
  readonly slug?: string;
  readonly title?: string;
  readonly " $fragmentType": "EntityPermalinksAddFormFragment";
};
export type EntityPermalinksAddFormFragment$key = {
  readonly " $data"?: EntityPermalinksAddFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityPermalinksAddFormFragment">;
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
  "name": "EntityPermalinksAddFormFragment",
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
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Community",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "1a29db41441d3bcc81a5b1a6c459d76e";

export default node;
