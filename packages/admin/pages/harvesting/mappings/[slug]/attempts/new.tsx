import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import HarvestAttemptCreateForm from "components/composed/harvesting/HarvestAttemptCreateForm";
import { LoadingPage, LoadingCircle } from "components/atomic/loading";
import { PageHeader, BackToAll } from "components/layout";
import HtmlHead from "components/global/HtmlHead";
import { useRouteSlug } from "hooks";
import type { newHarvestAttemptFromMappingQuery as Query } from "@/relay/newHarvestAttemptFromMappingQuery.graphql";

export default function NewHarvestAttemptFromMapping() {
  const { t } = useTranslation();
  const slug = useRouteSlug() as string;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ slug }}
      subscribeIds={["HarvestAttempt"]}
      loadingFallback={<LoadingPage />}
      refetchTags={["harvestAttempts"]}
    >
      {({ queryRef }) =>
        queryRef ? (
          <WithQuery queryRef={queryRef} />
        ) : (
          <>
            <HtmlHead />
            <BackToAll route="harvesting" />
            <PageHeader title={t("harvesting.new_attempt_title")} />
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

  if (!harvestMapping) return null;

  const { harvestSet, targetEntity } = harvestMapping;

  const set = harvestSet?.identifier
    ? t("harvesting.set", { set: harvestSet.identifier })
    : "";
  const title = `[${startCase(
    targetEntity?.harvestTargetKind.toLowerCase(),
  )}: ${targetEntity?.title}]${set}`;

  return (
    <>
      <HtmlHead title={title} />
      <BackToAll
        route="harvestMapping.harvestAttempts"
        query={{ slug: slug ?? "" }}
        label={startCase(t("glossary.harvest_attempt_other"))}
      />
      <PageHeader title={t("harvesting.new_attempt_title")} />
      <HarvestAttemptCreateForm harvestMapping={harvestMapping} />
    </>
  );
};

const query = graphql`
  query newHarvestAttemptFromMappingQuery($slug: Slug!) {
    harvestMapping(slug: $slug) {
      id
      extractionMappingTemplate
      targetEntity {
        title
        harvestTargetKind
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
