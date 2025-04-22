/**
 * @generated SignedSource<<195d2ef963a28cd333a6202c7efb0825>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestMessageLevel = "DEBUG" | "ERROR" | "FATAL" | "INFO" | "TRACE" | "WARN" | "%future added value";
export type messagesHarvestAttemptQuery$variables = {
  page: number;
  severity: HarvestMessageLevel;
  slug: string;
};
export type messagesHarvestAttemptQuery$data = {
  readonly harvestAttempt: {
    readonly harvestMessages: {
      readonly " $fragmentSpreads": FragmentRefs<"HarvestMessagesListFragment">;
    };
  } | null | undefined;
};
export type messagesHarvestAttemptQuery = {
  response: messagesHarvestAttemptQuery$data;
  variables: messagesHarvestAttemptQuery$variables;
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
  "name": "severity"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v3 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v4 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "severity",
        "variableName": "severity"
      }
    ],
    "kind": "ObjectValue",
    "name": "filters"
  },
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
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  },
  (v5/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "messagesHarvestAttemptQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "HarvestAttempt",
        "kind": "LinkedField",
        "name": "harvestAttempt",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
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
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "messagesHarvestAttemptQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "HarvestAttempt",
        "kind": "LinkedField",
        "name": "harvestAttempt",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
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
                  (v5/*: any*/),
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HarvestMapping",
                    "kind": "LinkedField",
                    "name": "harvestMapping",
                    "plural": false,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HarvestRecord",
                    "kind": "LinkedField",
                    "name": "harvestRecord",
                    "plural": false,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HarvestAttempt",
                    "kind": "LinkedField",
                    "name": "harvestAttempt",
                    "plural": false,
                    "selections": (v6/*: any*/),
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
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "43b399e0e571a053fbaca230056e45f7",
    "id": null,
    "metadata": {},
    "name": "messagesHarvestAttemptQuery",
    "operationKind": "query",
    "text": "query messagesHarvestAttemptQuery(\n  $slug: Slug!\n  $page: Int!\n  $severity: HarvestMessageLevel!\n) {\n  harvestAttempt(slug: $slug) {\n    harvestMessages(page: $page, perPage: 20, filters: {severity: $severity}) {\n      ...HarvestMessagesListFragment\n    }\n    id\n  }\n}\n\nfragment HarvestMessageFragment on HarvestMessage {\n  id\n  level\n  message\n  tags\n  createdAt\n  harvestMapping {\n    slug\n    id\n  }\n  harvestRecord {\n    slug\n    id\n  }\n  harvestAttempt {\n    slug\n    id\n  }\n}\n\nfragment HarvestMessagesListFragment on HarvestMessageConnection {\n  nodes {\n    ...HarvestMessageFragment\n    id\n  }\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "385a34aa31fda29ea7cf55b27f630213";

export default node;
