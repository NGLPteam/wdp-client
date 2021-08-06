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

import MobileMenu from "../MobileMenu";
import MobileMenuToggle from "../MobileMenuToggle";
import ProviderBar from "../ProviderBar";
import GlobalSearch from "../GlobalSearch";

function Header() {
  const { t } = useTranslation("common");
  const mobileNavId = useUID();
  const mobileNavRef = useRef(null);
  const [isActive, toggleActive, setActive] = useToggle();

  useFocusTrap(mobileNavRef, isActive, {
    onDeactivate: useCallback(() => setActive(false), [setActive]),
  });

  const { siteInfo, headerData } = appData;

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
            <HeaderAccount />
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
      />
    </header>
  );
}

export default Header;
