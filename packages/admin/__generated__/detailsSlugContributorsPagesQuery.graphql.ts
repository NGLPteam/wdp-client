/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type detailsSlugContributorsPagesQueryVariables = {
    contributorSlug: string;
};
export type detailsSlugContributorsPagesQueryResponse = {
    readonly contributor: {
        readonly " $fragmentRefs": FragmentRefs<"ContributorUpdateFormFragment" | "ContributorLayoutQueryFragment">;
    } | null;
};
export type detailsSlugContributorsPagesQuery = {
    readonly response: detailsSlugContributorsPagesQueryResponse;
    readonly variables: detailsSlugContributorsPagesQueryVariables;
};



/*
query detailsSlugContributorsPagesQuery(
  $contributorSlug: Slug!
) {
  contributor(slug: $contributorSlug) {
    __typename
    ...ContributorUpdateFormFragment
    ...ContributorLayoutQueryFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment ContributorLayoutFragment on AnyContributor {
  __isAnyContributor: __typename
  __typename
  ... on OrganizationContributor {
    slug
    legalName
  }
  ... on PersonContributor {
    givenName
    familyName
  }
}

fragment ContributorLayoutQueryFragment on Contributor {
  __isContributor: __typename
  ...ContributorLayoutFragment
}

fragment ContributorUpdateFormFragment on AnyContributor {
  __isAnyContributor: __typename
  __typename
  ... on PersonContributor {
    ...ContributorUpdatePersonFormFragment
  }
  ... on OrganizationContributor {
    ...ContributorUpdateOrganizationFormFragment
  }
}

fragment ContributorUpdateOrganizationFormFieldsFragment on AnyContributor {
  __isAnyContributor: __typename
  ... on OrganizationContributor {
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
  }
}

fragment ContributorUpdateOrganizationFormFragment on AnyContributor {
  __isAnyContributor: __typename
  ... on OrganizationContributor {
    contributorId: id
    ...ContributorUpdateOrganizationFormFieldsFragment
  }
}

fragment ContributorUpdatePersonFormFieldsFragment on AnyContributor {
  __isAnyContributor: __typename
  ... on PersonContributor {
    givenName
    familyName
    title
    email
    affiliation
    bio
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
  }
}

fragment ContributorUpdatePersonFormFragment on AnyContributor {
  __isAnyContributor: __typename
  ... on PersonContributor {
    contributorId: id
    ...ContributorUpdatePersonFormFieldsFragment
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contributorSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "contributorSlug"
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
  "name": "givenName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v9 = {
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
            (v8/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "ContributorLink",
  "kind": "LinkedField",
  "name": "links",
  "plural": true,
  "selections": [
    (v5/*: any*/),
    (v8/*: any*/)
  ],
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "legalName",
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContributorLayoutQueryFragment"
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
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "affiliation",
                                "storageKey": null
                              },
                              (v7/*: any*/),
                              (v9/*: any*/),
                              (v10/*: any*/)
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
                              (v11/*: any*/),
                              (v6/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "location",
                                "storageKey": null
                              },
                              (v7/*: any*/),
                              (v8/*: any*/),
                              (v9/*: any*/),
                              (v10/*: any*/)
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
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "slug",
                        "storageKey": null
                      },
                      (v11/*: any*/)
                    ],
                    "type": "OrganizationContributor",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "type": "PersonContributor",
                    "abstractKey": null
                  }
                ],
                "type": "AnyContributor",
                "abstractKey": "__isAnyContributor"
              }
            ],
            "type": "Contributor",
            "abstractKey": "__isContributor"
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
    "cacheID": "5038bfadf1f8895f422217fe01735340",
    "id": null,
    "metadata": {},
    "name": "detailsSlugContributorsPagesQuery",
    "operationKind": "query",
    "text": "query detailsSlugContributorsPagesQuery(\n  $contributorSlug: Slug!\n) {\n  contributor(slug: $contributorSlug) {\n    __typename\n    ...ContributorUpdateFormFragment\n    ...ContributorLayoutQueryFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ContributorLayoutFragment on AnyContributor {\n  __isAnyContributor: __typename\n  __typename\n  ... on OrganizationContributor {\n    slug\n    legalName\n  }\n  ... on PersonContributor {\n    givenName\n    familyName\n  }\n}\n\nfragment ContributorLayoutQueryFragment on Contributor {\n  __isContributor: __typename\n  ...ContributorLayoutFragment\n}\n\nfragment ContributorUpdateFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  __typename\n  ... on PersonContributor {\n    ...ContributorUpdatePersonFormFragment\n  }\n  ... on OrganizationContributor {\n    ...ContributorUpdateOrganizationFormFragment\n  }\n}\n\nfragment ContributorUpdateOrganizationFormFieldsFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on OrganizationContributor {\n    legalName\n    email\n    location\n    bio\n    url\n    image {\n      thumb {\n        png {\n          alt\n          url\n        }\n      }\n    }\n    links {\n      title\n      url\n    }\n  }\n}\n\nfragment ContributorUpdateOrganizationFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on OrganizationContributor {\n    contributorId: id\n    ...ContributorUpdateOrganizationFormFieldsFragment\n  }\n}\n\nfragment ContributorUpdatePersonFormFieldsFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    givenName\n    familyName\n    title\n    email\n    affiliation\n    bio\n    image {\n      thumb {\n        png {\n          alt\n          url\n        }\n      }\n    }\n    links {\n      title\n      url\n    }\n  }\n}\n\nfragment ContributorUpdatePersonFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    contributorId: id\n    ...ContributorUpdatePersonFormFieldsFragment\n  }\n}\n"
  }
};
})();
(node as any).hash = '1f02d5d710fb4dfeee78a110250aab37';
export default node;
