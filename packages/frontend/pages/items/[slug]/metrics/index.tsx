import { Suspense } from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import ArticleAnalyticsBlock from "components/composed/analytics/ArticleAnalyticsBlock";
import { metricsSlugItemQuery as Query } from "@/relay/metricsSlugItemQuery.graphql";
import { LoadingBlock } from "components/atomic";
import { AnalyticsPrecision } from "types/graphql-schema";
import {
  getStaticEntityData,
  getStaticGlobalContextData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import ErrorPage from "next/error";
import AppLayout from "components/global/AppLayout";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import * as Styled from "components/composed/analytics/ArticleAnalyticsBlock/ArticleAnalyticsBlock.styles";

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getStaticGlobalContextData();
  const entityData = await getStaticEntityData(context);

  return {
    props: { ...props, entityData },
    revalidate: STATIC_PROPS_REVALIDATE,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function MetricsSlugItemPage({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <AppLayout communityData={item.community} entityData={item}>
      <EntityLayoutFactory data={item}>
        <Suspense
          fallback={
            <Styled.LoaderWrapper>
              <LoadingBlock />
            </Styled.LoaderWrapper>
          }
        >
          <ArticleAnalyticsBlock data={item} />
        </Suspense>
      </EntityLayoutFactory>
    </AppLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const slug = useRouteSlug();

  if (!slug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryLoaderWrapper<Query>
      query={query}
      variables={{
        slug,
        dateRange: {},
        precision: "YEAR" as AnalyticsPrecision,
        usOnly: false,
      }}
      loadingFallback={<LoadingBlock />}
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        )
      }
    </QueryLoaderWrapper>
  );
};

type Props = {
  queryRef: PreloadedQuery<Query>;
};

MetricsSlugItemPage.getLayout = getLayout;

const query = graphql`
  query metricsSlugItemQuery(
    $slug: Slug!
    $dateRange: DateFilterInput!
    $precision: AnalyticsPrecision!
    $usOnly: Boolean!
  ) {
    item(slug: $slug) {
      ...ArticleAnalyticsBlockFragment
        @arguments(
          dateRange: $dateRange
          precision: $precision
          usOnly: $usOnly
        )
      ...AppLayoutEntityFragment
      ...EntityLayoutFactoryFragment

      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
