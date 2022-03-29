/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityDescendantOrder = "PUBLISHED_ASCENDING" | "PUBLISHED_DESCENDING" | "TITLE_ASCENDING" | "TITLE_DESCENDING" | "%future added value";
export type SchemaCommunityItemsQueryVariables = {
    slug: string;
    schema: string;
    schemaSlug: string;
    page?: number | null | undefined;
    order: EntityDescendantOrder;
};
export type SchemaCommunityItemsQueryResponse = {
    readonly community: {
        readonly orderingForSchema: {
            readonly name: string | null;
            readonly slug: string;
            readonly identifier: string;
            readonly count: number;
        } | null;
        readonly descendants: {
            readonly " $fragmentRefs": FragmentRefs<"EntityDescendantsLayoutFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"AppLayoutCommunityFragment" | "EntityOrderingLayoutFactoryFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"AppLayoutFragment">;
};
export type SchemaCommunityItemsQuery = {
    readonly response: SchemaCommunityItemsQueryResponse;
    readonly variables: SchemaCommunityItemsQueryVariables;
};



/*
query SchemaCommunityItemsQuery(
  $slug: Slug!
  $schema: String!
  $schemaSlug: Slug!
  $page: Int
  $order: EntityDescendantOrder!
) {
  community(slug: $slug) {
    ...AppLayoutCommunityFragment
    orderingForSchema(slug: $schemaSlug) {
      name
      slug
      identifier
      count
      id
    }
    descendants(scope: ITEM, order: $order, schema: [$schema], page: $page) {
      ...EntityDescendantsLayoutFragment
    }
    ...EntityOrderingLayoutFactoryFragment
    id
  }
  ...AppLayoutFragment
}

fragment AppBodyCommunityFragment on Community {
  ...AppHeaderCommunityFragment
  ...AppFooterCommunityFragment
}

fragment AppBodyFragment on Query {
  ...AppHeaderFragment
  ...AppFooterFragment
}

fragment AppFooterCommunityFragment on Community {
  ...CommunityPickerActiveFragment
  ...CommunityNameFragment
}

fragment AppFooterFragment on Query {
  ...CommunityPickerFragment
}

fragment AppHeaderCommunityFragment on Community {
  ...CommunityPickerActiveFragment
  ...CommunityNavListFragment
  ...SearchButtonFragment
  ...CommunityNameFragment
}

fragment AppHeaderFragment on Query {
  ...CommunityPickerFragment
}

fragment AppLayoutCommunityFragment on Community {
  ...CommunityHTMLHeadFragment
  ...CommunityNavBarFragment
  ...AppBodyCommunityFragment
}

fragment AppLayoutFragment on Query {
  ...AppBodyFragment
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

fragment ContentImageFragment on ImageAttachment {
  image: large {
    webp {
      alt
      url
      width
      height
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

fragment EntityOrderSelectFragment on OrderingConnection {
  edges {
    node {
      name
      identifier
      id
    }
  }
}

fragment EntityOrderingLayoutFactoryFragment on Entity {
  __isEntity: __typename
  schemaDefinition {
    identifier
    id
  }
  initialOrdering {
    identifier
    id
  }
  ...IssueSidebarNavFragment
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

fragment IssueSidebarNavFragment on Collection {
  orderings {
    ...EntityOrderSelectFragment
  }
  ...IssueSidebarNavListFragment
}

fragment IssueSidebarNavListFragment on Collection {
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
  "name": "schemaSlug"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v5 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v6 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "schemaSlug"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
  "name": "identifier",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v11 = [
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
  {
    "kind": "Literal",
    "name": "scope",
    "value": "ITEM"
  }
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v18 = [
  (v8/*: any*/),
  (v12/*: any*/),
  (v17/*: any*/)
],
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v20 = {
  "kind": "InlineFragment",
  "selections": [
    (v8/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v21 = [
  (v9/*: any*/),
  (v17/*: any*/)
],
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": (v21/*: any*/),
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
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
  "kind": "InlineFragment",
  "selections": [
    (v17/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v28 = [
  (v19/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v12/*: any*/)
    ],
    "type": "Collection",
    "abstractKey": null
  },
  (v27/*: any*/)
],
v29 = {
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
  "selections": (v28/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v30 = {
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
        (v16/*: any*/),
        (v23/*: any*/),
        (v14/*: any*/),
        (v15/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v32 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      (v31/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SchemaCommunityItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "orderingForSchema",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v11/*: any*/),
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
            "name": "AppLayoutCommunityFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityOrderingLayoutFactoryFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AppLayoutFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v4/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SchemaCommunityItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v12/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "logo",
            "plural": false,
            "selections": [
              (v13/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageOriginal",
                "kind": "LinkedField",
                "name": "original",
                "plural": false,
                "selections": [
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/)
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
              (v7/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "kind",
                "storageKey": null
              },
              (v17/*: any*/)
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
                    "selections": (v18/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "orderingForSchema",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v17/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v11/*: any*/),
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
                          (v19/*: any*/),
                          (v20/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v22/*: any*/),
                              (v12/*: any*/),
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
                                  (v13/*: any*/),
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
                                          (v23/*: any*/),
                                          (v16/*: any*/),
                                          (v14/*: any*/),
                                          (v15/*: any*/)
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
                                  (v10/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "namespace",
                                    "storageKey": null
                                  },
                                  (v9/*: any*/),
                                  (v17/*: any*/)
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
                                              (v19/*: any*/),
                                              {
                                                "kind": "TypeDiscriminator",
                                                "abstractKey": "__isAnyContributor"
                                              },
                                              (v20/*: any*/),
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
                                              (v27/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v17/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  (v24/*: any*/),
                                  (v29/*: any*/),
                                  (v17/*: any*/),
                                  {
                                    "alias": "cover",
                                    "args": null,
                                    "concreteType": "ImageAttachment",
                                    "kind": "LinkedField",
                                    "name": "thumbnail",
                                    "plural": false,
                                    "selections": [
                                      (v13/*: any*/),
                                      (v30/*: any*/)
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
                                  (v17/*: any*/),
                                  (v8/*: any*/),
                                  {
                                    "alias": "cover",
                                    "args": null,
                                    "concreteType": "ImageAttachment",
                                    "kind": "LinkedField",
                                    "name": "thumbnail",
                                    "plural": false,
                                    "selections": [
                                      (v30/*: any*/),
                                      (v13/*: any*/)
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
                                    "selections": (v28/*: any*/),
                                    "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                                  },
                                  (v29/*: any*/),
                                  {
                                    "alias": "properties",
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "schemaProperties",
                                    "plural": true,
                                    "selections": [
                                      (v19/*: any*/),
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
                                    "selections": (v32/*: any*/),
                                    "storageKey": "items(schema:\"nglp:journal_article\")"
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
                                    "selections": (v32/*: any*/),
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
                          (v27/*: any*/)
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
                  (v31/*: any*/),
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
          (v17/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v22/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Ordering",
                "kind": "LinkedField",
                "name": "initialOrdering",
                "plural": false,
                "selections": (v21/*: any*/),
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "OrderingConnection",
                    "kind": "LinkedField",
                    "name": "orderings",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "OrderingEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Ordering",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v7/*: any*/),
                              (v9/*: any*/),
                              (v17/*: any*/)
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
                "type": "Collection",
                "abstractKey": null
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
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
                "selections": (v18/*: any*/),
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
    "cacheID": "b3cdeba8957e8df30c2746cb2d1000cc",
    "id": null,
    "metadata": {},
    "name": "SchemaCommunityItemsQuery",
    "operationKind": "query",
    "text": "query SchemaCommunityItemsQuery(\n  $slug: Slug!\n  $schema: String!\n  $schemaSlug: Slug!\n  $page: Int\n  $order: EntityDescendantOrder!\n) {\n  community(slug: $slug) {\n    ...AppLayoutCommunityFragment\n    orderingForSchema(slug: $schemaSlug) {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n    descendants(scope: ITEM, order: $order, schema: [$schema], page: $page) {\n      ...EntityDescendantsLayoutFragment\n    }\n    ...EntityOrderingLayoutFactoryFragment\n    id\n  }\n  ...AppLayoutFragment\n}\n\nfragment AppBodyCommunityFragment on Community {\n  ...AppHeaderCommunityFragment\n  ...AppFooterCommunityFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterCommunityFragment on Community {\n  ...CommunityPickerActiveFragment\n  ...CommunityNameFragment\n}\n\nfragment AppFooterFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment AppHeaderCommunityFragment on Community {\n  ...CommunityPickerActiveFragment\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n  ...CommunityNameFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment AppLayoutCommunityFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNavBarFragment\n  ...AppBodyCommunityFragment\n}\n\nfragment AppLayoutFragment on Query {\n  ...AppBodyFragment\n  ...CommunityPickerFragment\n}\n\nfragment ArticleSummaryFragment_2PIB2P on Item {\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  slug\n  summary\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment BrowseListLayoutFragment on PageInfo {\n  ...PaginationFragment\n  ...PageCountFragment\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityLogoFragment on ImageAttachment {\n  storage\n  original {\n    url\n    width\n    height\n  }\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      width\n      height\n    }\n    ...CommunityLogoFragment\n  }\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    kind\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerActiveFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  nodes {\n    role\n    contributor {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ...ContributorNameFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DissertationSummaryFragment on Item {\n  __typename\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n}\n\nfragment EntityDescendantsLayoutFragment on EntityDescendantConnection {\n  edges {\n    node {\n      descendant {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ... on Entity {\n          __isEntity: __typename\n          ...EntitySummaryFactoryFragment_2PIB2P\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  pageInfo {\n    ...BrowseListLayoutFragment\n  }\n}\n\nfragment EntityOrderSelectFragment on OrderingConnection {\n  edges {\n    node {\n      name\n      identifier\n      id\n    }\n  }\n}\n\nfragment EntityOrderingLayoutFactoryFragment on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  initialOrdering {\n    identifier\n    id\n  }\n  ...IssueSidebarNavFragment\n}\n\nfragment EntitySummaryFactoryFragment_2PIB2P on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  ...EntitySummaryFragment\n  ...ArticleSummaryFragment_2PIB2P\n  ...IssueSummaryFragment_2PIB2P\n  ...VolumeSummaryFragment_2PIB2P\n  ...JournalSummaryFragment\n  ...DissertationSummaryFragment\n}\n\nfragment EntitySummaryFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n  schemaRanks {\n    count\n    namespace\n    identifier\n    id\n  }\n  ... on ReferencesGlobalEntityDates {\n    __isReferencesGlobalEntityDates: __typename\n    published {\n      value\n      ...PrecisionDateFragment\n    }\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Item {\n    summary\n    updatedAt\n  }\n  ... on Collection {\n    summary\n    updatedAt\n  }\n}\n\nfragment IssueSidebarNavFragment on Collection {\n  orderings {\n    ...EntityOrderSelectFragment\n  }\n  ...IssueSidebarNavListFragment\n}\n\nfragment IssueSidebarNavListFragment on Collection {\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment IssueSummaryFragment_2PIB2P on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  properties: schemaProperties {\n    __typename\n    ... on StringProperty {\n      content\n      path\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment JournalSummaryFragment on Collection {\n  __typename\n  id\n  slug\n  title\n  subtitle\n  updatedAt\n  summary\n  cover: thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment PageCountFragment on PageInfo {\n  totalCount\n  page\n  perPage\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SearchButtonFragment on Community {\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Community {\n  slug\n  name\n  schemaRanks {\n    slug\n    id\n  }\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  image: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment VolumeSummaryFragment_2PIB2P on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  properties: schemaProperties {\n    __typename\n    ... on StringProperty {\n      content\n      path\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5cf55b2acb06a989867794efa65a0a64';
export default node;
