interface HelperProps {
  [key: string]: string | number;
}

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
        path: "/collections/:slug",
        routes: [
          {
            name: "collectionChildCollections",
            path: "/collections/:slug/collections",
          },
          {
            name: "collectionChildItems",
            path: "/collections/:slug/collections",
          },
        ],
      },
    ],
  },
];

function mapBaseRoute(baseRoute) {
  const route = { ...baseRoute, routes: baseRoutes };
  const routes = baseRoutes
    ? baseRoutes.map((childBaseRoute) => mapBaseRoute(childBaseRoute))
    : [];
  return { ...route, routes };
}

const routes = baseRoutes.map((baseRoute) => mapBaseRoute(baseRoute));
