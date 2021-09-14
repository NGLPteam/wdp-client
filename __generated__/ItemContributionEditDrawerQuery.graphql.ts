/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemContributionEditDrawerQueryVariables = {
    itemContributionSlug: string;
};
export type ItemContributionEditDrawerQueryResponse = {
    readonly itemContribution: {
        readonly role: string | null;
        readonly item: {
            readonly title: string | null;
        };
        readonly " $fragmentRefs": FragmentRefs<"ContributionUpdateFormFragment">;
    } | null;
};
export type ItemContributionEditDrawerQuery = {
    readonly response: ItemContributionEditDrawerQueryResponse;
    readonly variables: ItemContributionEditDrawerQueryVariables;
};



/*
query ItemContributionEditDrawerQuery(
  $itemContributionSlug: Slug!
) {
  itemContribution(slug: $itemContributionSlug) {
    ...ContributionUpdateFormFragment
    role
    item {
      title
      id
    }
    id
  }
}

fragment ContributionUpdateFormFieldsFragment on AnyContribution {
  __isAnyContribution: __typename
  ... on CollectionContribution {
    role
  }
  ... on ItemContribution {
    role
  }
}

fragment ContributionUpdateFormFragment on AnyContribution {
  __isAnyContribution: __typename
  __typename
  ... on CollectionContribution {
    contributionId: id
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
    collection {
      title
      id
    }
    ...ContributionUpdateFormFieldsFragment
  }
  ... on ItemContribution {
    contributionId: id
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
      title
      id
    }
    title
    ...ContributionUpdateFormFieldsFragment
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "itemContributionSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "itemContributionSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
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
  "name": "id",
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": "contributionId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "contributor",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v8/*: any*/),
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
    {
      "kind": "InlineFragment",
      "selections": [
        (v8/*: any*/),
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
        }
      ],
      "type": "PersonContributor",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v4/*: any*/)
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemContributionEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemContribution",
        "kind": "LinkedField",
        "name": "itemContribution",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContributionUpdateFormFragment"
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
    "name": "ItemContributionEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemContribution",
        "kind": "LinkedField",
        "name": "itemContribution",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v6/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v7/*: any*/),
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "collection",
                    "plural": false,
                    "selections": (v5/*: any*/),
                    "storageKey": null
                  }
                ],
                "type": "CollectionContribution",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v7/*: any*/),
                  (v9/*: any*/),
                  (v3/*: any*/)
                ],
                "type": "ItemContribution",
                "abstractKey": null
              }
            ],
            "type": "AnyContribution",
            "abstractKey": "__isAnyContribution"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fcf35e5e8e2c74566516b5e237d0da3c",
    "id": null,
    "metadata": {},
    "name": "ItemContributionEditDrawerQuery",
    "operationKind": "query",
    "text": "query ItemContributionEditDrawerQuery(\n  $itemContributionSlug: Slug!\n) {\n  itemContribution(slug: $itemContributionSlug) {\n    ...ContributionUpdateFormFragment\n    role\n    item {\n      title\n      id\n    }\n    id\n  }\n}\n\nfragment ContributionUpdateFormFieldsFragment on AnyContribution {\n  __isAnyContribution: __typename\n  ... on CollectionContribution {\n    role\n  }\n  ... on ItemContribution {\n    role\n  }\n}\n\nfragment ContributionUpdateFormFragment on AnyContribution {\n  __isAnyContribution: __typename\n  __typename\n  ... on CollectionContribution {\n    contributionId: id\n    contributor {\n      __typename\n      ... on OrganizationContributor {\n        slug\n        legalName\n      }\n      ... on PersonContributor {\n        slug\n        givenName\n        familyName\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    collection {\n      title\n      id\n    }\n    ...ContributionUpdateFormFieldsFragment\n  }\n  ... on ItemContribution {\n    contributionId: id\n    contributor {\n      __typename\n      ... on OrganizationContributor {\n        slug\n        legalName\n      }\n      ... on PersonContributor {\n        slug\n        givenName\n        familyName\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    item {\n      title\n      id\n    }\n    title\n    ...ContributionUpdateFormFieldsFragment\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a10feb461954ac21ed84d789a148b4ba';
export default node;
