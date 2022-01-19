const COMMUNITIES_LINK = {
  label: "glossary.community_plural",
  route: "communities",
  actions: "communities.read",
  model: "communities",
};

const COLLECTIONS_LINK = {
  label: "glossary.collection_plural",
  route: "collections",
  model: "collections",
};

const ITEMS_LINK = {
  label: "glossary.item_plural",
  route: "items",
  model: "items",
};

const USERS_LINK = {
  label: "glossary.user_plural",
  route: "users",
  actions: "users.read",
  model: "users",
};

const CONTRIBUTORS_LINK = {
  label: "glossary.contributor_plural",
  route: "contributors",
  actions: "contributors.read",
  model: "contributors",
};

/**
 * App data
 */
const appData = {
  siteInfo: {
    title: "app.title",
    description: "app.description",
    institution: "app.institution",
  },
  headerData: {
    navigation: [
      COMMUNITIES_LINK,
      COLLECTIONS_LINK,
      ITEMS_LINK,
      {
        label: "nav.manage_header",
        actions: ["users.read", "contributors.read"],
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
      body: "app.about_body",
    },
    copyright: "app.copyright",
    navigation: [
      {
        header: "nav.manage_header",
        children: [
          COMMUNITIES_LINK,
          COLLECTIONS_LINK,
          ITEMS_LINK,
          USERS_LINK,
          CONTRIBUTORS_LINK,
        ],
      },
      {
        header: "nav.learn_header",
        children: [
          {
            label: "nav.features",
            href: "#",
          },
          {
            label: "nav.partners",
            href: "#",
          },
          {
            label: "nav.in_use",
            href: "#",
          },
          {
            label: "nav.help",
            href: "#",
          },
          {
            label: "nav.contact",
            href: "#",
          },
        ],
      },
    ],
  },
};

export default appData;
