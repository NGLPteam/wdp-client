/**
 * @generated SignedSource<<5ae60639501346732d6e958b8e0155e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LayoutHarvestSourceQuery$variables = {
  slug: string;
};
export type LayoutHarvestSourceQuery$data = {
  readonly harvestSource: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestSourceLayoutFragment">;
  } | null | undefined;
};
export type LayoutHarvestSourceQuery = {
  response: LayoutHarvestSourceQuery$data;
  variables: LayoutHarvestSourceQuery$variables;
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
    "name": "LayoutHarvestSourceQuery",
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
    "name": "LayoutHarvestSourceQuery",
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
    "cacheID": "ca7001c068dce6bbb78c254a33f98371",
    "id": null,
    "metadata": {},
    "name": "LayoutHarvestSourceQuery",
    "operationKind": "query",
    "text": "query LayoutHarvestSourceQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    ...HarvestSourceLayoutFragment\n    id\n  }\n}\n\nfragment HarvestSourceLayoutFragment on HarvestSource {\n  __typename\n  slug\n  name\n  id\n}\n"
  }
};
})();

(node as any).hash = "93bdba7aef4bad7cf22a7d85583fb1b9";

export default node;
