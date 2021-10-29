import type { ReactNode } from "react";
import type { FieldValues, Path, DefaultValue } from "react-hook-form";

type InputTypes = Partial<Pick<HTMLInputElement, "onChange">>;
interface InputProps<T extends FieldValues = FieldValues> extends InputTypes {
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
}

export default InputProps;
