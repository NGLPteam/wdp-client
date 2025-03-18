/**
 * @generated SignedSource<<bc25d8cccfac359e247cc9dc37449058>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ExtractionMappingTemplateInputSourceQuery$variables = {
  slug: string;
};
export type ExtractionMappingTemplateInputSourceQuery$data = {
  readonly harvestSource: {
    readonly extractionMappingTemplate: string;
  } | null | undefined;
};
export type ExtractionMappingTemplateInputSourceQuery = {
  response: ExtractionMappingTemplateInputSourceQuery$data;
  variables: ExtractionMappingTemplateInputSourceQuery$variables;
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
  "name": "extractionMappingTemplate",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ExtractionMappingTemplateInputSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "ExtractionMappingTemplateInputSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6c177a72694daf499c63209e51cdfc84",
    "id": null,
    "metadata": {},
    "name": "ExtractionMappingTemplateInputSourceQuery",
    "operationKind": "query",
    "text": "query ExtractionMappingTemplateInputSourceQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    extractionMappingTemplate\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f4170655075d7b32a375b85050b6122d";

export default node;
