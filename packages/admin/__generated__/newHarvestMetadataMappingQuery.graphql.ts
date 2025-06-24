/**
 * @generated SignedSource<<96550fac6c470e1688c85430d7aaafae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type newHarvestMetadataMappingQuery$variables = {
  slug: string;
};
export type newHarvestMetadataMappingQuery$data = {
  readonly harvestSource: {
    readonly id: string;
    readonly name: string;
    readonly slug: string;
  } | null | undefined;
};
export type newHarvestMetadataMappingQuery = {
  response: newHarvestMetadataMappingQuery$data;
  variables: newHarvestMetadataMappingQuery$variables;
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
    "name": "newHarvestMetadataMappingQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "newHarvestMetadataMappingQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d13aa8efaf93de5561f0d6161b80e618",
    "id": null,
    "metadata": {},
    "name": "newHarvestMetadataMappingQuery",
    "operationKind": "query",
    "text": "query newHarvestMetadataMappingQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    id\n    slug\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "ad001c324329755cc3f18eba0b23d99e";

export default node;
