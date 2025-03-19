import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useRouter } from "next/router";
import { RouteHelper } from "routes";
import HarvestMappingCreateForm from "components/composed/harvesting/HarvestMappingCreateForm";
import { LoadingPage, LoadingCircle } from "components/atomic/loading";
import { PageHeader, BackToAll } from "components/layout";
import { useRouteSlug } from "hooks";
import type { newHarvestMappingQuery as Query } from "@/relay/newHarvestMappingQuery.graphql";

export default function NewHarvestMapping() {
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
            <PageHeader
              title={`New ${startCase(
                t(`glossary.harvest_mapping`, { count: 1 }),
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
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  const { t } = useTranslation();
  const router = useRouter();
  const slug = useRouteSlug();

  const redirect = useCallback(() => {
    const newRoute = RouteHelper.findRouteByName("harvestSource.mappings");

    router.push({
      pathname: newRoute?.path,
      query: { slug },
    });
  }, [router, slug]);

  return harvestSource ? (
    <>
      <BackToAll
        route="harvestSource.mappings"
        query={{ slug: harvestSource.slug }}
        label={harvestSource.name}
      />
      <PageHeader
        title={`New ${startCase(t(`glossary.harvest_mapping`, { count: 1 }))}`}
      />
      <HarvestMappingCreateForm
        sourceId={harvestSource.id}
        onSuccess={redirect}
        onCancel={redirect}
      />
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
