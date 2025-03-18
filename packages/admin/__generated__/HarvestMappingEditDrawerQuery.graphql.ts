/**
 * @generated SignedSource<<a5cc55f4023bf04289014185a036bafb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HarvestMappingEditDrawerQuery$variables = {
  slug: string;
};
export type HarvestMappingEditDrawerQuery$data = {
  readonly harvestSource: {
    readonly harvestMappings: ReadonlyArray<{
      readonly id: string;
    }>;
  } | null | undefined;
};
export type HarvestMappingEditDrawerQuery = {
  response: HarvestMappingEditDrawerQuery$data;
  variables: HarvestMappingEditDrawerQuery$variables;
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
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "HarvestMapping",
  "kind": "LinkedField",
  "name": "harvestMappings",
  "plural": true,
  "selections": [
    (v2/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HarvestMappingEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
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
    "name": "HarvestMappingEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5212b95cc11f398f916bb3997409885b",
    "id": null,
    "metadata": {},
    "name": "HarvestMappingEditDrawerQuery",
    "operationKind": "query",
    "text": "query HarvestMappingEditDrawerQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    harvestMappings {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "bdc025a8f854978fed26926cc32d831e";

export default node;
