/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UploadStorage = "CACHE" | "%future added value";
export type CreateOrganizationContributorInput = {
    email?: string | null;
    url?: string | null;
    bio?: string | null;
    links?: Array<ContributorLinkInput> | null;
    image?: UploadedFileInput | null;
    legalName?: string | null;
    location?: string | null;
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
export type ContributorCreateOrganizationFormMutationVariables = {
    input: CreateOrganizationContributorInput;
};
export type ContributorCreateOrganizationFormMutationResponse = {
    readonly createOrganizationContributor: {
        readonly contributor: {
            readonly legalName: string | null;
            readonly email: string | null;
            readonly location: string | null;
            readonly bio: string | null;
            readonly url: string | null;
            readonly image: {
                readonly thumb: {
                    readonly png: {
                        readonly alt: string;
                        readonly url: string;
                    } | null;
                };
            } | null;
            readonly links: ReadonlyArray<{
                readonly title: string;
                readonly url: string;
            } | null>;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type ContributorCreateOrganizationFormMutation = {
    readonly response: ContributorCreateOrganizationFormMutationResponse;
    readonly variables: ContributorCreateOrganizationFormMutationVariables;
};



/*
mutation ContributorCreateOrganizationFormMutation(
  $input: CreateOrganizationContributorInput!
) {
  createOrganizationContributor(input: $input) {
    contributor {
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
      links {
        title
        url
      }
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
  "name": "legalName",
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
  "name": "location",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v7 = {
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
            (v6/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "ContributorLink",
  "kind": "LinkedField",
  "name": "links",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v10 = {
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
      "selections": (v9/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v9/*: any*/),
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
    "name": "ContributorCreateOrganizationFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateOrganizationContributorPayload",
        "kind": "LinkedField",
        "name": "createOrganizationContributor",
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v10/*: any*/)
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
    "name": "ContributorCreateOrganizationFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateOrganizationContributorPayload",
        "kind": "LinkedField",
        "name": "createOrganizationContributor",
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
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
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "671a3fba1c317894070cce5090b62e1e",
    "id": null,
    "metadata": {},
    "name": "ContributorCreateOrganizationFormMutation",
    "operationKind": "mutation",
    "text": "mutation ContributorCreateOrganizationFormMutation(\n  $input: CreateOrganizationContributorInput!\n) {\n  createOrganizationContributor(input: $input) {\n    contributor {\n      legalName\n      email\n      location\n      bio\n      url\n      image {\n        thumb {\n          png {\n            alt\n            url\n          }\n        }\n      }\n      links {\n        title\n        url\n      }\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd67f01ef43ce83837979a12f22757acc';
export default node;
