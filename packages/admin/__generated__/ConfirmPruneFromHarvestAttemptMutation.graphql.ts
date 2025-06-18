/**
 * @generated SignedSource<<bc1fac4a9b91eadffac87e9d31f87355>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type HarvestPruneMode = "EVERYTHING" | "UNMODIFIED" | "%future added value";
export type HarvestAttemptPruneEntitiesInput = {
  clientMutationId?: string | null | undefined;
  harvestAttemptId: string;
  mode: HarvestPruneMode;
};
export type ConfirmPruneFromHarvestAttemptMutation$variables = {
  input: HarvestAttemptPruneEntitiesInput;
};
export type ConfirmPruneFromHarvestAttemptMutation$data = {
  readonly harvestAttemptPruneEntities: {
    readonly attributeErrors: ReadonlyArray<{
      readonly messages: ReadonlyArray<string>;
      readonly path: string;
      readonly type: string;
    }>;
    readonly globalErrors: ReadonlyArray<{
      readonly message: string;
      readonly type: string;
    }>;
    readonly harvestAttempt: {
      readonly id: string;
    } | null | undefined;
  } | null | undefined;
};
export type ConfirmPruneFromHarvestAttemptMutation = {
  response: ConfirmPruneFromHarvestAttemptMutation$data;
  variables: ConfirmPruneFromHarvestAttemptMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "HarvestAttemptPruneEntitiesPayload",
    "kind": "LinkedField",
    "name": "harvestAttemptPruneEntities",
    "plural": false,
    "selections": [
      {
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
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
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
            "name": "messages",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "path",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConfirmPruneFromHarvestAttemptMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConfirmPruneFromHarvestAttemptMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b66c92f2aa811d2a11f2e4236a35b9b7",
    "id": null,
    "metadata": {},
    "name": "ConfirmPruneFromHarvestAttemptMutation",
    "operationKind": "mutation",
    "text": "mutation ConfirmPruneFromHarvestAttemptMutation(\n  $input: HarvestAttemptPruneEntitiesInput!\n) {\n  harvestAttemptPruneEntities(input: $input) {\n    harvestAttempt {\n      id\n    }\n    globalErrors {\n      message\n      type\n    }\n    attributeErrors {\n      messages\n      path\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1974072af9186cdaf22dcba2cde2f4f2";

export default node;
