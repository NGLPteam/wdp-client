/**
 * @generated SignedSource<<1a194ad3b2c257e88ca2550d707ed897>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestSetOrder = "DEFAULT" | "OLDEST" | "RECENT" | "%future added value";
export type mappingsHarvestSourceQuery$variables = {
  order?: HarvestSetOrder | null | undefined;
  page: number;
  slug: string;
};
export type mappingsHarvestSourceQuery$data = {
  readonly harvestSource: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingsListFragment" | "HarvestSourceLayoutFragment">;
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
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HarvestSourceLayoutFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HarvestMappingsListFragment"
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": [
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
            "concreteType": "HarvestSetConnection",
            "kind": "LinkedField",
            "name": "harvestSets",
            "plural": false,
            "selections": [
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
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestMapping",
            "kind": "LinkedField",
            "name": "harvestMappings",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "HarvestSet",
                "kind": "LinkedField",
                "name": "harvestSet",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/)
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
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v6/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
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
    "cacheID": "b953af15ee1d952bf9f79d5d380452f0",
    "id": null,
    "metadata": {},
    "name": "mappingsHarvestSourceQuery",
    "operationKind": "query",
    "text": "query mappingsHarvestSourceQuery(\n  $slug: Slug!\n  $order: HarvestSetOrder\n  $page: Int!\n) {\n  harvestSource(slug: $slug) {\n    ...HarvestSourceLayoutFragment\n    ...HarvestMappingsListFragment\n    id\n  }\n}\n\nfragment HarvestMappingsListDataFragment on HarvestSource {\n  harvestMappings {\n    id\n    harvestSet {\n      name\n      id\n    }\n    targetEntity {\n      __typename\n      title\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment HarvestMappingsListFragment on HarvestSource {\n  id\n  harvestSets(order: $order, page: $page, perPage: 20) {\n    ...ModelListPageFragment\n  }\n  ...HarvestMappingsListDataFragment\n}\n\nfragment HarvestSourceLayoutFragment on HarvestSource {\n  __typename\n  slug\n  name\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "c226932e55954080d9286096e6322e28";

export default node;
