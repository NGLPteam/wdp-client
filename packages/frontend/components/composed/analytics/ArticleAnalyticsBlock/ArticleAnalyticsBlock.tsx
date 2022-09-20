import { useState, useCallback } from "react";
import { graphql } from "react-relay";
import { useRefetchable } from "relay-hooks";
import GeoChart from "../GeoChart";
import ChartControls from "../ChartControls";
import {
  ArticleAnalyticsBlockFragment$key,
  ArticleAnalyticsBlockFragment$data,
} from "@/relay/ArticleAnalyticsBlockFragment.graphql";
import { ArticleAnalyticsBlockQuery } from "@/relay/ArticleAnalyticsBlockQuery.graphql";
import { LoadingBlock } from "components/atomic";
import { subDays, formatISO } from "date-fns";
import * as Styled from "./ArticleAnalyticsBlock.styles";

type Props = {
  data: ArticleAnalyticsBlockFragment$key;
};

export default function ArticleAnalyticsBlock({ data }: Props) {
  const {
    data: chartData,
    refetch,
    isLoading,
  } = useRefetchable<
    ArticleAnalyticsBlockQuery,
    ArticleAnalyticsBlockFragment$key
  >(fragment, data);

  const [region, setRegion] = useState("world");
  const [mode, setMode] = useState("views");
  const [chartType, setChart] = useState("map");

  const formatData = useCallback(
    (data: ArticleAnalyticsBlockFragment$data) => {
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

  const handleDateRangeChange = useCallback(
    (val: string) => {
      const now = new Date();

      let startDate;
      switch (val) {
        case "day":
          startDate = subDays(now, 1);
          break;
        case "week":
          startDate = subDays(now, 7);
          break;
        case "month":
          startDate = subDays(now, 30);
          break;
        case "year":
          startDate = subDays(now, 365);
          break;
        case "all":
        default:
          null;
      }

      refetch(
        startDate ? { dateRange: { startDate: formatISO(startDate) } } : {}
      );
    },
    [refetch]
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
          handleDateRangeChange={handleDateRangeChange}
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
  fragment ArticleAnalyticsBlockFragment on Item
  @refetchable(queryName: "ArticleAnalyticsBlockQuery")
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
