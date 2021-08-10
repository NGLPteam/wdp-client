import React from "react";
import Link from "next/link";
import { NamedLink } from "components/atomic";
import { Authorize } from "components/auth";
import i18next from "i18next";

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

const renderNavLink = (
  { route, href, label, actions }: RenderLinkProps,
  i: number,
  wrapper?: typeof React.Component | string
) => {
  let linkComponent = null;
  const Wrapper = wrapper || React.Fragment;

  if (route) {
    linkComponent = (
      <Wrapper key={i}>
        <NamedLink route={route} passHref>
          <a className="t-capitalize a-color-accent">{i18next.t(label)}</a>
        </NamedLink>
      </Wrapper>
    );
  }

  // Explicit check here because for some reason TS is having a hard time
  // understanding the discriminated union.
  if (href) {
    linkComponent = (
      <Wrapper key={i}>
        <Link href={href} passHref>
          <a className="t-capitalize a-color-accent">{i18next.t(label)}</a>
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
};

export default renderNavLink;
