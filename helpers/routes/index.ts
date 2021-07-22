// TODO: Where should this live? Should we have a root routes/ folder?
import NextNamedRoutes from "./NextNamedRoutes";
import isArray from "lodash/isArray";
interface Route {
  name: string;
  path: string;
  routes?: Route[];
}

const baseRoutes: Route[] = [
  {
    name: "collections",
    path: "/collections",
    routes: [
      {
        name: "collection",
        path: "/collections/[slug]",
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
        routes: [
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

const RouteHelper = new NextNamedRoutes();

// Fun with recursive functions
function addRoute(route) {
  if (!route.name || !route.path) {
    console.warn("Route requires a name and path", route);
    return;
  }

  RouteHelper.add(route.name, route.path);

  if (route.routes) {
    route.routes.forEach(addRoute);
  }
}

baseRoutes.forEach(addRoute);

const modelMap = {
  COMMUNITY: "communities",
  COLLECTION: "collections",
  ITEM: "items",
  USER: "users",
  CONTRIBUTOR: "contributors",
};

function routeQueryArrayToString(item: string | string[]): string {
  return isArray(item) ? item[0] : item;
}

export { RouteHelper, baseRoutes, modelMap, routeQueryArrayToString };
