/**
 * @generated SignedSource<<e09f81556b2f77edf58e282213b0cf34>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DestroyContributorInput = {
  clientMutationId?: string | null | undefined;
  contributorId: string;
};
export type useDestroyerDestroyContributorMutation$variables = {
  input: DestroyContributorInput;
};
export type useDestroyerDestroyContributorMutation$data = {
  readonly destroyContributor: {
    readonly destroyedId: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"useDestroyerFragment">;
  } | null | undefined;
};
export type useDestroyerDestroyContributorMutation = {
  response: useDestroyerDestroyContributorMutation$data;
  variables: useDestroyerDestroyContributorMutation$variables;
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
v4 = {
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
        (v3/*: any*/)
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
        (v3/*: any*/)
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
        (v3/*: any*/)
      ],
      "type": "DestroyOrderingPayload",
      "abstractKey": null
    }
  ],
  "type": "StandardMutationPayload",
  "abstractKey": "__isStandardMutationPayload"
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
              (v4/*: any*/)
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
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "988c32217e1433989538b4c4f6c6a5c0",
    "id": null,
    "metadata": {},
    "name": "useDestroyerDestroyContributorMutation",
    "operationKind": "mutation",
    "text": "mutation useDestroyerDestroyContributorMutation(\n  $input: DestroyContributorInput!\n) {\n  destroyContributor(input: $input) {\n    destroyedId\n    ...useDestroyerFragment\n  }\n}\n\nfragment useDestroyerFragment on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  ... on DestroyMutationPayload {\n    __isDestroyMutationPayload: __typename\n    destroyed\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on RevokeAccessPayload {\n    revoked\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on DestroyOrderingPayload {\n    disabled\n    globalErrors {\n      message\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8ffa39aa65dde067a52bbf0d8dd6bf32";

export default node;
