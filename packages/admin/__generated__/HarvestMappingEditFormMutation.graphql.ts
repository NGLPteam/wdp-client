/**
 * @generated SignedSource<<b385e3897516eb94bff1bb9119d94011>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestMappingUpdateInput = {
  clientMutationId?: string | null | undefined;
  extractionMappingTemplate: string;
  frequencyExpression?: string | null | undefined;
  harvestMappingId: string;
  mappingOptions?: HarvestOptionsMappingInput | null | undefined;
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
export type HarvestMappingEditFormMutation$variables = {
  input: HarvestMappingUpdateInput;
};
export type HarvestMappingEditFormMutation$data = {
  readonly harvestMappingUpdate: {
    readonly harvestMapping: {
      readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingEditFormFieldsFragment">;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
};
export type HarvestMappingEditFormMutation = {
  response: HarvestMappingEditFormMutation$data;
  variables: HarvestMappingEditFormMutation$variables;
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HarvestMappingEditFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestMappingUpdatePayload",
        "kind": "LinkedField",
        "name": "harvestMappingUpdate",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "HarvestMappingEditFormFieldsFragment"
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v2/*: any*/)
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
    "name": "HarvestMappingEditFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestMappingUpdatePayload",
        "kind": "LinkedField",
        "name": "harvestMappingUpdate",
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "slug",
                    "storageKey": null
                  },
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
                "selections": (v4/*: any*/),
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
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "28ea66c34c27eecd3fa1e76e54b34b11",
    "id": null,
    "metadata": {},
    "name": "HarvestMappingEditFormMutation",
    "operationKind": "mutation",
    "text": "mutation HarvestMappingEditFormMutation(\n  $input: HarvestMappingUpdateInput!\n) {\n  harvestMappingUpdate(input: $input) {\n    harvestMapping {\n      ...HarvestMappingEditFormFieldsFragment\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment HarvestMappingEditFormFieldsFragment on HarvestMapping {\n  targetEntity {\n    __typename\n    slug\n    title\n    ... on Community {\n      id\n    }\n    ... on Collection {\n      id\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  harvestSet {\n    id\n  }\n  metadataFormat\n  extractionMappingTemplate\n  mappingOptions {\n    autoCreateVolumesAndIssues\n    linkIdentifiersGlobally\n    useMetadataMappings\n  }\n  readOptions {\n    maxRecords\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "b5b78a8d90cc2ed09ba5ad9c16cef9a8";

export default node;
