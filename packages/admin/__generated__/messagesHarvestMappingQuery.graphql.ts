/**
 * @generated SignedSource<<e79dfe00bb420e2c2fd6587c387ed9c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type messagesHarvestMappingQuery$variables = {
  page: number;
  slug: string;
};
export type messagesHarvestMappingQuery$data = {
  readonly harvestMapping: {
    readonly harvestMessages: {
      readonly " $fragmentSpreads": FragmentRefs<"HarvestMessagesListFragment">;
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
v3 = [
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "HarvestMessageConnection",
            "kind": "LinkedField",
            "name": "harvestMessages",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "HarvestMessagesListFragment"
              }
            ],
            "storageKey": null
          }
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
          {
            "alias": null,
            "args": (v3/*: any*/),
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
                  (v4/*: any*/),
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "tags",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
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
                        "name": "page",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "pageCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "perPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasPreviousPage",
                        "storageKey": null
                      },
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
                ],
                "type": "Paginated",
                "abstractKey": "__isPaginated"
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ecbac4d8236be570ee7a336eb9d34ea0",
    "id": null,
    "metadata": {},
    "name": "messagesHarvestMappingQuery",
    "operationKind": "query",
    "text": "query messagesHarvestMappingQuery(\n  $slug: Slug!\n  $page: Int!\n) {\n  harvestMapping(slug: $slug) {\n    harvestMessages(page: $page, perPage: 20) {\n      ...HarvestMessagesListFragment\n    }\n    id\n  }\n}\n\nfragment HarvestMessageFragment on HarvestMessage {\n  id\n  level\n  message\n  tags\n  createdAt\n}\n\nfragment HarvestMessagesListFragment on HarvestMessageConnection {\n  nodes {\n    ...HarvestMessageFragment\n    id\n  }\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "911923771f133ecf99e2db6d46e1875f";

export default node;
