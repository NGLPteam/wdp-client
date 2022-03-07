import React from "react";
import { graphql } from "relay-runtime";
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
        <DotList className="t-copy-sm t-copy-lighter">
          {entity.published?.value && (
            <li>
              <PrecisionDate data={entity.published} />
            </li>
          )}
          {entity.updatedAt && (
            <li>
              {t("common.last_updated", {
                value: formatDate(entity.updatedAt, "L/d/yy"),
              })}
            </li>
          )}
          {entity.collections?.pageInfo?.totalCount ? (
            <li>
              {t("layouts.collection_count", {
                count: entity.collections.pageInfo.totalCount,
              })}
            </li>
          ) : null}
          {entity.items?.pageInfo?.totalCount ? (
            <li>
              {t("layouts.item_count", {
                count: entity.items.pageInfo.totalCount,
              })}
            </li>
          ) : null}
        </DotList>
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

      items {
        pageInfo {
          totalCount
        }
      }
    }

    ... on Collection {
      summary
      updatedAt

      items {
        pageInfo {
          totalCount
        }
      }

      collections {
        pageInfo {
          totalCount
        }
      }
    }
  }
`;
