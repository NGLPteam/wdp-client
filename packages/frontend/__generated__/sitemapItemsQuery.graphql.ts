/**
 * @generated SignedSource<<bcd8b8626e07f139b6530a39195c51f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type sitemapItemsQuery$variables = {
  slug: string;
};
export type sitemapItemsQuery$data = {
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"getEntitySitemapFragment">;
  } | null | undefined;
};
export type sitemapItemsQuery = {
  response: sitemapItemsQuery$data;
  variables: sitemapItemsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "perPage",
    "value": 50
  }
],
v5 = [
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
        "name": "pageCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": (v4/*: any*/),
  "concreteType": "CollectionConnection",
  "kind": "LinkedField",
  "name": "collections",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": "collections(perPage:50)"
},
v7 = {
  "alias": null,
  "args": (v4/*: any*/),
  "concreteType": "ItemConnection",
  "kind": "LinkedField",
  "name": "items",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": "items(perPage:50)"
},
v8 = {
  "kind": "InlineFragment",
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
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/),
        (v6/*: any*/)
      ],
      "type": "Community",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/),
        (v6/*: any*/),
        (v7/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/),
        (v7/*: any*/)
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "sitemapItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "getEntitySitemapFragment",
            "selections": [
              (v8/*: any*/)
            ],
            "args": null,
            "argumentDefinitions": []
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "sitemapItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8debc339792cc8671331acfeef47f01f",
    "id": null,
    "metadata": {},
    "name": "sitemapItemsQuery",
    "operationKind": "query",
    "text": "query sitemapItemsQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...getEntitySitemapFragment\n    id\n  }\n}\n\nfragment getEntitySitemapFragment on AnyEntity {\n  __isAnyEntity: __typename\n  __typename\n  ... on Community {\n    slug\n    updatedAt\n    collections(perPage: 50) {\n      pageInfo {\n        pageCount\n      }\n    }\n  }\n  ... on Collection {\n    slug\n    updatedAt\n    collections(perPage: 50) {\n      pageInfo {\n        pageCount\n      }\n    }\n    items(perPage: 50) {\n      pageInfo {\n        pageCount\n      }\n    }\n  }\n  ... on Item {\n    slug\n    updatedAt\n    items(perPage: 50) {\n      pageInfo {\n        pageCount\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b6928ee2555535583108a5b8144f3dc0";

export default node;
