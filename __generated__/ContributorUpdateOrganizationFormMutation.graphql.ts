/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UploadStorage = "CACHE" | "%future added value";
export type UpdateOrganizationContributorInput = {
    email?: string | null;
    url?: string | null;
    bio?: string | null;
    links?: Array<ContributorLinkInput> | null;
    image?: UploadedFileInput | null;
    legalName?: string | null;
    location?: string | null;
    contributorId: string;
    clearImage?: boolean | null;
    clientMutationId?: string | null;
};
export type ContributorLinkInput = {
    title: string;
    url: string;
};
export type UploadedFileInput = {
    id: unknown;
    storage?: UploadStorage | null;
    metadata?: UploadedFileMetadataInput | null;
};
export type UploadedFileMetadataInput = {
    filename?: string | null;
    mimeType?: string | null;
};
export type ContributorUpdateOrganizationFormMutationVariables = {
    input: UpdateOrganizationContributorInput;
};
export type ContributorUpdateOrganizationFormMutationResponse = {
    readonly updateOrganizationContributor: {
        readonly contributor: {
            readonly " $fragmentRefs": FragmentRefs<"ContributorOrganizationFormFragment">;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type ContributorUpdateOrganizationFormMutation = {
    readonly response: ContributorUpdateOrganizationFormMutationResponse;
    readonly variables: ContributorUpdateOrganizationFormMutationVariables;
};



/*
mutation ContributorUpdateOrganizationFormMutation(
  $input: UpdateOrganizationContributorInput!
) {
  updateOrganizationContributor(input: $input) {
    contributor {
      ...ContributorOrganizationFormFragment
      id
    }
    ...MutationForm_mutationErrors
  }
}

fragment ContributorOrganizationFormFragment on OrganizationContributor {
  legalName
  email
  location
  bio
  url
  image {
    thumb {
      png {
        alt
        url
      }
    }
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContributorUpdateOrganizationFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateOrganizationContributorPayload",
        "kind": "LinkedField",
        "name": "updateOrganizationContributor",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrganizationContributor",
            "kind": "LinkedField",
            "name": "contributor",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ContributorOrganizationFormFragment"
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
    "name": "ContributorUpdateOrganizationFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateOrganizationContributorPayload",
        "kind": "LinkedField",
        "name": "updateOrganizationContributor",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrganizationContributor",
            "kind": "LinkedField",
            "name": "contributor",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "legalName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "location",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bio",
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetPreview",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PreviewImageMap",
                    "kind": "LinkedField",
                    "name": "thumb",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PreviewImage",
                        "kind": "LinkedField",
                        "name": "png",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "alt",
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
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
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2016467b72aa84818914ae31c17b7be8",
    "id": null,
    "metadata": {},
    "name": "ContributorUpdateOrganizationFormMutation",
    "operationKind": "mutation",
    "text": "mutation ContributorUpdateOrganizationFormMutation(\n  $input: UpdateOrganizationContributorInput!\n) {\n  updateOrganizationContributor(input: $input) {\n    contributor {\n      ...ContributorOrganizationFormFragment\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment ContributorOrganizationFormFragment on OrganizationContributor {\n  legalName\n  email\n  location\n  bio\n  url\n  image {\n    thumb {\n      png {\n        alt\n        url\n      }\n    }\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = '38c2e863724a1ad7b8eeb812bf150b12';
export default node;
