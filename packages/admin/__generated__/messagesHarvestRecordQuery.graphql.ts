/**
 * @generated SignedSource<<37b6f72174a4dabb0eee4dba56ab06f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type messagesHarvestRecordQuery$variables = {
  page: number;
  slug: string;
};
export type messagesHarvestRecordQuery$data = {
  readonly harvestRecord: {
    readonly harvestMessages: {
      readonly " $fragmentSpreads": FragmentRefs<"HarvestMessagesListFragment">;
    };
  } | null | undefined;
};
export type messagesHarvestRecordQuery = {
  response: messagesHarvestRecordQuery$data;
  variables: messagesHarvestRecordQuery$variables;
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
    "kind": "Literal",
    "name": "filters",
    "value": {
      "severity": "INFO"
    }
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  },
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "messagesHarvestRecordQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "HarvestRecord",
        "kind": "LinkedField",
        "name": "harvestRecord",
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
    "name": "messagesHarvestRecordQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "HarvestRecord",
        "kind": "LinkedField",
        "name": "harvestRecord",
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HarvestMapping",
                    "kind": "LinkedField",
                    "name": "harvestMapping",
                    "plural": false,
                    "selections": (v5/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HarvestRecord",
                    "kind": "LinkedField",
                    "name": "harvestRecord",
                    "plural": false,
                    "selections": (v5/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HarvestAttempt",
                    "kind": "LinkedField",
                    "name": "harvestAttempt",
                    "plural": false,
                    "selections": (v5/*: any*/),
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
    "cacheID": "cbbb725df0ad6a284e9bda3b24f4b7ab",
    "id": null,
    "metadata": {},
    "name": "messagesHarvestRecordQuery",
    "operationKind": "query",
    "text": "query messagesHarvestRecordQuery(\n  $slug: Slug!\n  $page: Int!\n) {\n  harvestRecord(slug: $slug) {\n    harvestMessages(page: $page, perPage: 20, filters: {severity: INFO}) {\n      ...HarvestMessagesListFragment\n    }\n    id\n  }\n}\n\nfragment HarvestMessageFragment on HarvestMessage {\n  id\n  level\n  message\n  tags\n  createdAt\n  harvestMapping {\n    slug\n    id\n  }\n  harvestRecord {\n    slug\n    id\n  }\n  harvestAttempt {\n    slug\n    id\n  }\n}\n\nfragment HarvestMessagesListFragment on HarvestMessageConnection {\n  nodes {\n    ...HarvestMessageFragment\n    id\n  }\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "e5b72f4e65f9b9f97ef259902c9ebab4";

export default node;
