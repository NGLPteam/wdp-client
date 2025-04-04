/**
 * @generated SignedSource<<2a1acbf3f9d607e891221c397a31dc0c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type newHarvestMappingQuery$variables = {
  slug: string;
};
export type newHarvestMappingQuery$data = {
  readonly harvestSource: {
    readonly id: string;
    readonly name: string;
    readonly slug: string;
  } | null | undefined;
};
export type newHarvestMappingQuery = {
  response: newHarvestMappingQuery$data;
  variables: newHarvestMappingQuery$variables;
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
    "concreteType": "HarvestSource",
    "kind": "LinkedField",
    "name": "harvestSource",
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
        "name": "slug",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
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
    "name": "newHarvestMappingQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "newHarvestMappingQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d0b3a180c3018f009477618e4b0d5e20",
    "id": null,
    "metadata": {},
    "name": "newHarvestMappingQuery",
    "operationKind": "query",
    "text": "query newHarvestMappingQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    id\n    slug\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "1f234b8dcea3f913a0858e824b89d370";

export default node;
