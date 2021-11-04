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

export interface ErrorMap<T extends FieldValues> {
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
  T extends FieldValues
> = (response: M["response"], data: UnpackNestedValue<T>) => boolean;

export type OnFailureCallback<
  M extends MutationParameters,
  T extends FieldValues
> = (params: OnFailureResponse<M, T>) => void;

interface OnFailureResponse<
  M extends MutationParameters,
  T extends FieldValues
> {
  errors: ErrorMap<T>;
  response: M["response"];
  variables: M["variables"];
  values: UnpackNestedValue<T>;
}

export type OnSuccessCallback<
  M extends MutationParameters,
  T extends FieldValues
> = (params: OnSuccessResponse<M, T>) => void;

interface OnSuccessResponse<
  M extends MutationParameters,
  T extends FieldValues
> {
  response: M["response"];
  variables: M["variables"];
  values: UnpackNestedValue<T>;
}

/**
 * A type that extracts the name(s) of mutation payload(s) from a Mutation response
 * that have included `MutationForm_mutationErrors$key`. It's our way of ensuring that
 * mutations have included that fragment, because it's vital to our ability to
 * process errors in a uniform manner.
 */
export type MutationName<M extends MutationParameters> = {
  [K in keyof M["response"]]-?: NonNullable<
    M["response"][K]
  > extends MutationForm_mutationErrors$key
    ? K
    : never;
}[keyof M["response"]];

export type PayloadWithErrors<M extends MutationParameters> =
  M["response"][MutationName<M>] & MutationForm_mutationErrors$key;

interface PayloadFragments {
  __fragments?: {
    MutationForm_mutationErrors?: unknown;
  };
}

export type PayloadWithFragments<M extends MutationParameters> =
  M["response"][MutationName<M>] & PayloadFragments;

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

/**
 * We often need to perform a little bit of transformation on the mutation
 * input such as adding properties that aren't controlled by the form, removing
 * null values, and so on.
 *
 * This function can be provided in order to accomplish just that. At the very
 * least, you'll need to finesse the data into `input`.
 *
 * @see useToVariables to generate type-safely without extra renders
 *
 * @example <caption>Transforming Form Data Into Variables</caption>
 * const toVariables = (data) => ({ input: data })
 */
export type VariableTransformer<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> = (data: UnpackNestedValue<T>) => M["variables"];

interface RequiresToVariables<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> {
  /**
   * We often need to perform a little bit of transformation on the mutation
   * input such as adding properties that aren't controlled by the form, removing
   * null values, and so on.
   *
   * This function can be provided in order to accomplish just that. At the very
   * least, you'll need to finesse the data into `input`.
   *
   * @see useToVariables to generate type-safely without extra renders
   *
   * @example <caption>Transforming Form Data Into Variables</caption>
   * const toVariables = (data) => ({ input: data })
   */
  toVariables: VariableTransformer<M, T>;
}

type OptionalToVariables<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> = Partial<RequiresToVariables<M, T>>;

export type AcceptsToVariables<
  M extends MutationParameters,
  T extends FieldValues
> = { input: T } extends M["variables"]
  ? OptionalToVariables<M, T>
  : RequiresToVariables<M, T>;
