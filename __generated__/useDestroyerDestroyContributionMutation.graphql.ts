/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DestroyContributionInput = {
    contributionId: string;
    clientMutationId?: string | null;
};
export type useDestroyerDestroyContributionMutationVariables = {
    input: DestroyContributionInput;
};
export type useDestroyerDestroyContributionMutationResponse = {
    readonly destroyContribution: {
        readonly destroyedId: string | null;
        readonly " $fragmentRefs": FragmentRefs<"useDestroyerFragment">;
    } | null;
};
export type useDestroyerDestroyContributionMutation = {
    readonly response: useDestroyerDestroyContributionMutationResponse;
    readonly variables: useDestroyerDestroyContributionMutationVariables;
};



/*
mutation useDestroyerDestroyContributionMutation(
  $input: DestroyContributionInput!
) {
  destroyContribution(input: $input) {
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
    "name": "useDestroyerDestroyContributionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyContributionPayload",
        "kind": "LinkedField",
        "name": "destroyContribution",
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
    "name": "useDestroyerDestroyContributionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyContributionPayload",
        "kind": "LinkedField",
        "name": "destroyContribution",
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
    "cacheID": "b3d315e7f204c5a692b619bf285e328b",
    "id": null,
    "metadata": {},
    "name": "useDestroyerDestroyContributionMutation",
    "operationKind": "mutation",
    "text": "mutation useDestroyerDestroyContributionMutation(\n  $input: DestroyContributionInput!\n) {\n  destroyContribution(input: $input) {\n    destroyedId\n    ...useDestroyerFragment\n  }\n}\n\nfragment useDestroyerFragment on DestroyMutationPayload {\n  __isDestroyMutationPayload: __typename\n  destroyed\n  globalErrors {\n    message\n    type\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bd83d746a16df8fa7965ad8f3cbc717d';
export default node;
