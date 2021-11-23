import type { BaseRoute } from "@wdp/lib/routes";

export const baseRoutes: BaseRoute[] = [
  {
    name: "home",
    path: "/",
    label: "nav.home",
  },
  {
    name: "communities",
    path: "/communities",
    label: "nav.communities",
  },
  {
    name: "community",
    path: "/communities/[slug]",
    routes: [
      {
        name: "community.page",
        path: "/communities/[slug]/[page]",
      },
      {
        name: "community.collections",
        path: "/communities/[slug]/collections",
      },
      {
        name: "community.items",
        path: "/communities/[slug]/items",
      },
    ],
  },
  {
    name: "collection",
    path: "/collections/[slug]",
  },
  {
    name: "item",
    path: "/items/[slug]",
  },
  {
    name: "about",
    path: "/",
    label: "nav.about",
  },
  {
    name: "contact",
    path: "/",
    label: "nav.contact",
  },
  {
    name: "privacy",
    path: "/",
    label: "nav.privacy",
  },
  {
    name: "terms",
    path: "/",
    label: "nav.terms",
  },
  {
    name: "accessibility",
    path: "/",
    label: "nav.accessibility",
  },
  {
    name: "admin",
    path: "https://wdp-admin-client-cast-iron.vercel.app/",
    label: "nav.admin",
  },
  {
    name: "search",
    path: "/search",
    label: "search.label",
  },
];
