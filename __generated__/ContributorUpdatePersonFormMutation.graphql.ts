/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UpdatePersonContributorInput = {
    contributorId: string;
    email?: string | null;
    url?: string | null;
    bio?: string | null;
    givenName?: string | null;
    familyName?: string | null;
    title?: string | null;
    affiliation?: string | null;
    links?: Array<ContributorLinkInput> | null;
    clientMutationId?: string | null;
};
export type ContributorLinkInput = {
    title: string;
    url: string;
};
export type ContributorUpdatePersonFormMutationVariables = {
    input: UpdatePersonContributorInput;
};
export type ContributorUpdatePersonFormMutationResponse = {
    readonly updatePersonContributor: {
        readonly contributor: {
            readonly __typename: string;
            readonly email: string | null;
            readonly givenName: string | null;
            readonly familyName: string | null;
            readonly suffix: string | null;
            readonly title: string | null;
            readonly prefix: string | null;
            readonly bio: string | null;
            readonly affiliation: string | null;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type ContributorUpdatePersonFormMutation = {
    readonly response: ContributorUpdatePersonFormMutationResponse;
    readonly variables: ContributorUpdatePersonFormMutationVariables;
};



/*
mutation ContributorUpdatePersonFormMutation(
  $input: UpdatePersonContributorInput!
) {
  updatePersonContributor(input: $input) {
    contributor {
      __typename
      email
      givenName
      familyName
      suffix
      title
      prefix
      bio
      affiliation
      id
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "suffix",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "prefix",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v11 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v12 = {
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
      "selections": (v11/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v11/*: any*/),
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
    "name": "ContributorUpdatePersonFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdatePersonContributorPayload",
        "kind": "LinkedField",
        "name": "updatePersonContributor",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PersonContributor",
            "kind": "LinkedField",
            "name": "contributor",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v12/*: any*/)
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
    "name": "ContributorUpdatePersonFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdatePersonContributorPayload",
        "kind": "LinkedField",
        "name": "updatePersonContributor",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PersonContributor",
            "kind": "LinkedField",
            "name": "contributor",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v12/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5ed211f5b52bdae1776585e9017fbe14",
    "id": null,
    "metadata": {},
    "name": "ContributorUpdatePersonFormMutation",
    "operationKind": "mutation",
    "text": "mutation ContributorUpdatePersonFormMutation(\n  $input: UpdatePersonContributorInput!\n) {\n  updatePersonContributor(input: $input) {\n    contributor {\n      __typename\n      email\n      givenName\n      familyName\n      suffix\n      title\n      prefix\n      bio\n      affiliation\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e71ecd1c3baf3fea568b2883149ed399';
export default node;
