/**
 * @generated SignedSource<<ef6940a3b6a924d644e16dbf1879971e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementAddFormFragment$data = {
  readonly id?: string;
  readonly " $fragmentType": "EntityAnnouncementAddFormFragment";
};
export type EntityAnnouncementAddFormFragment$key = {
  readonly " $data"?: EntityAnnouncementAddFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementAddFormFragment">;
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
  "name": "EntityAnnouncementAddFormFragment",
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

(node as any).hash = "705b4eea3455aed49bad65f914bca4af";

export default node;
