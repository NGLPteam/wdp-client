/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaSelectorDataFragment = {
    readonly entityId?: string | undefined;
    readonly schemaVersion?: {
        readonly name: string;
        readonly number: string;
        readonly slug: string;
    } | undefined;
    readonly " $refType": "SchemaSelectorDataFragment";
};
export type SchemaSelectorDataFragment$data = SchemaSelectorDataFragment;
export type SchemaSelectorDataFragment$key = {
    readonly " $data"?: SchemaSelectorDataFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectorDataFragment">;
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
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = 'f80d9e6a3fa61c8f4f900f3146703343';
export default node;
