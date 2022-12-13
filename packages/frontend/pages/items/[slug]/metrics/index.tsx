import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import ArticleAnalyticsBlock from "components/composed/analytics/ArticleAnalyticsBlock";
import { metricsSlugItemQuery as Query } from "@/relay/metricsSlugItemQuery.graphql";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";
import { LoadingBlock } from "components/atomic";
import { AnalyticsPrecision } from "types/graphql-schema";
import {
  getStaticEntityData,
  getStaticGlobalContextData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";

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

export default function MetricsSlugItemPage({ data }: Props) {
  return data?.item ? (
    <ArticleAnalyticsBlock data={data.item} />
  ) : (
    <LoadingBlock />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <ItemLayoutQuery<Query, Props>
      query={query}
      {...props}
      variables={{
        dateRange: {},
        precision: "YEAR" as AnalyticsPrecision,
        usOnly: false,
      }}
    />
  );
};

type Props = {
  data: Query["response"];
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
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
