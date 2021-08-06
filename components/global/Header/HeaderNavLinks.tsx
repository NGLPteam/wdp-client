import React from "react";
import { Dropdown, NamedLink } from "components/atomic";
import { Authorize } from "components/auth";
import * as Styled from "./Header.styles";
import { useTranslation } from "react-i18next";
import { RouteHelper } from "routes";
type NamedLinkProps = React.ComponentProps<typeof NamedLink>;
type AuthorizeProps = React.ComponentProps<typeof Authorize>;

interface HeaderNavItem {
  label: string;
  actions?: AuthorizeProps["actions"];
}

interface HeaderNavLink extends HeaderNavItem {
  route: NamedLinkProps["route"];
  children?: never;
}

interface HeaderNavParent extends HeaderNavItem {
  route?: never;
  children: HeaderNavLink[];
}

interface Props {
  navigation: (HeaderNavLink | HeaderNavParent)[];
}

function HeaderNavLinks({ navigation }: Props) {
  const { t } = useTranslation("common");

  const maybeAuthorize = (
    node: AuthorizeProps["children"],
    item: HeaderNavLink | HeaderNavParent
  ) => {
    if (!item.actions) return node;
    return (
      <Authorize key={item.label} actions={item.actions}>
        {node}
      </Authorize>
    );
  };

  const renderDropdown = (item: HeaderNavParent) => {
    // Check if the disclosure should be active
    const activeRoute = RouteHelper.activeRoute();
    const childRoutes = item.children.map((item) => item.route);
    const active = activeRoute
      ? childRoutes.includes(activeRoute?.name)
      : false;

    return (
      <Dropdown
        label={t(item.label)}
        disclosure={
          <Styled.Link as="button" active={active}>
            {t(item.label)}
          </Styled.Link>
        }
        menuItems={item.children.map(renderLink)}
        isDarkMode
      />
    );
  };

  const renderLink = (item: HeaderNavLink) => {
    // Check if the individual route link should be active
    const activeRoute = RouteHelper.activeRoute();
    const active = activeRoute?.name === item.route;

    return (
      <NamedLink route={item.route} passHref>
        <Styled.Link active={active}>{t(item.label)}</Styled.Link>
      </NamedLink>
    );
  };

  return (
    <>
      {navigation.map((item) =>
        maybeAuthorize(
          <Styled.Item key={item.label}>
            {item.children && renderDropdown(item)}
            {item.route && renderLink(item)}
          </Styled.Item>,
          item
        )
      )}
    </>
  );
}

export default HeaderNavLinks;
