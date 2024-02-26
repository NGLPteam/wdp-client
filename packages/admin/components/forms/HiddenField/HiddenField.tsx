import type { FieldValues, Path, UseFormWatch } from "react-hook-form";
import * as Styled from "./HiddenField.styles";

function HiddenField<T extends FieldValues = FieldValues>({
  watch,
  showOn,
  field,
  children,
  isWide,
}: Props<T>) {
  const watchValue = watch(field);

  return (
    <Styled.Wrapper aria-hidden={watchValue !== showOn} isWide={isWide}>
      {children}
    </Styled.Wrapper>
  );
}

interface Props<T extends FieldValues = FieldValues> {
  watch: UseFormWatch<T>;
  showOn?: string | boolean | number | null;
  field: Path<T>;
  children: React.ReactNode;
  isWide?: boolean;
}

export default HiddenField;
