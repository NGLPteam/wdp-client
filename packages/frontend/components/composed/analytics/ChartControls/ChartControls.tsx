import { useTranslation } from "react-i18next";
import Switch from "./Switch";
import * as Styled from "./ChartControls.styles";
import { Dropdown, Button } from "components/atomic";

type Props = {
  setRegion: (val: string) => void;
  setMode: (val: string) => void;
  setChart: (val: string) => void;
  mode: string;
  region: string;
  chartType: string;
};

export default function ChartControls({
  setRegion,
  region,
  setMode,
  mode,
  setChart,
  chartType,
}: Props) {
  const { t } = useTranslation();

  const getDisclosure = (label: string) => (
    <Button size="sm" icon="chevronDown" secondary>
      {t(label)}
    </Button>
  );

  const regions = [
    { label: "World", value: "world" },
    { label: "United States", value: "US" },
  ];
  const dateRanges = ["All Time", "Last 7 Days", "Last 30 Days", "Last Year"];

  const dateOptions = dateRanges.map((dateRange) => (
    <button key={dateRange}>{dateRange}</button>
  ));

  return (
    <Styled.Wrapper>
      <Switch
        options={[
          { label: "Views", value: "views" },
          { label: "Downloads", value: "downloads" },
        ]}
        onClick={setMode}
        active={mode}
      />
      <Switch
        options={[
          { label: "Map", value: "map" },
          { label: "Chart", value: "chart" },
        ]}
        active={chartType}
        onClick={setChart}
      />
      <Switch options={regions} active={region} onClick={setRegion} />
      <Dropdown
        disclosure={getDisclosure("Date Range")}
        menuItems={dateOptions}
        label="dateRange"
      />
    </Styled.Wrapper>
  );
}
