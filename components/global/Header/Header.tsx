import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LogoPlaceholder } from "components/global";
import appData from "fixtures/app.data";
import HeaderSearch from "./HeaderSearch";
import HeaderNavLinks from "./HeaderNavLinks";
import * as Styled from "./Header.styles";
import HeaderAccount from "./HeaderAccount";

function Header() {
  const { t } = useTranslation("common");
  const { headerData } = appData;

  return (
    <header role="banner">
      <Styled.ProviderBar className="a-bg-brand90">
        <span className="t-label-md">{t(headerData.provider)}</span>
      </Styled.ProviderBar>
      <Styled.Nav className="a-bg-brand100">
        <Styled.Inner>
          {headerData.institution && (
            <Link href="/" passHref>
              <LogoPlaceholder>
                <span className="t-label-md">{t(headerData.institution)}</span>
              </LogoPlaceholder>
            </Link>
          )}
          <ul className="l-flex l-flex--align-center">
            <HeaderNavLinks navigation={headerData.navigation} />
            <HeaderSearch />
            <HeaderAccount />
          </ul>
        </Styled.Inner>
      </Styled.Nav>
    </header>
  );
}

export default Header;
