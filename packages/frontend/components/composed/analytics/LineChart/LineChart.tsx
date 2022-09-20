import { Chart } from "react-google-charts";
import {
  ReactGoogleChartProps,
  ChartWrapperOptions,
} from "react-google-charts/dist/types";

type Props = Partial<ReactGoogleChartProps> & Partial<ChartWrapperOptions>;

export default function LineChart({
  data,
  curveType = "function",
  legend = "none",
}: Props) {
  const chartOptions = {
    curveType,
    legend,
    colorAxis: { colors: ["#DAE6F7", "#6596E0"] },
  };
  return (
    <Chart
      chartType="LineChart"
      options={chartOptions}
      height="100%"
      width="100%"
      data={data}
    />
  );
}
