/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueSummaryQueryVariables = {
    slug: string;
    order: string;
};
export type IssueSummaryQueryResponse = {
    readonly collection: {
        readonly ordering: {
            readonly children: {
                readonly " $fragmentRefs": FragmentRefs<"IssueSummaryOrderingListFragment">;
            };
        } | null;
    } | null;
};
export type IssueSummaryQuery = {
    readonly response: IssueSummaryQueryResponse;
    readonly variables: IssueSummaryQueryVariables;
};



/*
query IssueSummaryQuery(
  $slug: Slug!
  $order: String!
) {
  collection(slug: $slug) {
    ordering(identifier: $order) {
      children {
        ...IssueSummaryOrderingListFragment
      }
      id
    }
    id
  }
}

fragment ContributorNameFragment on AnyContributor {
  __isAnyContributor: __typename
  ... on PersonContributor {
    __typename
    familyName
    givenName
  }
  ... on OrganizationContributor {
    __typename
    legalName
  }
}

fragment ContributorsListFragment on ItemContributionConnection {
  edges {
    node {
      contributor {
        __typename
        ... on Sluggable {
          __isSluggable: __typename
          slug
        }
        ...ContributorNameFragment
        ... on Node {
          __isNode: __typename
          id
        }
      }
      id
    }
  }
}

fragment IssueSummaryItemFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Item {
    title
    slug
    summary
    published {
      ...PrecisionDateFragment
    }
    contributions {
      ...ContributorsListFragment
    }
    thumbnail {
      storage
      ...SquareThumbnailFragment
    }
  }
  ... on Collection {
    title
    slug
    summary
    published {
      ...PrecisionDateFragment
    }
    thumbnail {
      ...SquareThumbnailFragment
    }
  }
}

fragment IssueSummaryOrderingListFragment on OrderingEntryConnection {
  edges {
    node {
      entry {
        __typename
        ... on Item {
          ...IssueSummaryItemFragment
        }
        ... on Collection {
          ...IssueSummaryItemFragment
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
      id
    }
  }
}

fragment PrecisionDateFragment on VariablePrecisionDate {
  precision
  value
}

fragment SquareThumbnailFragment on ImageAttachment {
  image: medium {
    webp {
      alt
      url
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "order"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v2 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "identifier",
    "variableName": "order"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "precision",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    }
  ],
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
v11 = {
  "alias": "image",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "medium",
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
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v12 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemContributionConnection",
            "kind": "LinkedField",
            "name": "contributions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemContributionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemContribution",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "contributor",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isAnyContributor"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v6/*: any*/)
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
                                "name": "familyName",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "givenName",
                                "storageKey": null
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
                                "name": "legalName",
                                "storageKey": null
                              }
                            ],
                            "type": "OrganizationContributor",
                            "abstractKey": null
                          },
                          (v10/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/)
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
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "thumbnail",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "storage",
                "storageKey": null
              },
              (v11/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "type": "Item",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "thumbnail",
            "plural": false,
            "selections": [
              (v11/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "type": "Collection",
        "abstractKey": null
      }
    ],
    "type": "AnyEntity",
    "abstractKey": "__isAnyEntity"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueSummaryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "ordering",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderingEntryConnection",
                "kind": "LinkedField",
                "name": "children",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "IssueSummaryOrderingListFragment"
                  }
                ],
                "storageKey": null
              }
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "IssueSummaryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "ordering",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderingEntryConnection",
                "kind": "LinkedField",
                "name": "children",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "OrderingEntryEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "OrderingEntry",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "entry",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v12/*: any*/),
                                "type": "Item",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v12/*: any*/),
                                "type": "Collection",
                                "abstractKey": null
                              },
                              (v10/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          (v9/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b0667d2f00ed60498de278b93d178966",
    "id": null,
    "metadata": {},
    "name": "IssueSummaryQuery",
    "operationKind": "query",
    "text": "query IssueSummaryQuery(\n  $slug: Slug!\n  $order: String!\n) {\n  collection(slug: $slug) {\n    ordering(identifier: $order) {\n      children {\n        ...IssueSummaryOrderingListFragment\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  edges {\n    node {\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment IssueSummaryItemFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    title\n    slug\n    summary\n    published {\n      ...PrecisionDateFragment\n    }\n    contributions {\n      ...ContributorsListFragment\n    }\n    thumbnail {\n      storage\n      ...SquareThumbnailFragment\n    }\n  }\n  ... on Collection {\n    title\n    slug\n    summary\n    published {\n      ...PrecisionDateFragment\n    }\n    thumbnail {\n      ...SquareThumbnailFragment\n    }\n  }\n}\n\nfragment IssueSummaryOrderingListFragment on OrderingEntryConnection {\n  edges {\n    node {\n      entry {\n        __typename\n        ... on Item {\n          ...IssueSummaryItemFragment\n        }\n        ... on Collection {\n          ...IssueSummaryItemFragment\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  image: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '15084d898a91a6b266655cc11ba9e842';
export default node;
