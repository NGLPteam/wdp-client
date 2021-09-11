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
          },
          {
            name: "collection.child.items",
            path: "/collections/[slug]/items",
          },
          {
            name: "collection.manage",
            path: "/collections/[slug]/manage",
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
            name: "item.assets.create",
            path: "/items/[slug]/assets/create",
          },
          {
            name: "item.child.items",
            path: "/items/[slug]/items",
          },
          {
            name: "item.manage",
            path: "/items/[slug]/manage",
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
          },
          {
            name: "community.manage",
            path: "/communities/[slug]/manage",
            redirect: "/communities/[slug]/manage/details",
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
            label: "glossary.collection_contribution.label",
          },
          {
            name: "contributor.items",
            path: "/contributors/[slug]/items",
            label: "glossary.item_contribution.label",
          },
        ],
      },
    ],
  },
];
