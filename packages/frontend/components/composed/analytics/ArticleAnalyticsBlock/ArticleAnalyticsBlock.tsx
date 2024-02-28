import { useState, useEffect, useReducer } from "react";
import { graphql, useRefetchableFragment } from "react-relay";
import dynamic from "next/dynamic";
import ChartControls from "../ChartControls";
import StatBlocks from "../StatBlocks";
import { chartSettingsReducer, State, Action } from "./settingsReducer";
import * as Styled from "./ArticleAnalyticsBlock.styles";
import { ArticleAnalyticsBlockFragment$key } from "@/relay/ArticleAnalyticsBlockFragment.graphql";
import {
  ArticleAnalyticsBlockQuery,
  ArticleAnalyticsBlockQuery$variables,
} from "@/relay/ArticleAnalyticsBlockQuery.graphql";

type Props = {
  data: ArticleAnalyticsBlockFragment$key;
};

const ChartBlock = dynamic(() => import("../ChartBlock"), { ssr: false });

export default function ArticleAnalyticsBlock({ data }: Props) {
  const [chartData, refetch] = useRefetchableFragment<
    ArticleAnalyticsBlockQuery,
    ArticleAnalyticsBlockFragment$key
  >(fragment, data);

  const [mode, setMode] = useState("views");

  const minDate =
    mode === "views"
      ? chartData.viewsByDate.minDate
      : chartData.downloadsByDate.minDate;

  const initalSettings = {
    chartType: "map",
    precision: "YEAR",
    dateRange: {},
    dateLabel: "all",
    usOnly: false,
    minDate: minDate ?? null,
    updated: false,
  };

  const [settings, dispatchSettingsUpdate] = useReducer<
    (state: State, action: Action) => State
  >(chartSettingsReducer, initalSettings);

  useEffect(() => {
    // Don't refetch until the user interacts with the chart the first time to give the google scripts a chance to load. Could probably also fix this by not conditionally rendering on isLoading, but we'd need to sync up state changes on chart labels with new data. Is this preferable?
    if (settings.updated) {
      const { chartType, minDate, updated, dateLabel, ...queryVars } = settings;
      refetch(queryVars as unknown as ArticleAnalyticsBlockQuery$variables);
    }
  }, [refetch, settings]);

  const region = settings.usOnly ? "US" : "world";

  return chartData ? (
    <div className="l-container-wide">
      <Styled.Block>
        <ChartControls
          setMode={setMode}
          mode={mode}
          region={region}
          chartType={settings.chartType}
          dispatchSettingsUpdate={dispatchSettingsUpdate}
          dateLabel={settings.dateLabel}
        />
        <ChartBlock
          data={chartData}
          chartType={settings.chartType}
          region={region}
          mode={mode}
          precision={settings.precision}
        />
        <StatBlocks
          data={chartData}
          region={region}
          mode={mode}
          dateLabel={settings.dateLabel}
        />
      </Styled.Block>
    </div>
  ) : null;
}

const fragment = graphql`
  fragment ArticleAnalyticsBlockFragment on Item
  @refetchable(queryName: "ArticleAnalyticsBlockQuery")
  @argumentDefinitions(
    dateRange: { type: "DateFilterInput", defaultValue: {} }
    precision: { type: "AnalyticsPrecision", defaultValue: YEAR }
    usOnly: { type: "Boolean", defaultValue: false }
  ) {
    downloadsByDate: assetDownloads(
      dateFilter: $dateRange
      precision: $precision
    ) {
      total
      unfilteredTotal
      minDate
      results {
        count
        date
      }
    }
    assetDownloadsByRegion(dateFilter: $dateRange, usOnly: $usOnly) {
      total
      results {
        countryCode
        regionCode
        count
      }
    }
    viewsByDate: entityViews(dateFilter: $dateRange, precision: $precision) {
      total
      unfilteredTotal
      minDate
      results {
        count
        date
      }
    }
    entityViewsByRegion(dateFilter: $dateRange, usOnly: $usOnly) {
      total
      results {
        countryCode
        regionCode
        count
      }
    }
  }
`;
