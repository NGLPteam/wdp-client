import { useState, useCallback } from "react";
import { graphql } from "react-relay";
import { useRefetchable } from "relay-hooks";
import ChartBlock from "../ChartBlock";
import ChartControls from "../ChartControls";
import { ArticleAnalyticsBlockFragment$key } from "@/relay/ArticleAnalyticsBlockFragment.graphql";
import { ArticleAnalyticsBlockQuery } from "@/relay/ArticleAnalyticsBlockQuery.graphql";
import { LoadingBlock } from "components/atomic";
import { subDays, formatISO } from "date-fns";
import { AnalyticsPrecision } from "types/graphql-schema";
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
  const [precision, setPrecision] = useState("YEAR");

  const handleDateRangeChange = useCallback(
    (val: string) => {
      const now = new Date();

      let startDate;
      let precision;
      switch (val) {
        case "week":
          startDate = subDays(now, 7);
          precision = "DAY";
          break;
        case "month":
          startDate = subDays(now, 30);
          precision = "DAY";
          break;
        case "year":
          startDate = subDays(now, 365);
          precision = "MONTH";
          break;
        case "all":
        default:
          precision = "YEAR";
      }

      const queryVars = startDate
        ? {
            dateRange: { startDate: formatISO(startDate) },
            precision: precision as AnalyticsPrecision,
          }
        : { dateRange: {}, precision: precision as AnalyticsPrecision };

      refetch({ ...queryVars });
      setPrecision(precision);
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
      {isLoading ? (
        <LoadingBlock />
      ) : (
        <ChartBlock
          data={chartData}
          chartType={chartType}
          region={region}
          mode={mode}
          precision={precision}
        />
      )}
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
    precision: { type: "AnalyticsPrecision", defaultValue: YEAR }
  ) {
    assetDownloads(dateFilter: $dateRange, precision: $precision) {
      total
      results {
        count
        date
      }
    }
    assetDownloadsByRegion(dateFilter: $dateRange) {
      total
      results {
        countryCode
        regionCode
        count
      }
    }
    entityViews(dateFilter: $dateRange, precision: $precision) {
      total
      results {
        count
        date
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
