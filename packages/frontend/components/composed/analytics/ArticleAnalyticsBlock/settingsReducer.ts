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
  dateLabel: string;
  usOnly: boolean;
  minDate: string | null;
  updated: boolean;
};

export type Action = {
  type: string;
  value: string;
};

const getDateVars = (minDate: string | null, value: string) => {
  const now = Date.now();

  const hasMultipleYears = minDate
    ? differenceInCalendarYears(parseISO(minDate), now) > 0
    : true;

  let startDate;
  let precision;
  switch (value) {
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

  return startDate
    ? {
        dateRange: { startDate: formatISO(startDate) },
        precision: precision as AnalyticsPrecision,
      }
    : {
        dateRange: {},
        precision: precision as AnalyticsPrecision,
      };
};

export const chartSettingsReducer = (state: State, action: Action) => {
  /* eslint-disable no-var */
  switch (action.type) {
    case "dateRange":
      var dateVars = getDateVars(state.minDate, action.value);
      return { ...state, ...dateVars, dateLabel: action.value, updated: true };

    case "chart":
      var dateVars = getDateVars(state.minDate, state.dateLabel);
      return { ...state, ...dateVars, chartType: action.value, updated: true };

    case "region":
      return { ...state, usOnly: action.value === "US", updated: true };

    default:
      return state;
  }
};
