import { useMemo } from "react";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

export default function useDeserializeRecords(
  r: RecordMap | null | undefined
): RecordMap {
  return useMemo<RecordMap>(() => {
    if (r) return r;

    if (typeof document !== "undefined") {
      const recordsData = document.getElementById("relay-data")?.innerHTML;

      if (recordsData) {
        const records: RecordMap = JSON.parse(
          Buffer.from(recordsData, "base64").toString()
        );

        return records;
      }
    }

    return {} as RecordMap;
  }, [r]);
}
