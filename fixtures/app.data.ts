const COMMUNITIES_LINK = {
  label: "glossary:community_plural",
  route: "communityList",
  actions: "communities.read",
  entity: "communities",
};

const COLLECTIONS_LINK = {
  label: "glossary:collection_plural",
  route: "collectionList",
  entity: "collections",
};

const ITEMS_LINK = {
  label: "glossary:item_plural",
  route: "itemList",
  entity: "items",
};

const USERS_LINK = {
  label: "glossary:user_plural",
  route: "userList",
  actions: "users.read",
  entity: "users",
};

const CONTRIBUTORS_LINK = {
  label: "glossary:contributor_plural",
  route: "contributorList",
  actions: "contributors.read",
  entity: "contributors",
};

/**
 * App data
 */
const appData = {
  siteInfo: {
    title: "site.title",
    description: "site.description",
    provider: "site.provider",
    institution: "site.institution",
  },
  headerData: {
    navigation: [
      COMMUNITIES_LINK,
      COLLECTIONS_LINK,
      ITEMS_LINK,
      {
        label: "header.manage",
        actions: ["users.read", "contributors.read"],
        children: [USERS_LINK, CONTRIBUTORS_LINK],
      },
    ],
  },
  footerData: {
    about: "footer.about",
    copyright: "footer.copyright",
    navigation: [
      {
        header: "footer.manage",
        children: [
          COMMUNITIES_LINK,
          COLLECTIONS_LINK,
          ITEMS_LINK,
          USERS_LINK,
          CONTRIBUTORS_LINK,
        ],
      },
      {
        header: "footer.learn",
        children: [
          {
            label: "footer.nav.features",
            href: "#",
          },
          {
            label: "footer.nav.partners",
            href: "#",
          },
          {
            label: "footer.nav.in_use",
            href: "#",
          },
          {
            label: "footer.nav.help",
            href: "#",
          },
          {
            label: "footer.nav.contact",
            href: "#",
          },
        ],
      },
    ],
  },
};

export default appData;
