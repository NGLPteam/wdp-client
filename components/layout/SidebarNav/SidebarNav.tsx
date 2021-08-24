import React from "react";
import * as Styled from "./SidebarNav.styles";
import { RouteHelper } from "routes";
import type { Route } from "routes/NextNamedRoutes";
import { NamedLink } from "components/atomic";
import { useTranslation } from "react-i18next";

const SidebarNav = ({ links, className }: Props) => {
  const { t } = useTranslation();

  const renderLink = ({ name, label = "", query }: SidebarLink) => {
    // Check if the individual route link should be active
    const activeRoute = RouteHelper.activeRoute();
    const active = activeRoute?.name === name;

    return (
      <NamedLink route={name} query={query} passHref>
        <Styled.Link active={active}>{t(label)}</Styled.Link>
      </NamedLink>
    );
  };

  return links && links.length > 0 ? (
    <Styled.Nav className={className}>
      <Styled.List>
        {links &&
          links.map((item, i) => (
            <Styled.ListItem key={i}>{renderLink(item)}</Styled.ListItem>
          ))}
      </Styled.List>
    </Styled.Nav>
  ) : null;
};

type Query = { [key: string]: string | number | string[] | undefined };

interface SidebarLink extends Pick<Route, "name" | "label" | "path"> {
  query?: Query;
}

interface Props {
  links?: SidebarLink[];
  className?: string;
}

export default SidebarNav;
