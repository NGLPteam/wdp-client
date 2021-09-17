import React from "react";
import * as Styled from "./HiddenField.styles";

import type { FieldValues, Path, UseFormWatch } from "react-hook-form";

function HiddenField<T extends FieldValues = FieldValues>({
  watch,
  showOn,
  field,
  children,
}: Props<T>) {
  const watchValue = watch(field);

  return (
    <Styled.Wrapper aria-hidden={watchValue !== showOn}>
      {children}
    </Styled.Wrapper>
  );
}

interface Props<T> {
  watch: UseFormWatch<T>;
  showOn?: string | boolean | number | null;
  field: Path<T>;
  children: React.ReactNode;
}

export default HiddenField;
