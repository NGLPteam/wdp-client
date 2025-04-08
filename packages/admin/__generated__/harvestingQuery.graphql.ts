/**
 * @generated SignedSource<<b77cec4249230fe304546b9c47bc1b28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestSourceOrder = "DEFAULT" | "OLDEST" | "RECENT" | "%future added value";
export type harvestingQuery$variables = {
  order?: HarvestSourceOrder | null | undefined;
  page: number;
};
export type harvestingQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"HarvestSourcesListFragment">;
};
export type harvestingQuery = {
  response: harvestingQuery$data;
  variables: harvestingQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      (v1/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "harvestingQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "HarvestSourcesListFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "harvestingQuery",
    "selections": [
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
        "concreteType": "HarvestSourceConnection",
        "kind": "LinkedField",
        "name": "harvestSources",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestSource",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "identifier",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "slug",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "metadataFormat",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "baseURL",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "HarvestSetConnection",
                "kind": "LinkedField",
                "name": "harvestSets",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "HarvestRecordConnection",
                "kind": "LinkedField",
                "name": "harvestRecords",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
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
                  (v1/*: any*/)
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
    ]
  },
  "params": {
    "cacheID": "f930de7b1aefa2cc1fdfcbf4695697f4",
    "id": null,
    "metadata": {},
    "name": "harvestingQuery",
    "operationKind": "query",
    "text": "query harvestingQuery(\n  $order: HarvestSourceOrder\n  $page: Int!\n) {\n  ...HarvestSourcesListFragment\n}\n\nfragment HarvestSourcesListFragment on Query {\n  harvestSources(order: $order, page: $page, perPage: 20) {\n    nodes {\n      id\n      name\n      identifier\n      slug\n      metadataFormat\n      baseURL\n      harvestSets {\n        pageInfo {\n          totalCount\n        }\n      }\n      harvestRecords {\n        pageInfo {\n          totalCount\n        }\n      }\n      description\n    }\n    ...ModelListPageFragment\n  }\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "be2925fa4f3f545d4877b404b9ea753d";

export default node;
