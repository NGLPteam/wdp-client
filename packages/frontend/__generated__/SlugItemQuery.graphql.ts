/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SlugItemQueryVariables = {
    slug: string;
};
export type SlugItemQueryResponse = {
    readonly item: {
        readonly community: {
            readonly " $fragmentRefs": FragmentRefs<"CommunityHeroFragment" | "CommunityChildLayoutFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"EntityContentLayoutFactoryFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityChildLayoutAppFragment">;
};
export type SlugItemQuery = {
    readonly response: SlugItemQueryResponse;
    readonly variables: SlugItemQueryVariables;
};



/*
query SlugItemQuery(
  $slug: Slug!
) {
  item(slug: $slug) {
    ...EntityContentLayoutFactoryFragment
    community {
      ...CommunityHeroFragment
      ...CommunityChildLayoutFragment
      id
    }
    id
  }
  ...CommunityChildLayoutAppFragment
}

fragment AppBodyFragment on Query {
  ...AppHeaderFragment
  ...AppFooterFragment
}

fragment AppFooterFragment on Query {
  ...InstallationNameFragment
}

fragment AppHeaderFragment on Query {
  ...InstallationNameFragment
}

fragment ArticleHeroFragment on Item {
  title
  summary
  doi
  published {
    ...PrecisionDateFragment
  }
  contributions {
    ...ContributorsListFragment
  }
}

fragment ArticleLayoutFragment on Item {
  ...EntityHTMLHeadFragment
  ...BreadcrumbsBarFragment
  ...ArticleParentHeaderFragment
  ...ArticleHeroFragment
  ...ArticleTabNavFragment
}

fragment ArticleParentHeaderFragment on Item {
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
  issue: ancestorOfType(schema: "nglp:journal_issue") {
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

fragment ArticleTabNavFragment on Item {
  pages {
    edges {
      node {
        title
        slug
        id
      }
    }
  }
}

fragment ArticleTextFragment on Item {
  thumbnail {
    ...ContentImageFragment
  }
  properties: schemaProperties {
    __typename
    ... on FullTextProperty {
      fullPath
      fullText {
        content
        kind
        lang
      }
      type
      label
    }
  }
}

fragment BreadcrumbsBarFragment on Entity {
  __isEntity: __typename
  ...BreadcrumbsFragment
}

fragment BreadcrumbsFragment on Entity {
  __isEntity: __typename
  breadcrumbs {
    depth
    label
    kind
    slug
    id
  }
}

fragment CommunityChildLayoutAppFragment on Query {
  ...CommunityCondensedNavAppFragment
  ...AppBodyFragment
}

fragment CommunityChildLayoutFragment on Community {
  ...CommunityHTMLHeadFragment
  ...CommunityNameFragment
  ...CommunityCondensedNavFragment
}

fragment CommunityCondensedNavAppFragment on Query {
  ...InstallationNameFragment
}

fragment CommunityCondensedNavFragment on Community {
  ...CommunityNavListFragment
}

fragment CommunityHTMLHeadFragment on Community {
  title
}

fragment CommunityHeroFragment on Community {
  title
}

fragment CommunityNameFragment on Community {
  title
  slug
}

fragment CommunityNavListFragment on Community {
  schemaRanks {
    slug
    name
    count
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

fragment ContentImageFragment on AssetPreview {
  alt
  image: large {
    webp {
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
  edges {
    node {
      contributor {
        __typename
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

fragment CoverImageFragment on AssetPreview {
  alt
  image: large {
    webp {
      url
      alt
      width
      height
    }
  }
}

fragment EntityContentLayoutFactoryFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFragment
    ...JournalLayoutFragment
    ...JournalInfoFragment
    ...IssueLayoutFragment
    ...IssueSummaryFragment
  }
  ... on Item {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFragment
    ...ArticleLayoutFragment
    ...ArticleTextFragment
  }
}

fragment EntityHTMLHeadFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Item {
    title
  }
  ... on Collection {
    title
  }
}

fragment EntityHeroFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    title
  }
  ... on Community {
    title
  }
  ... on Item {
    title
  }
}

fragment EntityLayoutFragment on AnyEntity {
  __isAnyEntity: __typename
  ...EntityHTMLHeadFragment
  ... on Collection {
    ...BreadcrumbsBarFragment
    ...EntityHeroFragment
  }
  ... on Item {
    ...BreadcrumbsBarFragment
    ...EntityHeroFragment
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

fragment FeaturedIssueFragment on Collection {
  title
  slug
  summary
  thumbnail {
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
  properties: schemaProperties {
    __typename
    ... on StringProperty {
      content
      path
    }
  }
}

fragment FeaturedIssuesFragment on CollectionConnection {
  edges {
    node {
      slug
      ...FeaturedIssueFragment
      id
    }
  }
}

fragment HeroImageFragment on AssetPreview {
  alt
  image: large {
    webp {
      url
    }
  }
}

fragment InstallationNameFragment on Query {
  ...CommunityPickerFragment
}

fragment IssueContentFragment on Collection {
  orderings {
    ...EntityOrderSelectFragment
  }
  ...IssueNavListFragment
}

fragment IssueHeroFragment on Collection {
  title
  summary
  doi
  thumbnail {
    ...CoverImageFragment
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
}

fragment IssueLayoutFragment on Collection {
  ...EntityHTMLHeadFragment
  ...BreadcrumbsBarFragment
  ...IssueHeroFragment
  ...IssueContentFragment
}

fragment IssueNavListFragment on Collection {
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

fragment IssueSummaryFragment on Collection {
  orderings {
    edges {
      node {
        name
        slug
        identifier
        id
      }
    }
  }
}

fragment JournalHeroFragment on Collection {
  title
  thumbnail {
    ...HeroImageFragment
  }
}

fragment JournalInfoFragment on Collection {
  title
}

fragment JournalLayoutFragment on Collection {
  ...EntityHTMLHeadFragment
  ...JournalHeroFragment
  ...JournalNavBarFragment
  ...BreadcrumbsBarFragment
  related: links(order: RECENT, perPage: 4) {
    ...RelatedJournalsFragment
  }
  issues: collections(schema: "nglp:journal_issue", order: PUBLISHED_ASCENDING, nodeFilter: DESCENDANTS, perPage: 4) {
    ...FeaturedIssuesFragment
  }
}

fragment JournalNavBarFragment on Collection {
  title
  id
  ...JournalNavListFragment
}

fragment JournalNavListFragment on Collection {
  schemaRanks {
    slug
    name
    count
    id
  }
  pages {
    edges {
      node {
        title
        slug
        id
      }
    }
  }
}

fragment PrecisionDateFragment on VariablePrecisionDate {
  precision
  value
}

fragment RelatedJournalsFragment on EntityLinkConnection {
  edges {
    node {
      target {
        __typename
        ... on Collection {
          __typename
          title
          slug
          published {
            ...PrecisionDateFragment
          }
          thumbnail {
            ...CoverImageFragment
          }
        }
        ... on Item {
          __typename
          title
          slug
          published {
            ...PrecisionDateFragment
          }
          thumbnail {
            ...CoverImageFragment
          }
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
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "HierarchicalSchemaRank",
  "kind": "LinkedField",
  "name": "schemaRanks",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "count",
      "storageKey": null
    },
    (v5/*: any*/)
  ],
  "storageKey": null
},
v7 = [
  (v3/*: any*/),
  (v2/*: any*/),
  (v5/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v8/*: any*/),
    (v5/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetPreview",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    (v10/*: any*/),
    {
      "alias": "image",
      "args": null,
      "concreteType": "PreviewImageMap",
      "kind": "LinkedField",
      "name": "large",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PreviewImage",
          "kind": "LinkedField",
          "name": "webp",
          "plural": false,
          "selections": [
            (v11/*: any*/),
            (v10/*: any*/),
            (v12/*: any*/),
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
v15 = {
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
            (v2/*: any*/),
            (v3/*: any*/),
            (v5/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v16 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "precision",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v18/*: any*/),
    (v19/*: any*/)
  ],
  "storageKey": null
},
v21 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v20/*: any*/),
  (v14/*: any*/)
],
v22 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v23 = {
  "kind": "Literal",
  "name": "schema",
  "value": "nglp:journal_issue"
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v25 = [
  (v17/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v2/*: any*/)
    ],
    "type": "Collection",
    "abstractKey": null
  },
  (v22/*: any*/)
],
v26 = {
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
  "selections": (v25/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "doi",
  "storageKey": null
},
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
  "selections": (v25/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v32 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "EntityBreadcrumb",
      "kind": "LinkedField",
      "name": "breadcrumbs",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "depth",
          "storageKey": null
        },
        (v30/*: any*/),
        (v31/*: any*/),
        (v3/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v33 = [
  (v32/*: any*/)
],
v34 = {
  "kind": "InlineFragment",
  "selections": (v33/*: any*/),
  "type": "Item",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CommunityHeroFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CommunityChildLayoutFragment"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityContentLayoutFactoryFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CommunityChildLayoutAppFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v6/*: any*/),
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
                        "selections": (v7/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v9/*: any*/),
                  (v2/*: any*/),
                  (v14/*: any*/),
                  (v6/*: any*/),
                  (v15/*: any*/),
                  {
                    "alias": "related",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "order",
                        "value": "RECENT"
                      },
                      (v16/*: any*/)
                    ],
                    "concreteType": "EntityLinkConnection",
                    "kind": "LinkedField",
                    "name": "links",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "EntityLinkEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "EntityLink",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "target",
                                "plural": false,
                                "selections": [
                                  (v17/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v21/*: any*/),
                                    "type": "Collection",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v21/*: any*/),
                                    "type": "Item",
                                    "abstractKey": null
                                  },
                                  (v22/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "links(order:\"RECENT\",perPage:4)"
                  },
                  {
                    "alias": "issues",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "nodeFilter",
                        "value": "DESCENDANTS"
                      },
                      {
                        "kind": "Literal",
                        "name": "order",
                        "value": "PUBLISHED_ASCENDING"
                      },
                      (v16/*: any*/),
                      (v23/*: any*/)
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
                              (v3/*: any*/),
                              (v2/*: any*/),
                              (v24/*: any*/),
                              (v14/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "VariablePrecisionDate",
                                "kind": "LinkedField",
                                "name": "published",
                                "plural": false,
                                "selections": [
                                  (v19/*: any*/),
                                  (v18/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v26/*: any*/),
                              {
                                "alias": "properties",
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "schemaProperties",
                                "plural": true,
                                "selections": [
                                  (v17/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v27/*: any*/),
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
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "collections(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_ASCENDING\",perPage:4,schema:\"nglp:journal_issue\")"
                  },
                  (v24/*: any*/),
                  (v28/*: any*/),
                  (v29/*: any*/),
                  (v26/*: any*/),
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
                              (v4/*: any*/),
                              (v8/*: any*/),
                              (v5/*: any*/),
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
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v34/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v33/*: any*/),
                        "type": "Collection",
                        "abstractKey": null
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v32/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v9/*: any*/),
                  (v29/*: any*/),
                  (v26/*: any*/),
                  {
                    "alias": "issue",
                    "args": [
                      (v23/*: any*/)
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": (v25/*: any*/),
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
                  },
                  (v2/*: any*/),
                  (v24/*: any*/),
                  (v28/*: any*/),
                  (v20/*: any*/),
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
                                  (v17/*: any*/),
                                  {
                                    "kind": "TypeDiscriminator",
                                    "abstractKey": "__isAnyContributor"
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
                                  (v22/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v15/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetPreview",
                    "kind": "LinkedField",
                    "name": "thumbnail",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      {
                        "alias": "image",
                        "args": null,
                        "concreteType": "PreviewImageMap",
                        "kind": "LinkedField",
                        "name": "large",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PreviewImage",
                            "kind": "LinkedField",
                            "name": "webp",
                            "plural": false,
                            "selections": [
                              (v11/*: any*/),
                              (v12/*: any*/),
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
                    "alias": "properties",
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperties",
                    "plural": true,
                    "selections": [
                      (v17/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "fullPath",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "FullText",
                            "kind": "LinkedField",
                            "name": "fullText",
                            "plural": false,
                            "selections": [
                              (v27/*: any*/),
                              (v31/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "lang",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "type",
                            "storageKey": null
                          },
                          (v30/*: any*/)
                        ],
                        "type": "FullTextProperty",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v34/*: any*/)
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v32/*: any*/)
                ],
                "type": "Item",
                "abstractKey": null
              }
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
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
                "selections": (v7/*: any*/),
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
    "cacheID": "fdf8bd8c564451b21b7299c3ffc03e34",
    "id": null,
    "metadata": {},
    "name": "SlugItemQuery",
    "operationKind": "query",
    "text": "query SlugItemQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...EntityContentLayoutFactoryFragment\n    community {\n      ...CommunityHeroFragment\n      ...CommunityChildLayoutFragment\n      id\n    }\n    id\n  }\n  ...CommunityChildLayoutAppFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment ArticleHeroFragment on Item {\n  title\n  summary\n  doi\n  published {\n    ...PrecisionDateFragment\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n}\n\nfragment ArticleParentHeaderFragment on Item {\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment ArticleTextFragment on Item {\n  thumbnail {\n    ...ContentImageFragment\n  }\n  properties: schemaProperties {\n    __typename\n    ... on FullTextProperty {\n      fullPath\n      fullText {\n        content\n        kind\n        lang\n      }\n      type\n      label\n    }\n  }\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n}\n\nfragment CommunityChildLayoutAppFragment on Query {\n  ...CommunityCondensedNavAppFragment\n  ...AppBodyFragment\n}\n\nfragment CommunityChildLayoutFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNameFragment\n  ...CommunityCondensedNavFragment\n}\n\nfragment CommunityCondensedNavAppFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment CommunityCondensedNavFragment on Community {\n  ...CommunityNavListFragment\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityHeroFragment on Community {\n  title\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityNavListFragment on Community {\n  schemaRanks {\n    slug\n    name\n    count\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContentImageFragment on AssetPreview {\n  alt\n  image: large {\n    webp {\n      url\n      width\n      height\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  edges {\n    node {\n      contributor {\n        __typename\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on AssetPreview {\n  alt\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment EntityContentLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...JournalLayoutFragment\n    ...JournalInfoFragment\n    ...IssueLayoutFragment\n    ...IssueSummaryFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...ArticleLayoutFragment\n    ...ArticleTextFragment\n  }\n}\n\nfragment EntityHTMLHeadFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    title\n  }\n  ... on Collection {\n    title\n  }\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n  }\n  ... on Community {\n    title\n  }\n  ... on Item {\n    title\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...EntityHTMLHeadFragment\n  ... on Collection {\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n  }\n  ... on Item {\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n  }\n}\n\nfragment EntityOrderSelectFragment on OrderingConnection {\n  edges {\n    node {\n      name\n      identifier\n      id\n    }\n  }\n}\n\nfragment FeaturedIssueFragment on Collection {\n  title\n  slug\n  summary\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  properties: schemaProperties {\n    __typename\n    ... on StringProperty {\n      content\n      path\n    }\n  }\n}\n\nfragment FeaturedIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...FeaturedIssueFragment\n      id\n    }\n  }\n}\n\nfragment HeroImageFragment on AssetPreview {\n  alt\n  image: large {\n    webp {\n      url\n    }\n  }\n}\n\nfragment InstallationNameFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment IssueContentFragment on Collection {\n  orderings {\n    ...EntityOrderSelectFragment\n  }\n  ...IssueNavListFragment\n}\n\nfragment IssueHeroFragment on Collection {\n  title\n  summary\n  doi\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment IssueLayoutFragment on Collection {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...IssueHeroFragment\n  ...IssueContentFragment\n}\n\nfragment IssueNavListFragment on Collection {\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment IssueSummaryFragment on Collection {\n  orderings {\n    edges {\n      node {\n        name\n        slug\n        identifier\n        id\n      }\n    }\n  }\n}\n\nfragment JournalHeroFragment on Collection {\n  title\n  thumbnail {\n    ...HeroImageFragment\n  }\n}\n\nfragment JournalInfoFragment on Collection {\n  title\n}\n\nfragment JournalLayoutFragment on Collection {\n  ...EntityHTMLHeadFragment\n  ...JournalHeroFragment\n  ...JournalNavBarFragment\n  ...BreadcrumbsBarFragment\n  related: links(order: RECENT, perPage: 4) {\n    ...RelatedJournalsFragment\n  }\n  issues: collections(schema: \"nglp:journal_issue\", order: PUBLISHED_ASCENDING, nodeFilter: DESCENDANTS, perPage: 4) {\n    ...FeaturedIssuesFragment\n  }\n}\n\nfragment JournalNavBarFragment on Collection {\n  title\n  id\n  ...JournalNavListFragment\n}\n\nfragment JournalNavListFragment on Collection {\n  schemaRanks {\n    slug\n    name\n    count\n    id\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment RelatedJournalsFragment on EntityLinkConnection {\n  edges {\n    node {\n      target {\n        __typename\n        ... on Collection {\n          __typename\n          title\n          slug\n          published {\n            ...PrecisionDateFragment\n          }\n          thumbnail {\n            ...CoverImageFragment\n          }\n        }\n        ... on Item {\n          __typename\n          title\n          slug\n          published {\n            ...PrecisionDateFragment\n          }\n          thumbnail {\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fa11f8380b7e4890c59c8edf7f45dbdf';
export default node;
