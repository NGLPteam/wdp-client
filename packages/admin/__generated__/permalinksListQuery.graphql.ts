/**
 * @generated SignedSource<<a186ca04b052fca21668bd8073f369d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PermalinkOrder = "DEFAULT" | "OLDEST" | "RECENT" | "%future added value";
export type permalinksListQuery$variables = {
  order?: PermalinkOrder | null | undefined;
  page: number;
};
export type permalinksListQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"InstancePermalinksListFragment">;
};
export type permalinksListQuery = {
  response: permalinksListQuery$data;
  variables: permalinksListQuery$variables;
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
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "permalinksListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "InstancePermalinksListFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "permalinksListQuery",
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
            "value": 30
          }
        ],
        "concreteType": "PermalinkConnection",
        "kind": "LinkedField",
        "name": "permalinks",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Permalink",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "uri",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "canonical",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "kind",
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
                "concreteType": null,
                "kind": "LinkedField",
                "name": "permalinkable",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v3/*: any*/),
                    "type": "Item",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v3/*: any*/),
                    "type": "Collection",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v3/*: any*/),
                    "type": "Community",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v1/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
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
      }
    ]
  },
  "params": {
    "cacheID": "effe15c0e3f245bf13b49bfd4002d299",
    "id": null,
    "metadata": {},
    "name": "permalinksListQuery",
    "operationKind": "query",
    "text": "query permalinksListQuery(\n  $order: PermalinkOrder\n  $page: Int!\n) {\n  ...InstancePermalinksListFragment\n}\n\nfragment InstancePermalinksListFragment on Query {\n  permalinks(order: $order, page: $page, perPage: 30) {\n    nodes {\n      id\n      slug\n      uri\n      canonical\n      kind\n      createdAt\n      permalinkable {\n        __typename\n        ... on Item {\n          title\n          slug\n        }\n        ... on Collection {\n          title\n          slug\n        }\n        ... on Community {\n          title\n          slug\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n    ...ModelListPageFragment\n  }\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "b8671936764cc41d5bd1edc2054bb543";

export default node;
