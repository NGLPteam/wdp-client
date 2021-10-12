/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type itemsSlugContributorsPagesQueryVariables = {
    contributorSlug: string;
};
export type itemsSlugContributorsPagesQueryResponse = {
    readonly contributor: {
        readonly __typename: string;
        readonly itemContributions?: {
            readonly " $fragmentRefs": FragmentRefs<"ItemContributionListFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"ContributorLayoutFragment">;
    } | null;
};
export type itemsSlugContributorsPagesQuery = {
    readonly response: itemsSlugContributorsPagesQueryResponse;
    readonly variables: itemsSlugContributorsPagesQueryVariables;
};



/*
query itemsSlugContributorsPagesQuery(
  $contributorSlug: Slug!
) {
  contributor(slug: $contributorSlug) {
    __typename
    ...ContributorLayoutFragment
    ... on OrganizationContributor {
      itemContributions {
        ...ItemContributionListFragment
      }
    }
    ... on PersonContributor {
      itemContributions {
        ...ItemContributionListFragment
      }
    }
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

fragment ItemContributionListFragment on ItemContributionConnection {
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
      ... on Node {
        __isNode: __typename
        id
      }
    }
    item {
      slug
      title
      id
    }
  }
  ...ModelListPageFragment
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
    "alias": null,
    "args": null,
    "concreteType": "ItemContributionConnection",
    "kind": "LinkedField",
    "name": "itemContributions",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ItemContributionListFragment"
      }
    ],
    "storageKey": null
  }
],
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
  "name": "id",
  "storageKey": null
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
  "kind": "InlineFragment",
  "selections": [
    (v6/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "ItemContributionConnection",
  "kind": "LinkedField",
  "name": "itemContributions",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemContribution",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v6/*: any*/),
        (v4/*: any*/),
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
            {
              "kind": "InlineFragment",
              "selections": [
                (v4/*: any*/),
                (v5/*: any*/)
              ],
              "type": "OrganizationContributor",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v4/*: any*/),
                (v7/*: any*/),
                (v8/*: any*/)
              ],
              "type": "PersonContributor",
              "abstractKey": null
            },
            (v9/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": [
            (v4/*: any*/),
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "itemsSlugContributorsPagesQuery",
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
            "name": "ContributorLayoutFragment"
          },
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "OrganizationContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
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
    "name": "itemsSlugContributorsPagesQuery",
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v10/*: any*/)
            ],
            "type": "OrganizationContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v10/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          (v9/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c216f6157dfec8b650cd5a13e672c208",
    "id": null,
    "metadata": {},
    "name": "itemsSlugContributorsPagesQuery",
    "operationKind": "query",
    "text": "query itemsSlugContributorsPagesQuery(\n  $contributorSlug: Slug!\n) {\n  contributor(slug: $contributorSlug) {\n    __typename\n    ...ContributorLayoutFragment\n    ... on OrganizationContributor {\n      itemContributions {\n        ...ItemContributionListFragment\n      }\n    }\n    ... on PersonContributor {\n      itemContributions {\n        ...ItemContributionListFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ContributorLayoutFragment on AnyContributor {\n  __isAnyContributor: __typename\n  __typename\n  ... on OrganizationContributor {\n    slug\n    legalName\n  }\n  ... on PersonContributor {\n    givenName\n    familyName\n  }\n}\n\nfragment ItemContributionListFragment on ItemContributionConnection {\n  nodes {\n    id\n    slug\n    createdAt\n    updatedAt\n    role\n    contributor {\n      __typename\n      ... on OrganizationContributor {\n        slug\n        legalName\n      }\n      ... on PersonContributor {\n        slug\n        givenName\n        familyName\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    item {\n      slug\n      title\n      id\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();
(node as any).hash = 'eb9386b871ab34a2c8c291e243e90d12';
export default node;
