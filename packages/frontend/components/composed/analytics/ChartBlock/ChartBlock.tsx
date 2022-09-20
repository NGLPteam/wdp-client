import { useCallback } from "react";
import GeoChart from "../GeoChart";
import LineChart from "../LineChart";
import { ArticleAnalyticsBlockFragment$data } from "@/relay/ArticleAnalyticsBlockFragment.graphql";
import { format, parseISO } from "date-fns";
import * as Styled from "./ChartBlock.styles";

type Props = {
  data: ArticleAnalyticsBlockFragment$data;
  chartType: string;
  region: string;
  mode: string;
  precision: string;
};

export default function ChartBlock({
  data,
  chartType,
  region,
  mode,
  precision,
}: Props) {
  const formatMapData = useCallback(
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

  const formatLineChartData = useCallback(
    (data: ArticleAnalyticsBlockFragment$data) => {
      const subset =
        mode === "views"
          ? data.entityViews.results
          : data.assetDownloads.results;

      const formatDateLabel = (date: Date) => {
        switch (precision) {
          case "DAY":
            return format(date, "LLL d");
          case "MONTH":
            return format(date, "LLL y");
          case "YEAR":
            return format(date, "y");
        }
      };

      return [
        ["date", "count"],
        ...subset.map(({ count, date }) => [
          formatDateLabel(parseISO(date)),
          count,
        ]),
      ];
    },
    [mode, precision]
  );

  return (
    <Styled.ChartWrapper>
      {chartType === "map" ? (
        <GeoChart data={formatMapData(data)} region={region} />
      ) : (
        <LineChart data={formatLineChartData(data)} />
      )}
    </Styled.ChartWrapper>
  );
}
