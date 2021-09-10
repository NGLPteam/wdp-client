/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DestroyCommunityInput = {
    communityId: string;
    clientMutationId?: string | null;
};
export type useDestroyerDestroyCommunityMutationVariables = {
    input: DestroyCommunityInput;
};
export type useDestroyerDestroyCommunityMutationResponse = {
    readonly destroyCommunity: {
        readonly destroyedId: string | null;
        readonly " $fragmentRefs": FragmentRefs<"useDestroyerFragment">;
    } | null;
};
export type useDestroyerDestroyCommunityMutation = {
    readonly response: useDestroyerDestroyCommunityMutationResponse;
    readonly variables: useDestroyerDestroyCommunityMutationVariables;
};



/*
mutation useDestroyerDestroyCommunityMutation(
  $input: DestroyCommunityInput!
) {
  destroyCommunity(input: $input) {
    destroyedId
    ...useDestroyerFragment
  }
}

fragment useDestroyerFragment on DestroyMutationPayload {
  __isDestroyMutationPayload: __typename
  destroyed
  globalErrors {
    message
    type
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
  "kind": "ScalarField",
  "name": "destroyedId",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "destroyed",
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "DestroyMutationPayload",
  "abstractKey": "__isDestroyMutationPayload"
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
              (v3/*: any*/)
            ]
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
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "abb2ba7ddb7395490a9b6367b49576eb",
    "id": null,
    "metadata": {},
    "name": "useDestroyerDestroyCommunityMutation",
    "operationKind": "mutation",
    "text": "mutation useDestroyerDestroyCommunityMutation(\n  $input: DestroyCommunityInput!\n) {\n  destroyCommunity(input: $input) {\n    destroyedId\n    ...useDestroyerFragment\n  }\n}\n\nfragment useDestroyerFragment on DestroyMutationPayload {\n  __isDestroyMutationPayload: __typename\n  destroyed\n  globalErrors {\n    message\n    type\n  }\n}\n"
  }
};
})();
(node as any).hash = '25a7c3b242481af060f6cbb3c288c457';
export default node;
