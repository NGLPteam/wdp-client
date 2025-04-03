/**
 * @generated SignedSource<<81ae5fe3fab1f37aa083ecd0bdefac11>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type detailsHarvestSourceQuery$variables = {
  slug: string;
};
export type detailsHarvestSourceQuery$data = {
  readonly harvestSource: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestSourceUpdateFormFragment">;
  } | null | undefined;
};
export type detailsHarvestSourceQuery = {
  response: detailsHarvestSourceQuery$data;
  variables: detailsHarvestSourceQuery$variables;
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "detailsHarvestSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
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
    "name": "detailsHarvestSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
            "name": "name",
            "storageKey": null
          },
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
            "kind": "ScalarField",
            "name": "protocol",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "metadataFormat",
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
    "cacheID": "d5ed312fe59a7a023c49efbbf92cac7a",
    "id": null,
    "metadata": {},
    "name": "detailsHarvestSourceQuery",
    "operationKind": "query",
    "text": "query detailsHarvestSourceQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    ...HarvestSourceUpdateFormFragment\n    id\n  }\n}\n\nfragment HarvestSourceUpdateFormFieldsFragment on HarvestSource {\n  name\n  baseURL\n  description\n  extractionMappingTemplate\n  protocol\n  metadataFormat\n  mappingOptions {\n    autoCreateVolumesAndIssues\n    linkIdentifiersGlobally\n    useMetadataMappings\n  }\n  readOptions {\n    maxRecords\n  }\n}\n\nfragment HarvestSourceUpdateFormFragment on HarvestSource {\n  id\n  ...HarvestSourceUpdateFormFieldsFragment\n}\n"
  }
};
})();

(node as any).hash = "99df494a2fccf1b061ccbed39b941dcf";

export default node;
