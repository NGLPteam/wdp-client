/**
 * @generated SignedSource<<4815a6374151a3dd672928725157b251>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HarvestSetTypeaheadQuery$variables = {
  slug: string;
};
export type HarvestSetTypeaheadQuery$data = {
  readonly harvestSource: {
    readonly harvestSets: {
      readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
      }>;
    };
    readonly identifier: string;
  } | null | undefined;
};
export type HarvestSetTypeaheadQuery = {
  response: HarvestSetTypeaheadQuery$data;
  variables: HarvestSetTypeaheadQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "HarvestSetConnection",
  "kind": "LinkedField",
  "name": "harvestSets",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestSet",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v3/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HarvestSetTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HarvestSetTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4415dcb544a9522ab0db4d1cdfccbf01",
    "id": null,
    "metadata": {},
    "name": "HarvestSetTypeaheadQuery",
    "operationKind": "query",
    "text": "query HarvestSetTypeaheadQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    identifier\n    harvestSets {\n      nodes {\n        id\n        identifier\n        name\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1ce9d33973b40f44eaee3fbfb88a2d00";

export default node;
