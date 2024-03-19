import type { FieldValues, Path, DefaultValue } from "react-hook-form";

type FormTypes = Partial<Pick<HTMLFormElement, "onChange" | "onBlur">>;
interface InputProps<T extends FieldValues = FieldValues> extends FormTypes {
  defaultValue?: DefaultValue;
  name: Path<T>;
  label: string;
  hideLabel?: boolean;
  disabled?: boolean;
  description?: string | React.ReactNode;
  placeholder?: string;
  required?: boolean;
  error?: {
    message: string;
  };
  isWide?: boolean;
}

export default InputProps;
