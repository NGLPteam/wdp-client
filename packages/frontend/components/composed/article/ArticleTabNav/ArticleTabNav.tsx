"use client";

import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useParams, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NamedLink } from "components/atomic";
import SkipLink from "components/global/SkipLink";
import {
  ArticleTabNavFragment$data,
  ArticleTabNavFragment$key,
} from "@/relay/ArticleTabNavFragment.graphql";
import * as Styled from "./ArticleTabNav.styles";

type Node = ArticleTabNavFragment$data["pages"]["edges"][number];

export default function ArticleTabNav({ data, contentId }: Props) {
  const nav = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const { slug } = useParams();
  const pathname = usePathname();

  function getLink(href: string, label: string) {
    const isCurrent = pathname === href;

    return slug ? (
      <Styled.Item key={href}>
        <NamedLink href={href} scroll={false}>
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
          `/items/${slug}`,
          nav.schemaVersion?.identifier === "journal_article"
            ? "nav.article"
            : "nav.full_text",
        )}
        {getLink(`/items/${slug}/metadata`, "nav.metadata")}
        {nav.assets?.pageInfo.totalCount > 0 &&
          getLink(`/items/${slug}/files`, "nav.files")}
        {nav.contributions?.pageInfo.totalCount > 0 &&
          getLink(`/items/${slug}/contributors`, "nav.contributors")}
        {getLink(`/items/${slug}/metrics`, "nav.metrics")}
        {nav.pages && nav.pages.edges.length > 0
          ? nav.pages.edges.map(({ node }: Node) =>
              getLink(`/items/${slug}/page/${node.slug}`, node.title),
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
