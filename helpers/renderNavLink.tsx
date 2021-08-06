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

const renderNavLink = (props: RenderLinkProps, i: number) => {
  let linkComponent = null;

  if (props.route) {
    linkComponent = (
      <NamedLink route={props.route} passHref>
        <a className="t-capitalize a-color-accent">{i18next.t(props.label)}</a>
      </NamedLink>
    );
  }

  // Explicit check here because for some reason TS is having a hard time
  // understanding the discriminated union.
  if (props.href) {
    linkComponent = (
      <Link href={props.href} passHref>
        <a className="t-capitalize a-color-accent">{i18next.t(props.label)}</a>
      </Link>
    );
  }

  if (props.actions && linkComponent) {
    return (
      <Authorize key={i} actions={props.actions}>
        {linkComponent}
      </Authorize>
    );
  }

  return linkComponent;
};

export default renderNavLink;
