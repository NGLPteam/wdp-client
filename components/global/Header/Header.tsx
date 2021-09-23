import React, { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useUID } from "react-uid";
import { useFocusTrap } from "@castiron/hooks/";

import appData from "fixtures/app.data";
import { useToggle } from "hooks";
import { LogoPlaceholder } from "components/global";

import HeaderNavLinks from "./HeaderNavLinks";
import * as Styled from "./Header.styles";
import HeaderAccount from "./HeaderAccount";

import MobileMenu, { MobileMenuList } from "components/layout/MobileMenu";
import MobileMenuToggle from "components/layout/MobileMenuToggle";
import ProviderBar from "../ProviderBar";
import GlobalSearch from "../GlobalSearch";
import { renderNavLink } from "helpers";
import SignIn from "components/scaffolding/Auth/SignIn";
import SignOut from "components/scaffolding/Auth/SignOut";

function Header() {
  const { t } = useTranslation();
  const mobileNavId = useUID();
  const mobileNavRef = useRef(null);
  const [isActive, toggleActive, setActive] = useToggle();

  useFocusTrap(mobileNavRef, isActive, {
    onDeactivate: useCallback(() => setActive(false), [setActive]),
  });

  const { siteInfo, headerData, footerData } = appData;

  return (
    <header role="banner">
      <Styled.ProviderBarBlock>
        <ProviderBar />
      </Styled.ProviderBarBlock>
      <Styled.Nav className="a-bg-brand100">
        <Styled.Inner>
          {siteInfo.institution && (
            <LogoPlaceholder>
              <span className="t-label-md">{t(siteInfo.institution)}</span>
            </LogoPlaceholder>
          )}
          <Styled.DesktopNavBlock>
            <ul className="l-flex l-flex--align-center">
              <HeaderNavLinks navigation={headerData.navigation} />
            </ul>
          </Styled.DesktopNavBlock>
          <Styled.SearchBlock>
            <GlobalSearch />
          </Styled.SearchBlock>
          <Styled.AccountBlock>
            <HeaderAccount accountNav={headerData.account} />
          </Styled.AccountBlock>
          <MobileMenuToggle
            onToggle={toggleActive}
            label={t("header.toggle_nav_menu")}
            icon="menu"
          />
        </Styled.Inner>
      </Styled.Nav>
      <MobileMenu
        ref={mobileNavRef}
        id={mobileNavId}
        active={isActive}
        onClose={toggleActive}
        showGlobalSearch
        showProviderBar
      >
        {footerData.navigation.map((nav, i) => (
          <div key={i}>
            <h3 className="t-label-lg a-color-light">{t(nav.header)}</h3>
            <MobileMenuList>
              {nav.children &&
                nav.children.map((child, i) => renderNavLink(child, i, "li"))}
            </MobileMenuList>
          </div>
        ))}
        <div>
          <h3 className="t-label-lg a-color-light">{t("header.account")}</h3>
          <MobileMenuList>
            <li>
              <SignIn />
              <SignOut />
            </li>
          </MobileMenuList>
        </div>
      </MobileMenu>
    </header>
  );
}

export default Header;
