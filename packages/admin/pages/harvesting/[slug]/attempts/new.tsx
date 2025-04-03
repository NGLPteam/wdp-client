import { useTranslation } from "react-i18next";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import HarvestAttemptCreateForm from "components/composed/harvesting/HarvestAttemptCreateForm";
import { LoadingPage, LoadingCircle } from "components/atomic/loading";
import { PageHeader, BackToAll } from "components/layout";
import { useRouteSlug } from "hooks";
import type { newHarvestAttemptFromSourceQuery as Query } from "@/relay/newHarvestAttemptFromSourceQuery.graphql";

export default function NewHarvestAttemptFromSource() {
  const { t } = useTranslation();
  const slug = useRouteSlug() as string;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ slug }}
      subscribeIds={["HarvestSource"]}
      loadingFallback={<LoadingPage />}
      refetchTags={["harvestSources"]}
    >
      {({ queryRef }) =>
        queryRef ? (
          <WithQuery queryRef={queryRef} />
        ) : (
          <>
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
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  const { t } = useTranslation();
  const slug = useRouteSlug();

  return harvestSource ? (
    <>
      <BackToAll
        route="harvestSource.harvestAttempts"
        query={{ slug: slug ?? "" }}
        label={harvestSource.name}
      />
      <PageHeader title={t("harvesting.new_attempt_title")} />
      <HarvestAttemptCreateForm harvestSource={harvestSource} />
    </>
  ) : null;
};

const query = graphql`
  query newHarvestAttemptFromSourceQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      id
      name
      extractionMappingTemplate
      metadataFormat
    }
  }
`;
