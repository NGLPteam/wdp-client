import type { BaseRoute } from "@wdp/lib/routes";

export const baseRoutes: BaseRoute[] = [
  {
    name: "home",
    path: "/",
    label: "nav.home",
  },
  {
    name: "communities",
    path: "/",
    label: "nav.communities",
  },
  {
    name: "community",
    path: "/communities/[slug]",
    routes: [
      {
        name: "community.page",
        path: "/communities/[slug]/page/[page]",
      },
      {
        name: "community.search",
        path: "/communities/[slug]/search",
      },
      {
        name: "community.items.schema",
        path: "/communities/[slug]/items/[schema]",
      },
      {
        name: "community.collections.schema",
        path: "/communities/[slug]/collections/[schema]",
      },
      {
        name: "community.browse.schema",
        path: "/communities/[slug]/browse/[schema]",
      },
    ],
  },
  {
    name: "collection",
    path: "/collections/[slug]",
    routes: [
      {
        name: "collection.page",
        path: "/collections/[slug]/page/[page]",
      },
      {
        name: "collection.browse",
        path: "/collections/[slug]/browse/[ordering]",
      },
      {
        name: "collection.announcement",
        path: "/collections/[slug]/announcements/[announcement]",
      },
    ],
  },
  {
    name: "item",
    path: "/items/[slug]",
    routes: [
      {
        name: "item.page",
        path: "/items/[slug]/page/[page]",
      },
      {
        name: "item.metadata",
        path: "/items/[slug]/metadata", // possibly items/[slug]/view/[slug]
      },
      {
        name: "item.files",
        path: "/items/[slug]/files",
      },
      {
        name: "item.file",
        path: "/items/[slug]/files/[file]",
      },
      {
        name: "item.contributors",
        path: "/items/[slug]/contributors",
      },
      {
        name: "item.metrics",
        path: "/items/[slug]/metrics",
      },
    ],
  },
  {
    name: "contributor",
    path: "/contributors/[slug]",
  },
  {
    name: "about",
    path: "/placeholder",
    label: "nav.about",
  },
  {
    name: "contact",
    path: "/placeholder",
    label: "nav.contact",
  },
  {
    name: "privacy",
    path: "/placeholder",
    label: "nav.privacy",
  },
  {
    name: "terms",
    path: "/placeholder",
    label: "nav.terms",
  },
  {
    name: "accessibility",
    path: "/placeholder",
    label: "nav.accessibility",
  },
  {
    name: "admin",
    path: process.env.NEXT_PUBLIC_ADMIN_URL,
    label: "nav.admin",
    actions: ["admin.access"],
  },
  {
    name: "search",
    path: "/search",
    label: "search.label",
  },
];
