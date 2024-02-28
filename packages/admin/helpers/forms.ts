import type { FieldValues, UseFormSetValue } from "react-hook-form";
import type { BooleanPath, SetBooleanValue } from "types/form-fields";

/**
 * A type guard to overload our RHF `setValue` to allow booleans.
 *
 * @param setValue A function from `useForm`
 * @param path A boolean path (its type-safety checked by using `BooleanPath` as a prop type)
 * @returns a type assertion based on the presence of the boolean path.
 */
export function isBooleanField<T extends FieldValues>(
  setValue: UseFormSetValue<T>,
  path?: BooleanPath<T>,
): setValue is SetBooleanValue<T> {
  return Boolean(path);
}

/**
 * Conditionally set a boolean field if it is actually provided. Type checking can be done at the prop level to
 * ensure we're only passing in paths that actually correspond to a boolean-typed field.
 *
 * @param setValue
 * @param path
 * @param value
 * @param options
 */
export function maybeSetBooleanField<T extends FieldValues>(
  setValue: UseFormSetValue<T>,
  path: BooleanPath<T> | undefined,
  value: boolean,
  options?: Parameters<UseFormSetValue<T>>[2],
): void {
  if (path && isBooleanField<T>(setValue, path)) {
    setValue(path, value, options);
  }
}

/**
 * Return undefined if a date value is an empty string
 * https://github.com/react-hook-form/react-hook-form/issues/656
 *
 * @param value
 * @returns string | undefined
 */
export function sanitizeDateField(
  value: string | null | undefined,
): string | undefined {
  return value && value.length > 0 ? value : undefined;
}
