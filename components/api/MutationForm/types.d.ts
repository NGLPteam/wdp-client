/* eslint-disable camelcase */
import type {
  FieldValues,
  MultipleFieldErrors,
  Path,
  UnpackNestedValue,
  UseFormReturn,
  ValidateResult,
} from "react-hook-form";
import type { MutationParameters } from "relay-runtime";

import type { MutationForm_mutationErrors$key } from "@/relay/MutationForm_mutationErrors.graphql";

export interface ErrorMap<T extends FieldValues = FieldValues> {
  attributes: readonly RemappedAttributeError<T>[];
  global: readonly string[];
  user: readonly string[];
}

export type GetErrors<M extends MutationParameters> = (
  response: M["response"]
) => HasErrorFragment | null;

export type GlobalError = ValidateResult;

export type HasErrorFragment = MutationForm_mutationErrors$key;

export type IsSuccessPredicate<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> = (response: M["response"], data: UnpackNestedValue<T>) => boolean;

export type OnFailureCallback<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> = (params: OnFailureResponse<M, T>) => void;

interface OnFailureResponse<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> {
  errors: ErrorMap<T>;
  response: M["response"];
  variables: M["variables"];
  values: UnpackNestedValue<T>;
}

export type OnSuccessCallback<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> = (params: OnSuccessResponse<M, T>) => void;

interface OnSuccessResponse<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> {
  response: M["response"];
  variables: M["variables"];
  values: UnpackNestedValue<T>;
}

export type MutationName<M extends MutationParameters> = {
  [K in keyof M["response"]]-?: K & string;
}[keyof M["response"]];

interface RemappedAttributeError<T> {
  path: Path<T>;

  error: {
    types: MultipleFieldErrors;
  };
}

/**
 * A render props function to render the actual form. It receives the methods from
 * `react-hook-form`'s `useForm` on `form` and is placed after globalErrors, the
 * optional title, and the array of buttons.
 *
 * @see useRenderForm to generate type-safely without extra renders
 *
 * @example
 * const renderForm = useRenderForm<Mutation, FormValues>(({ form: { register } }) => (
 *   <Forms.Grid>
 *     <Forms.Input label="Name" {...register("name")} />
 *   </Forms.Grid>
 * ), []);
 */
export type RenderForm<T extends FieldValues = FieldValues> = (
  props: RenderFormProps<T>
) => JSX.Element;

interface RenderFormProps<T extends FieldValues = FieldValues> {
  form: UseFormReturn<T>;
}

export type VariableTransformer<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> = (data: UnpackNestedValue<T>) => M["variables"];
