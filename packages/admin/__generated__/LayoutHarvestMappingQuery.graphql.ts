/**
 * @generated SignedSource<<7010c0a4078d68c35875255fda78a212>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LayoutHarvestMappingQuery$variables = {
  slug: string;
};
export type LayoutHarvestMappingQuery$data = {
  readonly harvestMapping: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingLayoutFragment">;
  } | null | undefined;
};
export type LayoutHarvestMappingQuery = {
  response: LayoutHarvestMappingQuery$data;
  variables: LayoutHarvestMappingQuery$variables;
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LayoutHarvestMappingQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestMapping",
        "kind": "LinkedField",
        "name": "harvestMapping",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HarvestMappingLayoutFragment"
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
    "name": "LayoutHarvestMappingQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestMapping",
        "kind": "LinkedField",
        "name": "harvestMapping",
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
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "43e4fcc2ece44011024932365fa663db",
    "id": null,
    "metadata": {},
    "name": "LayoutHarvestMappingQuery",
    "operationKind": "query",
    "text": "query LayoutHarvestMappingQuery(\n  $slug: Slug!\n) {\n  harvestMapping(slug: $slug) {\n    ...HarvestMappingLayoutFragment\n    id\n  }\n}\n\nfragment HarvestMappingLayoutFragment on HarvestMapping {\n  harvestSource {\n    slug\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "7ddbc21c667b6e043598621be1969477";

export default node;
