/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionContributionEditDrawerQueryVariables = {
    collectionContributionSlug: string;
};
export type CollectionContributionEditDrawerQueryResponse = {
    readonly collectionContribution: {
        readonly role: string | null;
        readonly collection: {
            readonly title: string | null;
        };
        readonly " $fragmentRefs": FragmentRefs<"ContributionUpdateFormFragment">;
    } | null;
};
export type CollectionContributionEditDrawerQuery = {
    readonly response: CollectionContributionEditDrawerQueryResponse;
    readonly variables: CollectionContributionEditDrawerQueryVariables;
};



/*
query CollectionContributionEditDrawerQuery(
  $collectionContributionSlug: Slug!
) {
  collectionContribution(slug: $collectionContributionSlug) {
    ...ContributionUpdateFormFragment
    role
    collection {
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
    "name": "collectionContributionSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "collectionContributionSlug"
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
    "name": "CollectionContributionEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CollectionContribution",
        "kind": "LinkedField",
        "name": "collectionContribution",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
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
    "name": "CollectionContributionEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CollectionContribution",
        "kind": "LinkedField",
        "name": "collectionContribution",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
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
    "cacheID": "f9bd955d9603f1b6f05a031c752d8a49",
    "id": null,
    "metadata": {},
    "name": "CollectionContributionEditDrawerQuery",
    "operationKind": "query",
    "text": "query CollectionContributionEditDrawerQuery(\n  $collectionContributionSlug: Slug!\n) {\n  collectionContribution(slug: $collectionContributionSlug) {\n    ...ContributionUpdateFormFragment\n    role\n    collection {\n      title\n      id\n    }\n    id\n  }\n}\n\nfragment ContributionUpdateFormFieldsFragment on AnyContribution {\n  __isAnyContribution: __typename\n  ... on CollectionContribution {\n    role\n  }\n  ... on ItemContribution {\n    role\n  }\n}\n\nfragment ContributionUpdateFormFragment on AnyContribution {\n  __isAnyContribution: __typename\n  ... on CollectionContribution {\n    contributionId: id\n    ...ContributionUpdateFormFieldsFragment\n  }\n  ... on ItemContribution {\n    contributionId: id\n    ...ContributionUpdateFormFieldsFragment\n  }\n}\n"
  }
};
})();
(node as any).hash = '8e6cfb1065d88815da8bbf3d6aa806d1';
export default node;
