import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRoutePageSlug } from "@wdp/lib/routes";
import * as Styled from "./CommunityNavList.styles";
import {
  ArrowLink,
  Dropdown,
  NamedLink,
  Accordion,
  NavMenuLink,
} from "components/atomic";
import { CommunityNavListFragment$key } from "@/relay/CommunityNavListFragment.graphql";
import { getSchemaTranslationKey } from "helpers";

export default function CommunityNavList({ condensed, mobile, data }: Props) {
  const { t } = useTranslation();

  const community = useMaybeFragment(fragment, data);

  const page = useRoutePageSlug();

  const linkClassName = condensed ? "t-label-sm" : "t-label-lg";

  const ListComponent = mobile ? Styled.MobileNavList : Styled.NavList;

  function getDisclosure(label: string) {
    return (
      <NavMenuLink as="button" icon="chevronDown">
        <span className={linkClassName}>{t(label)}</span>
      </NavMenuLink>
    );
  }

  const schemaLinks = community
    ? community.schemaRanks.map((schema, i) => (
        <a key={i} href="#">
          {t(getSchemaTranslationKey(schema.slug), { count: 2 })}
        </a>
      ))
    : [];

  const exploreMenu = mobile ? (
    <Accordion
      label={t("nav.explore")}
      menuItems={[
        ...schemaLinks,
        <ArrowLink
          key={1}
          className="l-flex l-flex--gap-sm l-flex--align-center"
        >
          {t("nav.browse_all")}
        </ArrowLink>,
      ]}
    />
  ) : (
    <Dropdown
      label={t("nav.explore")}
      menuItems={[
        ...schemaLinks,
        <ArrowLink key={1}>{t("nav.browse_all")}</ArrowLink>,
      ]}
      disclosure={getDisclosure("nav.explore")}
    />
  );

  return (
    <ListComponent condensed={condensed}>
      <li className="t-capitalize">{exploreMenu}</li>
      {community &&
        community.slug &&
        community.pages.edges &&
        community.pages.edges.map(({ node }) => (
          <li key={node.slug}>
            <NamedLink
              route="community.page"
              routeParams={{ slug: community.slug, page: node.slug }}
              passHref
            >
              <NavMenuLink
                aria-current={page === node.slug ? "page" : undefined}
              >
                <span className={linkClassName}>{node.title}</span>
              </NavMenuLink>
            </NamedLink>
          </li>
        ))}
    </ListComponent>
  );
}

interface Props {
  condensed?: boolean;
  mobile?: boolean;
  data?: CommunityNavListFragment$key | null;
}

const fragment = graphql`
  fragment CommunityNavListFragment on Community {
    slug
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
