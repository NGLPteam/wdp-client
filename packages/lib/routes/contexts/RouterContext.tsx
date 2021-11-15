import React, { createContext } from "react";
import NextNamedRoutes, { Route, BaseRoute } from "../helpers/NextNamedRoutes";

/* eslint-disable @typescript-eslint/no-unused-vars */
const RouterContext = createContext<RouterContextProps>({
  routes: [],
  findRouteByName: (name: string) => undefined,
  findRouteByPath: (path: string) => undefined,
  activeRoute: () => null,
  isRouteActive: (route: Route) => false,
  isRouteNameActive: (route: string) => false,
  isRouteFuzzyActive: (route: Route) => false,
  isRouteNameFuzzyActive: (name: string) => false,
});
/* eslint-enable @typescript-eslint/no-unused-vars */

export function RouterContextProvider({ baseRoutes = [], children }: Props) {
  const RouteHelper = new NextNamedRoutes(baseRoutes);
  const {
    routes,
    activeRoute,
    findRouteByName,
    findRouteByPath,
    isRouteActive,
    isRouteNameActive,
    isRouteFuzzyActive,
    isRouteNameFuzzyActive,
  } = RouteHelper;

  return (
    <RouterContext.Provider
      value={{
        routes,
        activeRoute,
        findRouteByName,
        findRouteByPath,
        isRouteActive,
        isRouteNameActive,
        isRouteFuzzyActive,
        isRouteNameFuzzyActive,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

interface RouterContextProps {
  routes: Route[];
  findRouteByName: (name: string) => Route | undefined;
  findRouteByPath: (path: string) => Route | undefined;
  activeRoute: () => Route | null;
  isRouteActive: (route: Route) => boolean;
  isRouteNameActive: (route: string) => boolean;
  isRouteFuzzyActive: (route: Route) => boolean;
  isRouteNameFuzzyActive: (name: string) => boolean;
}

interface Props {
  children: React.ReactNode;
  baseRoutes: BaseRoute[];
}

export default RouterContext;
