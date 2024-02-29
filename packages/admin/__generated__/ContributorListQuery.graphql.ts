/**
 * @generated SignedSource<<d094063359950bd5909c783900bbd95d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorOrder = "AFFILIATION_ASCENDING" | "AFFILIATION_DESCENDING" | "LEAST_CONTRIBUTIONS" | "MOST_CONTRIBUTIONS" | "NAME_ASCENDING" | "NAME_DESCENDING" | "OLDEST" | "RECENT" | "%future added value";
export type ContributorListQuery$variables = {
  order?: ContributorOrder | null | undefined;
  page: number;
  query?: string | null | undefined;
};
export type ContributorListQuery$data = {
  readonly contributors: {
    readonly nodes: ReadonlyArray<{
      readonly __typename: string;
      readonly createdAt?: string;
      readonly familyName?: string | null | undefined;
      readonly givenName?: string | null | undefined;
      readonly id?: string;
      readonly legalName?: string | null | undefined;
      readonly slug?: string;
      readonly " $fragmentSpreads": FragmentRefs<"ContributorAffiliationColumnFragment" | "ContributorContributionsColumnFragment" | "ContributorNameColumnFragment">;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  };
};
export type ContributorListQuery = {
  response: ContributorListQuery$data;
  variables: ContributorListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "order",
    "variableName": "order"
  },
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "page"
  },
  {
    "kind": "Literal",
    "name": "perPage",
    "value": 20
  },
  {
    "kind": "Variable",
    "name": "prefix",
    "variableName": "query"
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
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "legalName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v7 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v10 = {
  "kind": "InlineFragment",
  "selections": [
    (v8/*: any*/),
    (v9/*: any*/)
  ],
  "type": "PersonContributor",
  "abstractKey": null
},
v11 = {
  "kind": "InlineDataFragmentSpread",
  "name": "ContributorNameColumnFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageAttachment",
          "kind": "LinkedField",
          "name": "image",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "AvatarFragment"
            }
          ],
          "storageKey": null
        },
        (v7/*: any*/),
        {
          "kind": "InlineFragment",
          "selections": [
            (v5/*: any*/)
          ],
          "type": "OrganizationContributor",
          "abstractKey": null
        },
        (v10/*: any*/)
      ],
      "type": "Contributor",
      "abstractKey": "__isContributor"
    }
  ],
  "args": null,
  "argumentDefinitions": ([]/*: any*/)
},
v12 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/),
    (v8/*: any*/),
    (v9/*: any*/),
    (v6/*: any*/)
  ],
  "type": "PersonContributor",
  "abstractKey": null
},
v13 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "affiliation",
      "storageKey": null
    }
  ],
  "type": "PersonContributor",
  "abstractKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contributionCount",
  "storageKey": null
},
v15 = {
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
      "name": "storage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "small",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageDerivative",
          "kind": "LinkedField",
          "name": "webp",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "alt",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "width",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "height",
                  "storageKey": null
                }
              ],
              "type": "Image",
              "abstractKey": "__isImage"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContributorListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AnyContributorConnection",
        "kind": "LinkedField",
        "name": "contributors",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v11/*: any*/)
                ],
                "type": "OrganizationContributor",
                "abstractKey": null
              },
              (v12/*: any*/),
              (v11/*: any*/),
              {
                "kind": "InlineDataFragmentSpread",
                "name": "ContributorAffiliationColumnFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v13/*: any*/)
                    ],
                    "type": "Contributor",
                    "abstractKey": "__isContributor"
                  }
                ],
                "args": null,
                "argumentDefinitions": []
              },
              {
                "kind": "InlineDataFragmentSpread",
                "name": "ContributorContributionsColumnFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v14/*: any*/)
                    ],
                    "type": "Contributor",
                    "abstractKey": "__isContributor"
                  }
                ],
                "args": null,
                "argumentDefinitions": []
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ModelListPageFragment"
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
    "name": "ContributorListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AnyContributorConnection",
        "kind": "LinkedField",
        "name": "contributors",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v15/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isSluggable"
                      },
                      (v10/*: any*/)
                    ],
                    "type": "Contributor",
                    "abstractKey": "__isContributor"
                  }
                ],
                "type": "OrganizationContributor",
                "abstractKey": null
              },
              (v12/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v15/*: any*/),
                  (v14/*: any*/),
                  (v7/*: any*/),
                  (v13/*: any*/)
                ],
                "type": "Contributor",
                "abstractKey": "__isContributor"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/)
                ],
                "type": "Node",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "page",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "pageCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "perPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasPreviousPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Paginated",
            "abstractKey": "__isPaginated"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "abf71403377a39ab00002acf4d75fd61",
    "id": null,
    "metadata": {},
    "name": "ContributorListQuery",
    "operationKind": "query",
    "text": "query ContributorListQuery(\n  $order: ContributorOrder\n  $page: Int!\n  $query: String\n) {\n  contributors(order: $order, page: $page, perPage: 20, prefix: $query) {\n    nodes {\n      __typename\n      ... on OrganizationContributor {\n        id\n        slug\n        legalName\n        createdAt\n        ...ContributorNameColumnFragment\n      }\n      ... on PersonContributor {\n        id\n        slug\n        givenName\n        familyName\n        createdAt\n      }\n      ...ContributorNameColumnFragment\n      ...ContributorAffiliationColumnFragment\n      ...ContributorContributionsColumnFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    ...ModelListPageFragment\n  }\n}\n\nfragment AvatarFragment on ImageAttachment {\n  storage\n  small {\n    webp {\n      ...ImageFragment\n    }\n  }\n}\n\nfragment ContributorAffiliationColumnFragment on Contributor {\n  __isContributor: __typename\n  ... on PersonContributor {\n    affiliation\n  }\n}\n\nfragment ContributorContributionsColumnFragment on Contributor {\n  __isContributor: __typename\n  contributionCount\n}\n\nfragment ContributorNameColumnFragment on Contributor {\n  __isContributor: __typename\n  __typename\n  image {\n    ...AvatarFragment\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on OrganizationContributor {\n    legalName\n  }\n  ... on PersonContributor {\n    givenName\n    familyName\n  }\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "9c405392759bcdda56c9aee733f6eac3";

export default node;
