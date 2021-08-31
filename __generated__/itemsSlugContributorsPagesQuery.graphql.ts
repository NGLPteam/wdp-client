/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type itemsSlugContributorsPagesQueryVariables = {
    slug: string;
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
  $slug: Slug!
) {
  contributor(slug: $slug) {
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
    name: legalName
  }
  ... on PersonContributor {
    firstName: givenName
    lastName: familyName
  }
}

fragment ItemContributionListFragment on ItemContributionConnection {
  nodes {
    slug
    createdAt
    updatedAt
    role
    item {
      slug
      title
      id
    }
    id
  }
  ...ModelPaginationFragment
  ...ModelPageCountActionsFragment
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
    totalUnfilteredCount
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
  "name": "id",
  "storageKey": null
},
v6 = {
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
            (v5/*: any*/)
          ],
          "storageKey": null
        },
        (v5/*: any*/)
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalUnfilteredCount",
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
              {
                "alias": "name",
                "args": null,
                "kind": "ScalarField",
                "name": "legalName",
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "type": "OrganizationContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": "firstName",
                "args": null,
                "kind": "ScalarField",
                "name": "givenName",
                "storageKey": null
              },
              {
                "alias": "lastName",
                "args": null,
                "kind": "ScalarField",
                "name": "familyName",
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/)
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
    "cacheID": "7d4dce6bd935b8ac2f6ff6023ae042bb",
    "id": null,
    "metadata": {},
    "name": "itemsSlugContributorsPagesQuery",
    "operationKind": "query",
    "text": "query itemsSlugContributorsPagesQuery(\n  $slug: Slug!\n) {\n  contributor(slug: $slug) {\n    __typename\n    ...ContributorLayoutFragment\n    ... on OrganizationContributor {\n      itemContributions {\n        ...ItemContributionListFragment\n      }\n    }\n    ... on PersonContributor {\n      itemContributions {\n        ...ItemContributionListFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ContributorLayoutFragment on AnyContributor {\n  __isAnyContributor: __typename\n  __typename\n  ... on OrganizationContributor {\n    slug\n    name: legalName\n  }\n  ... on PersonContributor {\n    firstName: givenName\n    lastName: familyName\n  }\n}\n\nfragment ItemContributionListFragment on ItemContributionConnection {\n  nodes {\n    slug\n    createdAt\n    updatedAt\n    role\n    item {\n      slug\n      title\n      id\n    }\n    id\n  }\n  ...ModelPaginationFragment\n  ...ModelPageCountActionsFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n    totalUnfilteredCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e3f3356127040ade1fc8a570d558e07e';
export default node;
