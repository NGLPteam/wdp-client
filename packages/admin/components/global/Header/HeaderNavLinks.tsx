import { useTranslation } from "react-i18next";
import * as Styled from "./Header.styles";
import { Dropdown, NamedLink, NavLink, DrawerLink } from "components/atomic";
import { Authorize } from "components/auth";
import { RouteHelper } from "routes";
import { useViewerContext } from "contexts";
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

  const { globalAdmin } = useViewerContext();

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

  const renderGlobalSettings = () =>
    globalAdmin ? (
      <DrawerLink key="settings" drawer="editSettings" passHref>
        <NavLink>{t("nav.global_settings")}</NavLink>
      </DrawerLink>
    ) : null;

  const renderDropdown = (item: HeaderNavParent) => {
    // Check if the disclosure should be active
    const active = item?.children?.some((item) => {
      return RouteHelper.isRouteNameFuzzyActive(item.route);
    });

    return (
      <Dropdown
        label={t(item.label)}
        disclosure={
          <NavLink as="button" active={active}>
            {t(item.label)}
          </NavLink>
        }
        menuItems={[...item.children.map(renderLink), renderGlobalSettings()]}
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
        <NavLink active={active}>{t(route.label || "")}</NavLink>
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
