import StatBlock from "./StatBlock";
import * as Styled from "./StatBlocks.styles";
import { ArticleAnalyticsBlockFragment$data } from "@/relay/ArticleAnalyticsBlockFragment.graphql";

type Props = {
  data: ArticleAnalyticsBlockFragment$data;
  region: string;
  mode: string;
  chartType: string;
};

export default function StatBlocks({ data, region, mode, chartType }: Props) {
  const total =
    mode === "views" ? data.viewsByDate.total : data.downloadsByDate.total;
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
        stat={total}
        label={
          mode === "views"
            ? "analytics.total_views"
            : "analytics.total_downloads"
        }
      />
      <StatBlock
        stat={total}
        label={
          mode === "views"
            ? "analytics.total_views"
            : "analytics.total_downloads"
        }
      />
    </Styled.BlockGroup>
  );
}
