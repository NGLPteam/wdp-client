/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UpsertContributionInput = {
    contributableId: string;
    contributorId: string;
    role?: string | null;
    metadata?: ContributionMetadataInput | null;
    clientMutationId?: string | null;
};
export type ContributionMetadataInput = {
    title?: string | null;
    affiliation?: string | null;
    displayName?: string | null;
    location?: string | null;
};
export type ContributionCreateFormMutationVariables = {
    input: UpsertContributionInput;
};
export type ContributionCreateFormMutationResponse = {
    readonly upsertContribution: {
        readonly contribution: {
            readonly role?: string | null;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type ContributionCreateFormMutation = {
    readonly response: ContributionCreateFormMutationResponse;
    readonly variables: ContributionCreateFormMutationVariables;
};



/*
mutation ContributionCreateFormMutation(
  $input: UpsertContributionInput!
) {
  upsertContribution(input: $input) {
    contribution {
      __typename
      ... on CollectionContribution {
        role
      }
      ... on ItemContribution {
        role
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    ...MutationForm_mutationErrors
  }
}

fragment MutationForm_mutationErrors on StandardMutationPayload {
  __isStandardMutationPayload: __typename
  attributeErrors {
    path
    type
    messages
  }
  globalErrors {
    message
  }
  errors {
    message
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
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "role",
    "storageKey": null
  }
],
v3 = {
  "kind": "InlineFragment",
  "selections": (v2/*: any*/),
  "type": "CollectionContribution",
  "abstractKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": (v2/*: any*/),
  "type": "ItemContribution",
  "abstractKey": null
},
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v6 = {
  "kind": "InlineFragment",
  "selections": [
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
          "name": "path",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "messages",
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
      "selections": (v5/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v5/*: any*/),
      "storageKey": null
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
    "name": "ContributionCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpsertContributionPayload",
        "kind": "LinkedField",
        "name": "upsertContribution",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "contribution",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v6/*: any*/)
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
    "name": "ContributionCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpsertContributionPayload",
        "kind": "LinkedField",
        "name": "upsertContribution",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "contribution",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "type": "Node",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e39389cace82acc17c72433e4063c9f3",
    "id": null,
    "metadata": {},
    "name": "ContributionCreateFormMutation",
    "operationKind": "mutation",
    "text": "mutation ContributionCreateFormMutation(\n  $input: UpsertContributionInput!\n) {\n  upsertContribution(input: $input) {\n    contribution {\n      __typename\n      ... on CollectionContribution {\n        role\n      }\n      ... on ItemContribution {\n        role\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dcee5f1574898f8af570169be23a62c8';
export default node;
