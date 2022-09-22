import { useContext } from "react";
import { Chart } from "react-google-charts";
import {
  ReactGoogleChartProps,
  ChartWrapperOptions,
} from "react-google-charts/dist/types";
import { ThemeContext } from "styled-components";
import { customColors } from "theme/base/variables";

type Props = Partial<ReactGoogleChartProps> & Partial<ChartWrapperOptions>;

export default function LineChart({
  data,
  curveType = "function",
  legend = "none",
}: Props) {
  const { colorStyle, fontStyle } =
    useContext<{ fontStyle: string; colorStyle: "blue" | "cream" | "gray" }>(
      ThemeContext
    ) ?? {};

  const fontName =
    fontStyle === "style1"
      ? "Ilisarniq"
      : fontStyle === "style2"
      ? "Switzer"
      : "Libre Franklin";

  const chartOptions = {
    curveType,
    legend,
    backgroundColor: customColors[`${colorStyle}10`],
    colors: [customColors[`${colorStyle}70`]],
    magnifyingGlass: { enable: false },
    tooltip: {
      textStyle: {
        color: customColors[`${colorStyle}70`],
        fontName,
      },
    },
    hAxis: {
      textStyle: {
        color: customColors[`${colorStyle}70`],
        fontName,
        bold: true,
      },
      slantedText: "automatic",
    },
    vAxis: {
      textStyle: {
        color: customColors[`${colorStyle}70`],
        fontName,
        bold: true,
      },
    },
    chartArea: { left: "10%", top: "15%" },
  };
  return (
    <Chart
      chartType="LineChart"
      options={chartOptions}
      width="110%"
      height="100%"
      data={data}
    />
  );
}
