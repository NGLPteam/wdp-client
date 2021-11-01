import React from "react";
import { RouteHelper } from "routes";
import { NamedLink } from "components/atomic";
import { useTranslation } from "react-i18next";
import { Props as NamedLinkProps } from "components/atomic/links/NamedLink/NamedLink";
import * as Styled from "./SidebarNav.styles";

const SidebarNav = ({ links, className }: Props) => {
  const { t } = useTranslation();

  const renderLink = ({ route, label = "", query }: Link) => {
    // Check if the individual route link should be active
    const active = RouteHelper.isRouteNameFuzzyActive(route);

    return (
      <NamedLink route={route} query={query} passHref>
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

interface Link extends NamedLinkProps {
  label?: string;
}

interface Props {
  links?: Link[];
  className?: string;
}

export default SidebarNav;
