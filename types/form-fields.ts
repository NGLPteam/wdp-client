import { CSSProperties } from "react";

export interface CheckboxProps {
  checked?: boolean;
  title?: string;
  indeterminate?: boolean;
  style?: CSSProperties;
  onChange?: () => void;
}
