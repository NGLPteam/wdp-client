/**
 * @generated SignedSource<<c517e4412a9392a005888d3658e8e77f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type permalinksManageSlugItemPermalinksQuery$variables = {
  slug: string;
};
export type permalinksManageSlugItemPermalinksQuery$data = {
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPermalinksListFragment">;
  } | null | undefined;
};
export type permalinksManageSlugItemPermalinksQuery = {
  response: permalinksManageSlugItemPermalinksQuery$data;
  variables: permalinksManageSlugItemPermalinksQuery$variables;
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
    "name": "permalinksManageSlugItemPermalinksQuery",
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
    "name": "permalinksManageSlugItemPermalinksQuery",
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
    "cacheID": "9441a1ff468679f6b3efb654f9ef3496",
    "id": null,
    "metadata": {},
    "name": "permalinksManageSlugItemPermalinksQuery",
    "operationKind": "query",
    "text": "query permalinksManageSlugItemPermalinksQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...EntityPermalinksListFragment\n    id\n  }\n}\n\nfragment EntityPermalinksListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    slug\n    permalinks {\n      id\n      slug\n      uri\n      canonical\n    }\n  }\n  ... on Collection {\n    slug\n    permalinks {\n      id\n      slug\n      uri\n      canonical\n    }\n  }\n  ... on Community {\n    slug\n    permalinks {\n      id\n      slug\n      uri\n      canonical\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c7e3a395b46affd5d8d9954f49cf992c";

export default node;
