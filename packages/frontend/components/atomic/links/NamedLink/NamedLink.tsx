import { Route } from "next";
import Link from "next/link";
import { RouteHelper } from "routes";
import { useViewerContext } from "contexts";
type LinkProps = React.ComponentProps<typeof Link>;

const NamedLink = ({ children, ...props }: Props) => {
  let href: Route = "href" in props ? props.href : "";
  let isAuthorized = true;

  const { allowedActions } = useViewerContext();

  // If pages router props received, format the href string.
  if ("route" in props) {
    const { route, routeParams } = props;
    const routeObj = RouteHelper.findRouteByName(route);

    // If the route doesn't exist, warn dev in the console
    if (!routeObj) {
      console.warn(`Route ${route} not found`, RouteHelper.routes);
    } else {
      isAuthorized = routeObj?.actions?.length
        ? routeObj.actions.some((action) => allowedActions.includes(action))
        : true;

      // If the route redirects to another route, link to the redirect path.
      const path = routeObj.redirect ? routeObj.redirect : routeObj.path;

      href = path.replaceAll("[", "").replaceAll("]", "");

      if (routeParams) {
        Object.keys(routeParams).forEach((key) => {
          href = routeParams[key]
            ? href?.replace(key, routeParams[key].toString())
            : href;
        });
      }
    }
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  let linkProps;
  if ("route" in props) {
    const { route, routeParams, query, ...rest } = props;
    linkProps = rest;
  } else {
    const { href, ...rest } = props;
    linkProps = rest;
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */

  return isAuthorized && href ? (
    <Link
      href={href}
      {...linkProps}
      className={props.className ? props.className : "no-default-link-styles"}
    >
      {children}
    </Link>
  ) : null;
};

interface AppRouterLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  passHref?: boolean;
}

export interface PagesRouterLinkProps extends Omit<LinkProps, "href"> {
  /** The named route */
  route: string;
  /** Route parameters */
  routeParams?: Record<string, string | number>;
  /** Query parameters */
  query?: { [key: string]: string | string[] | number | undefined };
}

type Props = AppRouterLinkProps | PagesRouterLinkProps;

export default NamedLink;
