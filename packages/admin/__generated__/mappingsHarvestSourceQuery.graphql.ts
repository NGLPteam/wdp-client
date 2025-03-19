/**
 * @generated SignedSource<<fbf1211e6876b8bb10e094833895883f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestMappingOrder = "DEFAULT" | "OLDEST" | "RECENT" | "%future added value";
export type mappingsHarvestSourceQuery$variables = {
  order?: HarvestMappingOrder | null | undefined;
  page: number;
  slug: string;
};
export type mappingsHarvestSourceQuery$data = {
  readonly harvestSource: {
    readonly harvestMappings: {
      readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingsListFragment">;
    };
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"HarvestSourceLayoutFragment">;
  } | null | undefined;
};
export type mappingsHarvestSourceQuery = {
  response: mappingsHarvestSourceQuery$data;
  variables: mappingsHarvestSourceQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "order"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "order",
    "variableName": "order"
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
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "mappingsHarvestSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HarvestSourceLayoutFragment"
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "HarvestMappingConnection",
            "kind": "LinkedField",
            "name": "harvestMappings",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "HarvestMappingsListFragment"
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
    "name": "mappingsHarvestSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "HarvestMappingConnection",
            "kind": "LinkedField",
            "name": "harvestMappings",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "HarvestMapping",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HarvestSet",
                    "kind": "LinkedField",
                    "name": "harvestSet",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "targetEntity",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HarvestAttemptConnection",
                    "kind": "LinkedField",
                    "name": "harvestAttempts",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PageInfo",
                        "kind": "LinkedField",
                        "name": "pageInfo",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
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
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Paginated",
                "abstractKey": "__isPaginated"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8886e5623781fd011839e00d616f9988",
    "id": null,
    "metadata": {},
    "name": "mappingsHarvestSourceQuery",
    "operationKind": "query",
    "text": "query mappingsHarvestSourceQuery(\n  $slug: Slug!\n  $order: HarvestMappingOrder\n  $page: Int!\n) {\n  harvestSource(slug: $slug) {\n    id\n    ...HarvestSourceLayoutFragment\n    harvestMappings(order: $order, page: $page, perPage: 20) {\n      ...HarvestMappingsListFragment\n    }\n  }\n}\n\nfragment HarvestMappingsListFragment on HarvestMappingConnection {\n  nodes {\n    id\n    slug\n    harvestSet {\n      name\n      id\n    }\n    targetEntity {\n      __typename\n      title\n      slug\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    harvestAttempts {\n      pageInfo {\n        totalCount\n      }\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment HarvestSourceLayoutFragment on HarvestSource {\n  __typename\n  slug\n  name\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "801d2aebfbba50bb6272d02d2d161e0e";

export default node;
