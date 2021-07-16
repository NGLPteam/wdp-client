import { CSSProperties, ChangeEvent } from "react";

export interface CheckboxProps {
  checked?: boolean;
  title?: string;
  indeterminate?: boolean;
  style?: CSSProperties;
  onChange?: (e: ChangeEvent<Element>) => void;
}
