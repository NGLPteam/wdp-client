import type { ReactNode } from "react";
import type { FieldValues, Path, DefaultValue } from "react-hook-form";

interface InputProps<T extends FieldValues = FieldValues> {
  defaultValue?: DefaultValue;
  name: Path<T>;
  label: string | ReactNode;
  hideLabel?: boolean;
  disabled?: boolean;
  description?: string | ReactNode;
  placeholder?: string;
  required?: boolean;
  error?: {
    message: string;
  };
}

export default InputProps;
