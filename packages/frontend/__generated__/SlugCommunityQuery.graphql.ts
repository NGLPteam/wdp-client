/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SlugCommunityQueryVariables = {
    slug: string;
};
export type SlugCommunityQueryResponse = {
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"CommunityLandingLayoutFragment" | "CommunityLayoutFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutAppFragment">;
};
export type SlugCommunityQuery = {
    readonly response: SlugCommunityQueryResponse;
    readonly variables: SlugCommunityQueryVariables;
};



/*
query SlugCommunityQuery(
  $slug: Slug!
) {
  community(slug: $slug) {
    ...CommunityLandingLayoutFragment
    ...CommunityLayoutFragment
    id
  }
  ...CommunityLayoutAppFragment
}

fragment AppBodyFragment on Query {
  ...AppHeaderFragment
}

fragment AppHeaderFragment on Query {
  ...CommunityPickerFragment
}

fragment AppLayoutCommunityFragment on Community {
  ...CommunityHTMLHeadFragment
  ...CommunityNameFragment
  ...CommunityNavBarFragment
  ...CommunityCondensedNavFragment
  ...CommunityPickerActiveFragment
}

fragment AppLayoutFragment on Query {
  ...AppBodyFragment
  ...CommunityCondensedNavAppFragment
  ...CommunityPickerFragment
}

fragment CommunityCondensedNavAppFragment on Query {
  ...CommunityPickerFragment
}

fragment CommunityCondensedNavFragment on Community {
  ...CommunityNavListFragment
  ...SearchButtonFragment
  ...CommunityPickerActiveFragment
}

fragment CommunityHTMLHeadFragment on Community {
  title
}

fragment CommunityHeroFragment on Community {
  title
  tagline
  summary
  heroImage {
    storage
    original {
      alt
      url
      width
      height
    }
  }
  heroImageLayout
}

fragment CommunityLandingLayoutFragment on Community {
  ...CommunityHeroFragment
  journals: collections(schema: "nglp:journal", order: RECENT, page: 1, perPage: 5) {
    ...FeaturedJournalsFragment
  }
  collections(schema: "default:collection", order: RECENT, page: 1, perPage: 8) {
    ...FeaturedCollectionsListFragment
    ...FeaturedCollectionsGridFragment
    pageInfo {
      totalCount
    }
  }
  descendants(schema: "nglp:unit", order: TITLE_ASCENDING) {
    ...UnitListFragment
  }
}

fragment CommunityLayoutAppFragment on Query {
  ...AppLayoutFragment
}

fragment CommunityLayoutFragment on Community {
  ...CommunityHTMLHeadFragment
  ...CommunityNavBarFragment
  ...AppLayoutCommunityFragment
}

fragment CommunityNameFragment on Community {
  title
  slug
}

fragment CommunityNavBarFragment on Community {
  ...CommunityNameFragment
  ...CommunityNavListFragment
  ...SearchButtonFragment
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

fragment CoverImageFragment on ImageAttachment {
  image: large {
    webp {
      url
      alt
      width
      height
    }
  }
}

fragment FeaturedCollectionsGridFragment on CollectionConnection {
  edges {
    node {
      slug
      title
      ...FeaturedCollectionsGridImageFragment
      id
    }
  }
}

fragment FeaturedCollectionsGridImageFragment on Entity {
  __isEntity: __typename
  thumbnail {
    storage
    image: large {
      webp {
        alt
        url
        width
        height
      }
    }
  }
  heroImage {
    storage
    image: large {
      webp {
        alt
        url
        width
        height
      }
    }
  }
}

fragment FeaturedCollectionsListFragment on CollectionConnection {
  edges {
    node {
      slug
      title
      id
    }
  }
}

fragment FeaturedJournalFragment on Collection {
  id
  title
  subtitle
  slug
  updatedAt
  thumbnail {
    ...CoverImageFragment
  }
  issues: descendants(scope: COLLECTION, schema: ["nglp:journal_issue"]) {
    pageInfo {
      totalCount
    }
  }
}

fragment FeaturedJournalsFragment on CollectionConnection {
  edges {
    node {
      slug
      ...FeaturedJournalFragment
      id
    }
  }
  pageInfo {
    totalCount
    perPage
  }
}

fragment SearchButtonFragment on Community {
  ...SearchModalFragment
}

fragment SearchModalFragment on Community {
  slug
  name
  schemaRanks {
    slug
    id
  }
}

fragment UnitListFragment on EntityDescendantConnection {
  edges {
    node {
      descendant {
        __typename
        ... on Collection {
          title
          slug
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
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
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v8 = [
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/)
],
v9 = {
  "kind": "Literal",
  "name": "order",
  "value": "RECENT"
},
v10 = {
  "kind": "Literal",
  "name": "page",
  "value": 1
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v13/*: any*/)
  ],
  "storageKey": null
},
v15 = [
  (v3/*: any*/),
  {
    "alias": "image",
    "args": null,
    "concreteType": "ImageSize",
    "kind": "LinkedField",
    "name": "large",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageDerivative",
        "kind": "LinkedField",
        "name": "webp",
        "plural": false,
        "selections": (v8/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v17 = [
  (v11/*: any*/),
  (v2/*: any*/),
  (v12/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityLandingLayoutFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityLayoutFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CommunityLayoutAppFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tagline",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "summary",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "heroImage",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageOriginal",
                "kind": "LinkedField",
                "name": "original",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "heroImageLayout",
            "storageKey": null
          },
          {
            "alias": "journals",
            "args": [
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "kind": "Literal",
                "name": "perPage",
                "value": 5
              },
              {
                "kind": "Literal",
                "name": "schema",
                "value": "nglp:journal"
              }
            ],
            "concreteType": "CollectionConnection",
            "kind": "LinkedField",
            "name": "collections",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v2/*: any*/),
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
                        "kind": "ScalarField",
                        "name": "updatedAt",
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
                            "alias": "image",
                            "args": null,
                            "concreteType": "ImageSize",
                            "kind": "LinkedField",
                            "name": "large",
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
                                  (v5/*: any*/),
                                  (v4/*: any*/),
                                  (v6/*: any*/),
                                  (v7/*: any*/)
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
                        "alias": "issues",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "schema",
                            "value": [
                              "nglp:journal_issue"
                            ]
                          },
                          {
                            "kind": "Literal",
                            "name": "scope",
                            "value": "COLLECTION"
                          }
                        ],
                        "concreteType": "EntityDescendantConnection",
                        "kind": "LinkedField",
                        "name": "descendants",
                        "plural": false,
                        "selections": [
                          (v14/*: any*/)
                        ],
                        "storageKey": "descendants(schema:[\"nglp:journal_issue\"],scope:\"COLLECTION\")"
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
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "perPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "collections(order:\"RECENT\",page:1,perPage:5,schema:\"nglp:journal\")"
          },
          {
            "alias": null,
            "args": [
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "kind": "Literal",
                "name": "perPage",
                "value": 8
              },
              {
                "kind": "Literal",
                "name": "schema",
                "value": "default:collection"
              }
            ],
            "concreteType": "CollectionConnection",
            "kind": "LinkedField",
            "name": "collections",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v2/*: any*/),
                      (v12/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ImageAttachment",
                            "kind": "LinkedField",
                            "name": "thumbnail",
                            "plural": false,
                            "selections": (v15/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ImageAttachment",
                            "kind": "LinkedField",
                            "name": "heroImage",
                            "plural": false,
                            "selections": (v15/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v14/*: any*/)
            ],
            "storageKey": "collections(order:\"RECENT\",page:1,perPage:8,schema:\"default:collection\")"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "order",
                "value": "TITLE_ASCENDING"
              },
              {
                "kind": "Literal",
                "name": "schema",
                "value": "nglp:unit"
              }
            ],
            "concreteType": "EntityDescendantConnection",
            "kind": "LinkedField",
            "name": "descendants",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "EntityDescendantEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EntityDescendant",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "descendant",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__typename",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v2/*: any*/),
                              (v11/*: any*/)
                            ],
                            "type": "Collection",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v12/*: any*/)
                            ],
                            "type": "Node",
                            "abstractKey": "__isNode"
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
            "storageKey": "descendants(order:\"TITLE_ASCENDING\",schema:\"nglp:unit\")"
          },
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "HierarchicalSchemaRank",
            "kind": "LinkedField",
            "name": "schemaRanks",
            "plural": true,
            "selections": [
              (v11/*: any*/),
              (v16/*: any*/),
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
              (v12/*: any*/)
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
                    "selections": (v17/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v16/*: any*/),
          (v12/*: any*/)
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
                "selections": (v17/*: any*/),
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
    "cacheID": "6ebeb58eba14520af782235101ee7951",
    "id": null,
    "metadata": {},
    "name": "SlugCommunityQuery",
    "operationKind": "query",
    "text": "query SlugCommunityQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    ...CommunityLandingLayoutFragment\n    ...CommunityLayoutFragment\n    id\n  }\n  ...CommunityLayoutAppFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment AppLayoutCommunityFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNameFragment\n  ...CommunityNavBarFragment\n  ...CommunityCondensedNavFragment\n  ...CommunityPickerActiveFragment\n}\n\nfragment AppLayoutFragment on Query {\n  ...AppBodyFragment\n  ...CommunityCondensedNavAppFragment\n  ...CommunityPickerFragment\n}\n\nfragment CommunityCondensedNavAppFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment CommunityCondensedNavFragment on Community {\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n  ...CommunityPickerActiveFragment\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityHeroFragment on Community {\n  title\n  tagline\n  summary\n  heroImage {\n    storage\n    original {\n      alt\n      url\n      width\n      height\n    }\n  }\n  heroImageLayout\n}\n\nfragment CommunityLandingLayoutFragment on Community {\n  ...CommunityHeroFragment\n  journals: collections(schema: \"nglp:journal\", order: RECENT, page: 1, perPage: 5) {\n    ...FeaturedJournalsFragment\n  }\n  collections(schema: \"default:collection\", order: RECENT, page: 1, perPage: 8) {\n    ...FeaturedCollectionsListFragment\n    ...FeaturedCollectionsGridFragment\n    pageInfo {\n      totalCount\n    }\n  }\n  descendants(schema: \"nglp:unit\", order: TITLE_ASCENDING) {\n    ...UnitListFragment\n  }\n}\n\nfragment CommunityLayoutAppFragment on Query {\n  ...AppLayoutFragment\n}\n\nfragment CommunityLayoutFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNavBarFragment\n  ...AppLayoutCommunityFragment\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    kind\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerActiveFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment FeaturedCollectionsGridFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      title\n      ...FeaturedCollectionsGridImageFragment\n      id\n    }\n  }\n}\n\nfragment FeaturedCollectionsGridImageFragment on Entity {\n  __isEntity: __typename\n  thumbnail {\n    storage\n    image: large {\n      webp {\n        alt\n        url\n        width\n        height\n      }\n    }\n  }\n  heroImage {\n    storage\n    image: large {\n      webp {\n        alt\n        url\n        width\n        height\n      }\n    }\n  }\n}\n\nfragment FeaturedCollectionsListFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      title\n      id\n    }\n  }\n}\n\nfragment FeaturedJournalFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  updatedAt\n  thumbnail {\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment FeaturedJournalsFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...FeaturedJournalFragment\n      id\n    }\n  }\n  pageInfo {\n    totalCount\n    perPage\n  }\n}\n\nfragment SearchButtonFragment on Community {\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Community {\n  slug\n  name\n  schemaRanks {\n    slug\n    id\n  }\n}\n\nfragment UnitListFragment on EntityDescendantConnection {\n  edges {\n    node {\n      descendant {\n        __typename\n        ... on Collection {\n          title\n          slug\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '94e8c61d5a38a2efe707abf7f873b776';
export default node;
