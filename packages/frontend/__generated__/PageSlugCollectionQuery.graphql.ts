/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PageSlugCollectionQueryVariables = {
    slug: string;
    pageSlug: string;
};
export type PageSlugCollectionQueryResponse = {
    readonly collection: {
        readonly community: {
            readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"EntityPageLayoutFactoryFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutAppFragment">;
};
export type PageSlugCollectionQuery = {
    readonly response: PageSlugCollectionQueryResponse;
    readonly variables: PageSlugCollectionQueryVariables;
};



/*
query PageSlugCollectionQuery(
  $slug: Slug!
  $pageSlug: String!
) {
  collection(slug: $slug) {
    ...EntityPageLayoutFactoryFragment
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
}

fragment AppHeaderFragment on Query {
  ...CommunityPickerFragment
}

fragment ArticleHeroFragment on Item {
  slug
  title
  subtitle
  summary
  ...DOIFragment
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
  title
  breadcrumbs {
    depth
    ...BreadcrumbLinkFragment
    id
  }
}

fragment CCLicenseFragment on SchemaInstance {
  __isSchemaInstance: __typename
  ccLicense: schemaProperty(fullPath: "cc_license") {
    __typename
    ... on SelectProperty {
      selection
      defaultSelection
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
  ...AppBodyFragment
  ...CommunityCondensedNavAppFragment
  ...CommunityPickerFragment
}

fragment CommunityLayoutFragment on Community {
  ...CommunityHTMLHeadFragment
  ...CommunityNameFragment
  ...CommunityNavBarFragment
  ...CommunityCondensedNavFragment
  ...CommunityPickerActiveFragment
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

fragment EntityLayoutFactoryFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFragment
    ...JournalLayoutFragment
    ...IssueLayoutFragment
    ...VolumeLayoutFragment
  }
  ... on Item {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFragment
    ...ArticleLayoutFragment
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

fragment EntityPageLayoutFactoryFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    schemaDefinition {
      identifier
      id
    }
    ...IssueLayoutFragment
    ...IssueSidebarNavFragment
    ...EntityLayoutFactoryFragment
    page(slug: $pageSlug) {
      ...EntityPageLayoutFragment
      ...IssuePageLayoutFragment
      id
    }
  }
  ... on Item {
    schemaDefinition {
      identifier
      id
    }
    ...EntityLayoutFactoryFragment
    page(slug: $pageSlug) {
      ...EntityPageLayoutFragment
      id
    }
  }
}

fragment EntityPageLayoutFragment on Page {
  title
  body
  heroImage {
    ...ContentImageFragment
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
    ...PrecisionDateFragment
  }
  thumbnail {
    storage
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
    ...AssetDownloadButtonFragment
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

fragment IssuePageLayoutFragment on Page {
  title
  body
  heroImage {
    ...ContentImageFragment
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
  related: links(order: RECENT, perPage: 4) {
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

fragment RelatedIssuesFragment on CollectionConnection {
  edges {
    node {
      slug
      ...RelatedIssueBlockFragment
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
            title
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

fragment VolumeHeroFragment on Collection {
  id
  title
  subtitle
  summary
  ...DOIFragment
  published {
    ...PrecisionDateFragment
  }
  thumbnail {
    storage
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
}

fragment VolumeLayoutFragment on Collection {
  ...EntityHTMLHeadFragment
  ...BreadcrumbsBarFragment
  ...VolumeHeroFragment
  ...EntityNavBarFragment
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pageSlug"
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
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  (v4/*: any*/),
  (v3/*: any*/),
  (v6/*: any*/)
],
v8 = {
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
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v9/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "precision",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v13/*: any*/),
    (v14/*: any*/)
  ],
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
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
  "name": "width",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    (v16/*: any*/),
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
            (v18/*: any*/),
            (v19/*: any*/),
            (v20/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v22 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal"
  }
],
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v24 = {
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
v25 = [
  (v23/*: any*/),
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
v26 = {
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
  "selections": (v25/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"open_access\")"
},
v27 = {
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
    (v23/*: any*/),
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
        }
      ],
      "type": "SelectProperty",
      "abstractKey": null
    }
  ],
  "storageKey": "schemaProperty(fullPath:\"cc_license\")"
},
v28 = {
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
  "selections": (v25/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"peer_reviewed\")"
},
v29 = {
  "kind": "InlineFragment",
  "selections": [
    (v26/*: any*/),
    (v27/*: any*/),
    (v28/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
},
v30 = {
  "kind": "InlineFragment",
  "selections": [
    (v6/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v31 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_volume"
  }
],
v32 = [
  (v3/*: any*/)
],
v33 = {
  "kind": "InlineFragment",
  "selections": (v32/*: any*/),
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v34 = [
  (v23/*: any*/),
  (v33/*: any*/),
  (v30/*: any*/)
],
v35 = {
  "alias": "volume",
  "args": (v31/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v34/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
},
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v37 = {
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
    (v23/*: any*/),
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
            (v23/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v5/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "downloadUrl",
                  "storageKey": null
                },
                (v36/*: any*/),
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
            (v30/*: any*/)
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
v38 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      (v16/*: any*/)
    ],
    "storageKey": null
  }
],
v39 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v40 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v41 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v42 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v18/*: any*/),
      (v17/*: any*/)
    ],
    "storageKey": null
  }
],
v43 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v44 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v45 = {
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
v46 = [
  (v4/*: any*/),
  (v6/*: any*/)
],
v47 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
},
v48 = [
  (v23/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v32/*: any*/),
    "type": "Collection",
    "abstractKey": null
  },
  (v30/*: any*/)
],
v49 = {
  "alias": "journal",
  "args": (v22/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v48/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v50 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "slug",
      "variableName": "pageSlug"
    }
  ],
  "concreteType": "Page",
  "kind": "LinkedField",
  "name": "page",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
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
                (v17/*: any*/),
                (v19/*: any*/),
                (v20/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": null
},
v51 = {
  "kind": "InlineFragment",
  "selections": [
    (v28/*: any*/),
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
      "selections": (v25/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"preprint_version\")"
    },
    (v26/*: any*/),
    (v27/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
},
v52 = {
  "kind": "Literal",
  "name": "schema",
  "value": "nglp:journal_issue"
},
v53 = {
  "alias": "issue",
  "args": [
    (v52/*: any*/)
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v34/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
},
v54 = {
  "kind": "InlineFragment",
  "selections": [
    (v43/*: any*/),
    (v44/*: any*/)
  ],
  "type": "PersonContributor",
  "abstractKey": null
},
v55 = {
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
v56 = [
  (v55/*: any*/)
],
v57 = {
  "alias": null,
  "args": null,
  "concreteType": "AnyAssetConnection",
  "kind": "LinkedField",
  "name": "assets",
  "plural": false,
  "selections": (v56/*: any*/),
  "storageKey": null
},
v58 = [
  (v23/*: any*/),
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
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
],
v59 = {
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
            (v15/*: any*/),
            (v49/*: any*/),
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
              "selections": (v58/*: any*/),
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
              "selections": (v58/*: any*/),
              "storageKey": "schemaProperty(fullPath:\"id\")"
            },
            (v6/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v60 = {
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
    (v36/*: any*/),
    (v4/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v61 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    (v16/*: any*/),
    {
      "alias": "image",
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "large",
      "plural": false,
      "selections": (v42/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v62 = [
  (v61/*: any*/)
],
v63 = {
  "kind": "InlineFragment",
  "selections": (v62/*: any*/),
  "type": "Item",
  "abstractKey": null
},
v64 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isNode"
},
v65 = {
  "alias": null,
  "args": null,
  "concreteType": "OrderingEntryConnection",
  "kind": "LinkedField",
  "name": "children",
  "plural": false,
  "selections": (v56/*: any*/),
  "storageKey": null
},
v66 = {
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
            (v65/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v67 = {
  "kind": "InlineFragment",
  "selections": [
    (v60/*: any*/)
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v68 = {
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
v69 = {
  "alias": "related",
  "args": [
    {
      "kind": "Literal",
      "name": "order",
      "value": "RECENT"
    },
    (v47/*: any*/)
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
                (v23/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v6/*: any*/),
                    (v3/*: any*/),
                    (v4/*: any*/),
                    (v15/*: any*/),
                    (v21/*: any*/),
                    {
                      "alias": "currentIssue",
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "nodeFilter",
                          "value": "DESCENDANTS"
                        },
                        {
                          "kind": "Literal",
                          "name": "order",
                          "value": "PUBLISHED_DESCENDING"
                        },
                        (v52/*: any*/)
                      ],
                      "concreteType": "Collection",
                      "kind": "LinkedField",
                      "name": "firstCollection",
                      "plural": false,
                      "selections": [
                        (v3/*: any*/),
                        (v6/*: any*/)
                      ],
                      "storageKey": "firstCollection(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",schema:\"nglp:journal_issue\")"
                    }
                  ],
                  "type": "Collection",
                  "abstractKey": null
                },
                (v30/*: any*/)
              ],
              "storageKey": null
            },
            (v6/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "links(order:\"RECENT\",perPage:4)"
},
v70 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v60/*: any*/),
        (v23/*: any*/),
        (v66/*: any*/),
        {
          "kind": "InlineFragment",
          "selections": [
            (v63/*: any*/),
            (v64/*: any*/)
          ],
          "type": "AnyEntity",
          "abstractKey": "__isAnyEntity"
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    },
    (v64/*: any*/)
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PageSlugCollectionQuery",
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
                "name": "CommunityLayoutFragment"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityPageLayoutFactoryFragment"
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
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PageSlugCollectionQuery",
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
                "concreteType": "HierarchicalSchemaRank",
                "kind": "LinkedField",
                "name": "schemaRanks",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "count",
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v10/*: any*/),
                  (v3/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v15/*: any*/),
                  (v21/*: any*/),
                  {
                    "alias": "journal",
                    "args": (v22/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v23/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/),
                          (v11/*: any*/),
                          (v24/*: any*/),
                          (v29/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      (v30/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  (v35/*: any*/),
                  (v37/*: any*/),
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
                                  (v23/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v38/*: any*/),
                                    "type": "PersonContributor",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v38/*: any*/),
                                    "type": "OrganizationContributor",
                                    "abstractKey": null
                                  },
                                  (v30/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v6/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v39/*: any*/),
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
                                      (v40/*: any*/),
                                      (v41/*: any*/),
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
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "ImageSize",
                                                "kind": "LinkedField",
                                                "name": "small",
                                                "plural": false,
                                                "selections": (v42/*: any*/),
                                                "storageKey": null
                                              }
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
                                          (v39/*: any*/),
                                          (v43/*: any*/),
                                          (v44/*: any*/)
                                        ],
                                        "type": "PersonContributor",
                                        "abstractKey": null
                                      },
                                      (v45/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Item",
                                        "kind": "LinkedField",
                                        "name": "item",
                                        "plural": false,
                                        "selections": (v46/*: any*/),
                                        "storageKey": null
                                      }
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
                                        "selections": (v46/*: any*/),
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
                      {
                        "kind": "Literal",
                        "name": "page",
                        "value": 1
                      },
                      (v47/*: any*/)
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
                              (v23/*: any*/),
                              (v3/*: any*/),
                              (v11/*: any*/),
                              (v6/*: any*/),
                              (v21/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "VariablePrecisionDate",
                                "kind": "LinkedField",
                                "name": "published",
                                "plural": false,
                                "selections": [
                                  (v14/*: any*/),
                                  (v13/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": "volume",
                                "args": (v31/*: any*/),
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "ancestorOfType",
                                "plural": false,
                                "selections": (v48/*: any*/),
                                "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                              },
                              (v49/*: any*/)
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
                              (v5/*: any*/),
                              (v9/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  (v50/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "journal",
                            "args": (v22/*: any*/),
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "ancestorOfType",
                            "plural": false,
                            "selections": [
                              (v33/*: any*/),
                              (v51/*: any*/)
                            ],
                            "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                          },
                          (v53/*: any*/),
                          (v4/*: any*/),
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
                                          (v40/*: any*/),
                                          (v41/*: any*/),
                                          (v54/*: any*/),
                                          (v45/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v55/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v57/*: any*/),
                          (v59/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v60/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "kind": "InlineFragment",
                                        "selections": (v62/*: any*/),
                                        "type": "Collection",
                                        "abstractKey": null
                                      },
                                      (v63/*: any*/),
                                      (v64/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v23/*: any*/),
                                          (v66/*: any*/)
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
                          (v67/*: any*/),
                          (v68/*: any*/)
                        ],
                        "type": "Item",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/),
                          (v61/*: any*/),
                          (v69/*: any*/),
                          (v70/*: any*/),
                          (v68/*: any*/),
                          (v24/*: any*/),
                          (v29/*: any*/),
                          (v67/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v67/*: any*/),
                  (v68/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v10/*: any*/),
                  (v50/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/),
                          (v61/*: any*/),
                          (v69/*: any*/),
                          (v70/*: any*/),
                          (v24/*: any*/),
                          (v29/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "journal",
                            "args": (v22/*: any*/),
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "ancestorOfType",
                            "plural": false,
                            "selections": [
                              (v23/*: any*/),
                              (v33/*: any*/),
                              (v30/*: any*/),
                              (v51/*: any*/)
                            ],
                            "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                          },
                          (v35/*: any*/),
                          (v53/*: any*/),
                          (v4/*: any*/),
                          (v3/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v15/*: any*/),
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
                                          (v23/*: any*/),
                                          (v40/*: any*/),
                                          (v41/*: any*/),
                                          (v54/*: any*/),
                                          (v45/*: any*/),
                                          (v30/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v6/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v55/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v37/*: any*/),
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
                                      (v3/*: any*/),
                                      (v4/*: any*/),
                                      (v6/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v57/*: any*/),
                          (v59/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v60/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v63/*: any*/),
                                      (v64/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v23/*: any*/),
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
                                                      (v5/*: any*/),
                                                      (v4/*: any*/),
                                                      (v9/*: any*/),
                                                      (v65/*: any*/),
                                                      (v6/*: any*/)
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
                          (v67/*: any*/),
                          (v68/*: any*/)
                        ],
                        "type": "Item",
                        "abstractKey": null
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  }
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
    "cacheID": "2ec1b0b530901d23055dff22c5dc88fa",
    "id": null,
    "metadata": {},
    "name": "PageSlugCollectionQuery",
    "operationKind": "query",
    "text": "query PageSlugCollectionQuery(\n  $slug: Slug!\n  $pageSlug: String!\n) {\n  collection(slug: $slug) {\n    ...EntityPageLayoutFactoryFragment\n    community {\n      ...CommunityLayoutFragment\n      id\n    }\n    id\n  }\n  ...CommunityLayoutAppFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment ArticleHeroFragment on Item {\n  slug\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  published {\n    ...PrecisionDateFragment\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ...AssetDownloadButtonFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...PeerReviewedFragment\n    ...PreprintVersionFragment\n    ...OpenAccessFragment\n    ...CCLicenseFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n  relatedItems {\n    ...RelatedArticlesFragment\n  }\n}\n\nfragment ArticleParentHeaderFragment on Item {\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n  contributions {\n    pageInfo {\n      totalCount\n    }\n  }\n  assets {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment AssetDownloadButtonFragment on AssetProperty {\n  asset {\n    __typename\n    ... on Asset {\n      __isAsset: __typename\n      name\n      downloadUrl\n      kind\n      contentType\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n}\n\nfragment CCLicenseFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  ccLicense: schemaProperty(fullPath: \"cc_license\") {\n    __typename\n    ... on SelectProperty {\n      selection\n      defaultSelection\n    }\n  }\n}\n\nfragment CollectionContributionsBlockFragment on CollectionContributionConnection {\n  edges {\n    node {\n      slug\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n}\n\nfragment CommunityCondensedNavAppFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment CommunityCondensedNavFragment on Community {\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n  ...CommunityPickerActiveFragment\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityLayoutAppFragment on Query {\n  ...AppBodyFragment\n  ...CommunityCondensedNavAppFragment\n  ...CommunityPickerFragment\n}\n\nfragment CommunityLayoutFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNameFragment\n  ...CommunityNavBarFragment\n  ...CommunityCondensedNavFragment\n  ...CommunityPickerActiveFragment\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerActiveFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n}\n\nfragment ContributionBlockItemFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  displayName\n  contributorKind\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  edges {\n    node {\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doi\n}\n\nfragment EntityHTMLHeadFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    title\n  }\n  ... on Collection {\n    title\n  }\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n  }\n  ... on Item {\n    title\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n  }\n}\n\nfragment EntityLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...JournalLayoutFragment\n    ...IssueLayoutFragment\n    ...VolumeLayoutFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...ArticleLayoutFragment\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...EntityHTMLHeadFragment\n  ... on Entity {\n    __isEntity: __typename\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n    ...EntityNavBarFragment\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings {\n    edges {\n      node {\n        name\n        slug\n        identifier\n        children {\n          pageInfo {\n            totalCount\n          }\n        }\n        id\n      }\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment EntityOrderSelectFragment on OrderingConnection {\n  edges {\n    node {\n      name\n      identifier\n      id\n    }\n  }\n}\n\nfragment EntityPageLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...IssueLayoutFragment\n    ...IssueSidebarNavFragment\n    ...EntityLayoutFactoryFragment\n    page(slug: $pageSlug) {\n      ...EntityPageLayoutFragment\n      ...IssuePageLayoutFragment\n      id\n    }\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFactoryFragment\n    page(slug: $pageSlug) {\n      ...EntityPageLayoutFragment\n      id\n    }\n  }\n}\n\nfragment EntityPageLayoutFragment on Page {\n  title\n  body\n  heroImage {\n    ...ContentImageFragment\n  }\n}\n\nfragment HeroImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ISSNFragment on HasISSN {\n  __isHasISSN: __typename\n  issn\n}\n\nfragment IssueHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  published {\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ...AssetDownloadButtonFragment\n  }\n}\n\nfragment IssueLayoutFragment on Collection {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...IssueHeroFragment\n  contributions {\n    ...CollectionContributionsBlockFragment\n  }\n  relatedCollections(page: 1, perPage: 4) {\n    ...RelatedIssuesFragment\n  }\n}\n\nfragment IssuePageLayoutFragment on Page {\n  title\n  body\n  heroImage {\n    ...ContentImageFragment\n  }\n}\n\nfragment IssueSidebarNavFragment on Collection {\n  orderings {\n    ...EntityOrderSelectFragment\n  }\n  ...IssueSidebarNavListFragment\n}\n\nfragment IssueSidebarNavListFragment on Collection {\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment JournalHeroCompactFragment on Collection {\n  title\n  subtitle\n}\n\nfragment JournalHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  heroImage {\n    storage\n    ...HeroImageFragment\n  }\n  ...DOIFragment\n  ...JournalHeroMetadataFragment\n}\n\nfragment JournalHeroMetadataFragment on Collection {\n  ...ISSNFragment\n  ...OpenAccessFragment\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n}\n\nfragment JournalLayoutFragment on Collection {\n  ...EntityHTMLHeadFragment\n  ...JournalHeroFragment\n  ...EntityNavBarFragment\n  ...BreadcrumbsBarFragment\n  related: links(order: RECENT, perPage: 4) {\n    ...RelatedJournalsFragment\n  }\n}\n\nfragment OpenAccessFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  openAccess: schemaProperty(fullPath: \"open_access\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PeerReviewedFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  peerReviewed: schemaProperty(fullPath: \"peer_reviewed\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PreprintVersionFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  prePrintVersion: schemaProperty(fullPath: \"preprint_version\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment RelatedArticlesFragment on ItemConnection {\n  edges {\n    node {\n      title\n      slug\n      published {\n        ...PrecisionDateFragment\n      }\n      journal: ancestorOfType(schema: \"nglp:journal\") {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      volumeId: schemaProperty(fullPath: \"volume.id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      issueId: schemaProperty(fullPath: \"id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment RelatedIssueBlockFragment on Collection {\n  __typename\n  title\n  subtitle\n  slug\n  id\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment RelatedIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedIssueBlockFragment\n      id\n    }\n  }\n}\n\nfragment RelatedJournalsFragment on EntityLinkConnection {\n  edges {\n    node {\n      target {\n        __typename\n        ... on Collection {\n          __typename\n          id\n          title\n          slug\n          published {\n            ...PrecisionDateFragment\n          }\n          thumbnail {\n            storage\n            ...CoverImageFragment\n          }\n          currentIssue: firstCollection(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {\n            title\n            id\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment SearchButtonFragment on Community {\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Community {\n  slug\n  name\n  schemaRanks {\n    slug\n    id\n  }\n}\n\nfragment VolumeHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  published {\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment VolumeLayoutFragment on Collection {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...VolumeHeroFragment\n  ...EntityNavBarFragment\n}\n"
  }
};
})();
(node as any).hash = '04b3bcff00bbf78a7e154a923ff081ee';
export default node;
