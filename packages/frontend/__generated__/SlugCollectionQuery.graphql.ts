/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SlugCollectionQueryVariables = {
    slug: string;
    page?: number | null | undefined;
};
export type SlugCollectionQueryResponse = {
    readonly collection: {
        readonly community: {
            readonly " $fragmentRefs": FragmentRefs<"AppLayoutCommunityFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"EntityContentLayoutFactoryFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"AppLayoutFragment">;
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
    ...EntityContentLayoutFactoryFragment_2Pg8Wv
    community {
      ...AppLayoutCommunityFragment
      id
    }
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
  ...DOIFragment
  published {
    ...PrecisionDateFragment
    value
  }
  contributions {
    ...ContributorsListFragment
  }
  pdfVersion: schemaProperty(fullPath: "pdf_version") {
    __typename
    ... on AssetProperty {
      asset {
        __typename
        ...AssetDownloadButtonFragment
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
  journal: ancestorOfType(schema: "nglp:journal") {
    __typename
    ...PeerReviewedFragment
    ...PreprintVersionFragment
    ...OpenAccessFragment
    ...CCLicenseFragment
    ... on Node {
      __isNode: __typename
      id
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

fragment ArticleSummaryFragment on Item {
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
      }
    }
    ...FullTextFragment
  }
  pdf: schemaProperty(fullPath: "pdf_version") {
    __typename
    ... on AssetProperty {
      asset {
        __typename
        ...AssetInlinePDFFragment
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
}

fragment AssetDownloadButtonFragment on Asset {
  __isAsset: __typename
  name
  downloadUrl
  kind
  contentType
}

fragment AssetInlinePDFFragment on Asset {
  __isAsset: __typename
  ... on AssetPDF {
    downloadUrl
  }
  ...AssetDownloadButtonFragment
}

fragment BreadcrumbLinkFragment on EntityBreadcrumb {
  label
  kind
  slug
}

fragment BreadcrumbsBarFragment on Entity {
  __isEntity: __typename
  ...BreadcrumbsFragment
}

fragment BreadcrumbsFragment on Entity {
  __isEntity: __typename
  __typename
  title
  breadcrumbs {
    depth
    ...BreadcrumbLinkFragment
    id
  }
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
}

fragment CCLicenseFragment on SchemaInstance {
  __isSchemaInstance: __typename
  ccLicense: schemaProperty(fullPath: "cc_license") {
    __typename
    ... on SelectProperty {
      selection
      defaultSelection
      options {
        label
        value
      }
    }
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

fragment DOIFragment on HasDOI {
  __isHasDOI: __typename
  doi
}

fragment EntityAnnouncementsFragment on AnnouncementConnection {
  nodes {
    teaser
    header
    slug
    id
  }
}

fragment EntityContentFragment on Entity {
  __isEntity: __typename
  __typename
  orderings {
    edges {
      node {
        identifier
        id
      }
    }
  }
}

fragment EntityContentLayoutFactoryFragment_2Pg8Wv on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFragment
    ...EntityContentFragment
    ...JournalLayoutFragment
    ...JournalContentFragment
    ...IssueLayoutFragment
  }
  ... on Item {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFragment
    ...EntityContentFragment
    ...ArticleLayoutFragment
    ...ArticleTextFragment
    ...HowToCiteFragment
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
    heroImageMetadata {
      ...HeroImageMetadataFragment
    }
  }
  ... on Item {
    title
    heroImage {
      storage
      ...HeroImageFragment
    }
    heroImageMetadata {
      ...HeroImageMetadataFragment
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

fragment FeaturedIssueFragment on Collection {
  id
  title
  subtitle
  slug
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
  articles: items(schema: "nglp:journal_article") {
    pageInfo {
      totalCount
    }
  }
  ordering(identifier: "articles") {
    identifier
    children(perPage: 3) {
      edges {
        node {
          entry {
            __typename
            ... on Sluggable {
              __isSluggable: __typename
              slug
            }
            ...ArticleSummaryFragment
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
    id
  }
  featuredArticles: schemaProperty(fullPath: "featured_articles") {
    __typename
    ... on EntitiesProperty {
      entities {
        __typename
        ... on Sluggable {
          __isSluggable: __typename
          slug
        }
        ...ArticleSummaryFragment
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
}

fragment FullTextFragment on AnySchemaProperty {
  __isAnySchemaProperty: __typename
  ... on FullTextProperty {
    fullText {
      content
      kind
      lang
    }
    type
  }
}

fragment HeroImageFragment on ImageAttachment {
  image: original {
    alt
    url
  }
}

fragment HeroImageMetadataFragment on ImageMetadata {
  alt
}

fragment HowToCiteFragment on Item {
  citation: schemaProperty(fullPath: "citation") {
    __typename
    ... on MarkdownProperty {
      content
    }
  }
}

fragment ISSNFragment on HasISSN {
  __isHasISSN: __typename
  issn
}

fragment IssueHeroFragment on Collection {
  id
  title
  subtitle
  summary
  ...DOIFragment
  published {
    value
    ...PrecisionDateFragment
  }
  thumbnail {
    ...CoverImageFragment
  }
  journal: ancestorOfType(schema: "nglp:journal") {
    __typename
    ...JournalHeroCompactFragment
    ...JournalHeroMetadataFragment
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
    ... on AssetProperty {
      asset {
        __typename
        ...AssetDownloadButtonFragment
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
}

fragment IssueLayoutFragment on Collection {
  ...EntityHTMLHeadFragment
  ...BreadcrumbsBarFragment
  ...IssueHeroFragment
  contributions {
    ...CollectionContributionsBlockFragment
  }
  relatedCollections(page: 1, perPage: 4) {
    ...RelatedIssuesFragment
  }
}

fragment IssueSummaryFragment on Collection {
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

fragment JournalContentFragment on Collection {
  title
  slug
  about: schemaProperty(fullPath: "description") {
    __typename
    ... on FullTextProperty {
      fullText {
        content
      }
    }
    ...FullTextFragment
  }
  issues: collections(schema: "nglp:journal_issue", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS, page: 1, perPage: 4) {
    ...RecentIssuesFragment
  }
  currentIssue: firstCollection(schema: "nglp:journal_issue", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {
    ...FeaturedIssueFragment
    id
  }
  announcements {
    ...EntityAnnouncementsFragment
  }
}

fragment JournalHeroCompactFragment on Collection {
  title
  subtitle
}

fragment JournalHeroFragment on Collection {
  slug
  title
  subtitle
  heroImage {
    storage
    ...HeroImageFragment
  }
  heroImageMetadata {
    ...HeroImageMetadataFragment
  }
  ...DOIFragment
  ...JournalHeroMetadataFragment
}

fragment JournalHeroMetadataFragment on Collection {
  ...ISSNFragment
  ...OpenAccessFragment
  ...CCLicenseFragment
  ...PeerReviewedFragment
}

fragment JournalLayoutFragment on Collection {
  ...EntityHTMLHeadFragment
  ...JournalHeroFragment
  ...EntityNavBarFragment
  ...BreadcrumbsBarFragment
  related: relatedCollections(order: RECENT, perPage: 4) {
    ...RelatedJournalsFragment
  }
}

fragment OpenAccessFragment on SchemaInstance {
  __isSchemaInstance: __typename
  openAccess: schemaProperty(fullPath: "open_access") {
    __typename
    ... on BooleanProperty {
      checked
      checkedByDefault
    }
  }
}

fragment PeerReviewedFragment on SchemaInstance {
  __isSchemaInstance: __typename
  peerReviewed: schemaProperty(fullPath: "peer_reviewed") {
    __typename
    ... on BooleanProperty {
      checked
      checkedByDefault
    }
  }
}

fragment PrecisionDateFragment on VariablePrecisionDate {
  precision
  value
}

fragment PreprintVersionFragment on SchemaInstance {
  __isSchemaInstance: __typename
  prePrintVersion: schemaProperty(fullPath: "preprint_version") {
    __typename
    ... on BooleanProperty {
      checked
      checkedByDefault
    }
  }
}

fragment RecentIssuesFragment on CollectionConnection {
  edges {
    node {
      slug
      ...IssueSummaryFragment
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

fragment RelatedIssueBlockFragment on Collection {
  __typename
  title
  subtitle
  slug
  id
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
  articles: collections(schema: "nglp:journal_article") {
    pageInfo {
      totalCount
    }
  }
}

fragment RelatedIssuesFragment on CollectionConnection {
  edges {
    node {
      slug
      ...RelatedIssueBlockFragment
      id
    }
  }
}

fragment RelatedJournalFragment on Collection {
  __typename
  id
  title
  subtitle
  slug
  updatedAt
  thumbnail {
    storage
    ...CoverImageFragment
  }
  issues: descendants(scope: COLLECTION, schema: ["nglp:journal_issue"]) {
    pageInfo {
      totalCount
    }
  }
}

fragment RelatedJournalsFragment on CollectionConnection {
  edges {
    node {
      slug
      ...RelatedJournalFragment
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
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
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v12 = [
  (v4/*: any*/),
  (v3/*: any*/),
  (v11/*: any*/)
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v14 = [
  (v13/*: any*/),
  (v11/*: any*/)
],
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": (v14/*: any*/),
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v18 = [
  (v17/*: any*/),
  (v8/*: any*/)
],
v19 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "alias": "image",
      "args": null,
      "concreteType": "ImageOriginal",
      "kind": "LinkedField",
      "name": "original",
      "plural": false,
      "selections": (v18/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageMetadata",
  "kind": "LinkedField",
  "name": "heroImageMetadata",
  "plural": false,
  "selections": [
    (v17/*: any*/)
  ],
  "storageKey": null
},
v21 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v23 = {
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
        (v8/*: any*/),
        (v17/*: any*/),
        (v6/*: any*/),
        (v7/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v24 = {
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
v25 = [
  (v24/*: any*/)
],
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v27 = [
  (v22/*: any*/),
  {
    "kind": "TypeDiscriminator",
    "abstractKey": "__isAnySchemaProperty"
  },
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
          (v26/*: any*/),
          (v10/*: any*/),
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
v28 = {
  "kind": "Literal",
  "name": "nodeFilter",
  "value": "DESCENDANTS"
},
v29 = {
  "kind": "Literal",
  "name": "order",
  "value": "PUBLISHED_DESCENDING"
},
v30 = {
  "kind": "Literal",
  "name": "page",
  "value": 1
},
v31 = {
  "kind": "Literal",
  "name": "schema",
  "value": "nglp:journal_issue"
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v33 = [
  (v23/*: any*/)
],
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "precision",
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
    (v34/*: any*/),
    (v35/*: any*/)
  ],
  "storageKey": null
},
v37 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_volume"
  }
],
v38 = [
  (v3/*: any*/)
],
v39 = {
  "kind": "InlineFragment",
  "selections": [
    (v11/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v40 = [
  (v22/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v38/*: any*/),
    "type": "Collection",
    "abstractKey": null
  },
  (v39/*: any*/)
],
v41 = {
  "alias": "volume",
  "args": (v37/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v40/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
},
v42 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_article"
  }
],
v43 = {
  "alias": "articles",
  "args": (v42/*: any*/),
  "concreteType": "ItemConnection",
  "kind": "LinkedField",
  "name": "items",
  "plural": false,
  "selections": (v25/*: any*/),
  "storageKey": "items(schema:\"nglp:journal_article\")"
},
v44 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": (v33/*: any*/),
  "storageKey": null
},
v45 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v46 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": (v18/*: any*/),
    "storageKey": null
  }
],
v47 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v48 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v49 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v50 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "legalName",
  "storageKey": null
},
v51 = {
  "kind": "InlineFragment",
  "selections": [
    (v50/*: any*/)
  ],
  "type": "OrganizationContributor",
  "abstractKey": null
},
v52 = [
  (v22/*: any*/),
  (v45/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v3/*: any*/),
      (v16/*: any*/),
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
            "selections": (v46/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v4/*: any*/),
      (v32/*: any*/),
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
                      (v22/*: any*/),
                      (v47/*: any*/),
                      (v45/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v48/*: any*/),
                          (v49/*: any*/)
                        ],
                        "type": "PersonContributor",
                        "abstractKey": null
                      },
                      (v51/*: any*/),
                      (v39/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v11/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v24/*: any*/)
        ],
        "storageKey": null
      },
      (v36/*: any*/)
    ],
    "type": "Item",
    "abstractKey": null
  },
  (v39/*: any*/)
],
v53 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal"
  }
],
v54 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "issn",
      "storageKey": null
    }
  ],
  "type": "HasISSN",
  "abstractKey": "__isHasISSN"
},
v55 = [
  (v22/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "checked",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "checkedByDefault",
        "storageKey": null
      }
    ],
    "type": "BooleanProperty",
    "abstractKey": null
  }
],
v56 = {
  "alias": "openAccess",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "open_access"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v55/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"open_access\")"
},
v57 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v58 = {
  "alias": "ccLicense",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "cc_license"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": [
    (v22/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "selection",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "defaultSelection",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SelectOption",
          "kind": "LinkedField",
          "name": "options",
          "plural": true,
          "selections": [
            (v57/*: any*/),
            (v34/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "SelectProperty",
      "abstractKey": null
    }
  ],
  "storageKey": "schemaProperty(fullPath:\"cc_license\")"
},
v59 = {
  "alias": "peerReviewed",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "peer_reviewed"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v55/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"peer_reviewed\")"
},
v60 = {
  "kind": "InlineFragment",
  "selections": [
    (v56/*: any*/),
    (v58/*: any*/),
    (v59/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
},
v61 = {
  "kind": "InlineFragment",
  "selections": (v38/*: any*/),
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v62 = [
  (v22/*: any*/),
  (v61/*: any*/),
  (v39/*: any*/)
],
v63 = {
  "alias": "volume",
  "args": (v37/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v62/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
},
v64 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "pdf_version"
  }
],
v65 = [
  (v22/*: any*/),
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
          (v22/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "downloadUrl",
                "storageKey": null
              },
              (v10/*: any*/),
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
          (v39/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "AssetProperty",
    "abstractKey": null
  }
],
v66 = {
  "alias": "pdfVersion",
  "args": (v64/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v65/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
},
v67 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      (v5/*: any*/)
    ],
    "storageKey": null
  }
],
v68 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v69 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v70 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "small",
  "plural": false,
  "selections": (v46/*: any*/),
  "storageKey": null
},
v71 = [
  (v4/*: any*/),
  (v11/*: any*/)
],
v72 = {
  "alias": null,
  "args": null,
  "concreteType": "Item",
  "kind": "LinkedField",
  "name": "item",
  "plural": false,
  "selections": (v71/*: any*/),
  "storageKey": null
},
v73 = {
  "alias": "journal",
  "args": (v53/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v40/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v74 = {
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
    (v57/*: any*/),
    (v10/*: any*/),
    (v4/*: any*/),
    (v11/*: any*/)
  ],
  "storageKey": null
},
v75 = {
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
            (v9/*: any*/),
            (v4/*: any*/),
            (v13/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "OrderingEntryConnection",
              "kind": "LinkedField",
              "name": "children",
              "plural": false,
              "selections": (v25/*: any*/),
              "storageKey": null
            },
            (v11/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v76 = {
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
            (v3/*: any*/),
            (v4/*: any*/),
            (v11/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v77 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isSluggable"
},
v78 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isNode"
},
v79 = {
  "kind": "InlineFragment",
  "selections": [
    (v22/*: any*/),
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
              "selections": (v14/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v74/*: any*/),
    (v77/*: any*/)
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v80 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doi",
      "storageKey": null
    }
  ],
  "type": "HasDOI",
  "abstractKey": "__isHasDOI"
},
v81 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v35/*: any*/),
    (v34/*: any*/)
  ],
  "storageKey": null
},
v82 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v83 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v70/*: any*/)
  ],
  "storageKey": null
},
v84 = [
  (v22/*: any*/),
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
      (v26/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
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
    "name": "SlugCollectionQuery",
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
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AppLayoutCommunityFragment"
              }
            ],
            "storageKey": null
          },
          {
            "args": [
              {
                "kind": "Variable",
                "name": "page",
                "variableName": "page"
              }
            ],
            "kind": "FragmentSpread",
            "name": "EntityContentLayoutFactoryFragment"
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
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SlugCollectionQuery",
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
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
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
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/)
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
                  (v4/*: any*/),
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "count",
                    "storageKey": null
                  },
                  (v10/*: any*/),
                  (v11/*: any*/)
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
                        "selections": (v12/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v9/*: any*/),
              (v11/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v15/*: any*/),
                  (v4/*: any*/),
                  (v3/*: any*/),
                  (v16/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  {
                    "alias": "related",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "order",
                        "value": "RECENT"
                      },
                      (v21/*: any*/)
                    ],
                    "concreteType": "CollectionConnection",
                    "kind": "LinkedField",
                    "name": "relatedCollections",
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
                              (v4/*: any*/),
                              (v22/*: any*/),
                              (v11/*: any*/),
                              (v3/*: any*/),
                              (v16/*: any*/),
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
                                  (v5/*: any*/),
                                  (v23/*: any*/)
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
                                "selections": (v25/*: any*/),
                                "storageKey": "descendants(schema:[\"nglp:journal_issue\"],scope:\"COLLECTION\")"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "relatedCollections(order:\"RECENT\",perPage:4)"
                  },
                  {
                    "alias": "about",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "description"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v27/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"description\")"
                  },
                  {
                    "alias": "issues",
                    "args": [
                      (v28/*: any*/),
                      (v29/*: any*/),
                      (v30/*: any*/),
                      (v21/*: any*/),
                      (v31/*: any*/)
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
                              (v4/*: any*/),
                              (v11/*: any*/),
                              (v3/*: any*/),
                              (v16/*: any*/),
                              (v32/*: any*/),
                              {
                                "alias": "cover",
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": (v33/*: any*/),
                                "storageKey": null
                              },
                              (v36/*: any*/),
                              (v41/*: any*/),
                              {
                                "alias": "properties",
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "schemaProperties",
                                "plural": true,
                                "selections": [
                                  (v22/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v26/*: any*/),
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
                              (v43/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "collections(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",page:1,perPage:4,schema:\"nglp:journal_issue\")"
                  },
                  {
                    "alias": "currentIssue",
                    "args": [
                      (v28/*: any*/),
                      (v29/*: any*/),
                      (v31/*: any*/)
                    ],
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "firstCollection",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v3/*: any*/),
                      (v16/*: any*/),
                      (v4/*: any*/),
                      (v44/*: any*/),
                      (v36/*: any*/),
                      (v41/*: any*/),
                      (v43/*: any*/),
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "identifier",
                            "value": "articles"
                          }
                        ],
                        "concreteType": "Ordering",
                        "kind": "LinkedField",
                        "name": "ordering",
                        "plural": false,
                        "selections": [
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "perPage",
                                "value": 3
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
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": null,
                                        "kind": "LinkedField",
                                        "name": "entry",
                                        "plural": false,
                                        "selections": (v52/*: any*/),
                                        "storageKey": null
                                      },
                                      (v11/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v24/*: any*/)
                            ],
                            "storageKey": "children(perPage:3)"
                          },
                          (v11/*: any*/)
                        ],
                        "storageKey": "ordering(identifier:\"articles\")"
                      },
                      {
                        "alias": "featuredArticles",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "fullPath",
                            "value": "featured_articles"
                          }
                        ],
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": [
                          (v22/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "entities",
                                "plural": true,
                                "selections": (v52/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "EntitiesProperty",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": "schemaProperty(fullPath:\"featured_articles\")"
                      }
                    ],
                    "storageKey": "firstCollection(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",schema:\"nglp:journal_issue\")"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnnouncementConnection",
                    "kind": "LinkedField",
                    "name": "announcements",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Announcement",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "teaser",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "header",
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          (v11/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v32/*: any*/),
                  (v36/*: any*/),
                  (v44/*: any*/),
                  {
                    "alias": "journal",
                    "args": (v53/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v22/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/),
                          (v16/*: any*/),
                          (v54/*: any*/),
                          (v60/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      (v39/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  (v63/*: any*/),
                  (v66/*: any*/),
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
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "contributor",
                                "plural": false,
                                "selections": [
                                  (v22/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v67/*: any*/),
                                    "type": "PersonContributor",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v67/*: any*/),
                                    "type": "OrganizationContributor",
                                    "abstractKey": null
                                  },
                                  (v39/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v68/*: any*/),
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
                                  (v69/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "contributor",
                                    "plural": false,
                                    "selections": [
                                      (v47/*: any*/),
                                      (v45/*: any*/),
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
                                              (v70/*: any*/)
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
                                          (v68/*: any*/),
                                          (v48/*: any*/),
                                          (v49/*: any*/)
                                        ],
                                        "type": "PersonContributor",
                                        "abstractKey": null
                                      },
                                      (v51/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v72/*: any*/)
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
                                        "selections": (v71/*: any*/),
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
                    "args": [
                      (v30/*: any*/),
                      (v21/*: any*/)
                    ],
                    "concreteType": "CollectionConnection",
                    "kind": "LinkedField",
                    "name": "relatedCollections",
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
                              (v4/*: any*/),
                              (v22/*: any*/),
                              (v3/*: any*/),
                              (v16/*: any*/),
                              (v11/*: any*/),
                              (v44/*: any*/),
                              (v36/*: any*/),
                              (v41/*: any*/),
                              (v73/*: any*/),
                              {
                                "alias": "articles",
                                "args": (v42/*: any*/),
                                "concreteType": "CollectionConnection",
                                "kind": "LinkedField",
                                "name": "collections",
                                "plural": false,
                                "selections": (v25/*: any*/),
                                "storageKey": "collections(schema:\"nglp:journal_article\")"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "relatedCollections(page:1,perPage:4)"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v22/*: any*/),
                          (v74/*: any*/),
                          (v75/*: any*/),
                          (v76/*: any*/),
                          (v77/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v78/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          }
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v78/*: any*/)
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v79/*: any*/),
                  (v80/*: any*/),
                  (v54/*: any*/),
                  (v60/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v15/*: any*/),
                  {
                    "alias": "journal",
                    "args": (v53/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v22/*: any*/),
                      (v61/*: any*/),
                      (v39/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v59/*: any*/),
                          {
                            "alias": "prePrintVersion",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "fullPath",
                                "value": "preprint_version"
                              }
                            ],
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "schemaProperty",
                            "plural": false,
                            "selections": (v55/*: any*/),
                            "storageKey": "schemaProperty(fullPath:\"preprint_version\")"
                          },
                          (v56/*: any*/),
                          (v58/*: any*/)
                        ],
                        "type": "SchemaInstance",
                        "abstractKey": "__isSchemaInstance"
                      }
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  (v63/*: any*/),
                  {
                    "alias": "issue",
                    "args": [
                      (v31/*: any*/)
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": (v62/*: any*/),
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
                  },
                  (v4/*: any*/),
                  (v3/*: any*/),
                  (v16/*: any*/),
                  (v32/*: any*/),
                  (v81/*: any*/),
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
                                  (v22/*: any*/),
                                  (v47/*: any*/),
                                  (v45/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v48/*: any*/),
                                      (v49/*: any*/),
                                      (v3/*: any*/),
                                      (v82/*: any*/),
                                      (v68/*: any*/),
                                      (v83/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v51/*: any*/)
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
                                      (v50/*: any*/),
                                      (v82/*: any*/),
                                      (v83/*: any*/)
                                    ],
                                    "type": "OrganizationContributor",
                                    "abstractKey": null
                                  },
                                  (v39/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/),
                              (v68/*: any*/),
                              (v69/*: any*/),
                              (v72/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v24/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v66/*: any*/),
                  (v76/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnyAssetConnection",
                    "kind": "LinkedField",
                    "name": "assets",
                    "plural": false,
                    "selections": (v25/*: any*/),
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
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v81/*: any*/),
                              (v73/*: any*/),
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
                                "selections": (v84/*: any*/),
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
                                "selections": (v84/*: any*/),
                                "storageKey": "schemaProperty(fullPath:\"id\")"
                              },
                              (v11/*: any*/)
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
                      (v5/*: any*/),
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
                              (v17/*: any*/),
                              (v8/*: any*/),
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
                    "selections": (v27/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"body\")"
                  },
                  {
                    "alias": "pdf",
                    "args": (v64/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v65/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
                  },
                  {
                    "alias": "citation",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "citation"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": [
                      (v22/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v26/*: any*/)
                        ],
                        "type": "MarkdownProperty",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": "schemaProperty(fullPath:\"citation\")"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v22/*: any*/),
                          (v74/*: any*/),
                          (v77/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v19/*: any*/),
                                  (v20/*: any*/)
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              (v78/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v75/*: any*/)
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
                  (v79/*: any*/),
                  (v80/*: any*/)
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
                "selections": (v12/*: any*/),
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
    "cacheID": "1f6ec1760dfca02656f0910e16f94f72",
    "id": null,
    "metadata": {},
    "name": "SlugCollectionQuery",
    "operationKind": "query",
    "text": "query SlugCollectionQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    ...EntityContentLayoutFactoryFragment_2Pg8Wv\n    community {\n      ...AppLayoutCommunityFragment\n      id\n    }\n    id\n  }\n  ...AppLayoutFragment\n}\n\nfragment AppBodyCommunityFragment on Community {\n  ...AppHeaderCommunityFragment\n  ...AppFooterCommunityFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterCommunityFragment on Community {\n  ...CommunityPickerActiveFragment\n  ...CommunityNameFragment\n}\n\nfragment AppFooterFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment AppHeaderCommunityFragment on Community {\n  ...CommunityPickerActiveFragment\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n  ...CommunityNameFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment AppLayoutCommunityFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNavBarFragment\n  ...AppBodyCommunityFragment\n}\n\nfragment AppLayoutFragment on Query {\n  ...AppBodyFragment\n  ...CommunityPickerFragment\n}\n\nfragment ArticleContributorFragment on ItemContributionConnection {\n  edges {\n    node {\n      affiliation\n      role\n      item {\n        slug\n        id\n      }\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ... on PersonContributor {\n          __typename\n          title\n          bio\n          affiliation\n          image {\n            storage\n            ...ContributorAvatarFragment\n          }\n          ...ContributorNameFragment\n        }\n        ... on OrganizationContributor {\n          __typename\n          bio\n          image {\n            storage\n            ...ContributorAvatarFragment\n          }\n          ...ContributorNameFragment\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment ArticleHeroFragment on Item {\n  slug\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...PeerReviewedFragment\n    ...PreprintVersionFragment\n    ...OpenAccessFragment\n    ...CCLicenseFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n  relatedItems {\n    ...RelatedArticlesFragment\n  }\n}\n\nfragment ArticleParentHeaderFragment on Item {\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ArticleSummaryFragment on Item {\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  slug\n  summary\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n  contributions {\n    pageInfo {\n      totalCount\n    }\n  }\n  assets {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment ArticleTextFragment on Item {\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n  bodyText: schemaProperty(fullPath: \"body\") {\n    __typename\n    ... on FullTextProperty {\n      fullText {\n        content\n      }\n    }\n    ...FullTextFragment\n  }\n  pdf: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetInlinePDFFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment AssetDownloadButtonFragment on Asset {\n  __isAsset: __typename\n  name\n  downloadUrl\n  kind\n  contentType\n}\n\nfragment AssetInlinePDFFragment on Asset {\n  __isAsset: __typename\n  ... on AssetPDF {\n    downloadUrl\n  }\n  ...AssetDownloadButtonFragment\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment CCLicenseFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  ccLicense: schemaProperty(fullPath: \"cc_license\") {\n    __typename\n    ... on SelectProperty {\n      selection\n      defaultSelection\n      options {\n        label\n        value\n      }\n    }\n  }\n}\n\nfragment CollectionContributionsBlockFragment on CollectionContributionConnection {\n  edges {\n    node {\n      slug\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityLogoFragment on ImageAttachment {\n  storage\n  original {\n    url\n    width\n    height\n  }\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      width\n      height\n    }\n    ...CommunityLogoFragment\n  }\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    kind\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerActiveFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n}\n\nfragment ContributionBlockItemFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  displayName\n  contributorKind\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  edges {\n    node {\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  pageInfo {\n    totalCount\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doi\n}\n\nfragment EntityAnnouncementsFragment on AnnouncementConnection {\n  nodes {\n    teaser\n    header\n    slug\n    id\n  }\n}\n\nfragment EntityContentFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings {\n    edges {\n      node {\n        identifier\n        id\n      }\n    }\n  }\n}\n\nfragment EntityContentLayoutFactoryFragment_2Pg8Wv on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...EntityContentFragment\n    ...JournalLayoutFragment\n    ...JournalContentFragment\n    ...IssueLayoutFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...EntityContentFragment\n    ...ArticleLayoutFragment\n    ...ArticleTextFragment\n    ...HowToCiteFragment\n    contributions {\n      ...ArticleContributorFragment\n    }\n  }\n}\n\nfragment EntityHTMLHeadFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    title\n  }\n  ... on Collection {\n    title\n  }\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n    heroImageMetadata {\n      ...HeroImageMetadataFragment\n    }\n  }\n  ... on Item {\n    title\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n    heroImageMetadata {\n      ...HeroImageMetadataFragment\n    }\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...EntityHTMLHeadFragment\n  ... on Entity {\n    __isEntity: __typename\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n    ...EntityNavBarFragment\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings {\n    edges {\n      node {\n        name\n        slug\n        identifier\n        children {\n          pageInfo {\n            totalCount\n          }\n        }\n        id\n      }\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment FeaturedIssueFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  ordering(identifier: \"articles\") {\n    identifier\n    children(perPage: 3) {\n      edges {\n        node {\n          entry {\n            __typename\n            ... on Sluggable {\n              __isSluggable: __typename\n              slug\n            }\n            ...ArticleSummaryFragment\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          id\n        }\n      }\n      pageInfo {\n        totalCount\n      }\n    }\n    id\n  }\n  featuredArticles: schemaProperty(fullPath: \"featured_articles\") {\n    __typename\n    ... on EntitiesProperty {\n      entities {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ArticleSummaryFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment FullTextFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  ... on FullTextProperty {\n    fullText {\n      content\n      kind\n      lang\n    }\n    type\n  }\n}\n\nfragment HeroImageFragment on ImageAttachment {\n  image: original {\n    alt\n    url\n  }\n}\n\nfragment HeroImageMetadataFragment on ImageMetadata {\n  alt\n}\n\nfragment HowToCiteFragment on Item {\n  citation: schemaProperty(fullPath: \"citation\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n}\n\nfragment ISSNFragment on HasISSN {\n  __isHasISSN: __typename\n  issn\n}\n\nfragment IssueHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment IssueLayoutFragment on Collection {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...IssueHeroFragment\n  contributions {\n    ...CollectionContributionsBlockFragment\n  }\n  relatedCollections(page: 1, perPage: 4) {\n    ...RelatedIssuesFragment\n  }\n}\n\nfragment IssueSummaryFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  properties: schemaProperties {\n    __typename\n    ... on StringProperty {\n      content\n      path\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment JournalContentFragment on Collection {\n  title\n  slug\n  about: schemaProperty(fullPath: \"description\") {\n    __typename\n    ... on FullTextProperty {\n      fullText {\n        content\n      }\n    }\n    ...FullTextFragment\n  }\n  issues: collections(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS, page: 1, perPage: 4) {\n    ...RecentIssuesFragment\n  }\n  currentIssue: firstCollection(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {\n    ...FeaturedIssueFragment\n    id\n  }\n  announcements {\n    ...EntityAnnouncementsFragment\n  }\n}\n\nfragment JournalHeroCompactFragment on Collection {\n  title\n  subtitle\n}\n\nfragment JournalHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  heroImage {\n    storage\n    ...HeroImageFragment\n  }\n  heroImageMetadata {\n    ...HeroImageMetadataFragment\n  }\n  ...DOIFragment\n  ...JournalHeroMetadataFragment\n}\n\nfragment JournalHeroMetadataFragment on Collection {\n  ...ISSNFragment\n  ...OpenAccessFragment\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n}\n\nfragment JournalLayoutFragment on Collection {\n  ...EntityHTMLHeadFragment\n  ...JournalHeroFragment\n  ...EntityNavBarFragment\n  ...BreadcrumbsBarFragment\n  related: relatedCollections(order: RECENT, perPage: 4) {\n    ...RelatedJournalsFragment\n  }\n}\n\nfragment OpenAccessFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  openAccess: schemaProperty(fullPath: \"open_access\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PeerReviewedFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  peerReviewed: schemaProperty(fullPath: \"peer_reviewed\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PreprintVersionFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  prePrintVersion: schemaProperty(fullPath: \"preprint_version\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment RecentIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...IssueSummaryFragment\n      id\n    }\n  }\n}\n\nfragment RelatedArticlesFragment on ItemConnection {\n  edges {\n    node {\n      title\n      slug\n      published {\n        ...PrecisionDateFragment\n      }\n      journal: ancestorOfType(schema: \"nglp:journal\") {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      volumeId: schemaProperty(fullPath: \"volume.id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      issueId: schemaProperty(fullPath: \"id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment RelatedIssueBlockFragment on Collection {\n  __typename\n  title\n  subtitle\n  slug\n  id\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: collections(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedIssueBlockFragment\n      id\n    }\n  }\n}\n\nfragment RelatedJournalFragment on Collection {\n  __typename\n  id\n  title\n  subtitle\n  slug\n  updatedAt\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedJournalsFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedJournalFragment\n      id\n    }\n  }\n}\n\nfragment SearchButtonFragment on Community {\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Community {\n  slug\n  name\n  schemaRanks {\n    slug\n    id\n  }\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  image: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '977c54bf5f6d9e2a36028e903be5d9a2';
export default node;
