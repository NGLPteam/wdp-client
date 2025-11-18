/**
 * @generated SignedSource<<d25c1f79bed6305e0edbcca0437e09e5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type permalinksManageSlugCollectionPermalinksQuery$variables = {
  slug: string;
};
export type permalinksManageSlugCollectionPermalinksQuery$data = {
  readonly collection: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPermalinksListFragment">;
  } | null | undefined;
};
export type permalinksManageSlugCollectionPermalinksQuery = {
  response: permalinksManageSlugCollectionPermalinksQuery$data;
  variables: permalinksManageSlugCollectionPermalinksQuery$variables;
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
  "name": "id",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Permalink",
    "kind": "LinkedField",
    "name": "permalinks",
    "plural": true,
    "selections": [
      (v3/*: any*/),
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "permalinksManageSlugCollectionPermalinksQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityPermalinksListFragment"
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
    "name": "permalinksManageSlugCollectionPermalinksQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "Item",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "Community",
                "abstractKey": null
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8992dea17e26ffd0bdfce25df66ab658",
    "id": null,
    "metadata": {},
    "name": "permalinksManageSlugCollectionPermalinksQuery",
    "operationKind": "query",
    "text": "query permalinksManageSlugCollectionPermalinksQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    ...EntityPermalinksListFragment\n    id\n  }\n}\n\nfragment EntityPermalinksListFragment on Entity {\n  __isEntity: __typename\n  ... on Item {\n    slug\n    permalinks {\n      id\n      slug\n      uri\n      canonical\n    }\n  }\n  ... on Collection {\n    slug\n    permalinks {\n      id\n      slug\n      uri\n      canonical\n    }\n  }\n  ... on Community {\n    slug\n    permalinks {\n      id\n      slug\n      uri\n      canonical\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7a32952623b1cbda6013114758b351e4";

export default node;
