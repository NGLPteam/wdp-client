import React, { forwardRef, Ref, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import appData from "fixtures/app.data";
import { renderNavLink } from "helpers";
import SignIn from "components/scaffolding/Auth/SignIn";
import SignOut from "components/scaffolding/Auth/SignOut";

import ProviderBar from "../ProviderBar";
import Search from "../GlobalSearch";
import * as Styled from "./MobileMenu.styles";
import MobileMenuToggle from "../MobileMenuToggle";

const MobileMenu = forwardRef(
  ({ id, active, onClose }: Props, ref: Ref<HTMLInputElement>) => {
    const { footerData } = appData;
    const { t } = useTranslation("common");
    const lastActive = useRef(false);

    // Keep track of the last active value
    useEffect(() => {
      lastActive.current = active;
    }, [active]);

    return (
      <Styled.Wrapper
        as="nav"
        id={id}
        ref={ref}
        data-leave={!active && active !== lastActive.current}
        data-enter={active}
        className="a-bg-brand100"
      >
        <Styled.Header>
          <Styled.SearchBlock>
            <Search />
          </Styled.SearchBlock>
          <MobileMenuToggle
            label={t("close")}
            icon="close"
            onToggle={onClose}
          />
        </Styled.Header>
        {footerData.navigation.map((nav, i) => (
          <Styled.NavBlock key={i}>
            <h3 className="t-label-lg a-color-light">{t(nav.header)}</h3>
            <Styled.List>
              {nav.children &&
                nav.children.map((child, i) => renderNavLink(child, i, "li"))}
            </Styled.List>
          </Styled.NavBlock>
        ))}
        <Styled.NavBlock isLast>
          <h3 className="t-label-lg a-color-light">{t("header.account")}</h3>
          <Styled.List>
            <li>
              <SignIn />
              <SignOut />
            </li>
          </Styled.List>
        </Styled.NavBlock>
        <ProviderBar />
      </Styled.Wrapper>
    );
  }
);

interface Props {
  id: string;
  active: boolean;
  onClose: () => void;
}

export default MobileMenu;
