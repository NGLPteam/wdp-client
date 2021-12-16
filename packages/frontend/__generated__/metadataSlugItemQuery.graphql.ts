/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type metadataSlugItemQueryVariables = {
    slug: string;
};
export type metadataSlugItemQueryResponse = {
    readonly item: {
        readonly community: {
            readonly " $fragmentRefs": FragmentRefs<"CommunityHeroFragment" | "CommunityChildLayoutFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"EntityMetadataLayoutFactoryFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityChildLayoutAppFragment">;
};
export type metadataSlugItemQuery = {
    readonly response: metadataSlugItemQueryResponse;
    readonly variables: metadataSlugItemQueryVariables;
};



/*
query metadataSlugItemQuery(
  $slug: Slug!
) {
  item(slug: $slug) {
    ...EntityMetadataLayoutFactoryFragment
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
  pdfVersion: schemaProperty(fullPath: "pdf_version") {
    __typename
    ...AssetDownloadButtonFragment
  }
}

fragment ArticleIssueMetadataFragment on Item {
  issueTitleMeta: schemaProperty(fullPath: "issue.title") {
    __typename
    ... on StringProperty {
      content
    }
  }
  issueNumber: schemaProperty(fullPath: "issue.number") {
    __typename
    ... on StringProperty {
      content
    }
  }
  firstPage: schemaProperty(fullPath: "issue.fpage") {
    __typename
    ... on IntegerProperty {
      integerValue
    }
  }
  lastPage: schemaProperty(fullPath: "issue.lpage") {
    __typename
    ... on IntegerProperty {
      integerValue
    }
  }
}

fragment ArticleLayoutFragment on Item {
  ...EntityHTMLHeadFragment
  ...BreadcrumbsBarFragment
  ...ArticleParentHeaderFragment
  ...ArticleHeroFragment
  ...ArticleTabNavFragment
  relatedItems {
    ...RelatedArticlesFragment
  }
}

fragment ArticleMetadataBlockFragment on Item {
  collectedMeta: schemaProperty(fullPath: "meta.collected") {
    __typename
    ...MetadataFactoryFragment
  }
  publishedMeta: schemaProperty(fullPath: "meta.published") {
    __typename
    ...MetadataFactoryFragment
  }
  pageCountMeta: schemaProperty(fullPath: "meta.page_count") {
    __typename
    ...MetadataFactoryFragment
  }
  volumeIdMeta: schemaProperty(fullPath: "volume.id") {
    __typename
    ...MetadataFactoryFragment
  }
  onlineVersion: schemaProperty(fullPath: "online_version") {
    __typename
    ...MetadataFactoryFragment
  }
  ...ArticleIssueMetadataFragment
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
  contributions {
    pageInfo {
      totalCount
    }
  }
  assets {
    pageInfo {
      totalCount
    }
  }
}

fragment AssetDownloadButtonFragment on AssetProperty {
  asset {
    __typename
    ... on Asset {
      __isAsset: __typename
      name
      downloadUrl
      kind
      contentType
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment AssetPropertyFragment on AssetProperty {
  fullPath
  label
  asset {
    __typename
    ... on Asset {
      __isAsset: __typename
      name
      downloadUrl
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment BooleanPropertyFragment on BooleanProperty {
  fullPath
  label
  checked
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

fragment DatePropertyFragment on DateProperty {
  fullPath
  label
  date
}

fragment EmailPropertyFragment on EmailProperty {
  fullPath
  label
  address
  defaultAddress
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

fragment EntityMetadataLayoutFactoryFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFragment
  }
  ... on Item {
    schemaDefinition {
      identifier
      id
    }
    ...ArticleLayoutFragment
    ...ArticleMetadataBlockFragment
    ...EntityLayoutFragment
  }
}

fragment InstallationNameFragment on Query {
  ...CommunityPickerFragment
}

fragment MetadataFactoryFragment on AnyScalarProperty {
  __isAnyScalarProperty: __typename
  __typename
  ... on AssetProperty {
    ...AssetPropertyFragment
  }
  ... on BooleanProperty {
    ...BooleanPropertyFragment
  }
  ... on DateProperty {
    ...DatePropertyFragment
  }
  ... on EmailProperty {
    ...EmailPropertyFragment
  }
  ... on FloatProperty {
    ...NumberPropertyFragment
  }
  ... on IntegerProperty {
    ...NumberPropertyFragment
  }
  ... on StringProperty {
    ...StringPropertyFragment
  }
  ... on TagsProperty {
    ...TagsPropertyFragment
  }
  ... on URLProperty {
    ...URLPropertyFragment
  }
  ... on VariableDateProperty {
    ...VariableDatePropertyFragment
  }
}

fragment NumberPropertyFragment on ScalarProperty {
  __isScalarProperty: __typename
  fullPath
  label
  ... on IntegerProperty {
    defaultInteger
    integerValue
  }
  ... on FloatProperty {
    defaultFloat
    floatValue
  }
}

fragment PrecisionDateFragment on VariablePrecisionDate {
  precision
  value
}

fragment RelatedArticlesFragment on ItemConnection {
  edges {
    node {
      title
      slug
      published {
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
      volumeId: schemaProperty(fullPath: "volume.id") {
        __typename
        ... on StringProperty {
          fullPath
          content
        }
      }
      issueId: schemaProperty(fullPath: "id") {
        __typename
        ... on StringProperty {
          fullPath
          content
        }
      }
      id
    }
  }
}

fragment StringPropertyFragment on StringProperty {
  fullPath
  label
  content
}

fragment TagsPropertyFragment on TagsProperty {
  fullPath
  label
  tags
}

fragment URLPropertyFragment on URLProperty {
  fullPath
  label
  url {
    label
    title
    href
  }
}

fragment VariableDatePropertyFragment on VariableDateProperty {
  fullPath
  label
  dateWithPrecision {
    ...PrecisionDateFragment
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
v6 = [
  (v3/*: any*/),
  (v2/*: any*/),
  (v5/*: any*/)
],
v7 = {
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
    (v5/*: any*/)
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v10 = {
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
        (v8/*: any*/),
        (v9/*: any*/),
        (v3/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v11 = [
  (v2/*: any*/),
  (v10/*: any*/)
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v13 = [
  (v2/*: any*/)
],
v14 = {
  "kind": "InlineFragment",
  "selections": (v13/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v15 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v16 = [
  (v12/*: any*/),
  (v14/*: any*/),
  (v15/*: any*/)
],
v17 = {
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
  "selections": (v16/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v18 = [
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
v19 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": (v18/*: any*/),
  "storageKey": null
},
v20 = {
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
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "downloadUrl",
  "storageKey": null
},
v22 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "volume.id"
  }
],
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullPath",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v25 = [
  (v12/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v23/*: any*/),
      (v24/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
],
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "integerValue",
  "storageKey": null
},
v27 = [
  {
    "kind": "InlineFragment",
    "selections": [
      (v23/*: any*/),
      (v8/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "defaultInteger",
            "storageKey": null
          },
          (v26/*: any*/)
        ],
        "type": "IntegerProperty",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "defaultFloat",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "floatValue",
            "storageKey": null
          }
        ],
        "type": "FloatProperty",
        "abstractKey": null
      }
    ],
    "type": "ScalarProperty",
    "abstractKey": "__isScalarProperty"
  }
],
v28 = [
  (v12/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": [
          (v23/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "asset",
            "plural": false,
            "selections": [
              (v12/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  (v21/*: any*/)
                ],
                "type": "Asset",
                "abstractKey": "__isAsset"
              },
              (v15/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "type": "AssetProperty",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v23/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "checked",
            "storageKey": null
          }
        ],
        "type": "BooleanProperty",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v23/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "date",
            "storageKey": null
          }
        ],
        "type": "DateProperty",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v23/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "address",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "defaultAddress",
            "storageKey": null
          }
        ],
        "type": "EmailProperty",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v27/*: any*/),
        "type": "FloatProperty",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v27/*: any*/),
        "type": "IntegerProperty",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v23/*: any*/),
          (v8/*: any*/),
          (v24/*: any*/)
        ],
        "type": "StringProperty",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v23/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tags",
            "storageKey": null
          }
        ],
        "type": "TagsProperty",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v23/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "URLReference",
            "kind": "LinkedField",
            "name": "url",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "href",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "type": "URLProperty",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v23/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "VariablePrecisionDate",
            "kind": "LinkedField",
            "name": "dateWithPrecision",
            "plural": false,
            "selections": (v18/*: any*/),
            "storageKey": null
          }
        ],
        "type": "VariableDateProperty",
        "abstractKey": null
      }
    ],
    "type": "AnyScalarProperty",
    "abstractKey": "__isAnyScalarProperty"
  }
],
v29 = [
  (v12/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v24/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
],
v30 = [
  (v12/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v26/*: any*/)
    ],
    "type": "IntegerProperty",
    "abstractKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "metadataSlugItemQuery",
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
            "name": "EntityMetadataLayoutFactoryFragment"
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
    "name": "metadataSlugItemQuery",
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
              {
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
                        "selections": (v6/*: any*/),
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
                  (v7/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": (v11/*: any*/),
                        "type": "Item",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v11/*: any*/),
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
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v7/*: any*/),
                  (v17/*: any*/),
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
                    "selections": (v16/*: any*/),
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                  },
                  {
                    "alias": "issue",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "schema",
                        "value": "nglp:journal_issue"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": (v16/*: any*/),
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
                  },
                  (v2/*: any*/),
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
                    "kind": "ScalarField",
                    "name": "doi",
                    "storageKey": null
                  },
                  (v19/*: any*/),
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
                                  (v12/*: any*/),
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
                                  (v15/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v20/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "pdfVersion",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "pdf_version"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": [
                      (v12/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "asset",
                            "plural": false,
                            "selections": [
                              (v12/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v4/*: any*/),
                                  (v21/*: any*/),
                                  (v9/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "contentType",
                                    "storageKey": null
                                  }
                                ],
                                "type": "Asset",
                                "abstractKey": "__isAsset"
                              },
                              (v15/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "AssetProperty",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnyAssetConnection",
                    "kind": "LinkedField",
                    "name": "assets",
                    "plural": false,
                    "selections": [
                      (v20/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemConnection",
                    "kind": "LinkedField",
                    "name": "relatedItems",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ItemEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Item",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v19/*: any*/),
                              (v17/*: any*/),
                              {
                                "alias": "volumeId",
                                "args": (v22/*: any*/),
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "schemaProperty",
                                "plural": false,
                                "selections": (v25/*: any*/),
                                "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                              },
                              {
                                "alias": "issueId",
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
                                "selections": (v25/*: any*/),
                                "storageKey": "schemaProperty(fullPath:\"id\")"
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
                  {
                    "alias": "collectedMeta",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "meta.collected"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v28/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"meta.collected\")"
                  },
                  {
                    "alias": "publishedMeta",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "meta.published"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v28/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"meta.published\")"
                  },
                  {
                    "alias": "pageCountMeta",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "meta.page_count"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v28/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"meta.page_count\")"
                  },
                  {
                    "alias": "volumeIdMeta",
                    "args": (v22/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v28/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                  },
                  {
                    "alias": "onlineVersion",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "online_version"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v28/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"online_version\")"
                  },
                  {
                    "alias": "issueTitleMeta",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "issue.title"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v29/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.title\")"
                  },
                  {
                    "alias": "issueNumber",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "issue.number"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v29/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.number\")"
                  },
                  {
                    "alias": "firstPage",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "issue.fpage"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v30/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.fpage\")"
                  },
                  {
                    "alias": "lastPage",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "issue.lpage"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v30/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.lpage\")"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v10/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v14/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          }
                        ],
                        "type": "Item",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/),
                          (v10/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": (v13/*: any*/),
                                "type": "Community",
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
                  },
                  (v10/*: any*/)
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
                "selections": (v6/*: any*/),
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
    "cacheID": "38fec4df4b84fe114d88f9d9acd44c21",
    "id": null,
    "metadata": {},
    "name": "metadataSlugItemQuery",
    "operationKind": "query",
    "text": "query metadataSlugItemQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...EntityMetadataLayoutFactoryFragment\n    community {\n      ...CommunityHeroFragment\n      ...CommunityChildLayoutFragment\n      id\n    }\n    id\n  }\n  ...CommunityChildLayoutAppFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment ArticleHeroFragment on Item {\n  title\n  summary\n  doi\n  published {\n    ...PrecisionDateFragment\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ...AssetDownloadButtonFragment\n  }\n}\n\nfragment ArticleIssueMetadataFragment on Item {\n  issueTitleMeta: schemaProperty(fullPath: \"issue.title\") {\n    __typename\n    ... on StringProperty {\n      content\n    }\n  }\n  issueNumber: schemaProperty(fullPath: \"issue.number\") {\n    __typename\n    ... on StringProperty {\n      content\n    }\n  }\n  firstPage: schemaProperty(fullPath: \"issue.fpage\") {\n    __typename\n    ... on IntegerProperty {\n      integerValue\n    }\n  }\n  lastPage: schemaProperty(fullPath: \"issue.lpage\") {\n    __typename\n    ... on IntegerProperty {\n      integerValue\n    }\n  }\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n  relatedItems {\n    ...RelatedArticlesFragment\n  }\n}\n\nfragment ArticleMetadataBlockFragment on Item {\n  collectedMeta: schemaProperty(fullPath: \"meta.collected\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  publishedMeta: schemaProperty(fullPath: \"meta.published\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  pageCountMeta: schemaProperty(fullPath: \"meta.page_count\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  volumeIdMeta: schemaProperty(fullPath: \"volume.id\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  onlineVersion: schemaProperty(fullPath: \"online_version\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  ...ArticleIssueMetadataFragment\n}\n\nfragment ArticleParentHeaderFragment on Item {\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n  contributions {\n    pageInfo {\n      totalCount\n    }\n  }\n  assets {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment AssetDownloadButtonFragment on AssetProperty {\n  asset {\n    __typename\n    ... on Asset {\n      __isAsset: __typename\n      name\n      downloadUrl\n      kind\n      contentType\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment AssetPropertyFragment on AssetProperty {\n  fullPath\n  label\n  asset {\n    __typename\n    ... on Asset {\n      __isAsset: __typename\n      name\n      downloadUrl\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment BooleanPropertyFragment on BooleanProperty {\n  fullPath\n  label\n  checked\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n}\n\nfragment CommunityChildLayoutAppFragment on Query {\n  ...CommunityCondensedNavAppFragment\n  ...AppBodyFragment\n}\n\nfragment CommunityChildLayoutFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNameFragment\n  ...CommunityCondensedNavFragment\n}\n\nfragment CommunityCondensedNavAppFragment on Query {\n  ...InstallationNameFragment\n}\n\nfragment CommunityCondensedNavFragment on Community {\n  ...CommunityNavListFragment\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityHeroFragment on Community {\n  title\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityNavListFragment on Community {\n  schemaRanks {\n    slug\n    name\n    count\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  edges {\n    node {\n      contributor {\n        __typename\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment DatePropertyFragment on DateProperty {\n  fullPath\n  label\n  date\n}\n\nfragment EmailPropertyFragment on EmailProperty {\n  fullPath\n  label\n  address\n  defaultAddress\n}\n\nfragment EntityHTMLHeadFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    title\n  }\n  ... on Collection {\n    title\n  }\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n  }\n  ... on Community {\n    title\n  }\n  ... on Item {\n    title\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...EntityHTMLHeadFragment\n  ... on Collection {\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n  }\n  ... on Item {\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n  }\n}\n\nfragment EntityMetadataLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...ArticleLayoutFragment\n    ...ArticleMetadataBlockFragment\n    ...EntityLayoutFragment\n  }\n}\n\nfragment InstallationNameFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment MetadataFactoryFragment on AnyScalarProperty {\n  __isAnyScalarProperty: __typename\n  __typename\n  ... on AssetProperty {\n    ...AssetPropertyFragment\n  }\n  ... on BooleanProperty {\n    ...BooleanPropertyFragment\n  }\n  ... on DateProperty {\n    ...DatePropertyFragment\n  }\n  ... on EmailProperty {\n    ...EmailPropertyFragment\n  }\n  ... on FloatProperty {\n    ...NumberPropertyFragment\n  }\n  ... on IntegerProperty {\n    ...NumberPropertyFragment\n  }\n  ... on StringProperty {\n    ...StringPropertyFragment\n  }\n  ... on TagsProperty {\n    ...TagsPropertyFragment\n  }\n  ... on URLProperty {\n    ...URLPropertyFragment\n  }\n  ... on VariableDateProperty {\n    ...VariableDatePropertyFragment\n  }\n}\n\nfragment NumberPropertyFragment on ScalarProperty {\n  __isScalarProperty: __typename\n  fullPath\n  label\n  ... on IntegerProperty {\n    defaultInteger\n    integerValue\n  }\n  ... on FloatProperty {\n    defaultFloat\n    floatValue\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment RelatedArticlesFragment on ItemConnection {\n  edges {\n    node {\n      title\n      slug\n      published {\n        ...PrecisionDateFragment\n      }\n      journal: ancestorOfType(schema: \"nglp:journal\") {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      volumeId: schemaProperty(fullPath: \"volume.id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      issueId: schemaProperty(fullPath: \"id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment StringPropertyFragment on StringProperty {\n  fullPath\n  label\n  content\n}\n\nfragment TagsPropertyFragment on TagsProperty {\n  fullPath\n  label\n  tags\n}\n\nfragment URLPropertyFragment on URLProperty {\n  fullPath\n  label\n  url {\n    label\n    title\n    href\n  }\n}\n\nfragment VariableDatePropertyFragment on VariableDateProperty {\n  fullPath\n  label\n  dateWithPrecision {\n    ...PrecisionDateFragment\n  }\n}\n"
  }
};
})();
(node as any).hash = '3a9398d530a75729bbd3437bfb5e1ac3';
export default node;
