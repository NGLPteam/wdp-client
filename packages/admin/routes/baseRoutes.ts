import type { BaseRoute } from "./NextNamedRoutes";

export const baseRoutes: BaseRoute[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "collections",
    path: "/collections",
    label: "glossary.collection_plural",
    routes: [
      {
        name: "collection",
        path: "/collections/[slug]",
        label: "glossary.collection",
        routes: [
          {
            name: "collection.child.collections",
            path: "/collections/[slug]/collections",
            label: "glossary.collection_plural",
          },
          {
            name: "collection.child.items",
            path: "/collections/[slug]/items",
            label: "glossary.item_plural",
          },
          {
            name: "collection.manage",
            path: "/collections/[slug]/manage",
            redirect: "/collections/[slug]/manage/details",
            label: "manage",
            routes: [
              {
                name: "collection.manage.details",
                path: "/collections/[slug]/manage/details",
                label: "nav.details",
              },
              {
                name: "collection.manage.order",
                path: "/collections/[slug]/manage/order",
                label: "nav.order",
              },
              {
                name: "collection.manage.links",
                path: "/collections/[slug]/manage/links",
                label: "nav.links",
              },
              {
                name: "collection.manage.access",
                path: "/collections/[slug]/manage/access",
                label: "nav.access",
              },
              {
                name: "collection.manage.pages",
                path: "/collections/[slug]/manage/pages",
                label: "nav.pages",
              },
              {
                name: "collection.manage.contributions",
                path: "/collections/[slug]/manage/contributions",
                label: "glossary.contribution_plural",
              },
              {
                name: "collection.manage.files",
                path: "/collections/[slug]/manage/files",
                label: "nav.files",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "items",
    path: "/items",
    label: "glossary.item_plural",
    routes: [
      {
        name: "item",
        path: "/items/[slug]",
        redirect: "/items/[slug]/items",
        label: "glossary.item_plural",
        routes: [
          {
            name: "item.child.items",
            path: "/items/[slug]/items",
            label: "glossary.item_plural",
          },
          {
            name: "item.manage",
            path: "/items/[slug]/manage",
            redirect: "/items/[slug]/manage/details",
            label: "nav.manage",
            routes: [
              {
                name: "item.manage.details",
                path: "/items/[slug]/manage/details",
                label: "nav.details",
              },
              {
                name: "item.manage.order",
                path: "/items/[slug]/manage/order",
                label: "nav.order",
              },
              {
                name: "item.manage.rules",
                path: "/items/[slug]/manage/rules",
                label: "nav.rules",
              },
              {
                name: "item.manage.links",
                path: "/items/[slug]/manage/links",
                label: "nav.links",
              },
              {
                name: "item.manage.access",
                path: "/items/[slug]/manage/access",
                label: "nav.access",
              },
              {
                name: "item.manage.pages",
                path: "/items/[slug]/manage/pages",
                label: "nav.pages",
              },
              {
                name: "item.manage.contributions",
                path: "/items/[slug]/manage/contributions",
                label: "glossary.contribution_plural",
              },
              {
                name: "item.manage.files",
                path: "/items/[slug]/manage/files",
                label: "nav.files",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "communities",
    path: "/communities",
    label: "glossary.community_plural",
    routes: [
      {
        name: "community",
        path: "/communities/[slug]",
        redirect: "/communities/[slug]/collections",
        label: "glossary.community_plural",
        routes: [
          {
            name: "community.child.collections",
            path: "/communities/[slug]/collections",
            label: "glossary.collection_plural",
          },
          {
            name: "community.manage",
            path: "/communities/[slug]/manage",
            redirect: "/communities/[slug]/manage/details",
            label: "nav.manage",

            routes: [
              {
                name: "community.manage.details",
                path: "/communities/[slug]/manage/details",
                label: "nav.details",
              },
              {
                name: "community.manage.members",
                path: "/communities/[slug]/manage/members",
                label: "nav.members",
              },
              {
                name: "community.manage.pages",
                path: "/communities/[slug]/manage/pages",
                label: "nav.pages",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "users",
    path: "/users",
    label: "glossary.user_plural",
    routes: [
      {
        name: "user",
        path: "/users/[slug]",
        redirect: "/users/[slug]/details",
        label: "glossary.user_plural",
        routes: [
          {
            name: "user.details",
            path: "/users/[slug]/details",
            label: "nav.details",
          },
          {
            name: "user.communities",
            path: "/users/[slug]/communities",
            label: "glossary.community_plural",
          },
          {
            name: "user.collections",
            path: "/users/[slug]/collections",
            label: "glossary.collection_plural",
          },
          {
            name: "user.items",
            path: "/users/[slug]/items",
            label: "glossary.item_plural",
          },
        ],
      },
    ],
  },
  {
    name: "contributors",
    path: "/contributors",
    label: "glossary.contributor_plural",
    routes: [
      {
        name: "contributor",
        path: "/contributors/[slug]",
        redirect: "/contributors/[slug]/details",
        label: "glossary.contributor_plural",
        routes: [
          {
            name: "contributor.details",
            path: "/contributors/[slug]/details",
            label: "nav.details",
          },
          {
            name: "contributor.collections",
            path: "/contributors/[slug]/collections",
            label: "nav.collection_contributions",
          },
          {
            name: "contributor.items",
            path: "/contributors/[slug]/items",
            label: "nav.item_contributions",
          },
        ],
      },
    ],
  },
];
