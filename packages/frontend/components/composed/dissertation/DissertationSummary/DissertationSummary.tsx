import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { CoverImage, DotList, PrecisionDate } from "components/atomic";
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
            {entity.published?.value && (
              <li>
                <PrecisionDate label="date.published" data={entity.published} />
              </li>
            )}
          </DotList>
        </>
      }
      thumbnail={
        <CoverImage
          id={entity.id}
          title={entity.title}
          data={entity.cover}
          maxWidth={120}
          maxHeight={160}
        />
      }
      showReadMore={showReadMore}
    />
  ) : null;
}

interface Props {
  data?: DissertationSummaryFragment$key | null;
  showReadMore?: true;
}

const fragment = graphql`
  fragment DissertationSummaryFragment on Item {
    __typename
    id
    title
    subtitle
    slug
    summary
    cover: thumbnail {
      storage
      ...CoverImageFragment
    }
    contributions {
      ...ContributorsListFragment
    }
    published {
      value
      ...PrecisionDateFragment
    }
  }
`;
