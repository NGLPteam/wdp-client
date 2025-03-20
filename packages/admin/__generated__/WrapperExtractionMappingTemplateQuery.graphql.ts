/**
 * @generated SignedSource<<cfd9f08f06595849a4eebc3b30496fba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type WrapperExtractionMappingTemplateQuery$variables = Record<PropertyKey, never>;
export type WrapperExtractionMappingTemplateQuery$data = {
  readonly harvestExamples: ReadonlyArray<{
    readonly extractionMappingTemplate: string;
    readonly name: string;
  }>;
};
export type WrapperExtractionMappingTemplateQuery = {
  response: WrapperExtractionMappingTemplateQuery$data;
  variables: WrapperExtractionMappingTemplateQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "extractionMappingTemplate",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "WrapperExtractionMappingTemplateQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HarvestExample",
        "kind": "LinkedField",
        "name": "harvestExamples",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "WrapperExtractionMappingTemplateQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HarvestExample",
        "kind": "LinkedField",
        "name": "harvestExamples",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
    "cacheID": "65386d0fa273f64ba5a1c3f3bf002c00",
    "id": null,
    "metadata": {},
    "name": "WrapperExtractionMappingTemplateQuery",
    "operationKind": "query",
    "text": "query WrapperExtractionMappingTemplateQuery {\n  harvestExamples {\n    name\n    extractionMappingTemplate\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e73978fbd3dd5541c71afa19d97e8b2e";

export default node;
