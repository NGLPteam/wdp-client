/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TeasersFragment = {
    readonly updatedAt: string;
    readonly schema: {
        readonly identifier: string;
    };
    readonly papers: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly series: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly " $refType": "TeasersFragment";
};
export type TeasersFragment$data = TeasersFragment;
export type TeasersFragment$key = {
    readonly " $data"?: TeasersFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TeasersFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalCount",
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
  "name": "TeasersFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": "schema",
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
          "name": "identifier",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "papers",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:paper"
        }
      ],
      "concreteType": "ItemConnection",
      "kind": "LinkedField",
      "name": "items",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "items(schema:\"nglp:paper\")"
    },
    {
      "alias": "series",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:series"
        }
      ],
      "concreteType": "CollectionConnection",
      "kind": "LinkedField",
      "name": "collections",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "collections(schema:\"nglp:series\")"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
})();
(node as any).hash = '385d07b37a823da3342eab8bd30cb34f';
export default node;
