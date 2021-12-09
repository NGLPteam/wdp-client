import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./IssueSummaryItem.styles";
import { PrecisionDate, SquareThumbnail, NamedLink } from "components/atomic";
import ContributorsList from "components/composed/contributor/ContributorsList";
import { IssueSummaryItemFragment$key } from "@/relay/IssueSummaryItemFragment.graphql";

export default function IssueSummaryItem({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  return content && content.slug ? (
    <NamedLink route="item" routeParams={{ slug: content.slug }} passHref>
      <Styled.ItemLinkWrapper>
        <Styled.ItemText>
          <Styled.ItemHeader>
            <h4>{content.title}</h4>
            <h5 className="t-copy-italic t-copy-lighter">Item subtitle</h5>
          </Styled.ItemHeader>
          {content.summary && (
            <Styled.ItemSummary className="t-copy-lighter">
              <p>{content.summary}</p>
            </Styled.ItemSummary>
          )}
          <Styled.ItemMetadata>
            <p>
              <ContributorsList
                className="t-copy-sm"
                data={content.contributions}
              />
            </p>
            <p className="t-copy-sm t-copy-lighter">
              <PrecisionDate data={content.published} /> • Additional Metadata
            </p>
          </Styled.ItemMetadata>
        </Styled.ItemText>
        {content.thumbnail?.storage && (
          <Styled.ItemThumbnail>
            <SquareThumbnail data={content.thumbnail} />
          </Styled.ItemThumbnail>
        )}
      </Styled.ItemLinkWrapper>
    </NamedLink>
  ) : null;
}

interface Props {
  data?: IssueSummaryItemFragment$key | null;
}

const fragment = graphql`
  fragment IssueSummaryItemFragment on AnyEntity {
    ... on Item {
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
        storage
        ...SquareThumbnailFragment
      }
    }
    ... on Collection {
      title
      slug
      summary
      published {
        ...PrecisionDateFragment
      }
      thumbnail {
        ...SquareThumbnailFragment
      }
    }
  }
`;
