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
      },
    ],
  },
];
