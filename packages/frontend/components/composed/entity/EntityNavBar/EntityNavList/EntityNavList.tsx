import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouteSlug } from "@wdp/lib/routes";
import * as Styled from "./EntityNavList.styles";
import { Dropdown, Button, NamedLink } from "components/atomic";
import { EntityNavListFragment$key } from "@/relay/EntityNavListFragment.graphql";
import { getRouteByEntityType } from "helpers";

export default function EntityNavList({ data }: Props) {
  const { t } = useTranslation();
  const slug = useRouteSlug();
  const entity = useMaybeFragment(fragment, data);

  function getDisclosure(label: string) {
    return (
      <Button size="sm" secondary icon="chevronDown">
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
              <a className="t-capitalize" href="#">
                {node.name}
              </a>
            </NamedLink>
          ) : null
        )
    : [];

  return (
    <Styled.NavList>
      {dropdownLinks.length > 1 && (
        <li>
          <Dropdown
            label={t("nav.browse")}
            disclosure={getDisclosure("nav.browse")}
            menuItems={[...dropdownLinks]}
          />
        </li>
      )}
      {dropdownLinks.length === 1 && <li>{dropdownLinks[0]}</li>}
      {slug &&
        entity?.pages?.edges &&
        entity.pages.edges.map(({ node }) => (
          <li key={node.slug}>
            <NamedLink
              route={`${typeRoute}.page`}
              routeParams={{ slug, page: node.slug }}
              passHref
            >
              <Styled.NavButton as="a" href="#">
                <span className="t-label-sm">{node.title}</span>
              </Styled.NavButton>
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
