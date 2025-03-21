import React from "react";
import Link from "next/link";
import i18next from "i18next";
import { NamedLink } from "components/atomic";
import { Authorize } from "components/auth";
import { RouteHelper } from "routes";
import { IStyledComponent } from "styled-components";

type NamedLinkProps = React.ComponentProps<typeof NamedLink>;
type LinkProps = React.ComponentProps<typeof Link>;
type AuthorizeProps = React.ComponentProps<typeof Authorize>;

interface RenderLinkPropsBase {
  actions?: AuthorizeProps["actions"];
  label: string;
  route?: NamedLinkProps["route"];
  href?: LinkProps["href"];
}

interface RenderLinkPropsWithRoute extends RenderLinkPropsBase {
  route: NamedLinkProps["route"];
  href?: never;
}

interface RenderLinkPropsWithHref extends RenderLinkPropsBase {
  route?: never;
  href: LinkProps["href"];
}

type RenderLinkProps = RenderLinkPropsWithRoute | RenderLinkPropsWithHref;

function renderNavLink(
  { route, href, label, actions }: RenderLinkProps,
  i: number,
  wrapper?: typeof React.Component | string | IStyledComponent<"web">,
) {
  let linkComponent = null;
  const Wrapper = wrapper || React.Fragment;

  if (route) {
    linkComponent = (
      <Wrapper key={i}>
        <NamedLink route={route} passHref>
          <a
            className="t-capitalize a-link"
            aria-current={RouteHelper.isRouteNameFuzzyActive(route)}
          >
            {i18next.t(label)}
          </a>
        </NamedLink>
      </Wrapper>
    );
  }

  // Explicit check here because for some reason TS is having a hard time
  // understanding the discriminated union.
  if (href) {
    linkComponent = (
      <Wrapper key={i}>
        <Link href={href} passHref className="t-capitalize a-link">
          {i18next.t(label)}
        </Link>
      </Wrapper>
    );
  }

  if (actions && linkComponent) {
    return (
      <Authorize key={i} actions={actions}>
        {linkComponent}
      </Authorize>
    );
  }

  return linkComponent;
}

export default renderNavLink;
