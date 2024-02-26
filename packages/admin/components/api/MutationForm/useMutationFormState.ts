import { useReducer } from "react";
import type { Dispatch, Reducer } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import type { MutationParameters } from "relay-runtime";

import { ErrorMap, MutationName } from "./types";

export default function useMutationFormState<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
>({
  form,
  name,
}: UseFormGlobalsOptions<M, T>): UseMutationFormStateReturn<M, T> {
  const initial: InitializerArgs<M, T> = { form, name };

  const [state, dispatch] = useReducer<
    Reducer<State<M, T>, Action<M, T>>,
    InitializerArgs<M, T>
  >(reducer, initial, initializer);

  return [state, dispatch];
}

function reducer<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
>(state: State<M, T>, action: Action<M, T>): State<M, T> {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        status: "pending",
        globalErrors: [],
        serverError: null,
        response: null,
        variables: action.variables,
        values: action.values,
      };
    case "success":
      return {
        ...state,
        status: "success",
        response: action.response,
      };
    case "failure": {
      const { global: globalErrors } = action.errors;

      return {
        ...state,
        status: "failure",
        globalErrors,
      };
    }
    case "error": {
      const { serverError } = action;

      /* eslint-disable no-console */
      console.warn("[GraphQL Mutation Form Error][%s]", state.mutationName);
      console.error(serverError);

      return {
        ...state,
        status: "failure",
        serverError,
      };
    }
    case "clear": {
      const { form, mutationName: name } = state;

      return initializer<M, T>({ form, name });
    }
  }
}

interface UseFormGlobalsOptions<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> {
  /**
   * The return value from a `useForm` call. We want to be able to work with this in the state
   */
  form: UseFormReturn<T>;

  /**
   * The name of the mutation we're working with.
   */
  name: MutationName<M>;
}

type UseMutationFormStateReturn<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> = [State<M, T>, Dispatch<Action<M, T>>];

type Action<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> =
  | { type: "submit"; variables: M["variables"]; values: T }
  | { type: "clear" }
  | { type: "success"; response: M["response"] }
  | { type: "failure"; errors: ErrorMap<T> }
  | { type: "error"; serverError: Error };

type FormStatus = "pending" | "success" | "failure";

interface State<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> {
  /**
   * The return value from a `useForm` call.
   */
  form: UseFormReturn<T>;

  /**
   * Errors that apply to the entire form, or rather, do not apply to
   * any actual fields.
   */
  globalErrors: readonly string[];

  /**
   * The name of the mutation we're working with.
   */
  mutationName: MutationName<M>;

  /**
   * The last-successful response
   */
  response?: M["response"] | null;

  /**
   * The status of form submission
   */
  status: FormStatus;

  /**
   * A possible (catastrophic) server error.
   *
   * Normally, validation errors and the like should be returned in the `errors` object.
   * In the event our request causes a top-level error, we capture it here to display,
   * and potentially notify Rollbar or the like in future.
   */
  serverError?: Error | null;

  /**
   * A copy of the last-submitted form values
   */
  values?: T;

  /**
   * A copy of the last-submitted mutation variables
   */
  variables?: M["variables"];
}

function initializer<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
>({ form, name }: InitializerArgs<M, T>): State<M, T> {
  return {
    form,
    mutationName: name,
    globalErrors: [],
    status: "pending",
  };
}

interface InitializerArgs<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
> {
  form: UseFormReturn<T>;

  /**
   * The name of the mutation we're working with.
   */
  name: MutationName<M>;
}
