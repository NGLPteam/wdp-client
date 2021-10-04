/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DestroyOrderingInput = {
    orderingId: string;
    clientMutationId?: string | null;
};
export type useDestroyerDestroyOrderingMutationVariables = {
    input: DestroyOrderingInput;
};
export type useDestroyerDestroyOrderingMutationResponse = {
    readonly destroyOrdering: {
        readonly destroyedId: string | null;
        readonly disabled: boolean | null;
        readonly " $fragmentRefs": FragmentRefs<"useDestroyerFragment">;
    } | null;
};
export type useDestroyerDestroyOrderingMutation = {
    readonly response: useDestroyerDestroyOrderingMutationResponse;
    readonly variables: useDestroyerDestroyOrderingMutationVariables;
};



/*
mutation useDestroyerDestroyOrderingMutation(
  $input: DestroyOrderingInput!
) {
  destroyOrdering(input: $input) {
    destroyedId
    disabled
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "disabled",
  "storageKey": null
},
v4 = {
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
    "name": "useDestroyerDestroyOrderingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyOrderingPayload",
        "kind": "LinkedField",
        "name": "destroyOrdering",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "useDestroyerFragment",
            "selections": [
              (v4/*: any*/)
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
    "name": "useDestroyerDestroyOrderingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyOrderingPayload",
        "kind": "LinkedField",
        "name": "destroyOrdering",
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
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "547b182f42df0d4a45a8f46188bdcafb",
    "id": null,
    "metadata": {},
    "name": "useDestroyerDestroyOrderingMutation",
    "operationKind": "mutation",
    "text": "mutation useDestroyerDestroyOrderingMutation(\n  $input: DestroyOrderingInput!\n) {\n  destroyOrdering(input: $input) {\n    destroyedId\n    disabled\n    ...useDestroyerFragment\n  }\n}\n\nfragment useDestroyerFragment on DestroyMutationPayload {\n  __isDestroyMutationPayload: __typename\n  destroyed\n  globalErrors {\n    message\n    type\n  }\n}\n"
  }
};
})();
(node as any).hash = '427c5932664e4053737cc00a286161f0';
export default node;
