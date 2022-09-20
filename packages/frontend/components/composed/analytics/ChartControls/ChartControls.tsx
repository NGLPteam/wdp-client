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
    { label: "analytics.regions.world", value: "world" },
    { label: "analytics.regions.united_states", value: "US" },
  ];
  const dateRanges = [
    { label: "analytics.date_ranges.all", value: "all" },
    { label: "analytics.date_ranges.week", value: "week" },
    { label: "analytics.date_ranges.month", value: "month" },
    { label: "analytics.date_ranges.year", value: "year" },
  ];

  const dateOptions = dateRanges.map((dateRange) => (
    <button
      key={dateRange.value}
      onClick={() => handleDateRangeChange(dateRange.value)}
    >
      {t(dateRange.label)}
    </button>
  ));

  return (
    <Styled.Wrapper>
      <Switch
        options={[
          { label: "analytics.views", value: "views" },
          { label: "analytics.downloads", value: "downloads" },
        ]}
        onClick={setMode}
        active={mode}
      />
      <Switch
        options={[
          { label: "analytics.map", value: "map" },
          { label: "analytics.chart", value: "chart" },
        ]}
        active={chartType}
        onClick={setChart}
      />
      {chartType === "map" && (
        <Switch options={regions} active={region} onClick={setRegion} />
      )}
      <Dropdown
        disclosure={getDisclosure("analytics.date_ranges.dropdown_label")}
        menuItems={dateOptions}
        label="analytics.date_ranges.dropdown_label"
      />
    </Styled.Wrapper>
  );
}
