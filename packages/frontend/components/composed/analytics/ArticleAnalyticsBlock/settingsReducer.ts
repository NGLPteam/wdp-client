import {
  subDays,
  formatISO,
  parseISO,
  differenceInCalendarYears,
} from "date-fns";
import { AnalyticsPrecision } from "types/graphql-schema";

export type State = {
  chartType: string;
  precision: string;
  dateRange: Record<string, unknown>;
  usOnly: boolean;
  minDate: string | null;
  updated: boolean;
};

export type Action = {
  type: string;
  value: string;
};

export const chartSettingsReducer = (state: State, action: Action) => {
  /* eslint-disable no-case-declarations */
  switch (action.type) {
    case "dateRange":
    case "chart":
      const now = Date.now();

      const hasMultipleYears = state.minDate
        ? differenceInCalendarYears(parseISO(state.minDate), now) > 0
        : true;

      let startDate;
      let precision;
      switch (action.value) {
        case "week":
          startDate = subDays(now, 7);
          precision = "DAY";
          break;
        case "month":
          startDate = subDays(now, 30);
          precision = "DAY";
          break;
        case "year":
          startDate = subDays(now, 365);
          precision = "MONTH";
          break;
        case "all":
        default:
          precision = hasMultipleYears ? "YEAR" : "MONTH";
      }

      const dateVars = startDate
        ? {
            dateRange: { startDate: formatISO(startDate) },
            precision: precision as AnalyticsPrecision,
          }
        : {
            dateRange: {},
            precision: precision as AnalyticsPrecision,
          };

      const chartType =
        action.type === "chart" ? action.value : state.chartType;

      return { ...state, ...dateVars, chartType, updated: true };

    case "region":
      const usOnly = action.value === "US";
      return { ...state, usOnly, updated: true };

    default:
      return state;
  }
};
