import { Chart } from "react-google-charts";
import {
  ReactGoogleChartProps,
  ChartWrapperOptions,
} from "react-google-charts/dist/types";
import { LoadingBlock } from "components/atomic";

type Props = Partial<ReactGoogleChartProps> & Partial<ChartWrapperOptions>;

export default function GeoChart({
  region,
  data,
  displayMode = "regions",
  legend = "none",
}: Props) {
  const chartOptions = {
    region,
    displayMode,
    resolution: region === "US" ? "provinces" : "countries",
    legend,
    colorAxis: { colors: ["#DAE6F7", "#6596E0"] },
  };

  return (
    <Chart
      loader={<LoadingBlock />}
      chartType="GeoChart"
      options={chartOptions}
      height="100%"
      width="100%"
      data={data}
    />
  );
}
