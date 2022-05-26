/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SeriesTeasersFragment = {
    readonly updatedAt: string;
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
    readonly " $refType": "SeriesTeasersFragment";
};
export type SeriesTeasersFragment$data = SeriesTeasersFragment;
export type SeriesTeasersFragment$key = {
    readonly " $data"?: SeriesTeasersFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SeriesTeasersFragment">;
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
  "name": "SeriesTeasersFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
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
(node as any).hash = 'cb4e55361b9c9306f268d16a0f20baa1';
export default node;
