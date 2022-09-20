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
  handleDateRangeChange: (val: string) => void;
};

export default function ChartControls({
  setRegion,
  region,
  setMode,
  mode,
  setChart,
  chartType,
  handleDateRangeChange,
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
  const dateRanges = [
    { label: "All Time", value: "all" },
    { label: "Last 7 Days", value: "week" },
    { label: "Last 30 Days", value: "month" },
    { label: "Last Year", value: "year" },
  ];

  const dateOptions = dateRanges.map((dateRange) => (
    <button
      key={dateRange.value}
      onClick={() => handleDateRangeChange(dateRange.value)}
    >
      {dateRange.label}
    </button>
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
