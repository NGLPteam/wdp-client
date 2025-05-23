/**
 * @generated SignedSource<<18e761aa9d4bf8384dc339faf189e90b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type detailsHarvestMappingQuery$variables = {
  slug: string;
};
export type detailsHarvestMappingQuery$data = {
  readonly harvestMapping: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingEditFormFragment">;
  } | null | undefined;
};
export type detailsHarvestMappingQuery = {
  response: detailsHarvestMappingQuery$data;
  variables: detailsHarvestMappingQuery$variables;
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
  "name": "slug",
  "storageKey": null
},
v4 = [
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "detailsHarvestMappingQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestMapping",
        "kind": "LinkedField",
        "name": "harvestMapping",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HarvestMappingEditFormFragment"
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
    "name": "detailsHarvestMappingQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestMapping",
        "kind": "LinkedField",
        "name": "harvestMapping",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "targetEntity",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "Community",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "Node",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestSet",
            "kind": "LinkedField",
            "name": "harvestSet",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "identifier",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "frequencyExpression",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastScheduledAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "scheduleChangedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestSource",
            "kind": "LinkedField",
            "name": "harvestSource",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f3ef772e05a1f4e1666cdf2b228507c5",
    "id": null,
    "metadata": {},
    "name": "detailsHarvestMappingQuery",
    "operationKind": "query",
    "text": "query detailsHarvestMappingQuery(\n  $slug: Slug!\n) {\n  harvestMapping(slug: $slug) {\n    ...HarvestMappingEditFormFragment\n    id\n  }\n}\n\nfragment HarvestMappingEditFormFieldsFragment on HarvestMapping {\n  targetEntity {\n    __typename\n    slug\n    title\n    ... on Community {\n      id\n    }\n    ... on Collection {\n      id\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  harvestSet {\n    identifier\n    id\n  }\n  metadataFormat\n  extractionMappingTemplate\n  mappingOptions {\n    autoCreateVolumesAndIssues\n    linkIdentifiersGlobally\n    useMetadataMappings\n  }\n  readOptions {\n    maxRecords\n  }\n  frequencyExpression\n  lastScheduledAt\n  scheduleChangedAt\n  harvestSource {\n    slug\n    id\n  }\n}\n\nfragment HarvestMappingEditFormFragment on HarvestMapping {\n  id\n  ...HarvestMappingEditFormFieldsFragment\n}\n"
  }
};
})();

(node as any).hash = "824b823b835f79a2e31960e37e3e2b1a";

export default node;
