import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./Header.styles";
import SignInOut from "components/auth/SignInOut";
import { DrawerLink, Dropdown, NamedLink } from "components/atomic";
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
  const { avatarUrl } = useViewerContext();

  const renderSignInOut = () => (
    <Styled.Link key="auth" as="span">
      <Styled.LinkText as={SignInOut} />
    </Styled.Link>
  );

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
            <Styled.Link>
              <Styled.LinkText>{t("nav.edit_profile")}</Styled.LinkText>
            </Styled.Link>
          </DrawerLink>,
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
        <Styled.Link active={active}>
          <Styled.LinkText>{t(item.label) || ""}</Styled.LinkText>
        </Styled.Link>
      </NamedLink>
    );
  };

  return isAuthenticated ? renderDropdown(accountNav) : renderSignInOut();
};

export default HeaderAccount;
