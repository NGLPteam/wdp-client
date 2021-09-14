import type { BaseRoute } from "./NextNamedRoutes";

export const baseRoutes: BaseRoute[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "collections",
    path: "/collections",
    routes: [
      {
        name: "collection",
        path: "/collections/[slug]",
        redirect: "/collections/[slug]/collections",
        routes: [
          {
            name: "collection.child.collections",
            path: "/collections/[slug]/collections",
            label: "collections",
          },
          {
            name: "collection.child.items",
            path: "/collections/[slug]/items",
            label: "items",
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
                label: "details",
              },
              {
                name: "collection.manage.order",
                path: "/collections/[slug]/manage/order",
                label: "order",
              },
              {
                name: "collection.manage.links",
                path: "/collections/[slug]/manage/links",
                label: "links",
              },
              {
                name: "collection.manage.access",
                path: "/collections/[slug]/manage/access",
                label: "access",
              },
              {
                name: "collection.manage.pages",
                path: "/collections/[slug]/manage/pages",
                label: "pages",
              },
              {
                name: "collection.manage.contributions",
                path: "/collections/[slug]/manage/contributions",
                label: "contributions",
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
    routes: [
      {
        name: "item",
        path: "/items/[slug]",
        redirect: "/items/[slug]/items",
        routes: [
          {
            name: "item.child.items",
            path: "/items/[slug]/items",
            label: "items",
          },
          {
            name: "item.manage",
            path: "/items/[slug]/manage",
            redirect: "/items/[slug]/manage/details",
            label: "manage",
            routes: [
              {
                name: "item.manage.details",
                path: "/items/[slug]/manage/details",
                label: "details",
              },
              {
                name: "item.manage.order",
                path: "/items/[slug]/manage/order",
                label: "order",
              },
              {
                name: "item.manage.rules",
                path: "/items/[slug]/manage/rules",
                label: "rules",
              },
              {
                name: "item.manage.links",
                path: "/items/[slug]/manage/links",
                label: "links",
              },
              {
                name: "item.manage.pages",
                path: "/items/[slug]/manage/pages",
                label: "pages",
              },
              {
                name: "item.manage.contributions",
                path: "/items/[slug]/manage/contributions",
                label: "contributions",
              },
              {
                name: "item.manage.files",
                path: "/items/[slug]/manage/files",
                label: "files",
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
    routes: [
      {
        name: "community",
        path: "/communities/[slug]",
        redirect: "/communities/[slug]/collections",
        routes: [
          {
            name: "community.child.collections",
            path: "/communities/[slug]/collections",
            label: "collections",
          },
          {
            name: "community.manage",
            path: "/communities/[slug]/manage",
            redirect: "/communities/[slug]/manage/details",
            label: "manage",
            routes: [
              {
                name: "community.manage.details",
                path: "/communities/[slug]/manage/details",
                label: "details",
              },
              {
                name: "community.manage.roles",
                path: "/communities/[slug]/manage/roles",
                label: "roles",
              },
              {
                name: "community.manage.members",
                path: "/communities/[slug]/manage/members",
                label: "members",
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
    routes: [
      {
        name: "user",
        path: "/users/[slug]",
        redirect: "/users/[slug]/details",
        routes: [
          {
            name: "user.details",
            path: "/users/[slug]/details",
            label: "details",
          },
          {
            name: "user.permissions",
            path: "/users/[slug]/permissions",
            label: "permissions",
          },
          {
            name: "user.collections",
            path: "/users/[slug]/collections",
            label: "collections",
          },
          {
            name: "user.items",
            path: "/users/[slug]/items",
            label: "items",
          },
        ],
      },
    ],
  },
  {
    name: "contributors",
    path: "/contributors",
    routes: [
      {
        name: "contributor",
        path: "/contributors/[slug]",
        redirect: "/contributors/[slug]/details",
        routes: [
          {
            name: "contributor.details",
            path: "/contributors/[slug]/details",
            label: "details",
          },
          {
            name: "contributor.collections",
            path: "/contributors/[slug]/collections",
            label: "collectionContributions",
          },
          {
            name: "contributor.items",
            path: "/contributors/[slug]/items",
            label: "itemContributions",
          },
        ],
      },
    ],
  },
];
