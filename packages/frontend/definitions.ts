// @ts-ignore

// Community

const definition = {
  background: "DARK",
  descendantSearchPrompt: "What are you looking for?",
  enableDescendantBrowsing: true,
  enableDescendantSearch: false, // See note
  listContributors: false,
  showBasicViewMetrics: false,
  showBigSearchPrompt: true,
  showBreadcrumbs: false,
  showDOI: false,
  showHeroImage: true,
  showISSN: false,
  showSharingLink: false,
  showSplitDisplay: false,
  showThumbnailImage: false,
};

const templates = [
  {
    manualListName: "featured_journals", // See notes
    background: "DARK",
    seeAllButtonLabel: "See All Journals", // See notes,
    selectionLimit: 3,
    selectionSourceMode: "SELF",
    showEntityContext: false,
    showSeeAllButton: true,
    title: "Featured Journals",
    variant: "CARDS",
  },
  {
    manualListName: "featured_series",
    background: "LIGHT",
    seeAllButtonLabel: null,
    selectionLimit: null,
    selectionSourceMode: "SELF",
    showEntityContext: false,
    showSeeAllButton: false,
    title: "Featured Series",
    variant: "PROMOS",
  },
  {
    manualListName: "featured_units",
    background: "DARK",
    seeAllButtonLabel: null,
    selectionLimit: null,
    selectionSourceMode: "SELF",
    showEntityContext: false,
    showSeeAllButton: false,
    title: "Research Units",
    variant: "COMPACT",
  },
  {
    manualListName: "featured_issue",
    background: "NONE",
    seeAllButtonLabel: "See All Articles",
    selectionLimit: null,
    selectionSourceMode: "ANCESTOR", // See notes
    showEntityContext: true,
    showSeeAllButton: true,
    title: "Featured Issue",
    variant: "SUMMARY",
    showHeroImage: true, // See notes
  },
];

// Journal

const hero = {
  background: "LIGHT",
  descendantSearchPrompt: "Search [Journal Title]",
  enableDescendantBrowsing: true,
  enableDescendantSearch: true,
  listContributors: false,
  showBasicViewMetrics: false,
  showBigSearchPrompt: false,
  showBreadcrumbs: true,
  showDOI: true,
  showHeroImage: true,
  showISSN: true,
  showSharingLink: true,
  showSplitDisplay: false,
  showThumbnailImage: false,
};

const main = [
  {
    templateKind: "DETAIL",
    background: "LIGHT",
    showAnnouncements: true,
    showBody: false,
    showHeroImage: false,
    variant: "SUMMARY",
  },
  {
    templateKind: "DESCENDANT_LIST",
    background: "NONE",
    seeAllButtonLabel: "See All Articles",
    selectionLimit: 3,
    selectionSourceMode: "SELF",
    selectionMode: "PROPERTY",
    selectionPropertyPath: "featured_articles",
    showEntityContext: false,
    showSeeAllButton: true,
    title: "Current Issue",
    variant: "SUMMARY",
    showHeroImage: true,
  },
  {
    templateKind: "DESCENDANT_LIST",
    background: "DARK",
    seeAllButtonLabel: "See All Issues",
    selectionLimit: 4,
    selectionSourceMode: "SELF",
    selectionMode: "DYNAMIC",
    dynamicOrderingDefintion: {
      filter: { schemas: ["nglp:journal_issue"] },
      order: { path: "PUBLISHED", direction: "DESCENDING" },
    },
    showEntityContext: false,
    showSeeAllButton: true,
    title: "Recent Issues",
    variant: "SUMMARY",
    showHeroImage: false,
  },
  {
    templateKind: "LINKS_LIST",
    background: "NONE",
    seeAllButtonLabel: null,
    selectionLimit: 4,
    selectionSourceMode: "SELF",
    selectionMode: "DYNAMIC",
    dynamicOrderingDefintion: {
      filter: { schemas: ["nglp:journal"] },
      order: { path: "RECENT" },
      select: { links: { references: true } },
    },
    showEntityContext: false,
    showSeeAllButton: false,
    title: "Related Journals",
    variant: "Grid",
    showHeroImage: false,
  },
];

// Issue

const a = {
  background: "LIGHT",
  descendantSearchPrompt: null,
  enableDescendantBrowsing: false,
  enableDescendantSearch: false,
  listContributors: false,
  showBasicViewMetrics: false,
  showBigSearchPrompt: false,
  showBreadcrumbs: true,
  showDOI: true,
  showHeroImage: false,
  showISSN: true,
  showSharingLink: true,
  showSplitDisplay: true,
  showThumbnailImage: true,
};

const b = [
  {
    templateKind: "DESCENDANT_LIST",
    background: "NONE",
    seeAllButtonLabel: "See All Issues",
    selectionLimit: 40,
    selectionSourceMode: "SELF",
    selectionMode: "DYNAMIC",
    dynamicOrderingDefintion: {
      select: { direct: "CHILDREN" },
    },
    showEntityContext: false,
    showSeeAllButton: true,
    title: "{Ordering.header}",
    variant: "SUMMARY",
    showHeroImage: false,
  },
  {
    templateKind: "PAGE_LIST",
    background: "NONE",
  },
  {
    templateKind: "CONTRIBUTOR_LIST",
    background: "LIGHT",
  },
  {
    templateKind: "LINK_LIST",
    background: "LIGHT",
    seeAllButtonLabel: null,
    selectionLimit: 4,
    selectionSourceMode: "SELF",
    selectionMode: "DYNAMIC",
    dynamicOrderingDefintion: {
      filter: { schemas: ["nglp:journal_issue"] },
      order: { path: "RECENT" },
      select: { links: { references: true } },
    },
    showEntityContext: false,
    showSeeAllButton: false,
    title: "Related Issues",
    variant: "Grid",
    showHeroImage: false,
  },
];

// Article

const c = {
  background: "LIGHT",
  descendantSearchPrompt: null,
  enableDescendantBrowsing: false,
  enableDescendantSearch: false,
  listContributors: true,
  showBasicViewMetrics: true,
  showBigSearchPrompt: false,
  showBreadcrumbs: true,
  showDOI: true,
  showHeroImage: false,
  showISSN: false,
  showSharingLink: true,
  showSplitDisplay: true,
  showThumbnailImage: false,
};

const d = [
  {
    templateKind: "DETAIL",
    background: "NONE",
    variant: "FULL",
    showAnnouncements: false,
    showBody: true,
    showHeroImage: false,
  },
  {
    templateKind: "CONTRIBUTOR_LIST", // Limited to authors
    background: "LIGHT",
  },
  {
    templateKind: "CITATION",
    background: "LIGHT",
  },
  {
    templateKind: "LINKS_LIST",
    background: "LIGHT",
    seeAllButtonLabel: null,
    selectionLimit: null,
    selectionSourceMode: "SELF",
    selectionMode: "DYNAMIC",
    dynamicOrderingDefintion: {
      filter: { schemas: ["nglp:journal_article"] },
      order: { path: "RECENT" },
      select: { links: { references: true } },
    },
    showEntityContext: false,
    showSeeAllButton: false,
    title: "Related Articles",
    variant: "Grid",
    showHeroImage: false,
  },
];

// Volume

const e = {
  background: "LIGHT",
  descendantSearchPrompt: "Search Volume [Number]",
  enableDescendantBrowsing: true,
  enableDescendantSearch: true,
  listContributors: false,
  showBasicViewMetrics: false,
  showBigSearchPrompt: false,
  showBreadcrumbs: true,
  showDOI: true,
  showHeroImage: false,
  showISSN: true,
  showSharingLink: true,
  showSplitDisplay: true,
  showThumbnailImage: true,
};

// Series

const f = {
  background: "LIGHT",
  descendantSearchPrompt: "Search [Series Title]",
  enableDescendantBrowsing: true,
  enableDescendantSearch: true,
  listContributors: false,
  showBasicViewMetrics: false,
  showBigSearchPrompt: false,
  showBreadcrumbs: true,
  showDOI: false,
  showHeroImage: false,
  showISSN: false,
  showSharingLink: true,
  showSplitDisplay: true,
  showThumbnailImage: true,
};
