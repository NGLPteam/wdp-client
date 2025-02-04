import { useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { DotList, PrecisionDate, SquareThumbnail } from "components/atomic";
import { getRouteByEntityType } from "helpers";
import Summary from "components/layout/Summary";
import { ContributionSummaryFragment$key } from "@/relay/ContributionSummaryFragment.graphql";
import { ContributionSummaryEntityFragment$key } from "@/relay/ContributionSummaryEntityFragment.graphql";

export default function ContributionSummary({ data }: Props) {
  const contribution = useFragment(fragment, data);

  const { t } = useTranslation();

  const entity = useFragment<ContributionSummaryEntityFragment$key>(
    entityFragment,
    contribution?.entity,
  );

  const route = useMemo(() => {
    return entity?.__typename ? getRouteByEntityType(entity.__typename) : null;
  }, [entity]);

  if (!contribution || !entity) return null;

  const roles = contribution.roles;

  const metadata = (
    <>
      {!!roles && (
        <DotList className="t-copy-sm mb-1">
          {roles.map((r) => (
            <li key={r.identifier}>{r.label}</li>
          ))}
        </DotList>
      )}
      {entity.published?.value && (
        <span className="t-copy-sm t-copy-lighter block">
          {t("date.published")} <PrecisionDate data={entity.published} />
        </span>
      )}
    </>
  );

  return (
    <Summary
      title={entity.title}
      subtitle={entity.subtitle}
      href={`/${route}/${entity.slug}`}
      metadata={metadata}
      summary={entity.summary}
      thumbnail={
        entity.thumbnail?.storage && <SquareThumbnail data={entity.thumbnail} />
      }
    />
  );
}

interface Props {
  data?: ContributionSummaryFragment$key | null;
}

const fragment = graphql`
  fragment ContributionSummaryFragment on AnyContributorAttribution {
    ... on ContributorItemAttribution {
      roles {
        identifier
        label
      }
      entity: item {
        ...ContributionSummaryEntityFragment
      }
    }
    ... on ContributorCollectionAttribution {
      roles {
        identifier
        label
      }
      entity: collection {
        ...ContributionSummaryEntityFragment
      }
    }
  }
`;

const entityFragment = graphql`
  fragment ContributionSummaryEntityFragment on Entity {
    __typename
    title
    subtitle
    thumbnail {
      storage
      ...SquareThumbnailFragment
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
    }

    ... on Collection {
      summary
    }
  }
`;
