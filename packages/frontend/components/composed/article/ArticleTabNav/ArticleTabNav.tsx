import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import * as Styled from "./ArticleTabNav.styles";
import {
  ArticleTabNavFragment$data,
  ArticleTabNavFragment$key,
} from "@/relay/ArticleTabNavFragment.graphql";
import { NamedLink } from "components/atomic";
import { RouteHelper } from "routes";
import SkipLink from "components/global/SkipLink";

type Node = ArticleTabNavFragment$data["pages"]["edges"][number];

export default function ArticleTabNav({ data, contentId }: Props) {
  const nav = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const {
    query: { slug: slugQuery, page: pageQuery },
  } = useRouter();

  const slug = routeQueryArrayToString(slugQuery);

  const page = routeQueryArrayToString(pageQuery);

  const checkIfActive = (routeName: string, pageSlug?: string) => {
    const checkPage = !pageSlug || pageSlug === page;
    // Checking against the parent route (item) needs to be strict.
    // Child routes, such as files, can be fuzzy active.
    const checkRoute =
      routeName === "item" || pageSlug
        ? RouteHelper.isRouteNameActive(routeName)
        : RouteHelper.isRouteNameFuzzyActive(routeName);

    return checkRoute && checkPage;
  };

  function getLink(route: string, label: string, pageSlug?: string) {
    const isCurrent = checkIfActive(route, pageSlug);

    return slug ? (
      <Styled.Item key={route === "item.page" ? pageSlug : route}>
        <NamedLink
          route={route}
          routeParams={pageSlug ? { slug, page: pageSlug } : { slug }}
          scroll={false}
          passHref
        >
          <Styled.TabLink aria-current={isCurrent ? "page" : undefined}>
            {t(label)}
          </Styled.TabLink>
        </NamedLink>
      </Styled.Item>
    ) : null;
  }

  return nav ? (
    <Styled.Nav
      className="l-container-wide"
      aria-label={
        nav.schemaVersion?.identifier === "journal_article"
          ? t("nav.article_navigation_label")
          : t("nav.content_navigation_label")
      }
    >
      <SkipLink toId={contentId} label={t("nav.skip_to_content")} />
      <Styled.List>
        {getLink(
          "item",
          nav.schemaVersion?.identifier === "journal_article"
            ? "nav.article"
            : "nav.full_text"
        )}
        {getLink("item.metadata", "nav.metadata")}
        {nav.assets?.pageInfo.totalCount > 0 &&
          getLink("item.files", "nav.files")}
        {nav.contributions?.pageInfo.totalCount > 0 &&
          getLink("item.contributors", "nav.contributors")}
        {getLink("item.metrics", "nav.metrics")}
        {nav.pages && nav.pages.edges.length > 0
          ? nav.pages.edges.map(({ node }: Node) =>
              getLink("item.page", node.title, node.slug)
            )
          : null}
      </Styled.List>
    </Styled.Nav>
  ) : null;
}

interface Props {
  data?: ArticleTabNavFragment$key | null;
  contentId: string;
}

const fragment = graphql`
  fragment ArticleTabNavFragment on Item {
    schemaVersion {
      identifier
      name
    }
    pages {
      edges {
        node {
          title
          slug
        }
      }
    }
    contributions {
      pageInfo {
        totalCount
      }
    }
    assets {
      pageInfo {
        totalCount
      }
    }
  }
`;
