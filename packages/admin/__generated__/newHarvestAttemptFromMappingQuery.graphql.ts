/**
 * @generated SignedSource<<c244c1f48d4dfafb32f70971f126e413>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "%future added value";
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
  "name": "identifier",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metadataFormat",
  "storageKey": null
},
v7 = {
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
              (v4/*: any*/)
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
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestSource",
            "kind": "LinkedField",
            "name": "harvestSource",
            "plural": false,
            "selections": [
              (v7/*: any*/)
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
              (v5/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestSource",
            "kind": "LinkedField",
            "name": "harvestSource",
            "plural": false,
            "selections": [
              (v7/*: any*/),
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
    "cacheID": "db464edcd6b94a85b788dea9af5a525b",
    "id": null,
    "metadata": {},
    "name": "newHarvestAttemptFromMappingQuery",
    "operationKind": "query",
    "text": "query newHarvestAttemptFromMappingQuery(\n  $slug: Slug!\n) {\n  harvestMapping(slug: $slug) {\n    id\n    extractionMappingTemplate\n    targetEntity {\n      __typename\n      title\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    harvestSet {\n      identifier\n      id\n    }\n    metadataFormat\n    harvestSource {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "42e06b96b224b9a31d5190ae9dc71e25";

export default node;
