/**
 * @generated SignedSource<<3eab188dcfc103074480b816909633ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ExtractionMappingTemplateWrapperSourceQuery$variables = {
  slug: string;
};
export type ExtractionMappingTemplateWrapperSourceQuery$data = {
  readonly harvestSource: {
    readonly extractionMappingTemplate: string;
  } | null | undefined;
};
export type ExtractionMappingTemplateWrapperSourceQuery = {
  response: ExtractionMappingTemplateWrapperSourceQuery$data;
  variables: ExtractionMappingTemplateWrapperSourceQuery$variables;
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
    "name": "ExtractionMappingTemplateWrapperSourceQuery",
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
    "name": "ExtractionMappingTemplateWrapperSourceQuery",
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
    "cacheID": "f77e5beb09c166f1030458091796ea6f",
    "id": null,
    "metadata": {},
    "name": "ExtractionMappingTemplateWrapperSourceQuery",
    "operationKind": "query",
    "text": "query ExtractionMappingTemplateWrapperSourceQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    extractionMappingTemplate\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "aba2ad7c7832c55f3852c95e9bccc3a3";

export default node;
