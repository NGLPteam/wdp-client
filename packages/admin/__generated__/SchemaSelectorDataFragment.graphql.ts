/**
 * @generated SignedSource<<17b029e65563c670dab51e8ecc94f314>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaSelectorDataFragment$data = {
  readonly entityId?: string;
  readonly schemaVersion?: {
    readonly name: string;
    readonly number: string;
    readonly slug: string;
  };
  readonly " $fragmentType": "SchemaSelectorDataFragment";
};
export type SchemaSelectorDataFragment$key = {
  readonly " $data"?: SchemaSelectorDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaSelectorDataFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
    "concreteType": "SchemaVersion",
    "kind": "LinkedField",
    "name": "schemaVersion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "number",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "slug",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaSelectorDataFragment",
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

(node as any).hash = "092aecf6b45afedface560e9e65a5620";

export default node;
