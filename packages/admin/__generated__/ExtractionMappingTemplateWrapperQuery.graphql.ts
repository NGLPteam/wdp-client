/**
 * @generated SignedSource<<c02670f9e4692adce8928f71f04a7836>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ExtractionMappingTemplateWrapperQuery$variables = Record<PropertyKey, never>;
export type ExtractionMappingTemplateWrapperQuery$data = {
  readonly harvestExamples: ReadonlyArray<{
    readonly extractionMappingTemplate: string;
    readonly name: string;
  }>;
};
export type ExtractionMappingTemplateWrapperQuery = {
  response: ExtractionMappingTemplateWrapperQuery$data;
  variables: ExtractionMappingTemplateWrapperQuery$variables;
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
    "name": "ExtractionMappingTemplateWrapperQuery",
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
    "name": "ExtractionMappingTemplateWrapperQuery",
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
    "cacheID": "0417cea6dcf559943554388f996d3e67",
    "id": null,
    "metadata": {},
    "name": "ExtractionMappingTemplateWrapperQuery",
    "operationKind": "query",
    "text": "query ExtractionMappingTemplateWrapperQuery {\n  harvestExamples {\n    name\n    extractionMappingTemplate\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d120436a4d897c05772ddead2b7613ee";

export default node;
