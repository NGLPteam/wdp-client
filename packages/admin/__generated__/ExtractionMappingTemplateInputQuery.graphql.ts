/**
 * @generated SignedSource<<be1d88831bf1097fa5c432f9b3f5fcdf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ExtractionMappingTemplateInputQuery$variables = Record<PropertyKey, never>;
export type ExtractionMappingTemplateInputQuery$data = {
  readonly harvestExamples: ReadonlyArray<{
    readonly extractionMappingTemplate: string;
    readonly name: string;
  }>;
};
export type ExtractionMappingTemplateInputQuery = {
  response: ExtractionMappingTemplateInputQuery$data;
  variables: ExtractionMappingTemplateInputQuery$variables;
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
    "name": "ExtractionMappingTemplateInputQuery",
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
    "name": "ExtractionMappingTemplateInputQuery",
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
    "cacheID": "1c107efcc7f85209592518d9e6e29300",
    "id": null,
    "metadata": {},
    "name": "ExtractionMappingTemplateInputQuery",
    "operationKind": "query",
    "text": "query ExtractionMappingTemplateInputQuery {\n  harvestExamples {\n    name\n    extractionMappingTemplate\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "dd50c7c9093c740a71c5f681ccf97b24";

export default node;
