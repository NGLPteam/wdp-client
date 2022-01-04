import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRouteSlug } from "@wdp/lib/routes";
import * as Styled from "./EntityNavList.styles";
import { EntityNavListFragment$key } from "@/relay/EntityNavListFragment.graphql";
import { Dropdown, Button, NamedLink } from "components/atomic";

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

  const schemaLinks = entity
    ? entity.schemaRanks.map((schema, i) => (
        <a className="t-capitalize" key={i} href="#">
          {t(`schema.${schema.slug.replace(":", ".")}`, { count: 2 })}
        </a>
      ))
    : [];

  return (
    <Styled.NavList>
      {schemaLinks.length > 1 && (
        <li>
          <Dropdown
            label={t("nav.browse")}
            disclosure={getDisclosure("nav.browse")}
            menuItems={[...schemaLinks]}
          />
        </li>
      )}
      {schemaLinks.length === 1 && <li>{schemaLinks[0]}</li>}
      {slug &&
        entity?.pages?.edges &&
        entity.pages.edges.map(({ node }) => (
          <li key={node.slug}>
            <NamedLink
              route={
                entity.__typename === "COLLECTION"
                  ? "collection.page"
                  : "item.page"
              }
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
    schemaRanks {
      slug
      name
      count
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
