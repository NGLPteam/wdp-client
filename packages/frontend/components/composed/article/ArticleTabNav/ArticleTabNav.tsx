import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NamedLink, useRouteSlug } from "@wdp/lib/routes";
import * as Styled from "./ArticleTabNav.styles";
import {
  ArticleTabNavFragment$data,
  ArticleTabNavFragment$key,
} from "@/relay/ArticleTabNavFragment.graphql";

type Node = ArticleTabNavFragment$data["pages"]["edges"][number];

export default function ArticleTabNav({ data }: Props) {
  const nav = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();

  function getLink(route: string, label: string, pageSlug?: string) {
    return slug ? (
      <Styled.Item key={route === "item.page" ? pageSlug : route}>
        <NamedLink
          route={route}
          routeParams={pageSlug ? { slug, page: pageSlug } : { slug }}
          passHref
        >
          <Styled.TabLink aria-current={undefined}>{label}</Styled.TabLink>
        </NamedLink>
      </Styled.Item>
    ) : null;
  }

  return nav ? (
    <nav>
      <Styled.List>
        {getLink("item", "Article")}
        {getLink("item.metadata", "Metadata")}
        {getLink("item.files", "Files")}
        {getLink("item.contributors", "Contributors")}
        {getLink("item.metrics", "Metrics")}
        {nav.pages && nav.pages.edges.length > 0
          ? nav.pages.edges.map(({ node }: Node) =>
              getLink("item.page", node.title, node.slug)
            )
          : null}
      </Styled.List>
    </nav>
  ) : null;
}

interface Props {
  data?: ArticleTabNavFragment$key | null;
}

const fragment = graphql`
  fragment ArticleTabNavFragment on Item {
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
