/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityOrderingLayoutFactoryQueryVariables = {
    slug: string;
    identifier: string;
    page?: number | null | undefined;
};
export type EntityOrderingLayoutFactoryQueryResponse = {
    readonly collection: {
        readonly ordering: {
            readonly disabled: boolean;
            readonly " $fragmentRefs": FragmentRefs<"EntityOrderingLayoutFragment" | "IssueOrderingLayoutFragment">;
        } | null;
    } | null;
    readonly community: {
        readonly ordering: {
            readonly disabled: boolean;
            readonly " $fragmentRefs": FragmentRefs<"EntityOrderingLayoutFragment" | "IssueOrderingLayoutFragment">;
        } | null;
    } | null;
};
export type EntityOrderingLayoutFactoryQuery = {
    readonly response: EntityOrderingLayoutFactoryQueryResponse;
    readonly variables: EntityOrderingLayoutFactoryQueryVariables;
};



/*
query EntityOrderingLayoutFactoryQuery(
  $slug: Slug!
  $identifier: String!
  $page: Int
) {
  collection(slug: $slug) {
    ordering(identifier: $identifier) {
      disabled
      ...EntityOrderingLayoutFragment_2Pg8Wv
      ...IssueOrderingLayoutFragment_2Pg8Wv
      id
    }
    id
  }
  community(slug: $slug) {
    ordering(identifier: $identifier) {
      disabled
      ...EntityOrderingLayoutFragment_2Pg8Wv
      ...IssueOrderingLayoutFragment_2Pg8Wv
      id
    }
    id
  }
}

fragment ArticleSummaryFragment_SlsMK on Item {
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
}

fragment BrowseListLayoutFragment on PageInfo {
  ...PaginationFragment
  ...PageCountFragment
}

fragment BrowseTreeItemFragment on OrderingEntry {
  treeDepth
  entry {
    __typename
    ... on Sluggable {
      __isSluggable: __typename
      slug
    }
    ... on Entity {
      __isEntity: __typename
      title
      schemaVersion {
        namespace
        identifier
        kind
        id
      }
    }
    ...TeasersFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment BrowseTreeLayoutFragment on OrderingEntryConnection {
  nodes {
    id
    treeDepth
    ancestors {
      id
      treeDepth
      ...BrowseTreeItemFragment
    }
    ...BrowseTreeItemFragment
  }
  pageInfo {
    ...PaginationFragment
    ...PageCountFragment
  }
}

fragment ContentImageFragment on ImageAttachment {
  image: large {
    webp {
      alt
      url
      width
      height
    }
  }
  placeholder: thumb {
    webp {
      url
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
  nodes {
    role
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

fragment DissertationSummaryFragment on Item {
  __typename
  id
  title
  subtitle
  slug
  summary
  cover: thumbnail {
    storage
    ...CoverImageFragment
  }
  contributions {
    ...ContributorsListFragment
  }
  published {
    value
    ...PrecisionDateFragment
  }
}

fragment EntityOrderingLayoutFragment_2Pg8Wv on Ordering {
  name
  header
  render {
    mode
  }
  entity {
    __typename
    ... on Sluggable {
      __isSluggable: __typename
      slug
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
  children(page: $page, perPage: 40) {
    edges {
      node {
        id
        entry {
          __typename
          ... on Sluggable {
            __isSluggable: __typename
            slug
          }
          ...EntitySummaryFactoryFragment
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
    ...BrowseTreeLayoutFragment
  }
}

fragment EntitySummaryFactoryFragment on Entity {
  __isEntity: __typename
  schemaDefinition {
    identifier
    id
  }
  ...EntitySummaryFragment
  ...ArticleSummaryFragment_SlsMK
  ...IssueSummaryFragment_SlsMK
  ...VolumeSummaryFragment_SlsMK
  ...JournalSummaryFragment
  ...DissertationSummaryFragment
}

fragment EntitySummaryFragment on Entity {
  __isEntity: __typename
  __typename
  title
  subtitle
  thumbnail {
    storage
    ...ContentImageFragment
  }
  schemaRanks {
    count
    namespace
    identifier
    id
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
    updatedAt
  }
  ... on Collection {
    summary
    updatedAt
  }
}

fragment IssueOrderingLayoutFragment_2Pg8Wv on Ordering {
  name
  header
  children(page: $page, perPage: 40) {
    edges {
      node {
        entry {
          __typename
          ... on Sluggable {
            __isSluggable: __typename
            slug
          }
          ...EntitySummaryFactoryFragment
          ... on Node {
            __isNode: __typename
            id
          }
        }
        id
      }
    }
    pageInfo {
      ...PaginationFragment
    }
  }
}

fragment IssueSummaryFragment_SlsMK on Collection {
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
  articles: items(schema: "nglp:journal_article") {
    pageInfo {
      totalCount
    }
  }
  ...getEntityDisplayNameFragment
  ...getEntityDisplayNumberFragment
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

fragment SquareThumbnailFragment on ImageAttachment {
  image: medium {
    webp {
      alt
      url
    }
  }
}

fragment TeasersFragment on Collection {
  updatedAt
  schema: schemaVersion {
    identifier
    id
  }
  schemaRanks {
    count
    identifier
    namespace
    id
  }
}

fragment VolumeSummaryFragment_SlsMK on Collection {
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

fragment getEntityDisplayNameFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    title
    volume: ancestorByName(name: "volume") {
      __typename
      ... on Collection {
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    issueNumber: schemaProperty(fullPath: "number") {
      __typename
      ... on StringProperty {
        content
      }
    }
    ...getEntityVolumeNumberFragment
  }
}

fragment getEntityDisplayNumberFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    issueNumber: schemaProperty(fullPath: "number") {
      __typename
      ... on StringProperty {
        content
      }
    }
    ...getEntityVolumeNumberFragment
  }
}

fragment getEntityVolumeNumberFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    volume: ancestorByName(name: "volume") {
      __typename
      ... on Collection {
        number: schemaProperty(fullPath: "id") {
          __typename
          ... on StringProperty {
            content
          }
        }
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    volumeNumber: schemaProperty(fullPath: "volume.id") {
      __typename
      ... on StringProperty {
        content
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identifier"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v3 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "identifier",
    "variableName": "identifier"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "disabled",
  "storageKey": null
},
v6 = {
  "kind": "Variable",
  "name": "page",
  "variableName": "page"
},
v7 = [
  (v6/*: any*/)
],
v8 = [
  {
    "alias": null,
    "args": (v4/*: any*/),
    "concreteType": "Ordering",
    "kind": "LinkedField",
    "name": "ordering",
    "plural": false,
    "selections": [
      (v5/*: any*/),
      {
        "args": (v7/*: any*/),
        "kind": "FragmentSpread",
        "name": "EntityOrderingLayoutFragment"
      },
      {
        "args": (v7/*: any*/),
        "kind": "FragmentSpread",
        "name": "IssueOrderingLayoutFragment"
      }
    ],
    "storageKey": null
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v11 = {
  "kind": "InlineFragment",
  "selections": [
    (v10/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = {
  "kind": "InlineFragment",
  "selections": [
    (v12/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v15 = [
  (v14/*: any*/),
  (v12/*: any*/)
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
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
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "namespace",
  "storageKey": null
},
v24 = {
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
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v27 = {
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
        (v19/*: any*/),
        (v18/*: any*/),
        (v20/*: any*/),
        (v21/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v29 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      (v28/*: any*/)
    ],
    "storageKey": null
  }
],
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v31 = [
  (v9/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v30/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
],
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "treeDepth",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "entry",
  "plural": false,
  "selections": [
    (v9/*: any*/),
    (v11/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v16/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaVersion",
          "kind": "LinkedField",
          "name": "schemaVersion",
          "plural": false,
          "selections": [
            (v23/*: any*/),
            (v14/*: any*/),
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
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v26/*: any*/),
        {
          "alias": "schema",
          "args": null,
          "concreteType": "SchemaVersion",
          "kind": "LinkedField",
          "name": "schemaVersion",
          "plural": false,
          "selections": (v15/*: any*/),
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
            (v22/*: any*/),
            (v14/*: any*/),
            (v23/*: any*/),
            (v12/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    (v13/*: any*/)
  ],
  "storageKey": null
},
v34 = [
  {
    "alias": null,
    "args": (v4/*: any*/),
    "concreteType": "Ordering",
    "kind": "LinkedField",
    "name": "ordering",
    "plural": false,
    "selections": [
      (v5/*: any*/),
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
        "name": "header",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "OrderingRenderDefinition",
        "kind": "LinkedField",
        "name": "render",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mode",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "entity",
        "plural": false,
        "selections": [
          (v9/*: any*/),
          (v11/*: any*/),
          (v13/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          (v6/*: any*/),
          {
            "kind": "Literal",
            "name": "perPage",
            "value": 40
          }
        ],
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
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "entry",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      (v11/*: any*/),
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
                            "selections": (v15/*: any*/),
                            "storageKey": null
                          },
                          (v16/*: any*/),
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
                              (v17/*: any*/),
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
                                      (v18/*: any*/),
                                      (v19/*: any*/),
                                      (v20/*: any*/),
                                      (v21/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": "placeholder",
                                "args": null,
                                "concreteType": "ImageSize",
                                "kind": "LinkedField",
                                "name": "thumb",
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
                                      (v19/*: any*/)
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
                            "concreteType": "HierarchicalSchemaRank",
                            "kind": "LinkedField",
                            "name": "schemaRanks",
                            "plural": true,
                            "selections": [
                              (v22/*: any*/),
                              (v23/*: any*/),
                              (v14/*: any*/),
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v24/*: any*/)
                            ],
                            "type": "ReferencesGlobalEntityDates",
                            "abstractKey": "__isReferencesGlobalEntityDates"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v25/*: any*/),
                              (v26/*: any*/),
                              (v10/*: any*/),
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
                                    "concreteType": "ItemContribution",
                                    "kind": "LinkedField",
                                    "name": "nodes",
                                    "plural": true,
                                    "selections": [
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
                                        "concreteType": null,
                                        "kind": "LinkedField",
                                        "name": "contributor",
                                        "plural": false,
                                        "selections": [
                                          (v9/*: any*/),
                                          {
                                            "kind": "TypeDiscriminator",
                                            "abstractKey": "__isAnyContributor"
                                          },
                                          (v11/*: any*/),
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
                                          (v13/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v12/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v24/*: any*/),
                              (v12/*: any*/),
                              {
                                "alias": "cover",
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": [
                                  (v17/*: any*/),
                                  (v27/*: any*/)
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
                              (v25/*: any*/),
                              (v26/*: any*/),
                              (v12/*: any*/),
                              (v10/*: any*/),
                              {
                                "alias": "cover",
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": [
                                  (v27/*: any*/),
                                  (v17/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v24/*: any*/),
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
                                "selections": [
                                  (v9/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v16/*: any*/)
                                    ],
                                    "type": "Collection",
                                    "abstractKey": null
                                  },
                                  (v13/*: any*/)
                                ],
                                "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
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
                                "selections": (v29/*: any*/),
                                "storageKey": "items(schema:\"nglp:journal_article\")"
                              },
                              {
                                "alias": "properties",
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "schemaProperties",
                                "plural": true,
                                "selections": [
                                  (v9/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v30/*: any*/),
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
                                "selections": (v29/*: any*/),
                                "storageKey": "descendants(schema:[\"nglp:journal_issue\"],scope:\"COLLECTION\")"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "alias": "issueNumber",
                                        "args": [
                                          {
                                            "kind": "Literal",
                                            "name": "fullPath",
                                            "value": "number"
                                          }
                                        ],
                                        "concreteType": null,
                                        "kind": "LinkedField",
                                        "name": "schemaProperty",
                                        "plural": false,
                                        "selections": (v31/*: any*/),
                                        "storageKey": "schemaProperty(fullPath:\"number\")"
                                      },
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          {
                                            "kind": "InlineFragment",
                                            "selections": [
                                              {
                                                "alias": "volume",
                                                "args": [
                                                  {
                                                    "kind": "Literal",
                                                    "name": "name",
                                                    "value": "volume"
                                                  }
                                                ],
                                                "concreteType": null,
                                                "kind": "LinkedField",
                                                "name": "ancestorByName",
                                                "plural": false,
                                                "selections": [
                                                  {
                                                    "kind": "InlineFragment",
                                                    "selections": [
                                                      {
                                                        "alias": "number",
                                                        "args": [
                                                          {
                                                            "kind": "Literal",
                                                            "name": "fullPath",
                                                            "value": "id"
                                                          }
                                                        ],
                                                        "concreteType": null,
                                                        "kind": "LinkedField",
                                                        "name": "schemaProperty",
                                                        "plural": false,
                                                        "selections": (v31/*: any*/),
                                                        "storageKey": "schemaProperty(fullPath:\"id\")"
                                                      }
                                                    ],
                                                    "type": "Collection",
                                                    "abstractKey": null
                                                  }
                                                ],
                                                "storageKey": "ancestorByName(name:\"volume\")"
                                              },
                                              {
                                                "alias": "volumeNumber",
                                                "args": [
                                                  {
                                                    "kind": "Literal",
                                                    "name": "fullPath",
                                                    "value": "volume.id"
                                                  }
                                                ],
                                                "concreteType": null,
                                                "kind": "LinkedField",
                                                "name": "schemaProperty",
                                                "plural": false,
                                                "selections": (v31/*: any*/),
                                                "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                                              }
                                            ],
                                            "type": "Collection",
                                            "abstractKey": null
                                          }
                                        ],
                                        "type": "AnyEntity",
                                        "abstractKey": "__isAnyEntity"
                                      }
                                    ],
                                    "type": "Collection",
                                    "abstractKey": null
                                  }
                                ],
                                "type": "AnyEntity",
                                "abstractKey": "__isAnyEntity"
                              }
                            ],
                            "type": "Collection",
                            "abstractKey": null
                          }
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v13/*: any*/)
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
              (v28/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "perPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "OrderingEntry",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v12/*: any*/),
              (v32/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderingEntry",
                "kind": "LinkedField",
                "name": "ancestors",
                "plural": true,
                "selections": [
                  (v12/*: any*/),
                  (v32/*: any*/),
                  (v33/*: any*/)
                ],
                "storageKey": null
              },
              (v33/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v12/*: any*/)
    ],
    "storageKey": null
  },
  (v12/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityOrderingLayoutFactoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v8/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v8/*: any*/),
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "EntityOrderingLayoutFactoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v34/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v34/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c3cdbe1f5210f03d1aea98fdff066678",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingLayoutFactoryQuery",
    "operationKind": "query",
    "text": "query EntityOrderingLayoutFactoryQuery(\n  $slug: Slug!\n  $identifier: String!\n  $page: Int\n) {\n  collection(slug: $slug) {\n    ordering(identifier: $identifier) {\n      disabled\n      ...EntityOrderingLayoutFragment_2Pg8Wv\n      ...IssueOrderingLayoutFragment_2Pg8Wv\n      id\n    }\n    id\n  }\n  community(slug: $slug) {\n    ordering(identifier: $identifier) {\n      disabled\n      ...EntityOrderingLayoutFragment_2Pg8Wv\n      ...IssueOrderingLayoutFragment_2Pg8Wv\n      id\n    }\n    id\n  }\n}\n\nfragment ArticleSummaryFragment_SlsMK on Item {\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  slug\n  summary\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n}\n\nfragment BrowseListLayoutFragment on PageInfo {\n  ...PaginationFragment\n  ...PageCountFragment\n}\n\nfragment BrowseTreeItemFragment on OrderingEntry {\n  treeDepth\n  entry {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Entity {\n      __isEntity: __typename\n      title\n      schemaVersion {\n        namespace\n        identifier\n        kind\n        id\n      }\n    }\n    ...TeasersFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment BrowseTreeLayoutFragment on OrderingEntryConnection {\n  nodes {\n    id\n    treeDepth\n    ancestors {\n      id\n      treeDepth\n      ...BrowseTreeItemFragment\n    }\n    ...BrowseTreeItemFragment\n  }\n  pageInfo {\n    ...PaginationFragment\n    ...PageCountFragment\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  nodes {\n    role\n    contributor {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ...ContributorNameFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DissertationSummaryFragment on Item {\n  __typename\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n}\n\nfragment EntityOrderingLayoutFragment_2Pg8Wv on Ordering {\n  name\n  header\n  render {\n    mode\n  }\n  entity {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  children(page: $page, perPage: 40) {\n    edges {\n      node {\n        id\n        entry {\n          __typename\n          ... on Sluggable {\n            __isSluggable: __typename\n            slug\n          }\n          ...EntitySummaryFactoryFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n      }\n    }\n    pageInfo {\n      ...BrowseListLayoutFragment\n    }\n    ...BrowseTreeLayoutFragment\n  }\n}\n\nfragment EntitySummaryFactoryFragment on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  ...EntitySummaryFragment\n  ...ArticleSummaryFragment_SlsMK\n  ...IssueSummaryFragment_SlsMK\n  ...VolumeSummaryFragment_SlsMK\n  ...JournalSummaryFragment\n  ...DissertationSummaryFragment\n}\n\nfragment EntitySummaryFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n  schemaRanks {\n    count\n    namespace\n    identifier\n    id\n  }\n  ... on ReferencesGlobalEntityDates {\n    __isReferencesGlobalEntityDates: __typename\n    published {\n      value\n      ...PrecisionDateFragment\n    }\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Item {\n    summary\n    updatedAt\n  }\n  ... on Collection {\n    summary\n    updatedAt\n  }\n}\n\nfragment IssueOrderingLayoutFragment_2Pg8Wv on Ordering {\n  name\n  header\n  children(page: $page, perPage: 40) {\n    edges {\n      node {\n        entry {\n          __typename\n          ... on Sluggable {\n            __isSluggable: __typename\n            slug\n          }\n          ...EntitySummaryFactoryFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n    pageInfo {\n      ...PaginationFragment\n    }\n  }\n}\n\nfragment IssueSummaryFragment_SlsMK on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  ...getEntityDisplayNameFragment\n  ...getEntityDisplayNumberFragment\n}\n\nfragment JournalSummaryFragment on Collection {\n  __typename\n  id\n  slug\n  title\n  subtitle\n  updatedAt\n  summary\n  cover: thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment PageCountFragment on PageInfo {\n  totalCount\n  page\n  perPage\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  image: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment TeasersFragment on Collection {\n  updatedAt\n  schema: schemaVersion {\n    identifier\n    id\n  }\n  schemaRanks {\n    count\n    identifier\n    namespace\n    id\n  }\n}\n\nfragment VolumeSummaryFragment_SlsMK on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  properties: schemaProperties {\n    __typename\n    ... on StringProperty {\n      content\n      path\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment getEntityDisplayNameFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n    volume: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issueNumber: schemaProperty(fullPath: \"number\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n    ...getEntityVolumeNumberFragment\n  }\n}\n\nfragment getEntityDisplayNumberFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    issueNumber: schemaProperty(fullPath: \"number\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n    ...getEntityVolumeNumberFragment\n  }\n}\n\nfragment getEntityVolumeNumberFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    volume: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"id\") {\n          __typename\n          ... on StringProperty {\n            content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volumeNumber: schemaProperty(fullPath: \"volume.id\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '22d1452a03ea5ae8de0b2cf85db527c7';
export default node;
