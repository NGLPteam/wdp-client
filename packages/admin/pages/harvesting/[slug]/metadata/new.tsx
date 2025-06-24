import { useTranslation } from "react-i18next";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import HarvestMetadataMappingCreateForm from "components/composed/harvesting/HarvestMetadataMappingCreateForm";
import { LoadingPage, LoadingCircle } from "components/atomic/loading";
import { PageHeader, BackToAll } from "components/layout";
import { useRouteSlug } from "hooks";
import type { newHarvestMetadataMappingQuery as Query } from "@/relay/newHarvestMetadataMappingQuery.graphql";

export default function NewHarvestMetadataMapping() {
  const { t } = useTranslation();
  const slug = useRouteSlug() as string;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ slug }}
      subscribeIds={["HarvestMetadataMapping"]}
      loadingFallback={<LoadingPage />}
      refetchTags={["harvestMetadataMappings"]}
    >
      {({ queryRef }) =>
        queryRef ? (
          <WithQuery queryRef={queryRef} />
        ) : (
          <>
            <BackToAll route="harvesting" />
            <PageHeader title={t("harvesting.new_metadata_mapping_title")} />
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

  return harvestSource ? (
    <>
      <BackToAll
        route="harvestSource.metadataMappings"
        query={{ slug: harvestSource.slug }}
        label={harvestSource.name}
      />
      <PageHeader title={t("harvesting.new_metadata_mapping_title")} />
      <HarvestMetadataMappingCreateForm sourceId={harvestSource.id} />
    </>
  ) : null;
};

const query = graphql`
  query newHarvestMetadataMappingQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      id
      slug
      name
    }
  }
`;
