/**
 * @generated SignedSource<<3833f27e4e7bfdd0d10c8cc9debacec7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type detailsSlugContributorsPagesQuery$variables = {
  slug: string;
};
export type detailsSlugContributorsPagesQuery$data = {
  readonly contributor: {
    readonly " $fragmentSpreads": FragmentRefs<"ContributorUpdateFormFragment">;
  } | null | undefined;
};
export type detailsSlugContributorsPagesQuery = {
  response: detailsSlugContributorsPagesQuery$data;
  variables: detailsSlugContributorsPagesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "alias": "contributorId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
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
  "name": "orcid",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "originalFilename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "storage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "thumb",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageDerivative",
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
            (v7/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "ContributorLink",
  "kind": "LinkedField",
  "name": "links",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    (v7/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "detailsSlugContributorsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContributorUpdateFormFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "detailsSlugContributorsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
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
            "abstractKey": "__isAnyContributor"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "givenName",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "familyName",
                                "storageKey": null
                              },
                              (v3/*: any*/),
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "affiliation",
                                "storageKey": null
                              },
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v8/*: any*/),
                              (v9/*: any*/)
                            ],
                            "type": "PersonContributor",
                            "abstractKey": null
                          }
                        ],
                        "type": "AnyContributor",
                        "abstractKey": "__isAnyContributor"
                      }
                    ],
                    "type": "PersonContributor",
                    "abstractKey": null
                  }
                ],
                "type": "AnyContributor",
                "abstractKey": "__isAnyContributor"
              }
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "legalName",
                                "storageKey": null
                              },
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "location",
                                "storageKey": null
                              },
                              (v5/*: any*/),
                              (v7/*: any*/),
                              (v6/*: any*/),
                              (v8/*: any*/),
                              (v9/*: any*/)
                            ],
                            "type": "OrganizationContributor",
                            "abstractKey": null
                          }
                        ],
                        "type": "AnyContributor",
                        "abstractKey": "__isAnyContributor"
                      }
                    ],
                    "type": "OrganizationContributor",
                    "abstractKey": null
                  }
                ],
                "type": "AnyContributor",
                "abstractKey": "__isAnyContributor"
              }
            ],
            "type": "OrganizationContributor",
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
      }
    ]
  },
  "params": {
    "cacheID": "bd09a47ca1f4c88830fefcd8a557552c",
    "id": null,
    "metadata": {},
    "name": "detailsSlugContributorsPagesQuery",
    "operationKind": "query",
    "text": "query detailsSlugContributorsPagesQuery(\n  $slug: Slug!\n) {\n  contributor(slug: $slug) {\n    __typename\n    ...ContributorUpdateFormFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ContributorUpdateFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  __typename\n  ... on PersonContributor {\n    ...ContributorUpdatePersonFormFragment\n  }\n  ... on OrganizationContributor {\n    ...ContributorUpdateOrganizationFormFragment\n  }\n}\n\nfragment ContributorUpdateOrganizationFormFieldsFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on OrganizationContributor {\n    legalName\n    email\n    location\n    bio\n    url\n    orcid\n    image {\n      ...FileUploadFragment\n    }\n    links {\n      title\n      url\n    }\n  }\n}\n\nfragment ContributorUpdateOrganizationFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on OrganizationContributor {\n    contributorId: id\n    ...ContributorUpdateOrganizationFormFieldsFragment\n  }\n}\n\nfragment ContributorUpdatePersonFormFieldsFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    givenName\n    familyName\n    title\n    email\n    affiliation\n    bio\n    orcid\n    image {\n      ...FileUploadFragment\n    }\n    links {\n      title\n      url\n    }\n  }\n}\n\nfragment ContributorUpdatePersonFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    contributorId: id\n    ...ContributorUpdatePersonFormFieldsFragment\n  }\n}\n\nfragment FileUploadFragment on ImageAttachment {\n  originalFilename\n  storage\n  thumb {\n    png {\n      alt\n      url\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "44d7f82fab1c760378a2d8e9d9914689";

export default node;
