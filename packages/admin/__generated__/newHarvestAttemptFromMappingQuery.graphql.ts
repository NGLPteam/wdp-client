/**
 * @generated SignedSource<<4632564f3c35b34f59aff52a4694a312>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "PRESSBOOKS" | "%future added value";
export type HarvestTargetKind = "COLLECTION" | "COMMUNITY" | "%future added value";
export type newHarvestAttemptFromMappingQuery$variables = {
  slug: string;
};
export type newHarvestAttemptFromMappingQuery$data = {
  readonly harvestMapping: {
    readonly extractionMappingTemplate: string;
    readonly harvestSet: {
      readonly identifier: string;
    } | null | undefined;
    readonly harvestSource: {
      readonly name: string;
    };
    readonly id: string;
    readonly metadataFormat: HarvestMetadataFormat;
    readonly targetEntity: {
      readonly harvestTargetKind: HarvestTargetKind;
      readonly title: string;
    };
  } | null | undefined;
};
export type newHarvestAttemptFromMappingQuery = {
  response: newHarvestAttemptFromMappingQuery$data;
  variables: newHarvestAttemptFromMappingQuery$variables;
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
  "name": "extractionMappingTemplate",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "harvestTargetKind",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metadataFormat",
  "storageKey": null
},
v8 = {
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
    "name": "newHarvestAttemptFromMappingQuery",
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
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "targetEntity",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/)
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
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestSource",
            "kind": "LinkedField",
            "name": "harvestSource",
            "plural": false,
            "selections": [
              (v8/*: any*/)
            ],
            "storageKey": null
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
    "name": "newHarvestAttemptFromMappingQuery",
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
          (v3/*: any*/),
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
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/)
                ],
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
              (v6/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestSource",
            "kind": "LinkedField",
            "name": "harvestSource",
            "plural": false,
            "selections": [
              (v8/*: any*/),
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
    "cacheID": "9f69aa0f81bdeb2f7e423f7e5bfa505c",
    "id": null,
    "metadata": {},
    "name": "newHarvestAttemptFromMappingQuery",
    "operationKind": "query",
    "text": "query newHarvestAttemptFromMappingQuery(\n  $slug: Slug!\n) {\n  harvestMapping(slug: $slug) {\n    id\n    extractionMappingTemplate\n    targetEntity {\n      __typename\n      title\n      harvestTargetKind\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    harvestSet {\n      identifier\n      id\n    }\n    metadataFormat\n    harvestSource {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "92bca2d4c41e58c5720483208d493fe4";

export default node;
