/**
 * @generated SignedSource<<68b64b634056aa9fa10942c7d173e442>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestMetadataFormat = "JATS" | "METS" | "MODS" | "OAIDC" | "%future added value";
export type HarvestProtocol = "OAI" | "%future added value";
export type HarvestSourceCreateInput = {
  baseURL: string;
  clientMutationId?: string | null | undefined;
  description?: string | null | undefined;
  identifier: string;
  mappingOptions?: HarvestOptionsMappingInput | null | undefined;
  metadataFormat: HarvestMetadataFormat;
  name: string;
  protocol?: HarvestProtocol;
  readOptions?: HarvestOptionsReadInput | null | undefined;
};
export type HarvestOptionsMappingInput = {
  autoCreateVolumesAndIssues?: boolean | null | undefined;
  linkIdentifiersGlobally?: boolean | null | undefined;
  useMetadataMappings?: boolean | null | undefined;
};
export type HarvestOptionsReadInput = {
  maxRecords?: number | null | undefined;
};
export type HarvestSourceCreateFormMutation$variables = {
  input: HarvestSourceCreateInput;
};
export type HarvestSourceCreateFormMutation$data = {
  readonly harvestSourceCreate: {
    readonly harvestSource: {
      readonly baseURL: string;
      readonly description: string | null | undefined;
      readonly identifier: string;
      readonly mappingOptions: {
        readonly autoCreateVolumesAndIssues: boolean;
        readonly linkIdentifiersGlobally: boolean;
        readonly useMetadataMappings: boolean;
      };
      readonly metadataFormat: HarvestMetadataFormat;
      readonly name: string;
      readonly protocol: HarvestProtocol;
      readonly readOptions: {
        readonly maxRecords: number;
      };
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
};
export type HarvestSourceCreateFormMutation = {
  response: HarvestSourceCreateFormMutation$data;
  variables: HarvestSourceCreateFormMutation$variables;
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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "baseURL",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
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
  "name": "protocol",
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
v9 = {
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
v10 = {
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
    "name": "HarvestSourceCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSourceCreatePayload",
        "kind": "LinkedField",
        "name": "harvestSourceCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestSource",
            "kind": "LinkedField",
            "name": "harvestSource",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v10/*: any*/)
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
    "name": "HarvestSourceCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSourceCreatePayload",
        "kind": "LinkedField",
        "name": "harvestSourceCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HarvestSource",
            "kind": "LinkedField",
            "name": "harvestSource",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "173803877e84b7904171dad2e871e118",
    "id": null,
    "metadata": {},
    "name": "HarvestSourceCreateFormMutation",
    "operationKind": "mutation",
    "text": "mutation HarvestSourceCreateFormMutation(\n  $input: HarvestSourceCreateInput!\n) {\n  harvestSourceCreate(input: $input) {\n    harvestSource {\n      name\n      baseURL\n      description\n      identifier\n      protocol\n      metadataFormat\n      mappingOptions {\n        autoCreateVolumesAndIssues\n        linkIdentifiersGlobally\n        useMetadataMappings\n      }\n      readOptions {\n        maxRecords\n      }\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "7935a0266fe15d3a32f69b69157c92d9";

export default node;
