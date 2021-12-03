import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NamedLink } from "@wdp/lib/routes";
import * as Styled from "./IssueContentList.styles";
import { PrecisionDate, SquareThumbnail } from "components/atomic";
import ContributorsList from "components/composed/contributor/ContributorsList";
import {
  IssueContentListFragment$data,
  IssueContentListFragment$key,
} from "@/relay/IssueContentListFragment.graphql";

type Node = IssueContentListFragment$data["edges"][number];

export default function IssueContentList({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  return content && content.edges.length > 0 ? (
    <Styled.List>
      {content.edges.map(({ node }: Node) =>
        node.slug ? (
          <Styled.ListItem key={node.slug}>
            <NamedLink route="item" routeParams={{ slug: node.slug }} passHref>
              <Styled.ItemLinkWrapper>
                <Styled.ItemText>
                  <Styled.ItemHeader>
                    <h4>{node.title}</h4>
                    <h5 className="t-copy-italic t-copy-lighter">
                      Item subtitle
                    </h5>
                  </Styled.ItemHeader>
                  {node.summary && (
                    <Styled.ItemSummary className="t-copy-lighter">
                      <p>{node.summary}</p>
                    </Styled.ItemSummary>
                  )}
                  <Styled.ItemMetadata>
                    <ContributorsList
                      className="t-copy-sm"
                      data={node.contributions}
                    />
                    <p className="t-copy-sm t-copy-lighter">
                      <PrecisionDate data={node.published} /> • Additional
                      Metadata
                    </p>
                  </Styled.ItemMetadata>
                </Styled.ItemText>
                {node.thumbnail && (
                  <Styled.ItemThumbnail>
                    <SquareThumbnail data={node.thumbnail} />
                  </Styled.ItemThumbnail>
                )}
              </Styled.ItemLinkWrapper>
            </NamedLink>
          </Styled.ListItem>
        ) : null
      )}
    </Styled.List>
  ) : null;
}

interface Props {
  data?: IssueContentListFragment$key | null;
}

const fragment = graphql`
  fragment IssueContentListFragment on ItemConnection {
    edges {
      node {
        title
        slug
        summary
        published {
          ...PrecisionDateFragment
        }
        contributions {
          ...ContributorsListFragment
        }
        thumbnail {
          ...SquareThumbnailFragment
        }
      }
    }
  }
`;
