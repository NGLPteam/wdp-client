import React from "react";
import { useRouteSlug } from "@wdp/lib/routes";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./CommunityNavList.styles";
import { IconFactory } from "components/factories";
import { ArrowLink, Dropdown, NamedLink } from "components/atomic";
import { CommunityNavListFragment$key } from "@/relay/CommunityNavListFragment.graphql";

export default function CommunityNavList({ condensed, data }: Props) {
  const slug = useRouteSlug();
  const { t } = useTranslation();
  const community = useMaybeFragment(fragment, data);
  const linkClassName = condensed ? "t-label-sm" : "t-label-lg";

  function getDisclosure(label: string) {
    return (
      <Styled.NavButton>
        <span className={linkClassName}>{t(label)}</span>
        <IconFactory icon="chevronDown" />
      </Styled.NavButton>
    );
  }

  const schemaLinks = community
    ? community.schemaRanks.map((schema, i) => (
        <a className="t-capitalize" key={i} href="#">
          {t(`schema.${schema.slug.replace(":", ".")}`, { count: 2 })}
        </a>
      ))
    : [];

  return (
    <Styled.NavList condensed={condensed}>
      <li>
        <Dropdown
          label={t("nav.explore")}
          disclosure={getDisclosure("nav.explore")}
          menuItems={[
            ...schemaLinks,
            <ArrowLink
              key={1}
              className="l-flex l-flex--gap-sm l-flex--align-center"
              label={t("nav.browse_all")}
            />,
          ]}
        />
      </li>
      {slug &&
        community?.pages.edges &&
        community.pages.edges.map(({ node }) => (
          <li key={node.slug}>
            <NamedLink
              route="community.page"
              routeParams={{ slug, page: node.slug }}
              passHref
            >
              <Styled.NavButton as="a" href="#">
                <span className={linkClassName}>{node.title}</span>
              </Styled.NavButton>
            </NamedLink>
          </li>
        ))}
    </Styled.NavList>
  );
}

interface Props {
  condensed?: boolean;
  data?: CommunityNavListFragment$key | null;
}

const fragment = graphql`
  fragment CommunityNavListFragment on Community {
    schemaRanks {
      slug
      name
      count
    }
    pages {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
