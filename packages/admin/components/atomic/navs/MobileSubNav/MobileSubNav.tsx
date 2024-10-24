import React, { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useId } from "react";
import { useFocusTrap } from "@castiron/hooks/";
import capitalize from "lodash/capitalize";
import { RouteHelper } from "routes";
import { NamedLink, TabLink } from "components/atomic";
import { IconFactory } from "components/factories";
import MobileMenu, { MobileMenuList } from "components/layout/MobileMenu";
import { useToggle } from "hooks";
import * as Styled from "./MobileSubNav.styles";

type NamedLinkProps = React.ComponentProps<typeof NamedLink>;

const MobileSubNav = ({ tabRoutes, sidebarLinks }: Props) => {
  const { t } = useTranslation();
  const menuId = useId();
  const [isOpen, toggleActive, setActive] = useToggle();
  const mobileNavRef = useRef(null);

  useFocusTrap(mobileNavRef, isOpen, {
    onDeactivate: useCallback(() => setActive(false), [setActive]),
  });

  // Check if the route should be active
  const activeRoute = RouteHelper.activeRoute();

  return tabRoutes || sidebarLinks ? (
    <Styled.MobileNav>
      <Styled.NavButton aria-controls={menuId} onClick={toggleActive}>
        <span>{capitalize(t(activeRoute?.label || "nav.menu_toggle"))}</span>
        <IconFactory icon="menu" rotate={180} />
      </Styled.NavButton>
      <MobileMenu
        id={menuId}
        active={isOpen}
        onClose={() => setActive(false)}
        ref={mobileNavRef}
      >
        <MobileMenuList>
          {/* Do not pass actions down to the DOM */}
          {tabRoutes?.map(({ label = "", actions, ...namedLinkProps }, i) => (
            <li key={i}>
              <TabLink
                active={RouteHelper.isRouteNameActive(namedLinkProps.route)}
                size="lg"
                bottomBorder
                {...namedLinkProps}
              >
                {capitalize(t(label))}
              </TabLink>
            </li>
          ))}
          {sidebarLinks?.map(({ route, label = "", query }, i) => (
            <li key={i}>
              <NamedLink route={route} query={query} passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className="a-link"
                  aria-current={activeRoute?.name === route}
                >
                  {capitalize(t(label))}
                </a>
              </NamedLink>
            </li>
          ))}
        </MobileMenuList>
      </MobileMenu>
    </Styled.MobileNav>
  ) : null;
};

interface Link extends NamedLinkProps {
  label?: string;
  actions?: string[] | undefined;
}

interface Props {
  tabRoutes?: Link[];
  sidebarLinks?: Link[];
}

export default MobileSubNav;
