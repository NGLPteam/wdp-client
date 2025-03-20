/**
 * @generated SignedSource<<febd517dc5cd8bff8df56b1883924e72>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type WrapperExtractionMappingTemplateSourceQuery$variables = {
  slug: string;
};
export type WrapperExtractionMappingTemplateSourceQuery$data = {
  readonly harvestSource: {
    readonly extractionMappingTemplate: string;
  } | null | undefined;
};
export type WrapperExtractionMappingTemplateSourceQuery = {
  response: WrapperExtractionMappingTemplateSourceQuery$data;
  variables: WrapperExtractionMappingTemplateSourceQuery$variables;
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
    "name": "WrapperExtractionMappingTemplateSourceQuery",
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
    "name": "WrapperExtractionMappingTemplateSourceQuery",
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
    "cacheID": "cef000ccf173dfd3e0021300b84d51f1",
    "id": null,
    "metadata": {},
    "name": "WrapperExtractionMappingTemplateSourceQuery",
    "operationKind": "query",
    "text": "query WrapperExtractionMappingTemplateSourceQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    extractionMappingTemplate\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0b7e6d13a77d8e5d5d752e0c3cf1cb73";

export default node;
