import { useTranslation } from "react-i18next";
import { Dropdown } from "components/atomic";
import Switch from "./Switch";
import DateRangeDisclosure from "./DateRangeDisclosure";
import styles from "./ChartControls.module.css";

type Props = {
  setMode: (val: string) => void;
  mode: string;
  region: string;
  chartType: string;
  dateLabel: string;
  dispatchSettingsUpdate: (args: { type: string; value: string }) => void;
};

export default function ChartControls({
  region,
  setMode,
  mode,
  chartType,
  dateLabel,
  dispatchSettingsUpdate,
}: Props) {
  const { t } = useTranslation();

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
      onClick={() =>
        dispatchSettingsUpdate({ type: "dateRange", value: dateRange.value })
      }
    >
      <span className={styles.linkText}>{t(dateRange.label)}</span>
    </button>
  ));

  return (
    <div className={styles.wrapper}>
      <Switch
        options={[
          { label: "analytics.views", value: "views" },
          { label: "analytics.downloads", value: "downloads" },
        ]}
        onClick={setMode}
        active={mode}
      />
      <Dropdown
        disclosure={<DateRangeDisclosure active={dateLabel} />}
        menuItems={dateOptions}
        label="analytics.date_ranges.dropdown_label"
        placement="bottom-end"
      />
      <Switch
        options={[
          { label: "analytics.map", value: "map" },
          { label: "analytics.chart", value: "chart" },
        ]}
        active={chartType}
        onClick={(val) => dispatchSettingsUpdate({ type: "chart", value: val })}
      />
      {chartType === "map" && (
        <Switch
          options={regions}
          active={region}
          onClick={(val) =>
            dispatchSettingsUpdate({ type: "region", value: val })
          }
        />
      )}
    </div>
  );
}
