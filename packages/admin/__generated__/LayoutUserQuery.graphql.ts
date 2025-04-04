/**
 * @generated SignedSource<<ecd07da1b70ce3469e26528056af8dc8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LayoutUserQuery$variables = {
  slug: string;
};
export type LayoutUserQuery$data = {
  readonly user: {
    readonly " $fragmentSpreads": FragmentRefs<"UserLayoutFragment">;
  } | null | undefined;
};
export type LayoutUserQuery = {
  response: LayoutUserQuery$data;
  variables: LayoutUserQuery$variables;
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LayoutUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserLayoutFragment"
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
    "name": "LayoutUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
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
            "name": "email",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e4a364551db6e9a573bcff184d51d47a",
    "id": null,
    "metadata": {},
    "name": "LayoutUserQuery",
    "operationKind": "query",
    "text": "query LayoutUserQuery(\n  $slug: Slug!\n) {\n  user(slug: $slug) {\n    ...UserLayoutFragment\n    id\n  }\n}\n\nfragment UserLayoutFragment on User {\n  id\n  name\n  email\n}\n"
  }
};
})();

(node as any).hash = "40f2f87e0f587b06d79375ffd9e87461";

export default node;
