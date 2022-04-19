/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributionOrder = "OLDEST" | "RECENT" | "TARGET_TITLE_ASCENDING" | "TARGET_TITLE_DESCENDING" | "%future added value";
export type collectionsSlugContributorsPagesQueryVariables = {
    contributorSlug: string;
    order?: ContributionOrder | null | undefined;
    page: number;
};
export type collectionsSlugContributorsPagesQueryResponse = {
    readonly contributor: {
        readonly __typename: string;
        readonly collectionContributions?: {
            readonly " $fragmentRefs": FragmentRefs<"CollectionContributionListFragment">;
        } | undefined;
        readonly " $fragmentRefs": FragmentRefs<"ContributorLayoutQueryFragment">;
    } | null;
};
export type collectionsSlugContributorsPagesQuery = {
    readonly response: collectionsSlugContributorsPagesQueryResponse;
    readonly variables: collectionsSlugContributorsPagesQueryVariables;
};



/*
query collectionsSlugContributorsPagesQuery(
  $contributorSlug: Slug!
  $order: ContributionOrder
  $page: Int!
) {
  contributor(slug: $contributorSlug) {
    __typename
    ...ContributorLayoutQueryFragment
    ... on OrganizationContributor {
      collectionContributions(page: $page, perPage: 20, order: $order) {
        ...CollectionContributionListFragment
      }
    }
    ... on PersonContributor {
      collectionContributions(page: $page, perPage: 20, order: $order) {
        ...CollectionContributionListFragment
      }
    }
    ... on Node {
      __isNode: __typename
      id
    }
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

fragment CollectionContributionListFragment on CollectionContributionConnection {
  nodes {
    id
    slug
    createdAt
    updatedAt
    role
    contributor {
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
      ...ContributorNameColumnFragment
      ... on Node {
        __isNode: __typename
        id
      }
    }
    collection {
      title
      slug
      id
    }
  }
  ...ModelListPageFragment
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
    "name": "contributorSlug"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
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
v3 = [
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
  }
],
v4 = [
  {
    "alias": null,
    "args": (v3/*: any*/),
    "concreteType": "CollectionContributionConnection",
    "kind": "LinkedField",
    "name": "collectionContributions",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CollectionContributionListFragment"
      }
    ],
    "storageKey": null
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v6 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "legalName",
      "storageKey": null
    }
  ],
  "type": "OrganizationContributor",
  "abstractKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v10 = {
  "kind": "InlineFragment",
  "selections": [
    (v9/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v11 = [
  {
    "alias": null,
    "args": (v3/*: any*/),
    "concreteType": "CollectionContributionConnection",
    "kind": "LinkedField",
    "name": "collectionContributions",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CollectionContribution",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          (v9/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "role",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "contributor",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v6/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v5/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/)
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
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v5/*: any*/)
                    ],
                    "type": "Sluggable",
                    "abstractKey": "__isSluggable"
                  }
                ],
                "type": "Contributor",
                "abstractKey": "__isContributor"
              },
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              (v5/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "collectionsSlugContributorsPagesQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContributorLayoutQueryFragment"
          },
          {
            "kind": "InlineFragment",
            "selections": (v4/*: any*/),
            "type": "OrganizationContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v4/*: any*/),
            "type": "PersonContributor",
            "abstractKey": null
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
    "name": "collectionsSlugContributorsPagesQuery",
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
              {
                "kind": "InlineFragment",
                "selections": [
                  (v6/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v7/*: any*/),
                      (v8/*: any*/)
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
            "selections": (v11/*: any*/),
            "type": "OrganizationContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v11/*: any*/),
            "type": "PersonContributor",
            "abstractKey": null
          },
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1eb6ec67faf9e76896610d3868ad7600",
    "id": null,
    "metadata": {},
    "name": "collectionsSlugContributorsPagesQuery",
    "operationKind": "query",
    "text": "query collectionsSlugContributorsPagesQuery(\n  $contributorSlug: Slug!\n  $order: ContributionOrder\n  $page: Int!\n) {\n  contributor(slug: $contributorSlug) {\n    __typename\n    ...ContributorLayoutQueryFragment\n    ... on OrganizationContributor {\n      collectionContributions(page: $page, perPage: 20, order: $order) {\n        ...CollectionContributionListFragment\n      }\n    }\n    ... on PersonContributor {\n      collectionContributions(page: $page, perPage: 20, order: $order) {\n        ...CollectionContributionListFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment AvatarFragment on ImageAttachment {\n  storage\n  small {\n    webp {\n      ...ImageFragment\n    }\n  }\n}\n\nfragment CollectionContributionListFragment on CollectionContributionConnection {\n  nodes {\n    id\n    slug\n    createdAt\n    updatedAt\n    role\n    contributor {\n      __typename\n      ... on OrganizationContributor {\n        slug\n        legalName\n      }\n      ... on PersonContributor {\n        slug\n        givenName\n        familyName\n      }\n      ...ContributorNameColumnFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    collection {\n      title\n      slug\n      id\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment ContributorLayoutFragment on AnyContributor {\n  __isAnyContributor: __typename\n  __typename\n  ... on OrganizationContributor {\n    slug\n    legalName\n  }\n  ... on PersonContributor {\n    givenName\n    familyName\n  }\n}\n\nfragment ContributorLayoutQueryFragment on Contributor {\n  __isContributor: __typename\n  ...ContributorLayoutFragment\n}\n\nfragment ContributorNameColumnFragment on Contributor {\n  __isContributor: __typename\n  __typename\n  image {\n    ...AvatarFragment\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on OrganizationContributor {\n    legalName\n  }\n  ... on PersonContributor {\n    givenName\n    familyName\n  }\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();
(node as any).hash = '2210b271441033e2b0847c705a04d1d2';
export default node;
