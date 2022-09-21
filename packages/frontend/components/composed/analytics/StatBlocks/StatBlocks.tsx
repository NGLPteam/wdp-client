import StatBlock from "./StatBlock";
import * as Styled from "./StatBlocks.styles";
import { ArticleAnalyticsBlockFragment$data } from "@/relay/ArticleAnalyticsBlockFragment.graphql";

type Props = {
  data: ArticleAnalyticsBlockFragment$data;
  region: string;
  mode: string;
  dateLabel: string;
};

export default function StatBlocks({
  data,
  region: map,
  mode,
  dateLabel,
}: Props) {
  const total =
    mode === "views"
      ? data.viewsByDate.unfilteredTotal
      : data.downloadsByDate.unfilteredTotal;
  const filteredTotal =
    mode === "views" ? data.viewsByDate.total : data.downloadsByDate.total;
  const regionsData =
    mode === "views"
      ? [...data.entityViewsByRegion.results]
      : [...data.assetDownloadsByRegion.results];
  const topRegion = regionsData.sort((a, b) => a.count - b.count)[
    regionsData.length - 1
  ];

  return (
    <Styled.BlockGroup>
      <StatBlock
        stat={total}
        label={
          mode === "views"
            ? "analytics.total_views"
            : "analytics.total_downloads"
        }
      />
      <StatBlock
        stat={filteredTotal}
        label={
          mode === "views"
            ? `analytics.views_${dateLabel}`
            : `analytics.downloads_${dateLabel}`
        }
      />
      <StatBlock
        stat={map === "US" ? topRegion.regionCode : topRegion.countryCode}
        label={map === "US" ? "analytics.top_state" : "analytics.top_country"}
      />
    </Styled.BlockGroup>
  );
}
