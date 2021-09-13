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
  ... on CollectionContribution {
    contributionId: id
    ...ContributionUpdateFormFieldsFragment
  }
  ... on ItemContribution {
    contributionId: id
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
  {
    "alias": "contributionId",
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
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
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": (v5/*: any*/),
                "type": "CollectionContribution",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v5/*: any*/),
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
    "cacheID": "6183cc127d42b606fc34aeee817e5480",
    "id": null,
    "metadata": {},
    "name": "ItemContributionEditDrawerQuery",
    "operationKind": "query",
    "text": "query ItemContributionEditDrawerQuery(\n  $itemContributionSlug: Slug!\n) {\n  itemContribution(slug: $itemContributionSlug) {\n    ...ContributionUpdateFormFragment\n    role\n    item {\n      title\n      id\n    }\n    id\n  }\n}\n\nfragment ContributionUpdateFormFieldsFragment on AnyContribution {\n  __isAnyContribution: __typename\n  ... on CollectionContribution {\n    role\n  }\n  ... on ItemContribution {\n    role\n  }\n}\n\nfragment ContributionUpdateFormFragment on AnyContribution {\n  __isAnyContribution: __typename\n  ... on CollectionContribution {\n    contributionId: id\n    ...ContributionUpdateFormFieldsFragment\n  }\n  ... on ItemContribution {\n    contributionId: id\n    ...ContributionUpdateFormFieldsFragment\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a10feb461954ac21ed84d789a148b4ba';
export default node;
