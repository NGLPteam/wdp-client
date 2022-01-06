/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SlugCollectionQueryVariables = {
    slug: string;
};
export type SlugCollectionQueryResponse = {
    readonly collection: {
        readonly community: {
            readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"EntityContentLayoutFactoryFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutAppFragment">;
};
export type SlugCollectionQuery = {
    readonly response: SlugCollectionQueryResponse;
    readonly variables: SlugCollectionQueryVariables;
};



/*
query SlugCollectionQuery(
  $slug: Slug!
) {
  collection(slug: $slug) {
    ...EntityContentLayoutFactoryFragment
    community {
      ...CommunityLayoutFragment
      id
    }
    id
  }
  ...CommunityLayoutAppFragment
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

fragment ArticleContributorFragment on ItemContributionConnection {
  edges {
    node {
      affiliation
      role
      item {
        slug
        id
      }
      contributor {
        __typename
        ... on Sluggable {
          __isSluggable: __typename
          slug
        }
        ... on PersonContributor {
          __typename
          title
          bio
          affiliation
          image {
            storage
            ...ContributorAvatarFragment
          }
          ...ContributorNameFragment
        }
        ... on OrganizationContributor {
          __typename
          bio
          image {
            storage
            ...ContributorAvatarFragment
          }
          ...ContributorNameFragment
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

fragment ArticleHeroFragment on Item {
  slug
  title
  subtitle
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

fragment ArticleParentHeaderFragment on Item {
  journal: ancestorOfType(schema: "nglp:journal") {
    __typename
    ... on Entity {
      __isEntity: __typename
      title
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
  volume: ancestorOfType(schema: "nglp:journal_volume") {
    __typename
    ... on Entity {
      __isEntity: __typename
      title
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
  issue: ancestorOfType(schema: "nglp:journal_issue") {
    __typename
    ... on Entity {
      __isEntity: __typename
      title
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment ArticleSummaryFragment on Entity {
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
  ... on Item {
    contributions {
      ...ContributorsListFragment
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

fragment ArticleTextFragment on Item {
  thumbnail {
    storage
    ...ContentImageFragment
  }
  bodyText: schemaProperty(fullPath: "body") {
    __typename
    ... on FullTextProperty {
      fullText {
        content
        kind
        lang
      }
      type
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

fragment CollectionContributionsBlockFragment on CollectionContributionConnection {
  edges {
    node {
      slug
      contributor {
        __typename
        ... on PersonContributor {
          image {
            storage
          }
        }
        ... on OrganizationContributor {
          image {
            storage
          }
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
      ...ContributionBlockItemFragment
      id
    }
  }
}

fragment CommunityCondensedNavAppFragment on Query {
  ...CommunityPickerFragment
  ...MobileMenuFragment
}

fragment CommunityCondensedNavFragment on Community {
  ...CommunityNavListFragment
  ...SearchButtonFragment
}

fragment CommunityHTMLHeadFragment on Community {
  title
}

fragment CommunityLayoutAppFragment on Query {
  ...AppBodyFragment
  ...CommunityCondensedNavAppFragment
}

fragment CommunityLayoutFragment on Community {
  ...CommunityHTMLHeadFragment
  ...CommunityNameFragment
  ...CommunityNavBarFragment
  ...CommunityCondensedNavFragment
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

fragment ContributionBlockItemFragment on Contribution {
  __isContribution: __typename
  affiliation
  displayName
  contributorKind
  role
  contributor {
    __typename
    ... on Sluggable {
      __isSluggable: __typename
      slug
    }
    ... on Contributor {
      __isContributor: __typename
      image {
        ...ContributorAvatarFragment
      }
    }
    ... on PersonContributor {
      affiliation
    }
    ...ContributorNameFragment
    ... on Node {
      __isNode: __typename
      id
    }
  }
  ... on ItemContribution {
    item {
      slug
      id
    }
  }
  ... on CollectionContribution {
    collection {
      slug
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

fragment CurrentIssueFragment on Collection {
  id
  title
  subtitle
  slug
  thumbnail {
    storage
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
  items(perPage: 3) {
    edges {
      node {
        slug
        ...ArticleSummaryFragment
        id
      }
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
    ...IssueSidebarNavFragment
    ...IssueContentFragment
  }
  ... on Item {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFragment
    ...ArticleLayoutFragment
    ...ArticleTextFragment
    contributions {
      ...ArticleContributorFragment
    }
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
    heroImage {
      storage
      ...HeroImageFragment
    }
  }
  ... on Item {
    title
    heroImage {
      storage
      ...HeroImageFragment
    }
  }
}

fragment EntityLayoutFragment on AnyEntity {
  __isAnyEntity: __typename
  ...EntityHTMLHeadFragment
  ... on Entity {
    __isEntity: __typename
    ...BreadcrumbsBarFragment
    ...EntityHeroFragment
    ...EntityNavBarFragment
  }
}

fragment EntityNavBarFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Node {
    __isNode: __typename
    id
  }
  ... on Entity {
    __isEntity: __typename
    title
    ...EntityNavListFragment
  }
}

fragment EntityNavListFragment on Entity {
  __isEntity: __typename
  __typename
  orderings {
    edges {
      node {
        name
        slug
        identifier
        children {
          pageInfo {
            totalCount
          }
        }
        id
      }
    }
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

fragment EntityOrderSelectFragment on OrderingConnection {
  edges {
    node {
      name
      identifier
      id
    }
  }
}

fragment FeaturedIssuesFragment on CollectionConnection {
  edges {
    node {
      slug
      ...IssueSummaryFragment
      id
    }
  }
}

fragment HeroImageFragment on ImageAttachment {
  image: large {
    webp {
      alt
      url
    }
  }
}

fragment IssueContentFragment on Collection {
  orderings {
    edges {
      node {
        identifier
        id
      }
    }
  }
  items {
    ...IssueContentListFragment
  }
}

fragment IssueContentListFragment on ItemConnection {
  edges {
    node {
      slug
      ...ArticleSummaryFragment
      id
    }
  }
}

fragment IssueHeroFragment on Collection {
  id
  title
  subtitle
  summary
  issn
  doi
  published {
    ...PrecisionDateFragment
  }
  thumbnail {
    storage
    ...CoverImageFragment
  }
  journal: ancestorOfType(schema: "nglp:journal") {
    __typename
    ... on Entity {
      __isEntity: __typename
      title
      subtitle
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
  volume: ancestorOfType(schema: "nglp:journal_volume") {
    __typename
    ... on Entity {
      __isEntity: __typename
      title
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
  pdfVersion: schemaProperty(fullPath: "pdf_version") {
    __typename
    ...AssetDownloadButtonFragment
  }
}

fragment IssueLayoutFragment on Collection {
  ...EntityHTMLHeadFragment
  ...BreadcrumbsBarFragment
  ...IssueHeroFragment
  ...PrevNextIssueFragment
  contributions {
    ...CollectionContributionsBlockFragment
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

fragment IssueSummaryFragment on Collection {
  id
  title
  subtitle
  slug
  summary
  cover: thumbnail {
    storage
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
  articles: items(schema: "nglp:journal_article") {
    pageInfo {
      totalCount
    }
  }
}

fragment JournalHeroFragment on Collection {
  slug
  title
  subtitle
  issn
  doi
  heroImage {
    storage
    ...HeroImageFragment
  }
}

fragment JournalInfoFragment on Collection {
  title
  issues: collections(schema: "nglp:journal_issue", order: PUBLISHED_ASCENDING, nodeFilter: DESCENDANTS, page: 1, perPage: 4) {
    ...FeaturedIssuesFragment
  }
  currentIssue: firstCollection(schema: "nglp:journal_issue", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {
    ...CurrentIssueFragment
    id
  }
}

fragment JournalLayoutFragment on Collection {
  ...EntityHTMLHeadFragment
  ...JournalHeroFragment
  ...EntityNavBarFragment
  ...BreadcrumbsBarFragment
  related: links(order: RECENT, perPage: 4) {
    ...RelatedJournalsFragment
  }
}

fragment MobileMenuFragment on Query {
  ...CommunityPickerFragment
}

fragment PrecisionDateFragment on VariablePrecisionDate {
  precision
  value
}

fragment PrevNextIssueFragment on Collection {
  slug
  volume: ancestorOfType(schema: "nglp:journal_volume") {
    __typename
    ... on Collection {
      collections(schema: ["nglp:journal_issue"]) {
        edges {
          node {
            title
            slug
            id
          }
        }
      }
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
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

fragment RelatedJournalsFragment on EntityLinkConnection {
  edges {
    node {
      target {
        __typename
        ... on Collection {
          __typename
          id
          title
          slug
          published {
            ...PrecisionDateFragment
          }
          thumbnail {
            storage
            ...CoverImageFragment
          }
          currentIssue: firstCollection(schema: "nglp:journal_issue", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {
            number: schemaProperty(fullPath: "number") {
              __typename
              ... on StringProperty {
                content
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
            id
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
  "name": "subtitle",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "doi",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v15 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v13/*: any*/),
      (v14/*: any*/)
    ],
    "storageKey": null
  }
],
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    (v12/*: any*/),
    {
      "alias": "image",
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "large",
      "plural": false,
      "selections": (v15/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v17 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "precision",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v19/*: any*/),
    (v20/*: any*/)
  ],
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v24 = [
  (v12/*: any*/),
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
          (v14/*: any*/),
          (v13/*: any*/),
          (v22/*: any*/),
          (v23/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v25 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": (v24/*: any*/),
  "storageKey": null
},
v26 = {
  "kind": "Literal",
  "name": "nodeFilter",
  "value": "DESCENDANTS"
},
v27 = {
  "kind": "Literal",
  "name": "schema",
  "value": "nglp:journal_issue"
},
v28 = [
  (v26/*: any*/),
  {
    "kind": "Literal",
    "name": "order",
    "value": "PUBLISHED_DESCENDING"
  },
  (v27/*: any*/)
],
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v30 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_volume"
  }
],
v31 = [
  (v2/*: any*/)
],
v32 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v33 = [
  (v18/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v31/*: any*/),
    "type": "Collection",
    "abstractKey": null
  },
  (v32/*: any*/)
],
v34 = {
  "alias": "volume",
  "args": (v30/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v33/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v20/*: any*/),
    (v19/*: any*/)
  ],
  "storageKey": null
},
v37 = {
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
v38 = [
  (v37/*: any*/)
],
v39 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v40 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v41 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v42 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v43 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "legalName",
  "storageKey": null
},
v44 = {
  "kind": "InlineFragment",
  "selections": [
    (v43/*: any*/)
  ],
  "type": "OrganizationContributor",
  "abstractKey": null
},
v45 = [
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
          (v3/*: any*/),
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v18/*: any*/),
              (v2/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "thumbnail",
                "plural": false,
                "selections": [
                  (v12/*: any*/),
                  {
                    "alias": "image",
                    "args": null,
                    "concreteType": "ImageSize",
                    "kind": "LinkedField",
                    "name": "medium",
                    "plural": false,
                    "selections": (v15/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v21/*: any*/)
                ],
                "type": "ReferencesGlobalEntityDates",
                "abstractKey": "__isReferencesGlobalEntityDates"
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isSluggable"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v35/*: any*/)
                ],
                "type": "ChildEntity",
                "abstractKey": "__isChildEntity"
              },
              {
                "kind": "InlineFragment",
                "selections": [
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
                                  (v18/*: any*/),
                                  (v39/*: any*/),
                                  (v40/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v41/*: any*/),
                                      (v42/*: any*/)
                                    ],
                                    "type": "PersonContributor",
                                    "abstractKey": null
                                  },
                                  (v44/*: any*/),
                                  (v32/*: any*/)
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
                  }
                ],
                "type": "Item",
                "abstractKey": null
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
  }
],
v46 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal"
  }
],
v47 = {
  "kind": "InlineFragment",
  "selections": (v31/*: any*/),
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v48 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v5/*: any*/)
],
v49 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v50 = {
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
    (v18/*: any*/),
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
            (v18/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v4/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "downloadUrl",
                  "storageKey": null
                },
                (v49/*: any*/),
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
            (v32/*: any*/)
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
v51 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      (v12/*: any*/)
    ],
    "storageKey": null
  }
],
v52 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v53 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v54 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "small",
  "plural": false,
  "selections": (v15/*: any*/),
  "storageKey": null
},
v55 = [
  (v3/*: any*/),
  (v5/*: any*/)
],
v56 = {
  "alias": null,
  "args": null,
  "concreteType": "Item",
  "kind": "LinkedField",
  "name": "item",
  "plural": false,
  "selections": (v55/*: any*/),
  "storageKey": null
},
v57 = {
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    (v49/*: any*/),
    (v3/*: any*/),
    (v5/*: any*/)
  ],
  "storageKey": null
},
v58 = {
  "alias": null,
  "args": null,
  "concreteType": "OrderingEntryConnection",
  "kind": "LinkedField",
  "name": "children",
  "plural": false,
  "selections": (v38/*: any*/),
  "storageKey": null
},
v59 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isNode"
},
v60 = {
  "kind": "InlineFragment",
  "selections": [
    (v57/*: any*/)
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v61 = [
  (v18/*: any*/),
  (v47/*: any*/),
  (v32/*: any*/)
],
v62 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v63 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    (v12/*: any*/),
    (v54/*: any*/)
  ],
  "storageKey": null
},
v64 = [
  (v18/*: any*/),
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
      (v29/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
            "name": "EntityContentLayoutFactoryFragment"
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
    "name": "SlugCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v7/*: any*/),
              (v4/*: any*/),
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
                  (v3/*: any*/),
                  (v2/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "issn",
                    "storageKey": null
                  },
                  (v11/*: any*/),
                  (v16/*: any*/),
                  {
                    "alias": "related",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "order",
                        "value": "RECENT"
                      },
                      (v17/*: any*/)
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
                                  (v18/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v5/*: any*/),
                                      (v2/*: any*/),
                                      (v3/*: any*/),
                                      (v21/*: any*/),
                                      (v25/*: any*/),
                                      {
                                        "alias": "currentIssue",
                                        "args": (v28/*: any*/),
                                        "concreteType": "Collection",
                                        "kind": "LinkedField",
                                        "name": "firstCollection",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": "number",
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
                                            "selections": [
                                              (v18/*: any*/),
                                              {
                                                "kind": "InlineFragment",
                                                "selections": [
                                                  (v29/*: any*/)
                                                ],
                                                "type": "StringProperty",
                                                "abstractKey": null
                                              }
                                            ],
                                            "storageKey": "schemaProperty(fullPath:\"number\")"
                                          },
                                          (v34/*: any*/),
                                          (v5/*: any*/)
                                        ],
                                        "storageKey": "firstCollection(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",schema:\"nglp:journal_issue\")"
                                      }
                                    ],
                                    "type": "Collection",
                                    "abstractKey": null
                                  },
                                  (v32/*: any*/)
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
                      (v26/*: any*/),
                      {
                        "kind": "Literal",
                        "name": "order",
                        "value": "PUBLISHED_ASCENDING"
                      },
                      {
                        "kind": "Literal",
                        "name": "page",
                        "value": 1
                      },
                      (v17/*: any*/),
                      (v27/*: any*/)
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
                              (v5/*: any*/),
                              (v2/*: any*/),
                              (v10/*: any*/),
                              (v35/*: any*/),
                              {
                                "alias": "cover",
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": (v24/*: any*/),
                                "storageKey": null
                              },
                              (v36/*: any*/),
                              (v34/*: any*/),
                              {
                                "alias": "properties",
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "schemaProperties",
                                "plural": true,
                                "selections": [
                                  (v18/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v29/*: any*/),
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
                                "selections": (v38/*: any*/),
                                "storageKey": "items(schema:\"nglp:journal_article\")"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "collections(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_ASCENDING\",page:1,perPage:4,schema:\"nglp:journal_issue\")"
                  },
                  {
                    "alias": "currentIssue",
                    "args": (v28/*: any*/),
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "firstCollection",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v2/*: any*/),
                      (v10/*: any*/),
                      (v3/*: any*/),
                      (v25/*: any*/),
                      (v36/*: any*/),
                      (v34/*: any*/),
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "perPage",
                            "value": 3
                          }
                        ],
                        "concreteType": "ItemConnection",
                        "kind": "LinkedField",
                        "name": "items",
                        "plural": false,
                        "selections": (v45/*: any*/),
                        "storageKey": "items(perPage:3)"
                      }
                    ],
                    "storageKey": "firstCollection(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",schema:\"nglp:journal_issue\")"
                  },
                  (v35/*: any*/),
                  (v21/*: any*/),
                  (v25/*: any*/),
                  {
                    "alias": "journal",
                    "args": (v46/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v18/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/),
                          (v10/*: any*/)
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v32/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  {
                    "alias": "volume",
                    "args": (v30/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v18/*: any*/),
                      (v47/*: any*/),
                      (v32/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "schema",
                                "value": [
                                  "nglp:journal_issue"
                                ]
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
                                    "selections": (v48/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "collections(schema:[\"nglp:journal_issue\"])"
                          }
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                  },
                  (v50/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionContributionConnection",
                    "kind": "LinkedField",
                    "name": "contributions",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CollectionContributionEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CollectionContribution",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "contributor",
                                "plural": false,
                                "selections": [
                                  (v18/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v51/*: any*/),
                                    "type": "PersonContributor",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v51/*: any*/),
                                    "type": "OrganizationContributor",
                                    "abstractKey": null
                                  },
                                  (v32/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v5/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v52/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "displayName",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "contributorKind",
                                    "storageKey": null
                                  },
                                  (v53/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "contributor",
                                    "plural": false,
                                    "selections": [
                                      (v39/*: any*/),
                                      (v40/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "ImageAttachment",
                                            "kind": "LinkedField",
                                            "name": "image",
                                            "plural": false,
                                            "selections": [
                                              (v54/*: any*/)
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "type": "Contributor",
                                        "abstractKey": "__isContributor"
                                      },
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v52/*: any*/),
                                          (v41/*: any*/),
                                          (v42/*: any*/)
                                        ],
                                        "type": "PersonContributor",
                                        "abstractKey": null
                                      },
                                      (v44/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v56/*: any*/)
                                    ],
                                    "type": "ItemContribution",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Collection",
                                        "kind": "LinkedField",
                                        "name": "collection",
                                        "plural": false,
                                        "selections": (v55/*: any*/),
                                        "storageKey": null
                                      }
                                    ],
                                    "type": "CollectionContribution",
                                    "abstractKey": null
                                  }
                                ],
                                "type": "Contribution",
                                "abstractKey": "__isContribution"
                              }
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
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemConnection",
                    "kind": "LinkedField",
                    "name": "items",
                    "plural": false,
                    "selections": (v45/*: any*/),
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v57/*: any*/),
                          (v18/*: any*/),
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
                                      (v3/*: any*/),
                                      (v58/*: any*/)
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
                              (v59/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          }
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v59/*: any*/)
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v60/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v9/*: any*/),
                  {
                    "alias": "journal",
                    "args": (v46/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": (v61/*: any*/),
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  {
                    "alias": "volume",
                    "args": (v30/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": (v61/*: any*/),
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                  },
                  {
                    "alias": "issue",
                    "args": [
                      (v27/*: any*/)
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": (v61/*: any*/),
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
                  },
                  (v3/*: any*/),
                  (v2/*: any*/),
                  (v10/*: any*/),
                  (v35/*: any*/),
                  (v11/*: any*/),
                  (v21/*: any*/),
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
                                  (v18/*: any*/),
                                  (v39/*: any*/),
                                  (v40/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v41/*: any*/),
                                      (v42/*: any*/),
                                      (v2/*: any*/),
                                      (v62/*: any*/),
                                      (v52/*: any*/),
                                      (v63/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v44/*: any*/)
                                        ],
                                        "type": "AnyContributor",
                                        "abstractKey": "__isAnyContributor"
                                      }
                                    ],
                                    "type": "PersonContributor",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v43/*: any*/),
                                      (v62/*: any*/),
                                      (v63/*: any*/)
                                    ],
                                    "type": "OrganizationContributor",
                                    "abstractKey": null
                                  },
                                  (v32/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v5/*: any*/),
                              (v52/*: any*/),
                              (v53/*: any*/),
                              (v56/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v37/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v50/*: any*/),
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
                            "selections": (v48/*: any*/),
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
                    "selections": (v38/*: any*/),
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
                              (v21/*: any*/),
                              {
                                "alias": "journal",
                                "args": (v46/*: any*/),
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "ancestorOfType",
                                "plural": false,
                                "selections": (v33/*: any*/),
                                "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                              },
                              {
                                "alias": "volumeId",
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
                                "selections": (v64/*: any*/),
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
                                "selections": (v64/*: any*/),
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
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "thumbnail",
                    "plural": false,
                    "selections": [
                      (v12/*: any*/),
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
                              (v13/*: any*/),
                              (v14/*: any*/),
                              (v22/*: any*/),
                              (v23/*: any*/)
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
                    "alias": "bodyText",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "body"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": [
                      (v18/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "FullText",
                            "kind": "LinkedField",
                            "name": "fullText",
                            "plural": false,
                            "selections": [
                              (v29/*: any*/),
                              (v49/*: any*/),
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
                          }
                        ],
                        "type": "FullTextProperty",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": "schemaProperty(fullPath:\"body\")"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v57/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v16/*: any*/)
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              (v59/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v18/*: any*/),
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
                                              (v3/*: any*/),
                                              (v8/*: any*/),
                                              (v58/*: any*/),
                                              (v5/*: any*/)
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
                                "type": "Entity",
                                "abstractKey": "__isEntity"
                              }
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          }
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v60/*: any*/)
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
    "cacheID": "4bbf7964f3f4c41bc75aa5401d83592b",
    "id": null,
    "metadata": {},
    "name": "SlugCollectionQuery",
    "operationKind": "query",
    "text": "query SlugCollectionQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    ...EntityContentLayoutFactoryFragment\n    community {\n      ...CommunityLayoutFragment\n      id\n    }\n    id\n  }\n  ...CommunityLayoutAppFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...CommunityPickerFragment\n  ...MobileMenuFragment\n}\n\nfragment ArticleContributorFragment on ItemContributionConnection {\n  edges {\n    node {\n      affiliation\n      role\n      item {\n        slug\n        id\n      }\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ... on PersonContributor {\n          __typename\n          title\n          bio\n          affiliation\n          image {\n            storage\n            ...ContributorAvatarFragment\n          }\n          ...ContributorNameFragment\n        }\n        ... on OrganizationContributor {\n          __typename\n          bio\n          image {\n            storage\n            ...ContributorAvatarFragment\n          }\n          ...ContributorNameFragment\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment ArticleHeroFragment on Item {\n  slug\n  title\n  subtitle\n  summary\n  doi\n  published {\n    ...PrecisionDateFragment\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ...AssetDownloadButtonFragment\n  }\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n  relatedItems {\n    ...RelatedArticlesFragment\n  }\n}\n\nfragment ArticleParentHeaderFragment on Item {\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ArticleSummaryFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  ... on ReferencesGlobalEntityDates {\n    __isReferencesGlobalEntityDates: __typename\n    published {\n      ...PrecisionDateFragment\n    }\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on ChildEntity {\n    __isChildEntity: __typename\n    summary\n  }\n  ... on Item {\n    contributions {\n      ...ContributorsListFragment\n    }\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n  contributions {\n    pageInfo {\n      totalCount\n    }\n  }\n  assets {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment ArticleTextFragment on Item {\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n  bodyText: schemaProperty(fullPath: \"body\") {\n    __typename\n    ... on FullTextProperty {\n      fullText {\n        content\n        kind\n        lang\n      }\n      type\n    }\n  }\n}\n\nfragment AssetDownloadButtonFragment on AssetProperty {\n  asset {\n    __typename\n    ... on Asset {\n      __isAsset: __typename\n      name\n      downloadUrl\n      kind\n      contentType\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n}\n\nfragment CollectionContributionsBlockFragment on CollectionContributionConnection {\n  edges {\n    node {\n      slug\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n}\n\nfragment CommunityCondensedNavAppFragment on Query {\n  ...CommunityPickerFragment\n  ...MobileMenuFragment\n}\n\nfragment CommunityCondensedNavFragment on Community {\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityLayoutAppFragment on Query {\n  ...AppBodyFragment\n  ...CommunityCondensedNavAppFragment\n}\n\nfragment CommunityLayoutFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNameFragment\n  ...CommunityNavBarFragment\n  ...CommunityCondensedNavFragment\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n}\n\nfragment ContributionBlockItemFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  displayName\n  contributorKind\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  edges {\n    node {\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment CurrentIssueFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  items(perPage: 3) {\n    edges {\n      node {\n        slug\n        ...ArticleSummaryFragment\n        id\n      }\n    }\n  }\n}\n\nfragment EntityContentLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...JournalLayoutFragment\n    ...JournalInfoFragment\n    ...IssueLayoutFragment\n    ...IssueSidebarNavFragment\n    ...IssueContentFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...ArticleLayoutFragment\n    ...ArticleTextFragment\n    contributions {\n      ...ArticleContributorFragment\n    }\n  }\n}\n\nfragment EntityHTMLHeadFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    title\n  }\n  ... on Collection {\n    title\n  }\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n  }\n  ... on Item {\n    title\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...EntityHTMLHeadFragment\n  ... on Entity {\n    __isEntity: __typename\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n    ...EntityNavBarFragment\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings {\n    edges {\n      node {\n        name\n        slug\n        identifier\n        children {\n          pageInfo {\n            totalCount\n          }\n        }\n        id\n      }\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment EntityOrderSelectFragment on OrderingConnection {\n  edges {\n    node {\n      name\n      identifier\n      id\n    }\n  }\n}\n\nfragment FeaturedIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...IssueSummaryFragment\n      id\n    }\n  }\n}\n\nfragment HeroImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment IssueContentFragment on Collection {\n  orderings {\n    edges {\n      node {\n        identifier\n        id\n      }\n    }\n  }\n  items {\n    ...IssueContentListFragment\n  }\n}\n\nfragment IssueContentListFragment on ItemConnection {\n  edges {\n    node {\n      slug\n      ...ArticleSummaryFragment\n      id\n    }\n  }\n}\n\nfragment IssueHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  issn\n  doi\n  published {\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n      subtitle\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ...AssetDownloadButtonFragment\n  }\n}\n\nfragment IssueLayoutFragment on Collection {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...IssueHeroFragment\n  ...PrevNextIssueFragment\n  contributions {\n    ...CollectionContributionsBlockFragment\n  }\n}\n\nfragment IssueSidebarNavFragment on Collection {\n  orderings {\n    ...EntityOrderSelectFragment\n  }\n  ...IssueSidebarNavListFragment\n}\n\nfragment IssueSidebarNavListFragment on Collection {\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment IssueSummaryFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  properties: schemaProperties {\n    __typename\n    ... on StringProperty {\n      content\n      path\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment JournalHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  issn\n  doi\n  heroImage {\n    storage\n    ...HeroImageFragment\n  }\n}\n\nfragment JournalInfoFragment on Collection {\n  title\n  issues: collections(schema: \"nglp:journal_issue\", order: PUBLISHED_ASCENDING, nodeFilter: DESCENDANTS, page: 1, perPage: 4) {\n    ...FeaturedIssuesFragment\n  }\n  currentIssue: firstCollection(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {\n    ...CurrentIssueFragment\n    id\n  }\n}\n\nfragment JournalLayoutFragment on Collection {\n  ...EntityHTMLHeadFragment\n  ...JournalHeroFragment\n  ...EntityNavBarFragment\n  ...BreadcrumbsBarFragment\n  related: links(order: RECENT, perPage: 4) {\n    ...RelatedJournalsFragment\n  }\n}\n\nfragment MobileMenuFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PrevNextIssueFragment on Collection {\n  slug\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      collections(schema: [\"nglp:journal_issue\"]) {\n        edges {\n          node {\n            title\n            slug\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment RelatedArticlesFragment on ItemConnection {\n  edges {\n    node {\n      title\n      slug\n      published {\n        ...PrecisionDateFragment\n      }\n      journal: ancestorOfType(schema: \"nglp:journal\") {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      volumeId: schemaProperty(fullPath: \"volume.id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      issueId: schemaProperty(fullPath: \"id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment RelatedJournalsFragment on EntityLinkConnection {\n  edges {\n    node {\n      target {\n        __typename\n        ... on Collection {\n          __typename\n          id\n          title\n          slug\n          published {\n            ...PrecisionDateFragment\n          }\n          thumbnail {\n            storage\n            ...CoverImageFragment\n          }\n          currentIssue: firstCollection(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {\n            number: schemaProperty(fullPath: \"number\") {\n              __typename\n              ... on StringProperty {\n                content\n              }\n            }\n            volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n              __typename\n              ... on Collection {\n                title\n              }\n              ... on Node {\n                __isNode: __typename\n                id\n              }\n            }\n            id\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment SearchButtonFragment on Community {\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Community {\n  slug\n  name\n  schemaRanks {\n    slug\n    id\n  }\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  image: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '05be46e1cc19118c5880f60c42ee1a68';
export default node;
