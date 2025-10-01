/**
 * @generated SignedSource<<9f57596ea36ba84f3caca38b9359c325>>
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
    readonly id: string;
    readonly uri: string;
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "uri",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
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
          },
          (v2/*: any*/),
          (v3/*: any*/)
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
          (v3/*: any*/),
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
                "selections": (v4/*: any*/),
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "Item",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
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
    "cacheID": "fd1489f6afdcaff835496ea495b843d3",
    "id": null,
    "metadata": {},
    "name": "EntityPermalinksUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query EntityPermalinksUpdateDrawerQuery(\n  $permalinkSlug: Slug!\n) {\n  permalink(slug: $permalinkSlug) {\n    ...EntityPermalinksUpdateFormFragment\n    id\n    uri\n  }\n}\n\nfragment EntityPermalinksUpdateFormFragment on Permalink {\n  id\n  uri\n  canonical\n  permalinkable {\n    __typename\n    ... on Collection {\n      id\n      slug\n      title\n    }\n    ... on Item {\n      id\n      slug\n      title\n    }\n    ... on Community {\n      id\n      slug\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "75a95728d215bde8507c544c615c4d62";

export default node;
