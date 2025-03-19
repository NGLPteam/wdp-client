/**
 * @generated SignedSource<<f3fb4c62a37eb7af79eeaf198227ee26>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type layoutHarvestMappingQuery$variables = {
  slug: string;
};
export type layoutHarvestMappingQuery$data = {
  readonly harvestMapping: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingLayoutFragment">;
  } | null | undefined;
};
export type layoutHarvestMappingQuery = {
  response: layoutHarvestMappingQuery$data;
  variables: layoutHarvestMappingQuery$variables;
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
    "name": "layoutHarvestMappingQuery",
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
    "name": "layoutHarvestMappingQuery",
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
    "cacheID": "273a4458716094a30a4990432eea252c",
    "id": null,
    "metadata": {},
    "name": "layoutHarvestMappingQuery",
    "operationKind": "query",
    "text": "query layoutHarvestMappingQuery(\n  $slug: Slug!\n) {\n  harvestMapping(slug: $slug) {\n    ...HarvestMappingLayoutFragment\n    id\n  }\n}\n\nfragment HarvestMappingLayoutFragment on HarvestMapping {\n  harvestSource {\n    slug\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b316397074ee8b7c0d51fee428d39127";

export default node;
