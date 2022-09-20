import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import ArticleChartWrapper from "components/composed/analytics/ArticleChartWrapper";
import { metricsSlugItemQuery as Query } from "@/relay/metricsSlugItemQuery.graphql";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";
import { LoadingBlock } from "components/atomic";

export default function MetricsSlugItemPage({ data }: Props) {
  return data?.item ? (
    <ArticleChartWrapper data={data.item} />
  ) : (
    <LoadingBlock />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> query={query} {...props} />;
};

type Props = {
  data: Query["response"];
};

MetricsSlugItemPage.getLayout = getLayout;

const query = graphql`
  query metricsSlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...ArticleChartWrapperFragment
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
