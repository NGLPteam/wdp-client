/**
 * @generated SignedSource<<b999d96b6d19bfc02e7460f8e513bf6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestAttemptState = "CANCELLED" | "EXECUTING" | "EXTRACTED" | "PENDING" | "SCHEDULED" | "%future added value";
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "%future added value";
export type HarvestScheduleMode = "MANUAL" | "SCHEDULED" | "%future added value";
export type HarvestAttemptFromMappingInput = {
  clientMutationId?: string | null | undefined;
  extractionMappingTemplate: string;
  harvestMappingId: string;
  note?: string | null | undefined;
};
export type HarvestAttemptCreateFormFromMappingMutation$variables = {
  input: HarvestAttemptFromMappingInput;
};
export type HarvestAttemptCreateFormFromMappingMutation$data = {
  readonly harvestAttemptFromMapping: {
    readonly harvestAttempt: {
      readonly beganAt: string | null | undefined;
      readonly currentState: HarvestAttemptState;
      readonly endedAt: string | null | undefined;
      readonly extractionMappingTemplate: string;
      readonly id: string;
      readonly metadataFormat: HarvestMetadataFormat;
      readonly mode: HarvestScheduleMode;
      readonly note: string | null | undefined;
      readonly recordCount: number | null | undefined;
      readonly scheduledAt: string | null | undefined;
      readonly slug: string;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
};
export type HarvestAttemptCreateFormFromMappingMutation = {
  response: HarvestAttemptCreateFormFromMappingMutation$data;
  variables: HarvestAttemptCreateFormFromMappingMutation$variables;
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
  "concreteType": "HarvestAttempt",
  "kind": "LinkedField",
  "name": "harvestAttempt",
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
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentState",
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
      "name": "beganAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "mode",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "scheduledAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "recordCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "note",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extractionMappingTemplate",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
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
    "name": "HarvestAttemptCreateFormFromMappingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestAttemptFromMappingPayload",
        "kind": "LinkedField",
        "name": "harvestAttemptFromMapping",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v3/*: any*/)
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
    "name": "HarvestAttemptCreateFormFromMappingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestAttemptFromMappingPayload",
        "kind": "LinkedField",
        "name": "harvestAttemptFromMapping",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "383a741a29a8ce20040cd3b704c0d6b8",
    "id": null,
    "metadata": {},
    "name": "HarvestAttemptCreateFormFromMappingMutation",
    "operationKind": "mutation",
    "text": "mutation HarvestAttemptCreateFormFromMappingMutation(\n  $input: HarvestAttemptFromMappingInput!\n) {\n  harvestAttemptFromMapping(input: $input) {\n    harvestAttempt {\n      id\n      slug\n      currentState\n      metadataFormat\n      beganAt\n      endedAt\n      mode\n      scheduledAt\n      recordCount\n      note\n      extractionMappingTemplate\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "b3b229e75893aaface7f5dabc6222c19";

export default node;
