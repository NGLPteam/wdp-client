/**
 * @generated SignedSource<<0a190987e65f472fcfd9729d3c09d431>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestSourceEditDrawerQuery$variables = {
  slug: string;
};
export type HarvestSourceEditDrawerQuery$data = {
  readonly harvestSource: {
    readonly id: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"HarvestSourceUpdateFormFragment">;
  } | null | undefined;
};
export type HarvestSourceEditDrawerQuery = {
  response: HarvestSourceEditDrawerQuery$data;
  variables: HarvestSourceEditDrawerQuery$variables;
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
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HarvestSourceEditDrawerQuery",
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
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HarvestSourceUpdateFormFragment"
          }
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
    "name": "HarvestSourceEditDrawerQuery",
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
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "baseURL",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "extractionMappingTemplate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestOptionsMapping",
            "kind": "LinkedField",
            "name": "mappingOptions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "autoCreateVolumesAndIssues",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "linkIdentifiersGlobally",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "useMetadataMappings",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestOptionsRead",
            "kind": "LinkedField",
            "name": "readOptions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "maxRecords",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cd702f621bdcd999cce6ff823cb59ecd",
    "id": null,
    "metadata": {},
    "name": "HarvestSourceEditDrawerQuery",
    "operationKind": "query",
    "text": "query HarvestSourceEditDrawerQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    id\n    name\n    ...HarvestSourceUpdateFormFragment\n  }\n}\n\nfragment HarvestSourceUpdateFormFieldsFragment on HarvestSource {\n  name\n  baseURL\n  description\n  extractionMappingTemplate\n  mappingOptions {\n    autoCreateVolumesAndIssues\n    linkIdentifiersGlobally\n    useMetadataMappings\n  }\n  readOptions {\n    maxRecords\n  }\n}\n\nfragment HarvestSourceUpdateFormFragment on HarvestSource {\n  id\n  ...HarvestSourceUpdateFormFieldsFragment\n}\n"
  }
};
})();

(node as any).hash = "56e7a2b60853e552f51419d9ef089962";

export default node;
