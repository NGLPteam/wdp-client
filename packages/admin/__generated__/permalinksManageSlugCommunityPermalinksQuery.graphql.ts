/**
 * @generated SignedSource<<5cbe70ca61dd88e5ddb7214df6a1aad3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type permalinksManageSlugCommunityPermalinksQuery$variables = {
  slug: string;
};
export type permalinksManageSlugCommunityPermalinksQuery$data = {
  readonly community: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPermalinksListFragment">;
  } | null | undefined;
};
export type permalinksManageSlugCommunityPermalinksQuery = {
  response: permalinksManageSlugCommunityPermalinksQuery$data;
  variables: permalinksManageSlugCommunityPermalinksQuery$variables;
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
    "name": "permalinksManageSlugCommunityPermalinksQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
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
    "name": "permalinksManageSlugCommunityPermalinksQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
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
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "066f23b115ca2000357f32ca3c95e214",
    "id": null,
    "metadata": {},
    "name": "permalinksManageSlugCommunityPermalinksQuery",
    "operationKind": "query",
    "text": "query permalinksManageSlugCommunityPermalinksQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    ...EntityPermalinksListFragment\n    id\n  }\n}\n\nfragment EntityPermalinksListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    slug\n    permalinks {\n      id\n      slug\n      uri\n      canonical\n    }\n  }\n  ... on Collection {\n    slug\n    permalinks {\n      id\n      slug\n      uri\n      canonical\n    }\n  }\n  ... on Community {\n    slug\n    permalinks {\n      id\n      slug\n      uri\n      canonical\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8d024259a748c511e5db3428b242f2bb";

export default node;
