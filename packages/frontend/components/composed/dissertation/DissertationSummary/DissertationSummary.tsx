import React from "react";
import { graphql } from "relay-runtime";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { DotList, PrecisionDate, SquareThumbnail } from "components/atomic";
import ContributorsList from "components/composed/contributor/ContributorsList";
import Summary from "components/layout/Summary";
import { DissertationSummaryFragment$key } from "@/relay/DissertationSummaryFragment.graphql";

export default function DissertationSummary({ data, showReadMore }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return entity ? (
    <Summary
      title={entity.title}
      subtitle={entity.subtitle}
      summary={entity.summary}
      route="item"
      routeParams={{ slug: entity.slug }}
      metadata={
        <>
          {entity.contributions && (
            <div className="t-copy-sm t-copy-medium">
              <ContributorsList data={entity.contributions} />
            </div>
          )}
          <DotList className="t-copy-sm t-copy-lighter">
            {entity.published.value && (
              <li>
                <PrecisionDate data={entity.published} />
              </li>
            )}
            {entity.issued?.dateWithPrecision && (
              <li>
                <PrecisionDate data={entity.issued.dateWithPrecision} />
              </li>
            )}
          </DotList>
        </>
      }
      thumbnail={
        entity.thumbnail.storage && <SquareThumbnail data={entity.thumbnail} />
      }
      thumbnailRight
      showReadMore={showReadMore}
    />
  ) : null;
}

interface Props {
  data?: DissertationSummaryFragment$key | null;
  showReadMore?: true;
}

const fragment = graphql`
  fragment DissertationSummaryFragment on Item
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

    issued: schemaProperty(fullPath: "issued") {
      ... on VariableDateProperty {
        dateWithPrecision {
          ...PrecisionDateFragment
        }
      }
    }
  }
`;
