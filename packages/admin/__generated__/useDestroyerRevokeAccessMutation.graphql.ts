/**
 * @generated SignedSource<<3087a6330761faffb80d1ca09101059e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RevokeAccessInput = {
  clientMutationId?: string | null;
  entityId: string;
  roleId: string;
  userId: string;
};
export type useDestroyerRevokeAccessMutation$variables = {
  input: RevokeAccessInput;
};
export type useDestroyerRevokeAccessMutation$data = {
  readonly revokeAccess: {
    readonly " $fragmentSpreads": FragmentRefs<"useDestroyerFragment">;
  } | null;
};
export type useDestroyerRevokeAccessMutation = {
  response: useDestroyerRevokeAccessMutation$data;
  variables: useDestroyerRevokeAccessMutation$variables;
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
    "name": "useDestroyerRevokeAccessMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RevokeAccessPayload",
        "kind": "LinkedField",
        "name": "revokeAccess",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "useDestroyerFragment",
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
    "name": "useDestroyerRevokeAccessMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RevokeAccessPayload",
        "kind": "LinkedField",
        "name": "revokeAccess",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bcb412d9c927728439a5bff57016097b",
    "id": null,
    "metadata": {},
    "name": "useDestroyerRevokeAccessMutation",
    "operationKind": "mutation",
    "text": "mutation useDestroyerRevokeAccessMutation(\n  $input: RevokeAccessInput!\n) {\n  revokeAccess(input: $input) {\n    ...useDestroyerFragment\n  }\n}\n\nfragment useDestroyerFragment on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  ... on DestroyMutationPayload {\n    __isDestroyMutationPayload: __typename\n    destroyed\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on RevokeAccessPayload {\n    revoked\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on DestroyOrderingPayload {\n    disabled\n    globalErrors {\n      message\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "14c4544e86d92135c786bd7b9d357d83";

export default node;
