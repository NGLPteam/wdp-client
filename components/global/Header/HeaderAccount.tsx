import React from "react";
import SignIn from "components/scaffolding/Auth/SignIn";
import SignOut from "components/scaffolding/Auth/SignOut";
import * as Styled from "./Header.styles";
import { Dropdown, NamedLink } from "components/atomic";
import { Authorize } from "components/auth";
import { useTranslation } from "react-i18next";
import { RouteHelper } from "routes";
import useIsAuthenticated, { useSignInOut } from "hooks/useIsAuthenticated";
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

const HeaderAccount = () => {
  const { t } = useTranslation();
  const isAuthenticated = useIsAuthenticated();
  const handleSignInOut = useSignInOut();

  //Some mock menu item data until routes are confirmed.
  const mockItem = isAuthenticated
    ? {
        label: "",
        children: [
          { label: "Edit Profile", route: "users" },
          { label: "Edit Settings", route: "users" },
          { label: "Logout", route: "users", authentication: true },
        ],
      }
    : {
        label: "",
        children: [{ label: "Login", route: "users", authentication: true }],
      };

  const renderDropdown = (item: HeaderNavParent) => {
    // Check if the disclosure should be active
    const active = item?.children?.some((item) => {
      return RouteHelper.isRouteNameFuzzyActive(item.route);
    });

    return (
      <Dropdown
        label={item.label}
        disclosure={
          <Styled.Link as="button" active={active}>
            <Styled.Avatar />
          </Styled.Link>
        }
        menuItems={item.children.map(renderLink)}
      />
    );
  };

  const renderLink = (item: HeaderNavLink) => {
    // Check if the individual route link should be active
    const route = RouteHelper.findRouteByName(item.route);
    if (!route) return null;

    const active = RouteHelper.isRouteFuzzyActive(route);

    if (item.authentication) {
      return (
        <Styled.AuthLink onClick={handleSignInOut}>
          <Styled.Link active={active}>
            <Styled.LinkText>{item.label || ""}</Styled.LinkText>
          </Styled.Link>
        </Styled.AuthLink>
      );
    }

    return (
      <NamedLink route={route.name} passHref>
        <Styled.Link active={active}>
          <Styled.LinkText>{item.label || ""}</Styled.LinkText>
        </Styled.Link>
      </NamedLink>
    );
  };

  return <>{renderDropdown(mockItem)}</>;
};

export default HeaderAccount;
