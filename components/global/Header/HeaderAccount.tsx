import React from "react";
import SignInOut from "components/auth/SignInOut";
import { Dropdown, NamedLink } from "components/atomic";
import { Authorize } from "components/auth";
import { useTranslation } from "react-i18next";
import { RouteHelper } from "routes";
import * as Styled from "./Header.styles";
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

  const renderDropdown = (item: HeaderNavParent) => {
    // Check if the disclosure should be active
    const active = item?.children.some((item) => {
      return RouteHelper.isRouteNameFuzzyActive(item.route);
    });

    return (
      <Dropdown
        label={t(item.label)}
        disclosure={
          <Styled.Link as="button" active={active}>
            <Styled.Avatar />
          </Styled.Link>
        }
        menuItems={[
          ...item.children.map(renderLink),
          <SignInOut key={"auth"} />,
        ]}
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

  return <>{renderDropdown(accountNav)}</>;
};

export default HeaderAccount;
