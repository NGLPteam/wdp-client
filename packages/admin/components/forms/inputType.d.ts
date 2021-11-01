import type { ReactNode } from "react";
import type { FieldValues, Path, DefaultValue } from "react-hook-form";
interface InputProps<T extends FieldValues = FieldValues> {
  defaultValue?: DefaultValue;
  name: Path<T>;
  label: string;
  hideLabel?: boolean;
  disabled?: boolean;
  description?: string | ReactNode;
  placeholder?: string;
  required?: boolean;
  error?: {
    message: string;
  };
  isWide?: boolean;
  onChange?: (e: React.ChangeEvent<Element>) => void;
  onBlur?: (e: React.ChangeEvent<Element>) => void;
}

export default InputProps;