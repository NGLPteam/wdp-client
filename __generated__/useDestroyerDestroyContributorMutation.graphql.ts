/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DestroyContributorInput = {
    contributorId: string;
    clientMutationId?: string | null;
};
export type useDestroyerDestroyContributorMutationVariables = {
    input: DestroyContributorInput;
};
export type useDestroyerDestroyContributorMutationResponse = {
    readonly destroyContributor: {
        readonly destroyedId: string | null;
        readonly " $fragmentRefs": FragmentRefs<"useDestroyerFragment">;
    } | null;
};
export type useDestroyerDestroyContributorMutation = {
    readonly response: useDestroyerDestroyContributorMutationResponse;
    readonly variables: useDestroyerDestroyContributorMutationVariables;
};



/*
mutation useDestroyerDestroyContributorMutation(
  $input: DestroyContributorInput!
) {
  destroyContributor(input: $input) {
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
    "name": "useDestroyerDestroyContributorMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyContributorPayload",
        "kind": "LinkedField",
        "name": "destroyContributor",
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
    "name": "useDestroyerDestroyContributorMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyContributorPayload",
        "kind": "LinkedField",
        "name": "destroyContributor",
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
    "cacheID": "7c25ce0dc091c9718fe33caa8633ff87",
    "id": null,
    "metadata": {},
    "name": "useDestroyerDestroyContributorMutation",
    "operationKind": "mutation",
    "text": "mutation useDestroyerDestroyContributorMutation(\n  $input: DestroyContributorInput!\n) {\n  destroyContributor(input: $input) {\n    destroyedId\n    ...useDestroyerFragment\n  }\n}\n\nfragment useDestroyerFragment on DestroyMutationPayload {\n  __isDestroyMutationPayload: __typename\n  destroyed\n  globalErrors {\n    message\n    type\n  }\n}\n"
  }
};
})();
(node as any).hash = '8ffa39aa65dde067a52bbf0d8dd6bf32';
export default node;
