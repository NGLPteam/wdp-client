import { useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";

export default function FileUploadClear<T extends FieldValues = FieldValues>({
  name,
  onClear,
}: Props<T>) {
  const { register } = useFormContext<T>();

  const style = {
    zIndex: 100,
  };

  const { onChange, ...clearInput } = register(name);

  function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e);
    if (onClear) onClear(e.target.checked);
  }

  return (
    <label style={style}>
      <input type="checkbox" onChange={handleClick} {...clearInput} />
      Remove
    </label>
  );
}

interface Props<T> {
  /* Name for hidden clear input */
  name: Path<T>;
  onClear: (value: boolean) => void;
}
