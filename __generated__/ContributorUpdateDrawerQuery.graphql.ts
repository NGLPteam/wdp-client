/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdateDrawerQueryVariables = {
    contributorSlug: string;
};
export type ContributorUpdateDrawerQueryResponse = {
    readonly contributor: {
        readonly __typename: string;
        readonly slug?: string;
        readonly legalName?: string | null;
        readonly givenName?: string | null;
        readonly familyName?: string | null;
        readonly " $fragmentRefs": FragmentRefs<"ContributorUpdateFormFragment">;
    } | null;
};
export type ContributorUpdateDrawerQuery = {
    readonly response: ContributorUpdateDrawerQueryResponse;
    readonly variables: ContributorUpdateDrawerQueryVariables;
};



/*
query ContributorUpdateDrawerQuery(
  $contributorSlug: Slug!
) {
  contributor(slug: $contributorSlug) {
    __typename
    ... on OrganizationContributor {
      slug
      legalName
    }
    ... on PersonContributor {
      slug
      givenName
      familyName
    }
    ...ContributorUpdateFormFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
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
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "legalName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v7 = {
  "alias": "contributorId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
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
  "name": "url",
  "storageKey": null
},
v11 = {
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
            (v10/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "ContributorLink",
  "kind": "LinkedField",
  "name": "links",
  "plural": true,
  "selections": [
    (v12/*: any*/),
    (v10/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContributorUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "type": "OrganizationContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
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
    "name": "ContributorUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isAnyContributor"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v7/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v8/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "location",
                                "storageKey": null
                              },
                              (v9/*: any*/),
                              (v10/*: any*/),
                              (v11/*: any*/),
                              (v13/*: any*/)
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
              (v3/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v7/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v12/*: any*/),
                              (v8/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "affiliation",
                                "storageKey": null
                              },
                              (v9/*: any*/),
                              (v11/*: any*/),
                              (v13/*: any*/)
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
    "cacheID": "9f872bdcf1dadebb11e098b867e4572d",
    "id": null,
    "metadata": {},
    "name": "ContributorUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query ContributorUpdateDrawerQuery(\n  $contributorSlug: Slug!\n) {\n  contributor(slug: $contributorSlug) {\n    __typename\n    ... on OrganizationContributor {\n      slug\n      legalName\n    }\n    ... on PersonContributor {\n      slug\n      givenName\n      familyName\n    }\n    ...ContributorUpdateFormFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ContributorUpdateFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  __typename\n  ... on PersonContributor {\n    ...ContributorUpdatePersonFormFragment\n  }\n  ... on OrganizationContributor {\n    ...ContributorUpdateOrganizationFormFragment\n  }\n}\n\nfragment ContributorUpdateOrganizationFormFieldsFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on OrganizationContributor {\n    legalName\n    email\n    location\n    bio\n    url\n    image {\n      thumb {\n        png {\n          alt\n          url\n        }\n      }\n    }\n    links {\n      title\n      url\n    }\n  }\n}\n\nfragment ContributorUpdateOrganizationFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on OrganizationContributor {\n    contributorId: id\n    ...ContributorUpdateOrganizationFormFieldsFragment\n  }\n}\n\nfragment ContributorUpdatePersonFormFieldsFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    givenName\n    familyName\n    title\n    email\n    affiliation\n    bio\n    image {\n      thumb {\n        png {\n          alt\n          url\n        }\n      }\n    }\n    links {\n      title\n      url\n    }\n  }\n}\n\nfragment ContributorUpdatePersonFormFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    contributorId: id\n    ...ContributorUpdatePersonFormFieldsFragment\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cb97033a18b8ce80b74e4209deede301';
export default node;
