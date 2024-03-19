import { ViewOptions } from "utils/view-options";
import useLocalStorage from "./useLocalStorage";

/**
 * Get and set list view preferences
 */
export default function useViewPreference(key = "nglp::global.listView") {
  return useLocalStorage<ViewOptions>(key, ViewOptions.table);
}
