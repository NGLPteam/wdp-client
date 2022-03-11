import React from "react";
import { graphql } from "relay-runtime";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { DotList, PrecisionDate, SquareThumbnail } from "components/atomic";
import ContributorsList from "components/composed/contributor/ContributorsList";
import Summary from "components/layout/Summary";
import { ArticleSummaryFragment$key } from "@/relay/ArticleSummaryFragment.graphql";

export default function ArticleSummary({ data, showReadMore }: Props) {
  const article = useMaybeFragment(fragment, data);

  return article ? (
    <Summary
      title={article.title}
      subtitle={article.subtitle}
      summary={article.summary}
      route="item"
      routeParams={{ slug: article.slug }}
      metadata={
        <>
          {article.contributions && (
            <div className="t-copy-sm t-copy-medium">
              <ContributorsList data={article.contributions} />
            </div>
          )}
          <DotList className="t-copy-sm t-copy-lighter">
            {article.journal && <li>{article.journal.title}</li>}
            {article.published.value && (
              <li>
                <PrecisionDate
                  label="date.published"
                  data={article.published}
                />
              </li>
            )}
          </DotList>
        </>
      }
      thumbnail={
        article.thumbnail.storage && (
          <SquareThumbnail data={article.thumbnail} />
        )
      }
      thumbnailRight
      showReadMore={showReadMore}
    />
  ) : null;
}

interface Props {
  data?: ArticleSummaryFragment$key | null;
  showReadMore?: true;
}

const fragment = graphql`
  fragment ArticleSummaryFragment on Item
  @argumentDefinitions(showJournal: { type: "Boolean", defaultValue: false }) {
    __typename

    title
    subtitle
    thumbnail {
      storage
      ...SquareThumbnailFragment
    }

    slug
    summary
    contributions {
      ...ContributorsListFragment
    }
    published {
      value
      ...PrecisionDateFragment
    }
    journal: ancestorOfType(schema: "nglp:journal") @include(if: $showJournal) {
      ... on Collection {
        title
      }
    }
  }
`;
