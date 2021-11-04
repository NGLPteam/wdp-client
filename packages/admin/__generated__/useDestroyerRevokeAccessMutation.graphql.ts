/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RevokeAccessInput = {
    entityId: string;
    roleId: string;
    userId: string;
    clientMutationId?: string | null | undefined;
};
export type useDestroyerRevokeAccessMutationVariables = {
    input: RevokeAccessInput;
};
export type useDestroyerRevokeAccessMutationResponse = {
    readonly revokeAccess: {
        readonly " $fragmentRefs": FragmentRefs<"useDestroyerFragment">;
    } | null;
};
export type useDestroyerRevokeAccessMutation = {
    readonly response: useDestroyerRevokeAccessMutationResponse;
    readonly variables: useDestroyerRevokeAccessMutationVariables;
};



/*
mutation useDestroyerRevokeAccessMutation(
  $input: RevokeAccessInput!
) {
  revokeAccess(input: $input) {
    ...useDestroyerFragment
  }
}

fragment useDestroyerFragment on StandardMutationPayload {
  __isStandardMutationPayload: __typename
  ... on DestroyMutationPayload {
    __isDestroyMutationPayload: __typename
    destroyed
    globalErrors {
      message
      type
    }
  }
  ... on RevokeAccessPayload {
    revoked
    globalErrors {
      message
      type
    }
  }
  ... on DestroyOrderingPayload {
    disabled
    globalErrors {
      message
      type
    }
  }
}
*/

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
            "selections": (v3/*: any*/)
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
(node as any).hash = '14c4544e86d92135c786bd7b9d357d83';
export default node;
