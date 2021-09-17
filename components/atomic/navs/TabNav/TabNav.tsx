import React from "react";
import { useTranslation } from "react-i18next";
import { RouteHelper } from "routes";
import { NamedLink, TabLink } from "components/atomic";
import * as Styled from "./TabNav.styles";

type NamedLinkProps = React.ComponentProps<typeof NamedLink>;

const TabNav = ({ links }: Props) => {
  const { t } = useTranslation();

  // Check if the route should be active
  const activeRoute = RouteHelper.activeRoute();
  function isActiveRoute(routeName: string): boolean | undefined {
    return activeRoute?.name.includes(routeName);
  }

  return links ? (
    <Styled.Nav>
      <Styled.List className="l-flex">
        {links?.map(({ label = "", ...namedLinkProps }, i) => (
          <Styled.Item key={i}>
            <TabLink
              active={isActiveRoute(namedLinkProps.route)}
              {...namedLinkProps}
            >
              {t(label)}
            </TabLink>
          </Styled.Item>
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
