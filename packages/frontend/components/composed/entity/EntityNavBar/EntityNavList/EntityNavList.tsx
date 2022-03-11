import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRoutePageSlug, useRouteSlug } from "@wdp/lib/routes";
import * as Styled from "./EntityNavList.styles";
import {
  Dropdown,
  NamedLink,
  NavMenuLink,
  Button,
  Link,
} from "components/atomic";
import {
  EntityNavListFragment$data,
  EntityNavListFragment$key,
} from "@/relay/EntityNavListFragment.graphql";
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

  const orderings = entity?.orderings?.nodes || [];

  const dropdownLinks = slug
    ? orderings.length === 1
      ? orderings.map(({ identifier, name }: Node) => (
          <NamedLink
            key={identifier}
            route={`${typeRoute}.browse`}
            routeParams={{ slug, ordering: identifier }}
            passHref
          >
            <Button size="sm" secondary>
              {t("nav.browse_schema", { schema: name })}
            </Button>
          </NamedLink>
        ))
      : orderings.map(({ identifier, name, count }: Node) => (
          <NamedLink
            key={identifier}
            route={`${typeRoute}.browse`}
            routeParams={{ slug, ordering: identifier }}
            passHref
          >
            <Link>
              {name} ({count})
            </Link>
          </NamedLink>
        ))
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

type Node = EntityNavListFragment$data["orderings"]["nodes"][number];

const fragment = graphql`
  fragment EntityNavListFragment on Entity {
    __typename
    orderings {
      nodes {
        name
        slug
        identifier
        count
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
