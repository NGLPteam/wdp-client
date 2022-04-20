/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SlugContributorCollectionPageQueryVariables = {
    slug: string;
    collection: string;
};
export type SlugContributorCollectionPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ContributorCollectionDetailLayoutFragment">;
};
export type SlugContributorCollectionPageQuery = {
    readonly response: SlugContributorCollectionPageQueryResponse;
    readonly variables: SlugContributorCollectionPageQueryVariables;
};



/*
query SlugContributorCollectionPageQuery(
  $slug: Slug!
  $collection: Slug!
) {
  ...ContributorCollectionDetailLayoutFragment
}

fragment AppBodyCommunityFragment on Community {
  ...AppHeaderCommunityFragment
  ...AppFooterCommunityFragment
}

fragment AppFooterCommunityFragment on Community {
  ...CommunityPickerActiveFragment
  ...CommunityNameFragment
}

fragment AppHeaderCommunityFragment on Community {
  ...CommunityPickerActiveFragment
  ...CommunityNavListFragment
  ...CommunityNameFragment
}

fragment AppLayoutCommunityFragment on Community {
  ...CommunityHTMLHeadFragment
  ...CommunityNavBarFragment
  ...AppBodyCommunityFragment
}

fragment CommunityHTMLHeadFragment on Community {
  title
}

fragment CommunityLogoFragment on ImageAttachment {
  storage
  original {
    url
    width
    height
  }
}

fragment CommunityNameFragment on Community {
  title
  slug
  logo {
    storage
    original {
      width
      height
    }
    ...CommunityLogoFragment
  }
}

fragment CommunityNavBarFragment on Community {
  ...CommunityNameFragment
  ...CommunityNavListFragment
}

fragment CommunityNavListFragment on Community {
  slug
  schemaRanks {
    slug
    name
    count
    kind
    id
  }
  pages {
    edges {
      node {
        slug
        title
        id
      }
    }
  }
}

fragment CommunityPickerActiveFragment on Community {
  title
  slug
}

fragment ContributionSummaryEntityFragment on Entity {
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
  ... on Item {
    summary
  }
  ... on Collection {
    summary
  }
}

fragment ContributionSummaryFragment on AnyContribution {
  __isAnyContribution: __typename
  ... on Contribution {
    __isContribution: __typename
    role
  }
  ... on CollectionContribution {
    entity: collection {
      ...ContributionSummaryEntityFragment
      id
    }
  }
  ... on ItemContribution {
    entity: item {
      ...ContributionSummaryEntityFragment
      id
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

fragment ContributorCollectionDetailLayoutFragment on Query {
  contributor(slug: $slug) {
    __typename
    ...ContributorHTMLHeadFragment
    ...ContributorDetailFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
  collection(slug: $collection) {
    ...ContributorDetailNavFragment
    community {
      ...AppLayoutCommunityFragment
      id
    }
    id
  }
}

fragment ContributorDetailFragment on Contributor {
  __isContributor: __typename
  ...ContributorNameFragment
  bio
  orcid
  collectionContributions {
    nodes {
      ...ContributionSummaryFragment
      id
    }
  }
  itemContributions {
    nodes {
      ...ContributionSummaryFragment
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

fragment ContributorDetailNavFragment on AnyEntity {
  __isAnyEntity: __typename
  __typename
  ... on Entity {
    __isEntity: __typename
    title
  }
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
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
  "name": "collection"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
v9 = {
  "kind": "InlineFragment",
  "selections": [
    (v8/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v10 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "summary",
    "storageKey": null
  }
],
v11 = [
  (v3/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v2/*: any*/),
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
      (v9/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": (v10/*: any*/),
        "type": "Item",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v10/*: any*/),
        "type": "Collection",
        "abstractKey": null
      }
    ],
    "type": "Entity",
    "abstractKey": "__isEntity"
  }
],
v12 = [
  (v3/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "role",
            "storageKey": null
          }
        ],
        "type": "Contribution",
        "abstractKey": "__isContribution"
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": "entity",
            "args": null,
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          }
        ],
        "type": "CollectionContribution",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": "entity",
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          }
        ],
        "type": "ItemContribution",
        "abstractKey": null
      }
    ],
    "type": "AnyContribution",
    "abstractKey": "__isAnyContribution"
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
    "name": "SlugContributorCollectionPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ContributorCollectionDetailLayoutFragment"
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
    "name": "SlugContributorCollectionPageQuery",
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
          (v2/*: any*/),
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
                "name": "orcid",
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
                    "selections": (v12/*: any*/),
                    "storageKey": null
                  }
                ],
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
                    "selections": (v12/*: any*/),
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
        "args": [
          {
            "kind": "Variable",
            "name": "slug",
            "variableName": "collection"
          }
        ],
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "logo",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageOriginal",
                    "kind": "LinkedField",
                    "name": "original",
                    "plural": false,
                    "selections": [
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
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "HierarchicalSchemaRank",
                "kind": "LinkedField",
                "name": "schemaRanks",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "count",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "kind",
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageConnection",
                "kind": "LinkedField",
                "name": "pages",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Page",
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
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/)
                ],
                "type": "Entity",
                "abstractKey": "__isEntity"
              },
              (v9/*: any*/)
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "494e1d205c0253a96ced83e4c96a1339",
    "id": null,
    "metadata": {},
    "name": "SlugContributorCollectionPageQuery",
    "operationKind": "query",
    "text": "query SlugContributorCollectionPageQuery(\n  $slug: Slug!\n  $collection: Slug!\n) {\n  ...ContributorCollectionDetailLayoutFragment\n}\n\nfragment AppBodyCommunityFragment on Community {\n  ...AppHeaderCommunityFragment\n  ...AppFooterCommunityFragment\n}\n\nfragment AppFooterCommunityFragment on Community {\n  ...CommunityPickerActiveFragment\n  ...CommunityNameFragment\n}\n\nfragment AppHeaderCommunityFragment on Community {\n  ...CommunityPickerActiveFragment\n  ...CommunityNavListFragment\n  ...CommunityNameFragment\n}\n\nfragment AppLayoutCommunityFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNavBarFragment\n  ...AppBodyCommunityFragment\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityLogoFragment on ImageAttachment {\n  storage\n  original {\n    url\n    width\n    height\n  }\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      width\n      height\n    }\n    ...CommunityLogoFragment\n  }\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    kind\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerActiveFragment on Community {\n  title\n  slug\n}\n\nfragment ContributionSummaryEntityFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  ... on ReferencesGlobalEntityDates {\n    __isReferencesGlobalEntityDates: __typename\n    published {\n      value\n      ...PrecisionDateFragment\n    }\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Item {\n    summary\n  }\n  ... on Collection {\n    summary\n  }\n}\n\nfragment ContributionSummaryFragment on AnyContribution {\n  __isAnyContribution: __typename\n  ... on Contribution {\n    __isContribution: __typename\n    role\n  }\n  ... on CollectionContribution {\n    entity: collection {\n      ...ContributionSummaryEntityFragment\n      id\n    }\n  }\n  ... on ItemContribution {\n    entity: item {\n      ...ContributionSummaryEntityFragment\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorCollectionDetailLayoutFragment on Query {\n  contributor(slug: $slug) {\n    __typename\n    ...ContributorHTMLHeadFragment\n    ...ContributorDetailFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  collection(slug: $collection) {\n    ...ContributorDetailNavFragment\n    community {\n      ...AppLayoutCommunityFragment\n      id\n    }\n    id\n  }\n}\n\nfragment ContributorDetailFragment on Contributor {\n  __isContributor: __typename\n  ...ContributorNameFragment\n  bio\n  orcid\n  collectionContributions {\n    nodes {\n      ...ContributionSummaryFragment\n      id\n    }\n  }\n  itemContributions {\n    nodes {\n      ...ContributionSummaryFragment\n      id\n    }\n  }\n  image {\n    storage\n    ...ContributorAvatarFragment\n  }\n  links {\n    title\n    url\n  }\n  ... on PersonContributor {\n    affiliation\n    title\n  }\n}\n\nfragment ContributorDetailNavFragment on AnyEntity {\n  __isAnyEntity: __typename\n  __typename\n  ... on Entity {\n    __isEntity: __typename\n    title\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment ContributorHTMLHeadFragment on Contributor {\n  __isContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  image: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '51e57089793fb3bf3480815e850a0755';
export default node;
