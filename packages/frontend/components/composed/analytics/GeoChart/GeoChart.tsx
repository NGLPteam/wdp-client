import { useContext } from "react";
import { Chart } from "react-google-charts";
import {
  ReactGoogleChartProps,
  ChartWrapperOptions,
} from "react-google-charts/dist/types";
import { ThemeContext } from "styled-components";
import { customColors } from "theme/base/variables";

type Props = Partial<ReactGoogleChartProps> & Partial<ChartWrapperOptions>;

export default function GeoChart({
  region,
  data,
  displayMode = "regions",
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
    region,
    displayMode,
    resolution: region === "US" ? "provinces" : "countries",
    legend,
    datalessRegionColor: "#FFFFFF",
    defaultColor: "#FFFFFF",
    backgroundColor: customColors[`${colorStyle}10`],
    colorAxis: {
      minValue: 1,
      colors: [
        customColors[`${colorStyle}20`],
        customColors[`${colorStyle}70`],
      ],
    },
    magnifyingGlass: { enable: false },
    tooltip: {
      textStyle: {
        color: customColors[`${colorStyle}70`],
        fontName,
      },
    },
  };

  return (
    <Chart
      chartType="GeoChart"
      options={chartOptions}
      width="100%"
      height="100%"
      data={data}
    />
  );
}
