/**
 * @generated SignedSource<<b3faf35fe62b767d53a78c04b85a4e6f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPermalinksUpdateDrawerQuery$variables = {
  permalinkSlug: string;
};
export type EntityPermalinksUpdateDrawerQuery$data = {
  readonly permalink: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPermalinksUpdateFormFragment">;
  } | null | undefined;
};
export type EntityPermalinksUpdateDrawerQuery = {
  response: EntityPermalinksUpdateDrawerQuery$data;
  variables: EntityPermalinksUpdateDrawerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "permalinkSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "permalinkSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityPermalinksUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Permalink",
        "kind": "LinkedField",
        "name": "permalink",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityPermalinksUpdateFormFragment"
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
    "name": "EntityPermalinksUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Permalink",
        "kind": "LinkedField",
        "name": "permalink",
        "plural": false,
        "selections": [
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
                "type": "Collection",
                "abstractKey": null
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
                "type": "Community",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/)
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
    ]
  },
  "params": {
    "cacheID": "b514539450f2589330fb4b852bf2cdb9",
    "id": null,
    "metadata": {},
    "name": "EntityPermalinksUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query EntityPermalinksUpdateDrawerQuery(\n  $permalinkSlug: Slug!\n) {\n  permalink(slug: $permalinkSlug) {\n    ...EntityPermalinksUpdateFormFragment\n    id\n  }\n}\n\nfragment EntityPermalinksUpdateFormFragment on Permalink {\n  id\n  uri\n  canonical\n  permalinkable {\n    __typename\n    ... on Collection {\n      id\n      title\n    }\n    ... on Item {\n      id\n      title\n    }\n    ... on Community {\n      id\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6a7f3601736b59e62ff6a8d901bd6d3f";

export default node;
