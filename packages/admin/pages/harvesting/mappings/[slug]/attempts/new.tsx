import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import HarvestAttemptCreateForm from "components/composed/harvesting/HarvestAttemptCreateForm";
import { LoadingPage, LoadingCircle } from "components/atomic/loading";
import { PageHeader, BackToAll } from "components/layout";
import { useRouteSlug } from "hooks";
import type { newHarvestAttemptFromMappingQuery as Query } from "@/relay/newHarvestAttemptFromMappingQuery.graphql";

export default function NewHarvestAttemptFromMapping() {
  const { t } = useTranslation();
  const slug = useRouteSlug() as string;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ slug }}
      subscribeIds={["HarvestMapping"]}
      loadingFallback={<LoadingPage />}
      refetchTags={["harvestMappings"]}
    >
      {({ queryRef }) =>
        queryRef ? (
          <WithQuery queryRef={queryRef} />
        ) : (
          <>
            <BackToAll route="harvesting" />
            <PageHeader
              title={`New ${startCase(
                t(`glossary.harvest_attempt`, { count: 1 }),
              )}`}
            />
            <LoadingCircle className="l-page-loading" />
          </>
        )
      }
    </QueryTransitionWrapper>
  );
}

const WithQuery = ({ queryRef }: { queryRef: PreloadedQuery<Query> }) => {
  const { harvestMapping } = usePreloadedQuery<Query>(query, queryRef);

  const { t } = useTranslation();
  const slug = useRouteSlug();

  return harvestMapping ? (
    <>
      <BackToAll
        route="harvestMapping.harvestAttempts"
        query={{ slug: slug ?? "" }}
        label={startCase(t("glossary.harvest_attempt_other"))}
      />
      <PageHeader
        title={`Start Manual ${startCase(t(`glossary.harvest_attempt`))}`}
      />
      <HarvestAttemptCreateForm harvestMapping={harvestMapping} />
    </>
  ) : null;
};

const query = graphql`
  query newHarvestAttemptFromMappingQuery($slug: Slug!) {
    harvestMapping(slug: $slug) {
      id
      extractionMappingTemplate
      targetEntity {
        title
      }
      harvestSet {
        identifier
      }
      metadataFormat
      harvestSource {
        name
      }
    }
  }
`;
