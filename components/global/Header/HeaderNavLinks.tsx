import React, { ReactNode } from "react";
import { Dropdown, NamedLink } from "components/atomic";
import { Authorize } from "components/auth";
import * as Styled from "./Header.styles";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
type NamedLinkProps = React.ComponentProps<typeof NamedLink>;
type AuthorizeProps = React.ComponentProps<typeof Authorize>;
import { RouteHelper } from "routes";

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
  const { pathname } = useRouter();

  const wrapWithAuthorizationAndItem = (
    key: number,
    actions: AuthorizeProps["actions"] | undefined,
    node: AuthorizeProps["children"]
  ) => {
    return (
      <Authorize key={key} actions={actions}>
        <Styled.Item>{node}</Styled.Item>
      </Authorize>
    );
  };

  const renderDropdown = (item: HeaderNavParent, i: number) => {
    return wrapWithAuthorizationAndItem(
      i,
      item.actions,
      <Styled.Item>
        <Dropdown
          label={t(item.label)}
          disclosure={<Styled.Link as="button">{t(item.label)}</Styled.Link>}
          menuItems={item.children.map(renderLink)}
          isDarkMode
        />
      </Styled.Item>
    );
  };

  const renderLink = (item: HeaderNavLink, i: number) => {
    const activeRoute = RouteHelper.activeRoute();
    const active = activeRoute?.name == item.route;
    return wrapWithAuthorizationAndItem(
      i,
      item.actions,
      <NamedLink route={item.route} passHref>
        <Styled.Link active={active}>{t(item.label)}</Styled.Link>
      </NamedLink>
    );
  };

  const renderItem = (item: HeaderNavLink | HeaderNavParent, i: number) => {
    if (item.children) return renderDropdown(item, i);
    if (item.route) return renderLink(item, i);
    return <></>;
  };

  return (
    <>
      {navigation.map((item, i) => {
        renderItem(item, i);
      })}
    </>
  );
}

export default HeaderNavLinks;
