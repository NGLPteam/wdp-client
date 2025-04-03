/**
 * @generated SignedSource<<b6fae247fb7806af3edc5f378f037b8f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LayoutHarvestAttemptQuery$variables = {
  slug: string;
};
export type LayoutHarvestAttemptQuery$data = {
  readonly harvestAttempt: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestAttemptLayoutFragment">;
  } | null | undefined;
};
export type LayoutHarvestAttemptQuery = {
  response: LayoutHarvestAttemptQuery$data;
  variables: LayoutHarvestAttemptQuery$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LayoutHarvestAttemptQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestAttempt",
        "kind": "LinkedField",
        "name": "harvestAttempt",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HarvestAttemptLayoutFragment"
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
    "name": "LayoutHarvestAttemptQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestAttempt",
        "kind": "LinkedField",
        "name": "harvestAttempt",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestSource",
            "kind": "LinkedField",
            "name": "harvestSource",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestMapping",
            "kind": "LinkedField",
            "name": "harvestMapping",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bc7b0da85a7780636db35bd85b52b017",
    "id": null,
    "metadata": {},
    "name": "LayoutHarvestAttemptQuery",
    "operationKind": "query",
    "text": "query LayoutHarvestAttemptQuery(\n  $slug: Slug!\n) {\n  harvestAttempt(slug: $slug) {\n    ...HarvestAttemptLayoutFragment\n    id\n  }\n}\n\nfragment HarvestAttemptLayoutFragment on HarvestAttempt {\n  harvestSource {\n    slug\n    name\n    id\n  }\n  harvestMapping {\n    slug\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4c5c90d174c98a049399d9af49bf0012";

export default node;
