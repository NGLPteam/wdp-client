/**
 * @generated SignedSource<<c5c63cb0d99fa7731085b90b1b90ebe9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pageItemTemplateQuery$variables = {
  slug: string;
};
export type pageItemTemplateQuery$data = {
  readonly item: {
    readonly __typename: "Item";
  } | null | undefined;
};
export type pageItemTemplateQuery = {
  response: pageItemTemplateQuery$data;
  variables: pageItemTemplateQuery$variables;
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
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pageItemTemplateQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "pageItemTemplateQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "cacheID": "14b217cb6c0480093b9fe0243c977a47",
    "id": null,
    "metadata": {},
    "name": "pageItemTemplateQuery",
    "operationKind": "query",
    "text": "query pageItemTemplateQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "518a3e68c76dacc86f09a747c4c177d7";

export default node;
