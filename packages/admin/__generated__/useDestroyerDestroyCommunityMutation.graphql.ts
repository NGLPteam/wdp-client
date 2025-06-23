/**
 * @generated SignedSource<<ac720d963da11b5f3ef4f0ba1859298e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DestroyCommunityInput = {
  clientMutationId?: string | null | undefined;
  communityId: string;
};
export type useDestroyerDestroyCommunityMutation$variables = {
  input: DestroyCommunityInput;
};
export type useDestroyerDestroyCommunityMutation$data = {
  readonly destroyCommunity: {
    readonly destroyedId: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"useDestroyerFragment">;
  } | null | undefined;
};
export type useDestroyerDestroyCommunityMutation = {
  response: useDestroyerDestroyCommunityMutation$data;
  variables: useDestroyerDestroyCommunityMutation$variables;
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
  "name": "destroyedId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "destroyed",
  "storageKey": null
},
v4 = {
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
v5 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "revoked",
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "type": "RevokeAccessPayload",
  "abstractKey": null
},
v6 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "disabled",
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "type": "DestroyOrderingPayload",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useDestroyerDestroyCommunityMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyCommunityPayload",
        "kind": "LinkedField",
        "name": "destroyCommunity",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "useDestroyerFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "type": "DestroyMutationPayload",
                    "abstractKey": "__isDestroyMutationPayload"
                  },
                  (v5/*: any*/),
                  (v6/*: any*/)
                ],
                "type": "StandardMutationPayload",
                "abstractKey": "__isStandardMutationPayload"
              }
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
    "name": "useDestroyerDestroyCommunityMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyCommunityPayload",
        "kind": "LinkedField",
        "name": "destroyCommunity",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "destroyedId"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "type": "DestroyMutationPayload",
                "abstractKey": "__isDestroyMutationPayload"
              },
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "type": "StandardMutationPayload",
            "abstractKey": "__isStandardMutationPayload"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4a69143b089d33b8239a294a80b79cbf",
    "id": null,
    "metadata": {},
    "name": "useDestroyerDestroyCommunityMutation",
    "operationKind": "mutation",
    "text": "mutation useDestroyerDestroyCommunityMutation(\n  $input: DestroyCommunityInput!\n) {\n  destroyCommunity(input: $input) {\n    destroyedId\n    ...useDestroyerFragment\n  }\n}\n\nfragment useDestroyerFragment on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  ... on DestroyMutationPayload {\n    __isDestroyMutationPayload: __typename\n    destroyedId\n    destroyed\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on RevokeAccessPayload {\n    revoked\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on DestroyOrderingPayload {\n    disabled\n    globalErrors {\n      message\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "25a7c3b242481af060f6cbb3c288c457";

export default node;
