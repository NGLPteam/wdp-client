/**
 * @generated SignedSource<<508569c9f21aefab4ae620d3dc6ec3b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HarvestMessageLevel = "DEBUG" | "ERROR" | "FATAL" | "INFO" | "TRACE" | "WARN" | "%future added value";
export type messagesHarvestSourceQuery$variables = {
  page: number;
  slug: string;
};
export type messagesHarvestSourceQuery$data = {
  readonly harvestSource: {
    readonly harvestMessages: {
      readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly level: HarvestMessageLevel;
        readonly message: string;
      }>;
    };
  } | null | undefined;
};
export type messagesHarvestSourceQuery = {
  response: messagesHarvestSourceQuery$data;
  variables: messagesHarvestSourceQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
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
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "page",
      "variableName": "page"
    },
    {
      "kind": "Literal",
      "name": "perPage",
      "value": 20
    }
  ],
  "concreteType": "HarvestMessageConnection",
  "kind": "LinkedField",
  "name": "harvestMessages",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestMessage",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "level",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
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
    "name": "messagesHarvestSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "messagesHarvestSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5be21f7f9ae1f8440cf1dee6bcf3c1e4",
    "id": null,
    "metadata": {},
    "name": "messagesHarvestSourceQuery",
    "operationKind": "query",
    "text": "query messagesHarvestSourceQuery(\n  $slug: Slug!\n  $page: Int!\n) {\n  harvestSource(slug: $slug) {\n    harvestMessages(page: $page, perPage: 20) {\n      nodes {\n        id\n        level\n        message\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa0155845b9538f669e5acaa03098192";

export default node;
