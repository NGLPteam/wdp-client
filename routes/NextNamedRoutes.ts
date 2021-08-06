const nextStylePathComponent = /\[[^/]+\]/g;

export type BaseRoute = {
  name: string;
  path: string;
  redirect?: string;
  routes?: BaseRoute[];
};

type Route = {
  name: string;
  identifiers: string[];
  path: string;
  regex: RegExp;
  redirect?: string;
};

class NextNamedRoutes {
  constructor(baseRoutes?: BaseRoute[]) {
    // Recursively add base routes
    if (baseRoutes) {
      this.addBaseRoutes(baseRoutes);
    }
  }

  /**
   * All registered routes.
   */
  routes: Route[] = [];

  /**
   * Registers a named route. The path should be the filesystem path corresponding to the route.
   */
  add(name: string, path: string, redirect?: string): NextNamedRoutes {
    if (!name || !path) {
      throw new Error(
        `Route requires a name and path. name: ${name}, path: ${path}`
      );
    }

    if (this.findRouteByName(name)) {
      throw new Error(`Duplicate route added: ${name}`);
    }

    this.routes.push({
      name,
      identifiers: NextNamedRoutes.identifiersInPath(path),
      path,
      regex: NextNamedRoutes.pathToRegex(path),
      redirect,
    });
    return this;
  }

  /**
   * Returns the currently active route (based on window.location)
   * Uses regex matching internally
   */
  activeRoute(): Route | null {
    const rn = this.findRouteByPath(window.location.pathname);
    if (!rn) {
      console.warn(
        `No route associated with this pathname: ${window.location.pathname}`
      );
      return null;
    }

    return rn;
  }

  /**
   * Returns metadata about a route given its name.
   * @param name The name of the route you want to find.
   */
  findRouteByName(name: string): Route | undefined {
    return this.routes.find((route) => route.name === name);
  }

  /**
   * Returns metadata about a route, based on a browser path.
   * Uses regex matching internally.
   * @param path The path to search for.
   */
  findRouteByPath(path: string): Route | undefined {
    return this.routes.find((route) => route.regex.test(path));
  }

  /**
   * Returns the pathname (what is visible in URL bar) for the given route and parameters
   * @param name The route to render.
   * @param params The parameters that should be injected into the route
   */
  pathnameForParams(name: string, params: { [key: string]: string }): string {
    const route = this.findRouteByName(name);
    if (!route) {
      throw new Error(`Could not find route: ${name}`);
    }

    return NextNamedRoutes.injectParamsIntoPath(route.path, params);
  }

  /**
   * Recursively adds base routes
   * @param baseRoutes The routes to add
   */
  private addBaseRoutes(baseRoutes: BaseRoute[]) {
    if (!baseRoutes) {
      throw new Error(`No base routes defined`);
    }

    const addRoute = ({ name, path, redirect, routes }: BaseRoute) => {
      this.add(name, path, redirect);

      if (routes) {
        routes.forEach(addRoute);
      }
    };

    baseRoutes.forEach(addRoute);
  }

  static injectParamsIntoPath(
    nextStylePath: string,
    params: { [key: string]: string }
  ): string {
    const identifiers = NextNamedRoutes.identifiersInPath(nextStylePath);
    const pathname = identifiers.reduce((prev, curr) => {
      return prev.replace(`[${curr}]`, params[curr]);
    }, nextStylePath);

    // Add any search params to the route
    const searchParams = Object.keys(params).filter(
      (key) => !identifiers.includes(key)
    );
    let searchParamString = "";
    if (searchParams.length > 0) {
      searchParams.forEach((key) => {
        if (params[key]) {
          if (searchParamString.length === 0) {
            searchParamString = "?";
          } else if (searchParamString.length > 1) {
            searchParamString += "&";
          }
          searchParamString +=
            encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
        }
      });
    }

    return pathname + searchParamString;
  }

  static pathToRegex(nextStylePath: string): RegExp {
    const escapedPath = nextStylePath.replace(/[-{}()*+?.,\\^$|#\s]/g, "\\$&");
    const identifiers = NextNamedRoutes.identifiersInPath(escapedPath);

    // Create a regex using the identifiers
    return new RegExp(
      "^" +
        identifiers.reduce((prev, curr) => {
          return prev.replace(`[${curr}]`, "(?:([^/]+?))");
        }, nextStylePath) +
        "$"
    );
  }

  static identifiersInPath(nextStylePath: string): string[] {
    const matches = [];

    // string.matchAll is not standard enough yet :(
    nextStylePathComponent.lastIndex = 0;
    let m = nextStylePathComponent.exec(nextStylePath);
    while (m) {
      matches.push(m[0]);
      m = nextStylePathComponent.exec(nextStylePath);
    }

    // Check for duplicates before returning, better be safe than sorry
    const seen: { [key: string]: boolean } = {};
    return matches.map((m) => {
      const id = m.substr(1, m.length - 2);
      if (seen[id]) {
        throw new Error(`Duplicate identifier in path ${nextStylePath}: ${id}`);
      }
      seen[id] = true;
      return id;
    });
  }
}

export default NextNamedRoutes;
