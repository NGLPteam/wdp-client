/**
 * @generated SignedSource<<6eb691245e2d7886e10b1f8622c36ea4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HarvestMessageLevel = "DEBUG" | "ERROR" | "FATAL" | "INFO" | "TRACE" | "WARN" | "%future added value";
export type messagesHarvestMappingQuery$variables = {
  page: number;
  slug: string;
};
export type messagesHarvestMappingQuery$data = {
  readonly harvestMapping: {
    readonly harvestMessages: {
      readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly level: HarvestMessageLevel;
        readonly message: string;
      }>;
    };
  } | null | undefined;
};
export type messagesHarvestMappingQuery = {
  response: messagesHarvestMappingQuery$data;
  variables: messagesHarvestMappingQuery$variables;
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
    "name": "messagesHarvestMappingQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "HarvestMapping",
        "kind": "LinkedField",
        "name": "harvestMapping",
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
    "name": "messagesHarvestMappingQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "HarvestMapping",
        "kind": "LinkedField",
        "name": "harvestMapping",
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
    "cacheID": "ce230bdc9285e567ae4550c38a5aaad6",
    "id": null,
    "metadata": {},
    "name": "messagesHarvestMappingQuery",
    "operationKind": "query",
    "text": "query messagesHarvestMappingQuery(\n  $slug: Slug!\n  $page: Int!\n) {\n  harvestMapping(slug: $slug) {\n    harvestMessages(page: $page, perPage: 20) {\n      nodes {\n        id\n        level\n        message\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "3b3f0bac5c8f972d125d8cceabbac741";

export default node;
