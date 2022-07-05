/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorOrder = "AFFILIATION_ASCENDING" | "AFFILIATION_DESCENDING" | "LEAST_CONTRIBUTIONS" | "MOST_CONTRIBUTIONS" | "NAME_ASCENDING" | "NAME_DESCENDING" | "OLDEST" | "RECENT" | "%future added value";
export type contributorsQueryVariables = {
    order?: ContributorOrder | null | undefined;
    page: number;
    query?: string | null | undefined;
};
export type contributorsQueryResponse = {
    readonly contributors: {
        readonly " $fragmentRefs": FragmentRefs<"ContributorListFragment">;
    };
};
export type contributorsQuery = {
    readonly response: contributorsQueryResponse;
    readonly variables: contributorsQueryVariables;
};



/*
query contributorsQuery(
  $order: ContributorOrder
  $page: Int!
  $query: String
) {
  contributors(order: $order, page: $page, perPage: 20, prefix: $query) {
    ...ContributorListFragment
  }
}

fragment AvatarFragment on ImageAttachment {
  storage
  small {
    webp {
      ...ImageFragment
    }
  }
}

fragment ContributorAffiliationColumnFragment on Contributor {
  __isContributor: __typename
  ... on PersonContributor {
    affiliation
  }
}

fragment ContributorContributionsColumnFragment on Contributor {
  __isContributor: __typename
  contributionCount
}

fragment ContributorListFragment on AnyContributorConnection {
  nodes {
    __typename
    ... on OrganizationContributor {
      id
      slug
      legalName
      createdAt
      ...ContributorNameColumnFragment
    }
    ... on PersonContributor {
      id
      slug
      givenName
      familyName
      createdAt
    }
    ...ContributorNameColumnFragment
    ...ContributorAffiliationColumnFragment
    ...ContributorContributionsColumnFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
  ...ModelListPageFragment
}

fragment ContributorNameColumnFragment on Contributor {
  __isContributor: __typename
  __typename
  image {
    ...AvatarFragment
  }
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
  ... on OrganizationContributor {
    legalName
  }
  ... on PersonContributor {
    givenName
    familyName
  }
}

fragment ImageFragment on Image {
  __isImage: __typename
  alt
  url
  width
  height
}

fragment ModelListPageFragment on Paginated {
  __isPaginated: __typename
  ...ModelPageCountActionsFragment
  ...ModelPaginationFragment
}

fragment ModelPageCountActionsFragment on Paginated {
  __isPaginated: __typename
  pageInfo {
    page
    pageCount
    perPage
    hasNextPage
    hasPreviousPage
    totalCount
  }
}

fragment ModelPaginationFragment on Paginated {
  __isPaginated: __typename
  pageInfo {
    page
    pageCount
  }
}
*/

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
  "name": "id",
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
  "name": "createdAt",
  "storageKey": null
},
v5 = {
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
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "contributorsQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContributorListFragment"
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
    "name": "contributorsQuery",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "legalName",
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v5/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isSluggable"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v6/*: any*/),
                          (v7/*: any*/)
                        ],
                        "type": "PersonContributor",
                        "abstractKey": null
                      }
                    ],
                    "type": "Contributor",
                    "abstractKey": "__isContributor"
                  }
                ],
                "type": "OrganizationContributor",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v4/*: any*/)
                ],
                "type": "PersonContributor",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "contributionCount",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/)
                    ],
                    "type": "Sluggable",
                    "abstractKey": "__isSluggable"
                  },
                  {
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
                  }
                ],
                "type": "Contributor",
                "abstractKey": "__isContributor"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/)
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
    "cacheID": "a15250c4a486c585550d1275755d7356",
    "id": null,
    "metadata": {},
    "name": "contributorsQuery",
    "operationKind": "query",
    "text": "query contributorsQuery(\n  $order: ContributorOrder\n  $page: Int!\n  $query: String\n) {\n  contributors(order: $order, page: $page, perPage: 20, prefix: $query) {\n    ...ContributorListFragment\n  }\n}\n\nfragment AvatarFragment on ImageAttachment {\n  storage\n  small {\n    webp {\n      ...ImageFragment\n    }\n  }\n}\n\nfragment ContributorAffiliationColumnFragment on Contributor {\n  __isContributor: __typename\n  ... on PersonContributor {\n    affiliation\n  }\n}\n\nfragment ContributorContributionsColumnFragment on Contributor {\n  __isContributor: __typename\n  contributionCount\n}\n\nfragment ContributorListFragment on AnyContributorConnection {\n  nodes {\n    __typename\n    ... on OrganizationContributor {\n      id\n      slug\n      legalName\n      createdAt\n      ...ContributorNameColumnFragment\n    }\n    ... on PersonContributor {\n      id\n      slug\n      givenName\n      familyName\n      createdAt\n    }\n    ...ContributorNameColumnFragment\n    ...ContributorAffiliationColumnFragment\n    ...ContributorContributionsColumnFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment ContributorNameColumnFragment on Contributor {\n  __isContributor: __typename\n  __typename\n  image {\n    ...AvatarFragment\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on OrganizationContributor {\n    legalName\n  }\n  ... on PersonContributor {\n    givenName\n    familyName\n  }\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();
(node as any).hash = '7d1c4da727f974aabcda8585ff60e01b';
export default node;
