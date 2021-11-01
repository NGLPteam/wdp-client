import type { FieldValues } from "react-hook-form";

interface OnValidPropertiesParams {
  values: FieldValues;
}

export type OnSuccessCallback = (params: OnValidPropertiesParams) => void;
