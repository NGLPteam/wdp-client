import { useContext } from "react";
import { Chart } from "react-google-charts";
import {
  ReactGoogleChartProps,
  ChartWrapperOptions,
} from "react-google-charts";
import { ThemeContext, DefaultTheme } from "styled-components";
import { customColors } from "theme/base/variables";

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
  const { colorStyle, fontStyle } =
    useContext<DefaultTheme | undefined>(ThemeContext) ?? {};

  const handleZero = data?.length === 1 ? [...data, [0, 0]] : data;

  const fontName =
    fontStyle === "style1"
      ? "Ilisarniq"
      : fontStyle === "style2"
        ? "Switzer"
        : "Libre Franklin";

  const color = colorStyle as "cream" | "blue" | "gray";

  const chartOptions = {
    curveType,
    legend,
    backgroundColor: customColors[`${color}10`],
    colors: [customColors[`${color}70`]],
    explorer: null,
    tooltip: {
      textStyle: {
        color: customColors[`${color}70`],
        fontName,
      },
    },
    hAxis: {
      textStyle: {
        color: customColors[`${color}70`],
        fontName,
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
        color: customColors[`${color}70`],
        fontName,
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
