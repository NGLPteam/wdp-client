import React, { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useUID } from "react-uid";
import { useFocusTrap } from "@castiron/hooks/";

import GlobalSearch from "../GlobalSearch";
import ProviderBar from "../ProviderBar";
import HeaderAccount from "./HeaderAccount";
import * as Styled from "./Header.styles";
import HeaderNavLinks from "./HeaderNavLinks";
import HeaderWrapper from "./HeaderWrapper";
import appData from "fixtures/app.data";
import { useToggle } from "hooks";
import { LogoPlaceholder } from "components/global";

import MobileMenu, { MobileMenuList } from "components/layout/MobileMenu";
import MobileMenuToggle from "components/layout/MobileMenuToggle";
import { renderNavLink } from "helpers";
import SignInOut from "components/auth/SignInOut";
import { DrawerLink } from "components/atomic";

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
    <HeaderWrapper>
      <Styled.ProviderBarBlock>
        <ProviderBar />
      </Styled.ProviderBarBlock>
      <Styled.Nav className="a-bg-brand100">
        <Styled.Inner>
          {siteInfo.installation && (
            <LogoPlaceholder>
              <span className="t-label-md">{t(siteInfo.installation)}</span>
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
            label={t("nav.menu_toggle")}
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
          <h3 className="t-label-lg a-color-light">
            {t("nav.account_header")}
          </h3>
          <MobileMenuList>
            <li>
              <DrawerLink drawer="editProfile">
                {t("nav.edit_profile")}
              </DrawerLink>
            </li>
            <li>
              <SignInOut />
            </li>
          </MobileMenuList>
        </div>
      </MobileMenu>
    </HeaderWrapper>
  );
}

export default Header;
