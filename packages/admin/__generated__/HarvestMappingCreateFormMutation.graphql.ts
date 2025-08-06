/**
 * @generated SignedSource<<2af75dca4bd1e0a64afb7402646c2f31>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "PRESSBOOKS" | "%future added value";
export type HarvestMappingCreateInput = {
  clientMutationId?: string | null | undefined;
  extractionMappingTemplate: string;
  frequencyExpression?: string | null | undefined;
  harvestSetId?: string | null | undefined;
  harvestSourceId: string;
  mappingOptions?: HarvestOptionsMappingInput | null | undefined;
  metadataFormat: HarvestMetadataFormat;
  readOptions?: HarvestOptionsReadInput | null | undefined;
  targetEntityId: string;
};
export type HarvestOptionsMappingInput = {
  autoCreateVolumesAndIssues?: boolean | null | undefined;
  linkIdentifiersGlobally?: boolean | null | undefined;
  useMetadataMappings?: boolean | null | undefined;
};
export type HarvestOptionsReadInput = {
  maxRecords?: number | null | undefined;
};
export type HarvestMappingCreateFormMutation$variables = {
  input: HarvestMappingCreateInput;
};
export type HarvestMappingCreateFormMutation$data = {
  readonly harvestMappingCreate: {
    readonly harvestMapping: {
      readonly extractionMappingTemplate: string;
      readonly frequencyExpression: string | null | undefined;
      readonly harvestSet: {
        readonly id: string;
      } | null | undefined;
      readonly mappingOptions: {
        readonly autoCreateVolumesAndIssues: boolean;
        readonly linkIdentifiersGlobally: boolean;
        readonly useMetadataMappings: boolean;
      };
      readonly metadataFormat: HarvestMetadataFormat;
      readonly readOptions: {
        readonly maxRecords: number;
      };
      readonly slug: string;
      readonly targetEntity: {
        readonly slug: string;
        readonly title: string;
      };
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
};
export type HarvestMappingCreateFormMutation = {
  response: HarvestMappingCreateFormMutation$data;
  variables: HarvestMappingCreateFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "HarvestSet",
  "kind": "LinkedField",
  "name": "harvestSet",
  "plural": false,
  "selections": (v5/*: any*/),
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
  "name": "extractionMappingTemplate",
  "storageKey": null
},
v9 = {
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
v10 = {
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
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "frequencyExpression",
  "storageKey": null
},
v12 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MutationAttributeError",
      "kind": "LinkedField",
      "name": "attributeErrors",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "path",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "messages",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MutationGlobalError",
      "kind": "LinkedField",
      "name": "globalErrors",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "StandardMutationPayload",
  "abstractKey": "__isStandardMutationPayload"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HarvestMappingCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestMappingCreatePayload",
        "kind": "LinkedField",
        "name": "harvestMappingCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
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
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v12/*: any*/)
            ],
            "args": null,
            "argumentDefinitions": []
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HarvestMappingCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestMappingCreatePayload",
        "kind": "LinkedField",
        "name": "harvestMappingCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": (v5/*: any*/),
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              },
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v12/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "aa6867974897fbe73764fcb1d3844933",
    "id": null,
    "metadata": {},
    "name": "HarvestMappingCreateFormMutation",
    "operationKind": "mutation",
    "text": "mutation HarvestMappingCreateFormMutation(\n  $input: HarvestMappingCreateInput!\n) {\n  harvestMappingCreate(input: $input) {\n    harvestMapping {\n      slug\n      targetEntity {\n        __typename\n        slug\n        title\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      harvestSet {\n        id\n      }\n      metadataFormat\n      extractionMappingTemplate\n      mappingOptions {\n        autoCreateVolumesAndIssues\n        linkIdentifiersGlobally\n        useMetadataMappings\n      }\n      readOptions {\n        maxRecords\n      }\n      frequencyExpression\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "5378f0209737b6273ee6f97854a01089";

export default node;
