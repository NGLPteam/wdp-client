import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./Header.styles";
import { Dropdown, NamedLink } from "components/atomic";
import { Authorize } from "components/auth";
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
  const { t } = useTranslation();

  const maybeAuthorize = (
    node: AuthorizeProps["children"],
    item: HeaderNavLink | HeaderNavParent,
    index: number
  ) => {
    if (!item.actions) return node;
    return (
      <Authorize key={index} actions={item.actions}>
        {node}
      </Authorize>
    );
  };

  const renderDropdown = (item: HeaderNavParent) => {
    // Check if the disclosure should be active
    const active = item?.children?.some((item) => {
      return RouteHelper.isRouteNameFuzzyActive(item.route);
    });

    return (
      <Dropdown
        label={t(item.label)}
        disclosure={
          <Styled.Link as="button" active={active}>
            <Styled.LinkText>{t(item.label)}</Styled.LinkText>
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

    return (
      <NamedLink route={route.name} passHref>
        <Styled.Link active={active}>
          <Styled.LinkText>{t(route.label || "")}</Styled.LinkText>
        </Styled.Link>
      </NamedLink>
    );
  };

  return (
    <>
      {navigation.map((item, i) =>
        maybeAuthorize(
          <Styled.Item key={i}>
            {item.children && renderDropdown(item)}
            {item.route && renderLink(item)}
          </Styled.Item>,
          item,
          i
        )
      )}
    </>
  );
}

export default HeaderNavLinks;
