import React from "react";
import { useTranslation } from "react-i18next";
import appData from "fixtures/app.data";
import { NamedLink } from "components/atomic";
import Link from "next/link";
import { LogoPlaceholder } from "components/global";
import { Authorize } from "components/auth";
import * as Styled from "./Footer.styles";
type NamedLinkProps = React.ComponentProps<typeof NamedLink>;
type LinkProps = React.ComponentProps<typeof Link>;
type AuthorizeProps = React.ComponentProps<typeof Authorize>;

function Footer() {
  const { footerData } = appData;
  const { t } = useTranslation("common");

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

  const renderLink = (props: RenderLinkProps, i: number) => {
    let wrappedLink = null;

    if (props.route) {
      wrappedLink = (
        <NamedLink route={props.route} passHref>
          <a className="t-capitalize">{t(props.label)}</a>
        </NamedLink>
      );
    }

    // Explicit check here because for some reason TS is having a hard time
    // understanding the discriminated union.
    if (props.href) {
      wrappedLink = (
        <Link href={props.href} passHref>
          <a className="t-capitalize">{t(props.label)}</a>
        </Link>
      );
    }

    if (props.actions && wrappedLink) {
      return (
        <Authorize actions={props.actions} key={i}>
          <Styled.ListItem key={i}>{wrappedLink}</Styled.ListItem>
        </Authorize>
      );
    }

    return wrappedLink;
  };

  return (
    <Styled.Wrapper>
      <Styled.Nav className="l-grid">
        <div className="l-grid__item l-grid__item--4">
          <Link href="/" passHref>
            <LogoPlaceholder>Powered by NGLP–WDP</LogoPlaceholder>
          </Link>
        </div>
        {footerData.navigation.map((nav, i) => (
          <div className="l-grid__item l-grid__item--2" key={i}>
            <Styled.Header>{t(nav.header)}</Styled.Header>
            <Styled.List>
              {nav.children &&
                nav.children.map((child, i) => renderLink(child, i))}
            </Styled.List>
          </div>
        ))}
        {footerData.about && (
          <div className="l-grid__item l-grid__item--4">
            <Styled.Header>About</Styled.Header>
            <span className="t-rte">{t(footerData.about)}</span>
          </div>
        )}
      </Styled.Nav>
      {footerData.copyright && (
        <Styled.Copyright className="l-grid">
          <div className="l-grid__item l-grid__item--4" role="presentation" />
          <p className="l-grid__item l-grid__item--8">
            {"© "}
            {t(footerData.copyright)}
          </p>
        </Styled.Copyright>
      )}
    </Styled.Wrapper>
  );
}

export default Footer;
