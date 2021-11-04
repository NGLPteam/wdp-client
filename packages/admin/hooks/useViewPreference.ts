import useLocalStorage from "./useLocalStorage";
import { ViewOptions } from "utils/view-options";

/**
 * Get and set list view preferences
 */
export default function useViewPreference(key = "nglp::global.listView") {
  return useLocalStorage<ViewOptions>(key, ViewOptions.table);
}
