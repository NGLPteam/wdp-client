import { useContext } from "react";
import { Chart } from "react-google-charts";
import {
  ReactGoogleChartProps,
  ChartWrapperOptions,
} from "react-google-charts/dist/types";
import { ThemeContext, DefaultTheme } from "styled-components";
import { customColors } from "theme/base/variables";

type Props = Partial<ReactGoogleChartProps> & Partial<ChartWrapperOptions>;

export default function GeoChart({
  region,
  data,
  displayMode = "regions",
  legend = "none",
}: Props) {
  const { colorStyle, fontStyle } =
    useContext<DefaultTheme | undefined>(ThemeContext) ?? {};

  const fontName =
    fontStyle === "style1"
      ? "Ilisarniq"
      : fontStyle === "style2"
        ? "Switzer"
        : "Libre Franklin";

  const color = colorStyle as "blue" | "cream" | "gray";

  const chartOptions = {
    region,
    displayMode,
    resolution: region === "US" ? "provinces" : "countries",
    legend,
    datalessRegionColor: "#FFFFFF",
    defaultColor: "#FFFFFF",
    backgroundColor: customColors[`${color}10`],
    colorAxis: {
      minValue: 1,
      colors: [customColors[`${color}20`], customColors[`${color}70`]],
    },
    magnifyingGlass: { enable: false },
    tooltip: {
      textStyle: {
        color: customColors[`${color}70`],
        fontName,
      },
    },
  };

  return (
    <Chart
      chartType="GeoChart"
      options={chartOptions}
      width="100%"
      data={data}
    />
  );
}
