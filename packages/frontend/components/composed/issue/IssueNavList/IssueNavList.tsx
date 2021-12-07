import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useRouteSlug } from "@wdp/lib/routes";
import * as Styled from "./IssueNavList.styles";
import { IssueNavListFragment$key } from "@/relay/IssueNavListFragment.graphql";
import { NamedLink } from "components/atomic";

export default function IssueNavList({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();

  return slug && issue?.pages.edges && issue.pages.edges.length > 0 ? (
    <Styled.List>
      <Styled.ListItem key={slug}>
        <NamedLink route="collection" routeParams={{ slug }} passHref>
          <a className="t-label-sm t-copy-light">Articles</a>
        </NamedLink>
      </Styled.ListItem>
      {issue.pages.edges.map(({ node }) =>
        node.slug ? (
          <Styled.ListItem key={node.slug}>
            <NamedLink
              route="collection.page"
              routeParams={{ slug, page: node.slug }}
              passHref
            >
              <a className="t-label-sm t-copy-light">{node.title}</a>
            </NamedLink>
          </Styled.ListItem>
        ) : null
      )}
    </Styled.List>
  ) : null;
}

interface Props {
  data?: IssueNavListFragment$key | null;
}

const fragment = graphql`
  fragment IssueNavListFragment on Collection {
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
