/**
 * @generated SignedSource<<29b03a3d38c3795d9a6479dd93d49476>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type layoutHarvestSourceQuery$variables = {
  slug: string;
};
export type layoutHarvestSourceQuery$data = {
  readonly harvestSource: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestSourceLayoutFragment">;
  } | null | undefined;
};
export type layoutHarvestSourceQuery = {
  response: layoutHarvestSourceQuery$data;
  variables: layoutHarvestSourceQuery$variables;
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
    "name": "layoutHarvestSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HarvestSourceLayoutFragment"
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
    "name": "layoutHarvestSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
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
            "name": "name",
            "storageKey": null
          },
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
    "cacheID": "35c632627a5b31f66fa8363fac9ad168",
    "id": null,
    "metadata": {},
    "name": "layoutHarvestSourceQuery",
    "operationKind": "query",
    "text": "query layoutHarvestSourceQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    ...HarvestSourceLayoutFragment\n    id\n  }\n}\n\nfragment HarvestSourceLayoutFragment on HarvestSource {\n  __typename\n  slug\n  name\n}\n"
  }
};
})();

(node as any).hash = "2c3e99c0f2b1b572a68f802d74f89b09";

export default node;
