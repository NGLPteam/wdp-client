import type { ReactNode } from "react";
import type { FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues = FieldValues> {
  name: Path<T>;
  label: string | ReactNode;
  hideLabel?: boolean;
  description?: string | ReactNode;
  placeholder?: string;
  required?: boolean;
  error?: {
    message: string;
  };
}

export default InputProps;
