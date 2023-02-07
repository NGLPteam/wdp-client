import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import Link from "next/link";
import * as Styled from "./Footer.styles";
import appData from "fixtures/app.data";
import { InstallationLogo } from "components/global";
import { renderNavLink } from "helpers";
import { Authorize } from "components/auth";
import { DrawerLink } from "components/atomic";
import { useGlobalContext, useViewerContext } from "contexts";
import { FooterFragment$key } from "@/relay/FooterFragment.graphql";

function Footer() {
  const { footerData } = appData;
  const { t } = useTranslation();

  const data = useGlobalContext();
  const { globalAdmin } = useViewerContext();

  const siteData = useMaybeFragment<FooterFragment$key>(
    fragment,
    data?.globalConfiguration
  );

  const description = siteData?.site.footer.description;

  const renderGlobalSettings = () =>
    globalAdmin ? (
      <Styled.ListItem>
        <DrawerLink key="settings" drawer="editSettings" passHref>
          {t("nav.global_settings")}
        </DrawerLink>
      </Styled.ListItem>
    ) : null;

  return (
    <Styled.Wrapper>
      <Styled.Nav className="l-grid">
        <div
          className={`l-grid__item l-flex l-flex--gap l-flex--col ${
            description ? "l-grid__item--4" : "l-grid__item--10"
          }`}
        >
          <InstallationLogo />
          <Link href="/" passHref>
            <a className="a-link">{t("app.powered_by")}</a>
          </Link>
        </div>
        {footerData.navigation.map((nav, i) => (
          <Authorize key={i} actions={nav.actions}>
            <div className="l-grid__item l-grid__item--2">
              <Styled.Header>{t(nav.header)}</Styled.Header>
              <Styled.List>
                {nav.children &&
                  nav.children.map((child, i) =>
                    renderNavLink(child, i, Styled.ListItem)
                  )}
                {globalAdmin && renderGlobalSettings()}
              </Styled.List>
            </div>
          </Authorize>
        ))}
        {description && (
          <div className="l-grid__item l-grid__item--6">
            <Styled.Header>{t(footerData.about.header)}</Styled.Header>
            <div className="t-rte">{description}</div>
          </div>
        )}
      </Styled.Nav>
      {footerData.copyright && (
        <Styled.Copyright className="l-grid">
          <div className="l-grid__item l-grid__item--4" role="presentation" />
          {siteData?.site.footer.copyrightStatement && (
            <div className="l-grid__item l-grid__item--8">
              {`© ${siteData.site.footer.copyrightStatement}`}
            </div>
          )}
        </Styled.Copyright>
      )}
    </Styled.Wrapper>
  );
}

export default Footer;

const fragment = graphql`
  fragment FooterFragment on GlobalConfiguration {
    site {
      footer {
        copyrightStatement
        description
      }
    }
  }
`;
