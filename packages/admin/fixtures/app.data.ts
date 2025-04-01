const COMMUNITIES_LINK = {
  label: "glossary.community_other",
  route: "communities",
  actions: "admin.access",
  model: "communities",
};

const COLLECTIONS_LINK = {
  label: "glossary.collection_other",
  route: "collections",
  actions: "admin.access",
  model: "collections",
};

const ITEMS_LINK = {
  label: "glossary.item_other",
  route: "items",
  actions: "admin.access",
  model: "items",
};

const USERS_LINK = {
  label: "glossary.user_other",
  route: "users",
  actions: "users.update",
  model: "users",
};

const CONTRIBUTORS_LINK = {
  label: "glossary.contributor_other",
  route: "contributors",
  actions: "contributors.update",
  model: "contributors",
};

/**
 * App data
 */
const appData = {
  siteInfo: {
    title: "app.title",
    description: "app.description",
    installation: "app.installation",
  },
  headerData: {
    navigation: [
      COMMUNITIES_LINK,
      COLLECTIONS_LINK,
      ITEMS_LINK,
      {
        label: "nav.manage_header",
        actions: ["users.update", "contributors.update"],
        children: [USERS_LINK, CONTRIBUTORS_LINK],
      },
    ],
    account: {
      label: "nav.account_header",
      children: [
        {
          label: "nav.profile",
          route: "profile",
        },
      ],
    },
  },
  footerData: {
    about: {
      header: "app.about_header",
    },
    copyright: "app.copyright",
    navigation: [
      {
        header: "nav.manage_header",
        actions: ["admin.access"],
        children: [
          COMMUNITIES_LINK,
          COLLECTIONS_LINK,
          ITEMS_LINK,
          USERS_LINK,
          CONTRIBUTORS_LINK,
        ],
      },
    ],
  },
};

export default appData;
