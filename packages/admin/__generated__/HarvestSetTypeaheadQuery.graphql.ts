/**
 * @generated SignedSource<<cc5114cbdfe19a639457f84b9b5dcaff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HarvestSetTypeaheadQuery$variables = {
  q: string;
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "q"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v2 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": [
    {
      "fields": [
        {
          "kind": "Variable",
          "name": "prefix",
          "variableName": "q"
        }
      ],
      "kind": "ObjectValue",
      "name": "filters"
    },
    {
      "kind": "Literal",
      "name": "page",
      "value": 1
    },
    {
      "kind": "Literal",
      "name": "perPage",
      "value": 50
    }
  ],
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
        (v4/*: any*/),
        (v3/*: any*/),
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HarvestSetTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "HarvestSetTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v5/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a13c46b3660a9f9dc3edfcb55f06a2d8",
    "id": null,
    "metadata": {},
    "name": "HarvestSetTypeaheadQuery",
    "operationKind": "query",
    "text": "query HarvestSetTypeaheadQuery(\n  $slug: Slug!\n  $q: String!\n) {\n  harvestSource(slug: $slug) {\n    identifier\n    harvestSets(filters: {prefix: $q}, page: 1, perPage: 50) {\n      nodes {\n        id\n        identifier\n        name\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8762505df65b6215eee95451593b15ae";

export default node;
