import type { CSSProperties, ChangeEvent } from "react";
import type { FieldValues, Path, UseFormSetValue } from "react-hook-form";

export interface CheckboxProps {
  checked?: boolean;
  title?: string;
  indeterminate?: boolean;
  style?: CSSProperties;
  onChange?: (e: ChangeEvent<Element>) => void;
}

export type BooleanFieldPaths<T extends FieldValues> = {
  [K in keyof T]-?: NonNullable<T[K]> extends boolean ? K : never;
}[keyof T];

export type BooleanFields<T extends FieldValues> = Pick<
  T,
  BooleanFieldPaths<T>
>;

export type BooleanPath<T extends FieldValues> = Path<T> &
  Path<BooleanFields<T>>;

/**
 * This generic overloads the RHF setValue to allow setting a boolean directly.
 */
export type SetBooleanValue<T extends FieldValues> = (<
  TFieldName extends BooleanPath<T>,
>(
  name: TFieldName,
  value: boolean,
  options?: Parameters<UseFormSetValue<T>>[2],
) => ReturnType<UseFormSetValue<T>>) &
  UseFormSetValue<T>;
