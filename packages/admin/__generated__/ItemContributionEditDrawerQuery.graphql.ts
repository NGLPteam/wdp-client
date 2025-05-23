/**
 * @generated SignedSource<<7123a5c97912653710a4f8697b7471fc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemContributionEditDrawerQuery$variables = {
  itemContributionSlug: string;
};
export type ItemContributionEditDrawerQuery$data = {
  readonly itemContribution: {
    readonly id: string;
    readonly item: {
      readonly title: string;
    };
    readonly " $fragmentSpreads": FragmentRefs<"ContributionUpdateFormFragment">;
  } | null | undefined;
};
export type ItemContributionEditDrawerQuery = {
  response: ItemContributionEditDrawerQuery$data;
  variables: ItemContributionEditDrawerQuery$variables;
};

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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  (v2/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": "contributionId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "contributor",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v7/*: any*/),
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
        (v7/*: any*/),
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
        (v2/*: any*/)
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    }
  ],
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "ControlledVocabularyItem",
  "kind": "LinkedField",
  "name": "contributionRole",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "innerPosition",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "outerPosition",
    "storageKey": null
  }
],
v11 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v10/*: any*/),
      "type": "CollectionContribution",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v10/*: any*/),
      "type": "ItemContribution",
      "abstractKey": null
    }
  ],
  "type": "AnyContribution",
  "abstractKey": "__isAnyContribution"
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContributionUpdateFormFragment"
          },
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
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v6/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "collection",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  },
                  (v9/*: any*/),
                  (v11/*: any*/)
                ],
                "type": "CollectionContribution",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v6/*: any*/),
                  (v8/*: any*/),
                  (v3/*: any*/),
                  (v9/*: any*/),
                  (v11/*: any*/)
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
    "cacheID": "eeb7aa8fa459a6f664ba6ebc87ffc6e1",
    "id": null,
    "metadata": {},
    "name": "ItemContributionEditDrawerQuery",
    "operationKind": "query",
    "text": "query ItemContributionEditDrawerQuery(\n  $itemContributionSlug: Slug!\n) {\n  itemContribution(slug: $itemContributionSlug) {\n    ...ContributionUpdateFormFragment\n    id\n    item {\n      title\n      id\n    }\n  }\n}\n\nfragment ContributionUpdateFormFieldsFragment on AnyContribution {\n  __isAnyContribution: __typename\n  ... on CollectionContribution {\n    innerPosition\n    outerPosition\n  }\n  ... on ItemContribution {\n    innerPosition\n    outerPosition\n  }\n}\n\nfragment ContributionUpdateFormFragment on AnyContribution {\n  __isAnyContribution: __typename\n  __typename\n  ... on CollectionContribution {\n    contributionId: id\n    contributor {\n      __typename\n      ... on OrganizationContributor {\n        slug\n        legalName\n      }\n      ... on PersonContributor {\n        slug\n        givenName\n        familyName\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    collection {\n      title\n      id\n    }\n    contributionRole {\n      id\n      label\n    }\n    ...ContributionUpdateFormFieldsFragment\n  }\n  ... on ItemContribution {\n    contributionId: id\n    contributor {\n      __typename\n      ... on OrganizationContributor {\n        slug\n        legalName\n      }\n      ... on PersonContributor {\n        slug\n        givenName\n        familyName\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    item {\n      title\n      id\n    }\n    title\n    contributionRole {\n      id\n      label\n    }\n    ...ContributionUpdateFormFieldsFragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "80ea6c8d12ec8b974f8283257a26062c";

export default node;
