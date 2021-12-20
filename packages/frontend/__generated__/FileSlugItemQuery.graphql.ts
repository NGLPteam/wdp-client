/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FileSlugItemQueryVariables = {
    slug: string;
    file: string;
};
export type FileSlugItemQueryResponse = {
    readonly item: {
        readonly community: {
            readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"EntityLayoutFactoryFragment">;
    } | null;
    readonly asset: {
        readonly " $fragmentRefs": FragmentRefs<"AssetDetailBlockFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutAppFragment">;
};
export type FileSlugItemQuery = {
    readonly response: FileSlugItemQueryResponse;
    readonly variables: FileSlugItemQueryVariables;
};



/*
query FileSlugItemQuery(
  $slug: Slug!
  $file: Slug!
) {
  item(slug: $slug) {
    ...EntityLayoutFactoryFragment
    community {
      ...CommunityLayoutFragment
      id
    }
    id
  }
  asset(slug: $file) {
    __typename
    ...AssetDetailBlockFragment
    ... on Node {
      __isNode: __typename
      id
    }
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

fragment AssetDetailBlockFragment on Node {
  __isNode: __typename
  ... on Asset {
    __isAsset: __typename
    slug
    caption
    kind
    downloadUrl
    fileSize
    name
    preview {
      storage
      ...ContentImageFragment
    }
  }
  ... on AssetImage {
    updatedAt
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
  title
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
        title
        slug
        summary
        contributions {
          ...ContributorsListFragment
        }
        id
      }
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
  }
  ... on Community {
    title
  }
  ... on Item {
    title
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
    ...EntityOrderSelectFragment
  }
  ...IssueNavListFragment
}

fragment IssueHeroFragment on Collection {
  title
  summary
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
  pdfVersion: schemaProperty(fullPath: "pdf_version") {
    __typename
    ...AssetDownloadButtonFragment
  }
}

fragment IssueLayoutFragment on Collection {
  ...EntityHTMLHeadFragment
  ...BreadcrumbsBarFragment
  ...IssueHeroFragment
  ...IssueContentFragment
  ...PrevNextIssueFragment
  contributions {
    ...CollectionContributionsBlockFragment
  }
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

fragment JournalHeroFragment on Collection {
  title
  heroImage {
    storage
    ...HeroImageFragment
  }
}

fragment JournalLayoutFragment on Collection {
  ...EntityHTMLHeadFragment
  ...JournalHeroFragment
  ...JournalNavBarFragment
  ...BreadcrumbsBarFragment
  related: links(order: RECENT, perPage: 4) {
    ...RelatedJournalsFragment
  }
  issues: collections(schema: "nglp:journal_issue", order: PUBLISHED_ASCENDING, nodeFilter: DESCENDANTS, page: 1, perPage: 4) {
    ...FeaturedIssuesFragment
  }
  currentIssue: firstCollection(schema: "nglp:journal_issue", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {
    ...CurrentIssueFragment
    id
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
          title
          slug
          published {
            ...PrecisionDateFragment
          }
          thumbnail {
            storage
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
            storage
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "file"
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
v3 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "file"
  }
],
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
  "name": "slug",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "HierarchicalSchemaRank",
  "kind": "LinkedField",
  "name": "schemaRanks",
  "plural": true,
  "selections": [
    (v5/*: any*/),
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "count",
      "storageKey": null
    },
    (v7/*: any*/)
  ],
  "storageKey": null
},
v9 = [
  (v5/*: any*/),
  (v4/*: any*/),
  (v7/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v10/*: any*/),
    (v7/*: any*/)
  ],
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
v16 = [
  (v4/*: any*/),
  (v5/*: any*/),
  (v7/*: any*/)
],
v17 = {
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
          "selections": (v16/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v18 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "precision",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v20/*: any*/),
    (v21/*: any*/)
  ],
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v25 = {
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
            (v14/*: any*/),
            (v13/*: any*/),
            (v23/*: any*/),
            (v24/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v26 = [
  (v4/*: any*/),
  (v5/*: any*/),
  (v22/*: any*/),
  (v25/*: any*/)
],
v27 = {
  "kind": "InlineFragment",
  "selections": [
    (v7/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v28 = {
  "kind": "Literal",
  "name": "nodeFilter",
  "value": "DESCENDANTS"
},
v29 = {
  "kind": "Literal",
  "name": "schema",
  "value": "nglp:journal_issue"
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v21/*: any*/),
    (v20/*: any*/)
  ],
  "storageKey": null
},
v32 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_volume"
  }
],
v33 = [
  (v19/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v4/*: any*/)
    ],
    "type": "Collection",
    "abstractKey": null
  },
  (v27/*: any*/)
],
v34 = {
  "alias": "volume",
  "args": (v32/*: any*/),
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
  "name": "content",
  "storageKey": null
},
v36 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v37 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v38 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v39 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v40 = {
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
v41 = {
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
            (v19/*: any*/),
            (v36/*: any*/),
            (v37/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v38/*: any*/),
                (v39/*: any*/)
              ],
              "type": "PersonContributor",
              "abstractKey": null
            },
            (v40/*: any*/),
            (v27/*: any*/)
          ],
          "storageKey": null
        },
        (v7/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v42 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "doi",
  "storageKey": null
},
v43 = {
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
  "selections": (v33/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v44 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "downloadUrl",
  "storageKey": null
},
v45 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v46 = {
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
    (v19/*: any*/),
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
            (v19/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v6/*: any*/),
                (v44/*: any*/),
                (v45/*: any*/),
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
            (v27/*: any*/)
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
v47 = [
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
v48 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v49 = {
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        (v45/*: any*/),
        (v5/*: any*/),
        (v7/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v50 = [
  (v49/*: any*/)
],
v51 = {
  "kind": "InlineFragment",
  "selections": (v50/*: any*/),
  "type": "Item",
  "abstractKey": null
},
v52 = {
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
v53 = [
  (v19/*: any*/),
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
      (v35/*: any*/)
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
    "name": "FileSlugItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
                "name": "CommunityLayoutFragment"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityLayoutFactoryFragment"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "asset",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AssetDetailBlockFragment"
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
    "name": "FileSlugItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v8/*: any*/),
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
                        "selections": (v9/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v11/*: any*/),
                  (v4/*: any*/),
                  {
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
                  (v8/*: any*/),
                  (v17/*: any*/),
                  {
                    "alias": "related",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "order",
                        "value": "RECENT"
                      },
                      (v18/*: any*/)
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
                                  (v19/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v26/*: any*/),
                                    "type": "Collection",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v26/*: any*/),
                                    "type": "Item",
                                    "abstractKey": null
                                  },
                                  (v27/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v7/*: any*/)
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
                      (v28/*: any*/),
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
                      (v18/*: any*/),
                      (v29/*: any*/)
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
                              (v5/*: any*/),
                              (v4/*: any*/),
                              (v30/*: any*/),
                              (v25/*: any*/),
                              (v31/*: any*/),
                              (v34/*: any*/),
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
                                      (v35/*: any*/),
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
                              (v7/*: any*/)
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
                    "args": [
                      (v28/*: any*/),
                      {
                        "kind": "Literal",
                        "name": "order",
                        "value": "PUBLISHED_DESCENDING"
                      },
                      (v29/*: any*/)
                    ],
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "firstCollection",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v25/*: any*/),
                      (v31/*: any*/),
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
                                  (v4/*: any*/),
                                  (v5/*: any*/),
                                  (v30/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ItemContributionConnection",
                                    "kind": "LinkedField",
                                    "name": "contributions",
                                    "plural": false,
                                    "selections": [
                                      (v41/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v7/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "items(perPage:3)"
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": "firstCollection(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",schema:\"nglp:journal_issue\")"
                  },
                  (v30/*: any*/),
                  (v42/*: any*/),
                  (v22/*: any*/),
                  (v25/*: any*/),
                  (v43/*: any*/),
                  {
                    "alias": "volume",
                    "args": (v32/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v19/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/),
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
                                    "selections": (v16/*: any*/),
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
                      },
                      (v27/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                  },
                  (v46/*: any*/),
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
                              (v6/*: any*/),
                              (v10/*: any*/),
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
                  (v5/*: any*/),
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
                              (v5/*: any*/),
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
                                    "kind": "InlineFragment",
                                    "selections": (v47/*: any*/),
                                    "type": "PersonContributor",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": (v47/*: any*/),
                                    "type": "OrganizationContributor",
                                    "abstractKey": null
                                  },
                                  (v27/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v7/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v48/*: any*/),
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
                                      (v36/*: any*/),
                                      (v37/*: any*/),
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
                                                "selections": (v15/*: any*/),
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
                                          (v48/*: any*/),
                                          (v38/*: any*/),
                                          (v39/*: any*/)
                                        ],
                                        "type": "PersonContributor",
                                        "abstractKey": null
                                      },
                                      (v40/*: any*/)
                                    ],
                                    "storageKey": null
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
                    "kind": "InlineFragment",
                    "selections": [
                      (v51/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v50/*: any*/),
                        "type": "Collection",
                        "abstractKey": null
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v49/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v11/*: any*/),
                  (v43/*: any*/),
                  (v34/*: any*/),
                  {
                    "alias": "issue",
                    "args": [
                      (v29/*: any*/)
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": (v33/*: any*/),
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
                  },
                  (v4/*: any*/),
                  (v30/*: any*/),
                  (v42/*: any*/),
                  (v22/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemContributionConnection",
                    "kind": "LinkedField",
                    "name": "contributions",
                    "plural": false,
                    "selections": [
                      (v41/*: any*/),
                      (v52/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v46/*: any*/),
                  (v17/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnyAssetConnection",
                    "kind": "LinkedField",
                    "name": "assets",
                    "plural": false,
                    "selections": [
                      (v52/*: any*/)
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
                              (v4/*: any*/),
                              (v5/*: any*/),
                              (v22/*: any*/),
                              (v43/*: any*/),
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
                                "selections": (v53/*: any*/),
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
                                "selections": (v53/*: any*/),
                                "storageKey": "schemaProperty(fullPath:\"id\")"
                              },
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
                    "kind": "InlineFragment",
                    "selections": [
                      (v51/*: any*/)
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v49/*: any*/)
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
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "asset",
        "plural": false,
        "selections": [
          (v19/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v7/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "caption",
                    "storageKey": null
                  },
                  (v45/*: any*/),
                  (v44/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fileSize",
                    "storageKey": null
                  },
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "preview",
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
                              (v23/*: any*/),
                              (v24/*: any*/)
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
                "type": "Asset",
                "abstractKey": "__isAsset"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "updatedAt",
                    "storageKey": null
                  }
                ],
                "type": "AssetImage",
                "abstractKey": null
              }
            ],
            "type": "Node",
            "abstractKey": "__isNode"
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
                "selections": (v9/*: any*/),
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
    "cacheID": "e0a47ff2d056afc1be41a2fe7313d771",
    "id": null,
    "metadata": {},
    "name": "FileSlugItemQuery",
    "operationKind": "query",
    "text": "query FileSlugItemQuery(\n  $slug: Slug!\n  $file: Slug!\n) {\n  item(slug: $slug) {\n    ...EntityLayoutFactoryFragment\n    community {\n      ...CommunityLayoutFragment\n      id\n    }\n    id\n  }\n  asset(slug: $file) {\n    __typename\n    ...AssetDetailBlockFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ...CommunityLayoutAppFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment AppHeaderFragment on Query {\n  ...CommunityPickerFragment\n  ...MobileMenuFragment\n}\n\nfragment ArticleHeroFragment on Item {\n  title\n  summary\n  doi\n  published {\n    ...PrecisionDateFragment\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ...AssetDownloadButtonFragment\n  }\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n  relatedItems {\n    ...RelatedArticlesFragment\n  }\n}\n\nfragment ArticleParentHeaderFragment on Item {\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n  contributions {\n    pageInfo {\n      totalCount\n    }\n  }\n  assets {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment AssetDetailBlockFragment on Node {\n  __isNode: __typename\n  ... on Asset {\n    __isAsset: __typename\n    slug\n    caption\n    kind\n    downloadUrl\n    fileSize\n    name\n    preview {\n      storage\n      ...ContentImageFragment\n    }\n  }\n  ... on AssetImage {\n    updatedAt\n  }\n}\n\nfragment AssetDownloadButtonFragment on AssetProperty {\n  asset {\n    __typename\n    ... on Asset {\n      __isAsset: __typename\n      name\n      downloadUrl\n      kind\n      contentType\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n}\n\nfragment CollectionContributionsBlockFragment on CollectionContributionConnection {\n  edges {\n    node {\n      slug\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n}\n\nfragment CommunityCondensedNavAppFragment on Query {\n  ...CommunityPickerFragment\n  ...MobileMenuFragment\n}\n\nfragment CommunityCondensedNavFragment on Community {\n  ...CommunityNavListFragment\n}\n\nfragment CommunityHTMLHeadFragment on Community {\n  title\n}\n\nfragment CommunityLayoutAppFragment on Query {\n  ...AppBodyFragment\n  ...CommunityCondensedNavAppFragment\n}\n\nfragment CommunityLayoutFragment on Community {\n  ...CommunityHTMLHeadFragment\n  ...CommunityNameFragment\n  ...CommunityNavBarFragment\n  ...CommunityCondensedNavFragment\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerFragment on Query {\n  communities {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n}\n\nfragment ContributionBlockItemFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  displayName\n  contributorKind\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  edges {\n    node {\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment CurrentIssueFragment on Collection {\n  title\n  slug\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  items(perPage: 3) {\n    edges {\n      node {\n        title\n        slug\n        summary\n        contributions {\n          ...ContributorsListFragment\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment EntityHTMLHeadFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    title\n  }\n  ... on Collection {\n    title\n  }\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n  }\n  ... on Community {\n    title\n  }\n  ... on Item {\n    title\n  }\n}\n\nfragment EntityLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...JournalLayoutFragment\n    ...IssueLayoutFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...ArticleLayoutFragment\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...EntityHTMLHeadFragment\n  ... on Collection {\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n  }\n  ... on Item {\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n  }\n}\n\nfragment EntityOrderSelectFragment on OrderingConnection {\n  edges {\n    node {\n      name\n      identifier\n      id\n    }\n  }\n}\n\nfragment FeaturedIssueFragment on Collection {\n  title\n  slug\n  summary\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  properties: schemaProperties {\n    __typename\n    ... on StringProperty {\n      content\n      path\n    }\n  }\n}\n\nfragment FeaturedIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...FeaturedIssueFragment\n      id\n    }\n  }\n}\n\nfragment HeroImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment IssueContentFragment on Collection {\n  orderings {\n    ...EntityOrderSelectFragment\n  }\n  ...IssueNavListFragment\n}\n\nfragment IssueHeroFragment on Collection {\n  title\n  summary\n  doi\n  published {\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ...AssetDownloadButtonFragment\n  }\n}\n\nfragment IssueLayoutFragment on Collection {\n  ...EntityHTMLHeadFragment\n  ...BreadcrumbsBarFragment\n  ...IssueHeroFragment\n  ...IssueContentFragment\n  ...PrevNextIssueFragment\n  contributions {\n    ...CollectionContributionsBlockFragment\n  }\n}\n\nfragment IssueNavListFragment on Collection {\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment JournalHeroFragment on Collection {\n  title\n  heroImage {\n    storage\n    ...HeroImageFragment\n  }\n}\n\nfragment JournalLayoutFragment on Collection {\n  ...EntityHTMLHeadFragment\n  ...JournalHeroFragment\n  ...JournalNavBarFragment\n  ...BreadcrumbsBarFragment\n  related: links(order: RECENT, perPage: 4) {\n    ...RelatedJournalsFragment\n  }\n  issues: collections(schema: \"nglp:journal_issue\", order: PUBLISHED_ASCENDING, nodeFilter: DESCENDANTS, page: 1, perPage: 4) {\n    ...FeaturedIssuesFragment\n  }\n  currentIssue: firstCollection(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {\n    ...CurrentIssueFragment\n    id\n  }\n}\n\nfragment JournalNavBarFragment on Collection {\n  title\n  id\n  ...JournalNavListFragment\n}\n\nfragment JournalNavListFragment on Collection {\n  schemaRanks {\n    slug\n    name\n    count\n    id\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment MobileMenuFragment on Query {\n  ...CommunityPickerFragment\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PrevNextIssueFragment on Collection {\n  slug\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      collections(schema: [\"nglp:journal_issue\"]) {\n        edges {\n          node {\n            title\n            slug\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment RelatedArticlesFragment on ItemConnection {\n  edges {\n    node {\n      title\n      slug\n      published {\n        ...PrecisionDateFragment\n      }\n      journal: ancestorOfType(schema: \"nglp:journal\") {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      volumeId: schemaProperty(fullPath: \"volume.id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      issueId: schemaProperty(fullPath: \"id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment RelatedJournalsFragment on EntityLinkConnection {\n  edges {\n    node {\n      target {\n        __typename\n        ... on Collection {\n          __typename\n          title\n          slug\n          published {\n            ...PrecisionDateFragment\n          }\n          thumbnail {\n            storage\n            ...CoverImageFragment\n          }\n        }\n        ... on Item {\n          __typename\n          title\n          slug\n          published {\n            ...PrecisionDateFragment\n          }\n          thumbnail {\n            storage\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3f8013c24a70329cfd81b2341ae5ca43';
export default node;
