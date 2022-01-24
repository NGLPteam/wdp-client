import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./Header.styles";
import SignInOut from "components/auth/SignInOut";
import { DrawerLink, Dropdown, NamedLink, NavLink } from "components/atomic";
import { Authorize } from "components/auth";
import { RouteHelper } from "routes";
import { useViewerContext, useIsAuthenticated } from "hooks";
import Avatar from "components/atomic/Avatar";
type NamedLinkProps = React.ComponentProps<typeof NamedLink>;
type AuthorizeProps = React.ComponentProps<typeof Authorize>;

interface HeaderNavParent extends HeaderNavItem {
  route?: never;
  children: HeaderNavLink[];
}

interface HeaderNavLink extends HeaderNavItem {
  route: NamedLinkProps["route"];
  children?: never;
}

interface HeaderNavItem {
  label: string;
  actions?: AuthorizeProps["actions"];
}

interface HeaderNavParent extends HeaderNavItem {
  route?: never;
  children: HeaderNavLink[];
}

interface Props {
  accountNav: HeaderNavParent;
}

const HeaderAccount = ({ accountNav }: Props) => {
  const { t } = useTranslation();

  const isAuthenticated = useIsAuthenticated();

  const { avatarUrl, globalAdmin } = useViewerContext();

  const renderSignInOut = () => (
    <NavLink key="auth" as="span">
      <SignInOut />
    </NavLink>
  );

  const renderGlobalSettings = () =>
    globalAdmin ? (
      <DrawerLink key="settings" drawer="editSettings" passHref>
        <NavLink>{t("nav.edit_global_settings")}</NavLink>
      </DrawerLink>
    ) : null;

  const renderDropdown = (item: HeaderNavParent) => {
    // Check if the disclosure should be active
    const active = item?.children.some((item) => {
      return RouteHelper.isRouteNameFuzzyActive(item.route);
    });

    return (
      <Dropdown
        label={t(item.label)}
        disclosure={
          <Styled.AvatarLink as="button" active={active}>
            <Avatar url={avatarUrl} />
          </Styled.AvatarLink>
        }
        menuItems={[
          ...item.children.map(renderLink),
          <DrawerLink key="profile" drawer="editProfile" passHref>
            <NavLink>{t("nav.edit_profile")}</NavLink>
          </DrawerLink>,
          renderGlobalSettings(),
          renderSignInOut(),
        ]}
        alignRight
      />
    );
  };

  const renderLink = (item: HeaderNavLink) => {
    // Check if the individual route link should be active
    const route = RouteHelper.findRouteByName(item.route);
    if (!route) return null;

    const active = RouteHelper.isRouteFuzzyActive(route);

    return (
      <NamedLink route={route.name} passHref>
        <NavLink active={active}>{t(item.label || "")}</NavLink>
      </NamedLink>
    );
  };

  return isAuthenticated ? renderDropdown(accountNav) : renderSignInOut();
};

export default HeaderAccount;
