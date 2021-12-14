import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import {
  PrecisionDate,
  SquareThumbnail,
  NamedLink,
  DotList,
} from "components/atomic";
import ContributorsList from "components/composed/contributor/ContributorsList";
import { ArticleSummary } from "components/layout";
import { IssueSummaryItemFragment$key } from "@/relay/IssueSummaryItemFragment.graphql";

export default function IssueSummaryItem({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  return content && content.slug ? (
    <NamedLink route="item" routeParams={{ slug: content.slug }} passHref>
      <a>
        <ArticleSummary
          title={content.title}
          summary={content.summary}
          metadata={
            <DotList>
              {content.published && (
                <li>
                  <PrecisionDate data={content.published} />
                </li>
              )}
              <li>Additional Metadata</li>
            </DotList>
          }
          contributors={
            content.contributions && (
              <ContributorsList
                className="t-copy-sm"
                data={content.contributions}
              />
            )
          }
          thumbnail={
            content?.thumbnail?.storage && (
              <SquareThumbnail data={content.thumbnail} />
            )
          }
        />
      </a>
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
