/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityOrderingAddFormFragment = {
    readonly collection: {
        readonly id: string;
        readonly schemaRanks: ReadonlyArray<{
            readonly name: string;
            readonly namespace: string;
            readonly identifier: string;
        }>;
    } | null;
    readonly item: {
        readonly id: string;
        readonly schemaRanks: ReadonlyArray<{
            readonly name: string;
            readonly namespace: string;
            readonly identifier: string;
        }>;
    } | null;
    readonly " $refType": "EntityOrderingAddFormFragment";
};
export type EntityOrderingAddFormFragment$data = EntityOrderingAddFormFragment;
export type EntityOrderingAddFormFragment$key = {
    readonly " $data"?: EntityOrderingAddFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingAddFormFragment">;
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
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "HierarchicalSchemaRank",
    "kind": "LinkedField",
    "name": "schemaRanks",
    "plural": true,
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
        "name": "namespace",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "identifier",
        "storageKey": null
      }
    ],
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
  "name": "EntityOrderingAddFormFragment",
  "selections": [
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
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "item",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '8672bb27edaf4d98b2c1c97b3ec1df83';
export default node;
