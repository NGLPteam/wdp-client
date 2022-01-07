import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRoutePageSlug, useRouteSlug } from "@wdp/lib/routes";
import * as Styled from "./EntityNavList.styles";
import { Dropdown, NamedLink, NavMenuLink, Button } from "components/atomic";
import { EntityNavListFragment$key } from "@/relay/EntityNavListFragment.graphql";
import { getRouteByEntityType } from "helpers";

export default function EntityNavList({ data }: Props) {
  const { t } = useTranslation();
  const slug = useRouteSlug();
  const pageSlug = useRoutePageSlug();
  const entity = useMaybeFragment(fragment, data);

  function getDisclosure(label: string) {
    return (
      <Button size="sm" icon="chevronDown" secondary>
        {t(label)}
      </Button>
    );
  }

  const typeRoute = getRouteByEntityType(entity?.__typename);

  const dropdownLinks = entity
    ? entity.orderings.edges
        .filter(({ node }) => node.children?.pageInfo?.totalCount)
        .map(({ node }, i) =>
          slug ? (
            <NamedLink
              key={i}
              route={`${typeRoute}.browse`}
              routeParams={{ slug, ordering: node.identifier }}
              passHref
            >
              <a href="#">{node.name}</a>
            </NamedLink>
          ) : null
        )
    : [];

  return (
    <Styled.NavList>
      {dropdownLinks.length > 1 && (
        <li className="t-capitalize">
          <Dropdown
            label={t("nav.browse")}
            disclosure={getDisclosure("nav.browse")}
            menuItems={[...dropdownLinks]}
          />
        </li>
      )}
      {dropdownLinks.length === 1 && (
        <li className="t-capitalize">{dropdownLinks[0]}</li>
      )}
      {slug &&
        entity?.pages?.edges &&
        entity.pages.edges.map(({ node }) => (
          <li key={node.slug}>
            <NamedLink
              route={`${typeRoute}.page`}
              routeParams={{ slug, page: node.slug }}
              passHref
            >
              <NavMenuLink
                as="a"
                aria-current={pageSlug === node.slug ? "page" : undefined}
              >
                <span className="t-label-sm">{node.title}</span>
              </NavMenuLink>
            </NamedLink>
          </li>
        ))}
    </Styled.NavList>
  );
}

type Props = {
  data?: EntityNavListFragment$key | null;
};

const fragment = graphql`
  fragment EntityNavListFragment on Entity {
    __typename
    orderings {
      edges {
        node {
          name
          slug
          identifier
          children {
            pageInfo {
              totalCount
            }
          }
        }
      }
    }
    pages {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
