import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { formatDate } from "@wdp/lib/helpers";
import { useTranslation } from "react-i18next";
import { DotList, PrecisionDate, ContentImage } from "components/atomic";
import { EntitySummaryFragment$key } from "@/relay/EntitySummaryFragment.graphql";
import { getRouteByEntityType } from "helpers";
import Summary from "components/layout/Summary";

export default function EntitySummary({ data, showReadMore }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const route = getRouteByEntityType(entity?.__typename);

  const { t } = useTranslation();

  return entity && route && entity.slug ? (
    <Summary
      route={route}
      routeParams={{ slug: entity.slug }}
      title={entity.title}
      summary={entity.summary}
      thumbnail={
        entity.thumbnail.storage && <ContentImage data={entity.thumbnail} />
      }
      thumbnailRight
      metadata={
        <>
          <DotList>
            {entity.published?.value && (
              <li>
                <PrecisionDate data={entity.published} />
              </li>
            )}
            {entity.schemaRanks &&
              entity.schemaRanks.map(({ identifier, count }, i) => (
                <li key={i}>{t(`counts.${identifier}`, { count })}</li>
              ))}
          </DotList>
          {entity.updatedAt && (
            <p className="t-copy-lighter">
              {t("common.last_updated", {
                value: formatDate(entity.updatedAt, "L/d/yy"),
              })}
            </p>
          )}
        </>
      }
      showReadMore={showReadMore}
    />
  ) : null;
}

interface Props {
  data?: EntitySummaryFragment$key | null;
  showReadMore?: true;
}

const fragment = graphql`
  fragment EntitySummaryFragment on Entity {
    __typename
    title
    subtitle

    thumbnail {
      storage
      ...ContentImageFragment
    }

    schemaRanks {
      count
      namespace
      identifier
    }

    ... on ReferencesGlobalEntityDates {
      published {
        value
        ...PrecisionDateFragment
      }
    }

    ... on Sluggable {
      slug
    }

    ... on Item {
      summary
      updatedAt
    }

    ... on Collection {
      summary
      updatedAt
    }
  }
`;
