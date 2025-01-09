import { useContext } from "react";
import { Chart } from "react-google-charts";
import {
  ReactGoogleChartProps,
  ChartWrapperOptions,
} from "react-google-charts";
import { ThemeContext, DefaultTheme } from "styled-components";
import { colors } from "styles/helpers.cjs";

type Props = Partial<ReactGoogleChartProps> & Partial<ChartWrapperOptions>;

const MAPS_KEY = process.env.googleMapsKey;

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
    backgroundColor: colors.custom[`${color}`][10],
    colorAxis: {
      minValue: 1,
      colors: [colors.custom[`${color}`][20], colors.custom[`${color}`][70]],
    },
    magnifyingGlass: { enable: false },
    tooltip: {
      textStyle: {
        color: colors.custom[`${color}`][70],
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
      chartVersion="current"
      {...(MAPS_KEY && {
        mapsApiKey: MAPS_KEY,
      })}
    />
  );
}
