/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionAddFormFragment = {
    readonly schemaVersionOptions: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    }>;
    readonly collection: {
        readonly id: string;
    } | null;
    readonly community: {
        readonly id: string;
    } | null;
    readonly " $refType": "CollectionAddFormFragment";
};
export type CollectionAddFormFragment$data = CollectionAddFormFragment;
export type CollectionAddFormFragment$key = {
    readonly " $data"?: CollectionAddFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"CollectionAddFormFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "parentSlug"
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
      "name": "parentSlug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionAddFormFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "kind",
          "value": "COLLECTION"
        }
      ],
      "concreteType": "SchemaVersionOption",
      "kind": "LinkedField",
      "name": "schemaVersionOptions",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": "schemaVersionOptions(kind:\"COLLECTION\")"
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
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "Community",
      "kind": "LinkedField",
      "name": "community",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '3b7762fc2602d03173c1f1f88d5599e4';
export default node;
