import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NamedLink, useRouteSlug } from "@wdp/lib/routes";
import * as Styled from "./JournalNavList.styles";
import { JournalNavListFragment$key } from "@/relay/JournalNavListFragment.graphql";
import { Dropdown, Button } from "components/atomic";

export default function JournalNavList({ data }: Props) {
  const { t } = useTranslation();
  const slug = useRouteSlug();
  const journal = useMaybeFragment(fragment, data);

  function getDisclosure(label: string) {
    return (
      <Button size="sm" secondary icon="chevronDown">
        {t(label)}
      </Button>
    );
  }

  return (
    <Styled.NavList>
      <li>
        <Dropdown
          label={t("nav.browse")}
          disclosure={getDisclosure("nav.browse")}
          menuItems={[]}
        />
      </li>
      {slug &&
        journal?.pages?.edges &&
        journal.pages.edges.map(({ node }) => (
          <li key={node.slug}>
            <NamedLink
              route="collection.page"
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
  data?: JournalNavListFragment$key | null;
};

const fragment = graphql`
  fragment JournalNavListFragment on Collection {
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
