import { Chart } from "react-google-charts";
import {
  ReactGoogleChartProps,
  ChartWrapperOptions,
} from "react-google-charts";
import { colors } from "styles/helpers.cjs";
import { useTheme } from "@/contexts/ThemeProvider";

type Props = Partial<ReactGoogleChartProps> &
  Partial<ChartWrapperOptions> & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
  };

export default function LineColChart({
  data,
  curveType,
  legend = "none",
  chartType = "ColumnChart",
}: Props) {
  const { color: colorName } = useTheme();

  const handleZero = data?.length === 1 ? [...data, [0, 0]] : data;

  const color = (colorName as "cream" | "blue" | "gray") ?? "cream";

  const chartOptions = {
    curveType,
    legend,
    backgroundColor: colors.custom[`${color}`][10],
    colors: [colors.custom[`${color}`][70]],
    explorer: null,
    tooltip: {
      textStyle: {
        color: colors.custom[`${color}`][70],
        fontName: "var(--font-face-base)",
      },
    },
    hAxis: {
      textStyle: {
        color: colors.custom[`${color}`][70],
        fontName: "var(--font-face-base)",
        bold: true,
      },
      slantedText: "automatic",
      minValue: 0,
      viewWindow: {
        min: 0,
      },
    },
    vAxis: {
      textStyle: {
        color: colors.custom[`${color}`][70],
        fontName: "var(--font-face-base)",
        bold: true,
      },
      minValue: 0,
      viewWindow: {
        min: 0,
      },
    },
  };
  return (
    <Chart
      chartType={chartType}
      options={chartOptions}
      width="100%"
      height="100%"
      data={handleZero}
    />
  );
}
