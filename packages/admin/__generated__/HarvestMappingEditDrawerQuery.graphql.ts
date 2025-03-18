/**
 * @generated SignedSource<<d484748b0ce1ff3b1c00f5bf8155ee10>>
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
  readonly harvestMapping: {
    readonly id: string;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "slug",
        "variableName": "slug"
      }
    ],
    "concreteType": "HarvestMapping",
    "kind": "LinkedField",
    "name": "harvestMapping",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HarvestMappingEditDrawerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HarvestMappingEditDrawerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5926de5b81ba2356ea54b94b29e6ab32",
    "id": null,
    "metadata": {},
    "name": "HarvestMappingEditDrawerQuery",
    "operationKind": "query",
    "text": "query HarvestMappingEditDrawerQuery(\n  $slug: Slug!\n) {\n  harvestMapping(slug: $slug) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "66a88b5cb7bd7879d207cdfeba5e07ee";

export default node;
