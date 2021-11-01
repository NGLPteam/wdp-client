import { useCallback } from "react";
import type { DependencyList } from "react";
import type { FieldValues } from "react-hook-form";
import type { MutationParameters } from "relay-runtime";

import type {
  GetErrors,
  IsSuccessPredicate,
  OnSuccessCallback,
  OnFailureCallback,
  RenderForm,
  VariableTransformer,
} from "./types";

/**
 * Wrap the creation of a `getErrors` callback to keep it from triggering unnecessary renders.
 *
 * @param callback
 * @param dependencies
 * @returns
 */
export function useGetErrors<M extends MutationParameters>(
  callback: GetErrors<M>,
  dependencies: DependencyList
) {
  /* eslint-disable react-hooks/exhaustive-deps */
  return useCallback<GetErrors<M>>(callback, dependencies);
}

/**
 * Wrap the creation of an `isSuccess` predicate to keep it from triggering unnecessary renders.
 *
 * @param callback
 * @param dependencies
 * @returns
 */
export function useIsSuccess<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
>(callback: IsSuccessPredicate<M, T>, dependencies: DependencyList) {
  /* eslint-disable react-hooks/exhaustive-deps */
  return useCallback<IsSuccessPredicate<M, T>>(callback, dependencies);
}

/**
 * Wrap the creation of an `onSuccess` callback to keep it from triggering unnecessary renders.
 *
 * @param callback
 * @param dependencies
 * @returns
 */
export function useOnSuccess<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
>(callback: OnSuccessCallback<M, T>, dependencies: DependencyList) {
  /* eslint-disable react-hooks/exhaustive-deps */
  return useCallback<OnSuccessCallback<M, T>>(callback, dependencies);
}

/**
 * Wrap the creation of an `onFailure` callback to keep it from triggering unnecessary renders.
 *
 * @param callback
 * @param dependencies
 * @returns
 */
export function useOnFailure<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
>(callback: OnFailureCallback<M, T>, dependencies: DependencyList) {
  /* eslint-disable react-hooks/exhaustive-deps */
  return useCallback<OnFailureCallback<M, T>>(callback, dependencies);
}

/**
 * Wrap the creation of a `children` render props function to keep it from triggering unnecessary renders.
 *
 * @param callback
 * @param dependencies
 * @returns
 */
export function useRenderForm<T extends FieldValues = FieldValues>(
  callback: RenderForm<T>,
  dependencies: DependencyList
) {
  /* eslint-disable react-hooks/exhaustive-deps */
  return useCallback<RenderForm<T>>(callback, dependencies);
}

/**
 * Wrap the creation of a `toVariables` callback to keep it from triggering unnecessary renders.
 *
 * @param callback
 * @param dependencies
 * @returns
 */
export function useToVariables<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
>(callback: VariableTransformer<M, T>, dependencies: DependencyList) {
  /* eslint-disable react-hooks/exhaustive-deps */
  return useCallback<VariableTransformer<M, T>>(callback, dependencies);
}
