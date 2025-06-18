/**
 * @generated SignedSource<<f009b5b81b746812daaf81706abda86e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type HarvestPruneMode = "EVERYTHING" | "UNMODIFIED" | "%future added value";
export type HarvestSourcePruneEntitiesInput = {
  clientMutationId?: string | null | undefined;
  harvestSourceId: string;
  mode: HarvestPruneMode;
};
export type ConfirmPruneFromHarvestSourceMutation$variables = {
  input: HarvestSourcePruneEntitiesInput;
};
export type ConfirmPruneFromHarvestSourceMutation$data = {
  readonly harvestSourcePruneEntities: {
    readonly attributeErrors: ReadonlyArray<{
      readonly messages: ReadonlyArray<string>;
      readonly path: string;
      readonly type: string;
    }>;
    readonly globalErrors: ReadonlyArray<{
      readonly message: string;
      readonly type: string;
    }>;
    readonly harvestSource: {
      readonly id: string;
    } | null | undefined;
  } | null | undefined;
};
export type ConfirmPruneFromHarvestSourceMutation = {
  response: ConfirmPruneFromHarvestSourceMutation$data;
  variables: ConfirmPruneFromHarvestSourceMutation$variables;
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
    "concreteType": "HarvestSourcePruneEntitiesPayload",
    "kind": "LinkedField",
    "name": "harvestSourcePruneEntities",
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
    "name": "ConfirmPruneFromHarvestSourceMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConfirmPruneFromHarvestSourceMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "baae106aba959d78a6a8cf8ce877e419",
    "id": null,
    "metadata": {},
    "name": "ConfirmPruneFromHarvestSourceMutation",
    "operationKind": "mutation",
    "text": "mutation ConfirmPruneFromHarvestSourceMutation(\n  $input: HarvestSourcePruneEntitiesInput!\n) {\n  harvestSourcePruneEntities(input: $input) {\n    harvestSource {\n      id\n    }\n    globalErrors {\n      message\n      type\n    }\n    attributeErrors {\n      messages\n      path\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7e222cfd189d126698e11f7d3041aab6";

export default node;
