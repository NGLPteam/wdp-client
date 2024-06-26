/**
 * @generated SignedSource<<3a62a382683a2c79c814a9d7a59eddfc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResetOrderingInput = {
  clientMutationId?: string | null | undefined;
  orderingId: string;
};
export type useResetOrderingMutation$variables = {
  input: ResetOrderingInput;
};
export type useResetOrderingMutation$data = {
  readonly resetOrdering: {
    readonly " $fragmentSpreads": FragmentRefs<"useResetOrderingFragment">;
  } | null | undefined;
};
export type useResetOrderingMutation = {
  response: useResetOrderingMutation$data;
  variables: useResetOrderingMutation$variables;
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "destroyed",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "type": "DestroyMutationPayload",
        "abstractKey": "__isDestroyMutationPayload"
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "revoked",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "type": "RevokeAccessPayload",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "disabled",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "type": "DestroyOrderingPayload",
        "abstractKey": null
      }
    ],
    "type": "StandardMutationPayload",
    "abstractKey": "__isStandardMutationPayload"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useResetOrderingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ResetOrderingPayload",
        "kind": "LinkedField",
        "name": "resetOrdering",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "useResetOrderingFragment",
            "selections": (v3/*: any*/),
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
    "name": "useResetOrderingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ResetOrderingPayload",
        "kind": "LinkedField",
        "name": "resetOrdering",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f84c0ab0000e9d4f876ee616d5cc7a4b",
    "id": null,
    "metadata": {},
    "name": "useResetOrderingMutation",
    "operationKind": "mutation",
    "text": "mutation useResetOrderingMutation(\n  $input: ResetOrderingInput!\n) {\n  resetOrdering(input: $input) {\n    ...useResetOrderingFragment\n  }\n}\n\nfragment useResetOrderingFragment on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  ... on DestroyMutationPayload {\n    __isDestroyMutationPayload: __typename\n    destroyed\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on RevokeAccessPayload {\n    revoked\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on DestroyOrderingPayload {\n    disabled\n    globalErrors {\n      message\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ec17ab68a686995b015db5eb1b079001";

export default node;
