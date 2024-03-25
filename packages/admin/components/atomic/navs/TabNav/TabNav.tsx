import { useTranslation } from "react-i18next";
import { useRouteSlug } from "hooks";
import { RouteHelper } from "routes";
import { Dropdown, NamedLink, Tab, TabLink, NavLink } from "components/atomic";
import * as Styled from "./TabNav.styles";

type NamedLinkProps = React.ComponentProps<typeof NamedLink>;

const TabNav = ({ links }: Props) => {
  const { t } = useTranslation();

  const slug = useRouteSlug();

  // Check if the route should be active
  function isActiveRoute(routeName: string): boolean | undefined {
    return RouteHelper.isRouteNameFuzzyActive(routeName);
  }

  // Check if we should render the tab as a dropdown or link
  function renderTab({ label, route, ...props }: Link) {
    const routeObj = RouteHelper.findRouteByName(route);

    const active = isActiveRoute(route);

    // Render tab as a dropdown
    if (routeObj?.routes && routeObj.routes.length > 0 && slug) {
      return (
        <Dropdown
          label={t(label || "")}
          disclosure={
            <Tab as="button" active={active} icon="chevron">
              {t(label || "")}
            </Tab>
          }
          menuItems={routeObj.routes.map(({ name, label }, i) => (
            <NamedLink
              key={i}
              route={name}
              routeParams={{ slug }}
              {...props}
              passHref
            >
              <NavLink>{t(label || "")}</NavLink>
            </NamedLink>
          ))}
        />
      );
    }

    // Render tab as a link
    return (
      <TabLink active={active} route={route} {...props}>
        {t(label || "")}
      </TabLink>
    );
  }

  return links ? (
    <Styled.Nav>
      <Styled.List className="l-flex">
        {links?.map((link, i) => (
          <Styled.Item key={i}>{renderTab(link)}</Styled.Item>
        ))}
      </Styled.List>
    </Styled.Nav>
  ) : null;
};
interface Link extends NamedLinkProps {
  label?: string;
}
interface Props {
  links?: Link[];
}

export default TabNav;
