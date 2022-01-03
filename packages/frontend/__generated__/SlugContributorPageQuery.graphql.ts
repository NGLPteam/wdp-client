/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SlugContributorPageQueryVariables = {
    slug: string;
};
export type SlugContributorPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ContributorDetailLayoutFragment">;
};
export type SlugContributorPageQuery = {
    readonly response: SlugContributorPageQueryResponse;
    readonly variables: SlugContributorPageQueryVariables;
};



/*
query SlugContributorPageQuery(
  $slug: Slug!
) {
  ...ContributorDetailLayoutFragment
}

fragment AppBodyFragment on Query {
  ...AppHeaderFragment
  ...AppFooterFragment
}

fragment AppFooterFragment on Query {
  ...CommunityPickerFragment
}

fragment AppHeaderFragment on Query {
  ...CommunityPickerFragment
  ...MobileMenuFragment
}

fragment BaseLayoutFragment on Query {
  ...AppBodyFragment
}

fragment CommunityPickerFragment on Query {
  communities {
    edges {
      node {
        slug
        title
        id
      }
    }
  }
}

fragment ContributorAvatarFragment on ImageAttachment {
  small {
    webp {
      alt
      url
    }
  }
}

fragment ContributorDetailFragment on Contributor {
  __isContributor: __typename
  ...ContributorNameFragment
  bio
  collectionContributionCount
  collectionContributions {
    nodes {
      role
      collection {
        ...EntitySummaryFragment
        id
      }
      id
    }
  }
  itemContributionCount
  itemContributions {
    nodes {
      role
      item {
        ...EntitySummaryFragment
        id
      }
      id
    }
  }
  image {
    storage
    ...ContributorAvatarFragment
  }
  links {
    title
    url
  }
  ... on PersonContributor {
    affiliation
    title
  }
}

fragment ContributorDetailLayoutFragment on Query {
  contributor(slug: $slug) {
    __typename
    ...ContributorHTMLHeadFragment
    ...ContributorDetailFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
  ...BaseLayoutFragment
}

fragment ContributorHTMLHeadFragment on Contributor {
  __isContributor: __typename
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

fragment EntitySummaryFragment on Entity {
  __isEntity: __typename
  __typename
  title
  subtitle
  thumbnail {
    storage
    ...SquareThumbnailFragment
  }
  ... on ReferencesGlobalEntityDates {
    __isReferencesGlobalEntityDates: __typename
    published {
      value
      ...PrecisionDateFragment
    }
  }
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
  ... on ChildEntity {
    __isChildEntity: __typename
    summary
  }
}

fragment MobileMenuFragment on Query {
  ...CommunityPickerFragment
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
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
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v7 = [
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
      (v6/*: any*/)
    ],
    "storageKey": null
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v9 = [
  (v3/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v1/*: any*/),
      (v4/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "subtitle",
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
          (v5/*: any*/),
          {
            "alias": "image",
            "args": null,
            "concreteType": "ImageSize",
            "kind": "LinkedField",
            "name": "medium",
            "plural": false,
            "selections": (v7/*: any*/),
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
            "concreteType": "VariablePrecisionDate",
            "kind": "LinkedField",
            "name": "published",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "value",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "precision",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "type": "ReferencesGlobalEntityDates",
        "abstractKey": "__isReferencesGlobalEntityDates"
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v8/*: any*/)
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
            "name": "summary",
            "storageKey": null
          }
        ],
        "type": "ChildEntity",
        "abstractKey": "__isChildEntity"
      }
    ],
    "type": "Entity",
    "abstractKey": "__isEntity"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugContributorPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ContributorDetailLayoutFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugContributorPageQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "slug",
            "variableName": "slug"
          }
        ],
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bio",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "collectionContributionCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
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
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Collection",
                        "kind": "LinkedField",
                        "name": "collection",
                        "plural": false,
                        "selections": (v9/*: any*/),
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "itemContributionCount",
                "storageKey": null
              },
              {
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
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Item",
                        "kind": "LinkedField",
                        "name": "item",
                        "plural": false,
                        "selections": (v9/*: any*/),
                        "storageKey": null
                      },
                      (v3/*: any*/)
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
                "name": "image",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageSize",
                    "kind": "LinkedField",
                    "name": "small",
                    "plural": false,
                    "selections": (v7/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ContributorLink",
                "kind": "LinkedField",
                "name": "links",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "affiliation",
                    "storageKey": null
                  },
                  (v4/*: any*/)
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
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isAnyContributor"
              }
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
        "alias": null,
        "args": null,
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CommunityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Community",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v4/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "87c0830a8598f51db29f12d7a6df9be5",
    "id": null,
    "metadata": {},
    "name": "SlugContributorPageQuery",
    "operationKind": "query",
    "text": "query SlugContributorPageQuery(\n  $slug: Slug!\n) {\n  ...ContributorDetailLayoutFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...CommunityPickerFragment\n  ...MobileMenuFragment\n}\n\nfragment BaseLayoutFragment on Query {\n  ...AppBodyFragment\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorDetailFragment on Contributor {\n  __isContributor: __typename\n  ...ContributorNameFragment\n  bio\n  collectionContributionCount\n  collectionContributions {\n    nodes {\n      role\n      collection {\n        ...EntitySummaryFragment\n        id\n      }\n      id\n    }\n  }\n  itemContributionCount\n  itemContributions {\n    nodes {\n      role\n      item {\n        ...EntitySummaryFragment\n        id\n      }\n      id\n    }\n  }\n  image {\n    storage\n    ...ContributorAvatarFragment\n  }\n  links {\n    title\n    url\n  }\n  ... on PersonContributor {\n    affiliation\n    title\n  }\n}\n\nfragment ContributorDetailLayoutFragment on Query {\n  contributor(slug: $slug) {\n    __typename\n    ...ContributorHTMLHeadFragment\n    ...ContributorDetailFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ...BaseLayoutFragment\n}\n\nfragment ContributorHTMLHeadFragment on Contributor {\n  __isContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment EntitySummaryFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  ... on ReferencesGlobalEntityDates {\n    __isReferencesGlobalEntityDates: __typename\n    published {\n      value\n      ...PrecisionDateFragment\n    }\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on ChildEntity {\n    __isChildEntity: __typename\n    summary\n  }\n}\n\nfragment MobileMenuFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  image: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '32a71e8701cc4a09c2724ea1d0bfb4e6';
export default node;
