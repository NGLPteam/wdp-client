/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityDescendantOrder = "PUBLISHED_ASCENDING" | "PUBLISHED_DESCENDING" | "TITLE_ASCENDING" | "TITLE_DESCENDING" | "%future added value";
export type SchemaCommunityCollectionsQueryVariables = {
    slug: string;
    schema: string;
    page?: number | null | undefined;
    order: EntityDescendantOrder;
};
export type SchemaCommunityCollectionsQueryResponse = {
    readonly community: {
        readonly descendants: {
            readonly " $fragmentRefs": FragmentRefs<"EntityDescendantsLayoutFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutAppFragment">;
};
export type SchemaCommunityCollectionsQuery = {
    readonly response: SchemaCommunityCollectionsQueryResponse;
    readonly variables: SchemaCommunityCollectionsQueryVariables;
};



/*
query SchemaCommunityCollectionsQuery(
  $slug: Slug!
  $schema: String!
  $page: Int
  $order: EntityDescendantOrder!
) {
  community(slug: $slug) {
    ...CommunityLayoutFragment
    descendants(scope: COLLECTION, order: $order, schema: [$schema], page: $page) {
      ...EntityDescendantsLayoutFragment
    }
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

fragment ArticleSummaryFragment_2PIB2P on Item {
  __typename
  title
  subtitle
  thumbnail {
    storage
    ...SquareThumbnailFragment
  }
  slug
  summary
  contributions {
    ...ContributorsListFragment
  }
  published {
    value
    ...PrecisionDateFragment
  }
  journal: ancestorOfType(schema: "nglp:journal") {
    __typename
    ... on Collection {
      title
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment BrowseListLayoutFragment on PageInfo {
  ...PaginationFragment
  ...PageCountFragment
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
  logo {
    storage
    original {
      url
      width
      height
    }
  }
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
  pageInfo {
    totalCount
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

fragment EntityDescendantsLayoutFragment on EntityDescendantConnection {
  edges {
    node {
      descendant {
        __typename
        ... on Sluggable {
          __isSluggable: __typename
          slug
        }
        ... on Entity {
          __isEntity: __typename
          ...EntitySummaryFactoryFragment_2PIB2P
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
  pageInfo {
    ...BrowseListLayoutFragment
  }
}

fragment EntitySummaryFactoryFragment_2PIB2P on Entity {
  __isEntity: __typename
  schemaDefinition {
    identifier
    id
  }
  ...EntitySummaryFragment
  ...ArticleSummaryFragment_2PIB2P
  ...IssueSummaryFragment_2PIB2P
  ...VolumeSummaryFragment_2PIB2P
  ...JournalSummaryFragment
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
  ... on Item {
    summary
  }
  ... on Collection {
    summary
  }
}

fragment IssueSummaryFragment_2PIB2P on Collection {
  id
  title
  subtitle
  slug
  summary
  cover: thumbnail {
    ...CoverImageFragment
  }
  published {
    value
    ...PrecisionDateFragment
  }
  volume: ancestorOfType(schema: "nglp:journal_volume") {
    __typename
    ... on Collection {
      title
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
  journal: ancestorOfType(schema: "nglp:journal") {
    __typename
    ... on Collection {
      title
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
  properties: schemaProperties {
    __typename
    ... on StringProperty {
      content
      path
    }
  }
  articles: items(schema: "nglp:journal_article") {
    pageInfo {
      totalCount
    }
  }
}

fragment JournalSummaryFragment on Collection {
  __typename
  id
  slug
  title
  subtitle
  updatedAt
  summary
  cover: thumbnail {
    storage
    ...CoverImageFragment
  }
  issues: descendants(scope: COLLECTION, schema: ["nglp:journal_issue"]) {
    pageInfo {
      totalCount
    }
  }
}

fragment PageCountFragment on PageInfo {
  totalCount
  page
  perPage
}

fragment PaginationFragment on PageInfo {
  page
  pageCount
}

fragment PrecisionDateFragment on VariablePrecisionDate {
  precision
  value
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

fragment SquareThumbnailFragment on ImageAttachment {
  image: medium {
    webp {
      alt
      url
    }
  }
}

fragment VolumeSummaryFragment_2PIB2P on Collection {
  id
  title
  subtitle
  slug
  summary
  cover: thumbnail {
    ...CoverImageFragment
  }
  published {
    value
    ...PrecisionDateFragment
  }
  journal: ancestorOfType(schema: "nglp:journal") {
    __typename
    ... on Collection {
      title
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
  properties: schemaProperties {
    __typename
    ... on StringProperty {
      content
      path
    }
  }
  articles: items(schema: "nglp:journal_article") {
    pageInfo {
      totalCount
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
  "name": "page"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "schema"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v4 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v5 = {
  "kind": "Literal",
  "name": "scope",
  "value": "COLLECTION"
},
v6 = [
  {
    "kind": "Variable",
    "name": "order",
    "variableName": "order"
  },
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "page"
  },
  {
    "items": [
      {
        "kind": "Variable",
        "name": "schema.0",
        "variableName": "schema"
      }
    ],
    "kind": "ListValue",
    "name": "schema"
  },
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v15 = [
  (v8/*: any*/),
  (v7/*: any*/),
  (v14/*: any*/)
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v17 = {
  "kind": "InlineFragment",
  "selections": [
    (v8/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v19 = {
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
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v21 = {
  "kind": "InlineFragment",
  "selections": [
    (v14/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v22/*: any*/)
  ],
  "storageKey": null
},
v24 = [
  (v16/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v7/*: any*/)
    ],
    "type": "Collection",
    "abstractKey": null
  },
  (v21/*: any*/)
],
v25 = {
  "alias": "journal",
  "args": [
    {
      "kind": "Literal",
      "name": "schema",
      "value": "nglp:journal"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v24/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v26 = [
  (v23/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SchemaCommunityCollectionsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "EntityDescendantConnection",
            "kind": "LinkedField",
            "name": "descendants",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "EntityDescendantsLayoutFragment"
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": [
      (v3/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SchemaCommunityCollectionsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "logo",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageOriginal",
                "kind": "LinkedField",
                "name": "original",
                "plural": false,
                "selections": [
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/)
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
              (v13/*: any*/),
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
              (v14/*: any*/)
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
                    "selections": (v15/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v13/*: any*/),
          {
            "alias": null,
            "args": (v6/*: any*/),
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
                          (v16/*: any*/),
                          (v17/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "SchemaDefinition",
                                "kind": "LinkedField",
                                "name": "schemaDefinition",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "identifier",
                                    "storageKey": null
                                  },
                                  (v14/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v7/*: any*/),
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
                                  (v9/*: any*/),
                                  {
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
                                          (v18/*: any*/),
                                          (v10/*: any*/)
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
                                "kind": "InlineFragment",
                                "selections": [
                                  (v19/*: any*/)
                                ],
                                "type": "ReferencesGlobalEntityDates",
                                "abstractKey": "__isReferencesGlobalEntityDates"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v20/*: any*/),
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
                                                  (v16/*: any*/),
                                                  {
                                                    "kind": "TypeDiscriminator",
                                                    "abstractKey": "__isAnyContributor"
                                                  },
                                                  (v17/*: any*/),
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
                                                  (v21/*: any*/)
                                                ],
                                                "storageKey": null
                                              },
                                              (v14/*: any*/)
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      (v23/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v19/*: any*/),
                                  (v25/*: any*/)
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v20/*: any*/),
                                  (v14/*: any*/),
                                  (v8/*: any*/),
                                  {
                                    "alias": "cover",
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
                                              (v10/*: any*/),
                                              (v18/*: any*/),
                                              (v11/*: any*/),
                                              (v12/*: any*/)
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
                                  (v19/*: any*/),
                                  {
                                    "alias": "volume",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "schema",
                                        "value": "nglp:journal_volume"
                                      }
                                    ],
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "ancestorOfType",
                                    "plural": false,
                                    "selections": (v24/*: any*/),
                                    "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                                  },
                                  (v25/*: any*/),
                                  {
                                    "alias": "properties",
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "schemaProperties",
                                    "plural": true,
                                    "selections": [
                                      (v16/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "content",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "path",
                                            "storageKey": null
                                          }
                                        ],
                                        "type": "StringProperty",
                                        "abstractKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "articles",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "schema",
                                        "value": "nglp:journal_article"
                                      }
                                    ],
                                    "concreteType": "ItemConnection",
                                    "kind": "LinkedField",
                                    "name": "items",
                                    "plural": false,
                                    "selections": (v26/*: any*/),
                                    "storageKey": "items(schema:\"nglp:journal_article\")"
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "updatedAt",
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
                                      (v5/*: any*/)
                                    ],
                                    "concreteType": "EntityDescendantConnection",
                                    "kind": "LinkedField",
                                    "name": "descendants",
                                    "plural": false,
                                    "selections": (v26/*: any*/),
                                    "storageKey": "descendants(schema:[\"nglp:journal_issue\"],scope:\"COLLECTION\")"
                                  }
                                ],
                                "type": "Collection",
                                "abstractKey": null
                              }
                            ],
                            "type": "Entity",
                            "abstractKey": "__isEntity"
                          },
                          (v21/*: any*/)
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
                  (v22/*: any*/),
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
            "storageKey": null
          },
          (v14/*: any*/)
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
                "selections": (v15/*: any*/),
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
    "cacheID": "278fbd240ae0ec3786d718788aacdade",
    "id": null,
    "metadata": {},
    "name": "SchemaCommunityCollectionsQuery",
    "operationKind": "query",
    "text": "query SchemaCommunityCollectionsQuery(\n  $slug: Slug!\n  $schema: String!\n  $page: Int\n  $order: EntityDescendantOrder!\n) {\n  community(slug: $slug) {\n    ...CommunityLayoutFragment\n    descendants(scope: COLLECTION, order: $order, schema: [$schema], page: $page) {\n      ...EntityDescendantsLayoutFragment\n    }\n    id\n  }\n  ...CommunityLayoutAppFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment AppLayoutCommunityFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNameFragment\n  ...CommunityNavBarFragment\n  ...CommunityCondensedNavFragment\n  ...CommunityPickerActiveFragment\n}\n\nfragment AppLayoutFragment on Query {\n  ...AppBodyFragment\n  ...CommunityCondensedNavAppFragment\n  ...CommunityPickerFragment\n}\n\nfragment ArticleSummaryFragment_2PIB2P on Item {\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  slug\n  summary\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment BrowseListLayoutFragment on PageInfo {\n  ...PaginationFragment\n  ...PageCountFragment\n}\n\nfragment CommunityCondensedNavAppFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment CommunityCondensedNavFragment on Community {\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n  ...CommunityPickerActiveFragment\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityLayoutAppFragment on Query {\n  ...AppLayoutFragment\n}\n\nfragment CommunityLayoutFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNavBarFragment\n  ...AppLayoutCommunityFragment\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      url\n      width\n      height\n    }\n  }\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    kind\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerActiveFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  edges {\n    node {\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  pageInfo {\n    totalCount\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment EntityDescendantsLayoutFragment on EntityDescendantConnection {\n  edges {\n    node {\n      descendant {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ... on Entity {\n          __isEntity: __typename\n          ...EntitySummaryFactoryFragment_2PIB2P\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  pageInfo {\n    ...BrowseListLayoutFragment\n  }\n}\n\nfragment EntitySummaryFactoryFragment_2PIB2P on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  ...EntitySummaryFragment\n  ...ArticleSummaryFragment_2PIB2P\n  ...IssueSummaryFragment_2PIB2P\n  ...VolumeSummaryFragment_2PIB2P\n  ...JournalSummaryFragment\n}\n\nfragment EntitySummaryFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  ... on ReferencesGlobalEntityDates {\n    __isReferencesGlobalEntityDates: __typename\n    published {\n      value\n      ...PrecisionDateFragment\n    }\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Item {\n    summary\n  }\n  ... on Collection {\n    summary\n  }\n}\n\nfragment IssueSummaryFragment_2PIB2P on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  properties: schemaProperties {\n    __typename\n    ... on StringProperty {\n      content\n      path\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment JournalSummaryFragment on Collection {\n  __typename\n  id\n  slug\n  title\n  subtitle\n  updatedAt\n  summary\n  cover: thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment PageCountFragment on PageInfo {\n  totalCount\n  page\n  perPage\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SearchButtonFragment on Community {\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Community {\n  slug\n  name\n  schemaRanks {\n    slug\n    id\n  }\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  image: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment VolumeSummaryFragment_2PIB2P on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  properties: schemaProperties {\n    __typename\n    ... on StringProperty {\n      content\n      path\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a4055c21fa76e8536ec9a618943c9409';
export default node;
