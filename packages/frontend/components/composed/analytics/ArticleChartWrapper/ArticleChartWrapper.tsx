import { useState, useCallback } from "react";
import { graphql } from "react-relay";
import { useRefetchable } from "relay-hooks";
import GeoChart from "../GeoChart";
import ChartControls from "../ChartControls";
import * as Styled from "./ArticleChartWrapper.styles";
import {
  ArticleChartWrapperFragment$key,
  ArticleChartWrapperFragment$data,
} from "@/relay/ArticleChartWrapperFragment.graphql";
import { ArticleChartWrapperQuery } from "@/relay/ArticleChartWrapperQuery.graphql";
import { LoadingBlock } from "components/atomic";

type Props = {
  data: ArticleChartWrapperFragment$key;
};

export default function ArticleChartWrapper({ data }: Props) {
  const { data: chartData, isLoading } = useRefetchable<
    ArticleChartWrapperQuery,
    ArticleChartWrapperFragment$key
  >(fragment, data);

  const [region, setRegion] = useState("world");
  const [mode, setMode] = useState("views");
  const [chartType, setChart] = useState("map");

  const formatData = useCallback(
    (data: ArticleChartWrapperFragment$data) => {
      const subset =
        mode === "views"
          ? data.entityViewsByRegion.results
          : data.assetDownloadsByRegion.results;

      if (region === "US") {
        return [
          ["state", "count"],
          ...subset.map(({ count, regionCode }) => [`US-${regionCode}`, count]),
        ];
      }

      const aggregated = subset.reduce(
        (obj: { [key: string]: number }, region) => {
          const { count, countryCode } = region;
          if (Object.keys(obj).includes(countryCode)) {
            obj[countryCode] = obj[countryCode] + count;
            return obj;
          }
          obj[countryCode] = count;
          return obj;
        },
        {}
      );

      return [
        ["country", "count"],
        ...Object.keys(aggregated).map((country) => [
          country,
          aggregated[country],
        ]),
      ];
    },
    [mode, region]
  );

  return (
    <Styled.Block className="l-container-wide">
      <Styled.Controls>
        <ChartControls
          setRegion={setRegion}
          region={region}
          setMode={setMode}
          mode={mode}
          setChart={setChart}
          chartType={chartType}
        />
      </Styled.Controls>
      <Styled.ChartWrapper>
        {isLoading ? (
          <LoadingBlock />
        ) : (
          <GeoChart data={formatData(chartData)} region={region} />
        )}
      </Styled.ChartWrapper>
      <Styled.CountBlock $order={1} />
      <Styled.CountBlock $order={2} />
      <Styled.CountBlock $order={3} />
    </Styled.Block>
  );
}

const fragment = graphql`
  fragment ArticleChartWrapperFragment on Item
  @refetchable(queryName: "ArticleChartWrapperQuery")
  @argumentDefinitions(
    dateRange: { type: "DateFilterInput", defaultValue: {} }
  ) {
    assetDownloadsByRegion(dateFilter: $dateRange) {
      total
      results {
        countryCode
        regionCode
        count
      }
    }
    entityViewsByRegion(dateFilter: $dateRange) {
      total
      results {
        countryCode
        regionCode
        count
      }
    }
  }
`;
