import { useTranslation } from "react-i18next";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import HarvestMappingCreateForm from "components/composed/harvesting/HarvestMappingCreateForm";
import { LoadingPage, LoadingCircle } from "components/atomic/loading";
import { PageHeader, BackToAll } from "components/layout";
import HtmlHead from "components/global/HtmlHead";
import { useRouteSlug } from "hooks";
import type { newHarvestMappingQuery as Query } from "@/relay/newHarvestMappingQuery.graphql";

export default function NewHarvestMapping() {
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
            <HtmlHead />
            <BackToAll route="harvesting" />
            <PageHeader title={t("harvesting.new_mapping_title")} />
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
      <HtmlHead title={harvestSource.name} />
      <BackToAll
        route="harvestSource.mappings"
        query={{ slug: harvestSource.slug }}
        label={harvestSource.name}
      />
      <PageHeader title={t("harvesting.new_mapping_title")} />
      <HarvestMappingCreateForm sourceId={harvestSource.id} />
    </>
  ) : null;
};

const query = graphql`
  query newHarvestMappingQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      id
      slug
      name
    }
  }
`;
