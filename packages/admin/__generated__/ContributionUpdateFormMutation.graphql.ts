/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UpdateContributionInput = {
    contributionId: string;
    role?: string | null | undefined;
    metadata?: ContributionMetadataInput | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type ContributionMetadataInput = {
    title?: string | null | undefined;
    affiliation?: string | null | undefined;
    displayName?: string | null | undefined;
    location?: string | null | undefined;
};
export type ContributionUpdateFormMutationVariables = {
    input: UpdateContributionInput;
};
export type ContributionUpdateFormMutationResponse = {
    readonly updateContribution: {
        readonly contribution: {
            readonly " $fragmentRefs": FragmentRefs<"ContributionUpdateFormFieldsFragment">;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type ContributionUpdateFormMutation = {
    readonly response: ContributionUpdateFormMutationResponse;
    readonly variables: ContributionUpdateFormMutationVariables;
};



/*
mutation ContributionUpdateFormMutation(
  $input: UpdateContributionInput!
) {
  updateContribution(input: $input) {
    contribution {
      __typename
      ...ContributionUpdateFormFieldsFragment
      ... on Node {
        __isNode: __typename
        id
      }
    }
    ...MutationForm_mutationErrors
  }
}

fragment ContributionUpdateFormFieldsFragment on AnyContribution {
  __isAnyContribution: __typename
  ... on CollectionContribution {
    role
  }
  ... on ItemContribution {
    role
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
    "name": "message",
    "storageKey": null
  }
],
v3 = {
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
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v2/*: any*/),
      "storageKey": null
    }
  ],
  "type": "StandardMutationPayload",
  "abstractKey": "__isStandardMutationPayload"
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "role",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContributionUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateContributionPayload",
        "kind": "LinkedField",
        "name": "updateContribution",
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "ContributionUpdateFormFieldsFragment"
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
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
    "name": "ContributionUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateContributionPayload",
        "kind": "LinkedField",
        "name": "updateContribution",
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
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isAnyContribution"
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "CollectionContribution",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "ItemContribution",
                "abstractKey": null
              },
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
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "080563eb669a109e9a283b41aaf4ecc4",
    "id": null,
    "metadata": {},
    "name": "ContributionUpdateFormMutation",
    "operationKind": "mutation",
    "text": "mutation ContributionUpdateFormMutation(\n  $input: UpdateContributionInput!\n) {\n  updateContribution(input: $input) {\n    contribution {\n      __typename\n      ...ContributionUpdateFormFieldsFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment ContributionUpdateFormFieldsFragment on AnyContribution {\n  __isAnyContribution: __typename\n  ... on CollectionContribution {\n    role\n  }\n  ... on ItemContribution {\n    role\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = '6ecc4931761a40931004f5fb92221a1f';
export default node;
