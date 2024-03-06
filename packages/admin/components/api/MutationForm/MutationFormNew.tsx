import { useCallback, useState } from "react";
import { DefaultValues, FieldValues, SubmitHandler } from "react-hook-form";
import {
  graphql,
  GraphQLTaggedNode,
  MutationParameters,
  PayloadError,
  readInlineData,
  RecordSourceSelectorProxy,
} from "relay-runtime";
import { useMutation } from "react-relay";
import isEmpty from "lodash/isEmpty";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import {
  MutationFormFragment$key,
  MutationFormFragment$data,
} from "@/relay/MutationFormFragment.graphql";
import { useRelayRecordSubscribeContext } from "contexts";
import {
  OnCompletedCallback,
  OnErrorCallback,
  OnSuccessCallback,
  RenderMutationForm,
  VariableTransformer,
} from "../../types";
import { extractPayloads, hasErrors } from "../../helpers";
import { BaseForm } from "../../base";

/**
 * Mutation Form
 */
export default function MutationForm<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
>({
  children,
  defaultValues,
  toVariables,
  onCompleted,
  onError,
  onSuccess,
  mutation,
  disableSubmit,
  ...baseProps
}: Props<M, T> & { disableSubmit?: boolean }) {
  const [mutate, isLoading] = useMutation<M>(mutation);

  /** The mutation's response state */
  const [response, setResponse] = useState<M["response"] | undefined>();

  /** The extracted form fragments */
  const [formErrors, setErrors] = useState<
    MutationFormFragment$data[] | undefined
  >();

  /** Error toast state */
  const [errorToastId, setErrorToastId] = useState<string | undefined>();

  /** Subscribe ids */
  const { invalidateRecords } = useRelayRecordSubscribeContext();

  const { t } = useTranslation();

  /** Make adjustments to variables before submitting */
  const castVariables = useCallback<VariableTransformer<M, T>>(
    function (data) {
      if (typeof toVariables === "function") {
        return toVariables(data);
      }

      return { input: data };
    },
    [toVariables]
  );

  /** Check for errors */
  const checkForErrors = useCallback((response: M["response"]) => {
    const payloads = extractPayloads<M, MutationFormFragment$key>(response);

    if (!payloads || isEmpty(payloads)) return {};

    const errorData = payloads.map((data) => {
      return readInlineData<MutationFormFragment$key>(fragment, data);
    });

    const responseHasErrors = errorData.some((data) => hasErrors(data));

    return { errorData, responseHasErrors };
  }, []);

  /**
   * Set response data, check for errors before invalidating store records.
   * Runs before `onCompleted` method
   * */
  const updater = useCallback(
    (store: RecordSourceSelectorProxy, data: M["response"]) => {
      // Dismiss any error toasts
      toast.dismiss(errorToastId);

      // Set reponse for children
      setResponse(data);

      // Set errors for BaseForm
      const { errorData, responseHasErrors } = checkForErrors(data);
      setErrors(errorData);

      // Check for errors before invalidating the store
      if (!responseHasErrors) {
        invalidateRecords(store);
      }
    },
    [invalidateRecords, setResponse, checkForErrors, errorToastId]
  );

  /** Handle errors returned in mutation response data */
  const handleMutateError = useCallback(
    (errors: PayloadError[]) => {
      const id = toast.error(
        t("messages.error_message", {
          error: errors.map((e) => e.message).join(","),
        }),
        {
          duration: Infinity,
        }
      );
      setErrorToastId(id);
    },
    [t]
  );

  /**
   * Handle a completed mutation.
   * onCompleted simply means the mutation finished - we still need to handle errors.
   */
  const handleCompleted = useCallback<OnCompletedCallback<M>>(
    (response, errors) => {
      if (onCompleted) onCompleted(response, errors);

      // It's annoying, but we need to check for errors here too.
      // Any state set in updater isn't going to be available here,
      // even if it's in the callback's deps array.
      const { responseHasErrors } = checkForErrors(response);

      if (errors) {
        handleMutateError(errors);
      } else if (responseHasErrors && onError) {
        onError(response, errors);
      } else {
        if (onSuccess) onSuccess(response);
      }
    },
    [onCompleted, onError, onSuccess, checkForErrors, handleMutateError]
  );

  const handleServerError = useCallback(
    (error: Error) => {
      const id = toast.error(
        t("messages.server_error", { error: error.message }),
        {
          duration: Infinity,
        }
      );
      console.error(error.message);
      setErrorToastId(id);
    },
    [t, setErrorToastId]
  );

  /** Submit data to the mutation */
  const submitHandler: SubmitHandler<T> = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (values, event) => {
      if (disableSubmit) return;
      const variables = castVariables(values);
      try {
        mutate({
          variables,
          onCompleted: handleCompleted,
          onError: handleServerError,
          updater,
        });
      } catch (error) {
        console.error(error);
      }
    },
    [
      castVariables,
      mutate,
      handleCompleted,
      updater,
      handleServerError,
      disableSubmit,
    ]
  );

  return (
    <BaseForm<T>
      defaultValues={defaultValues}
      onSubmit={submitHandler}
      data={formErrors}
      {...baseProps}
    >
      {({ form }) => children({ form, isLoading, response, submitHandler })}
    </BaseForm>
  );
}

type BaseFormProps = Pick<
  React.ComponentProps<typeof BaseForm>,
  "submitOnChange" | "className" | "mode"
>;

interface Props<M extends MutationParameters, T extends FieldValues>
  extends BaseFormProps {
  children: RenderMutationForm<M, T>;

  /**
   * Default values for the form.
   */
  defaultValues?: DefaultValues<T>;

  /**
   * The graphql node for our mutation.
   */
  mutation: GraphQLTaggedNode;

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
  toVariables?: VariableTransformer<M, T>;

  /**
   * Optionally process the response on a completed mutation. Redirect to another page,
   * pop up a toast notification, etc.
   */
  onCompleted?: OnCompletedCallback<M>;

  /**
   * Optionally process the response on a successful mutation.
   */
  onSuccess?: OnSuccessCallback<M>;

  /**
   * Optionally process the response on a completed mutation with errors.
   */
  onError?: OnErrorCallback<M>;

  /**
   * Disable the entire form
   */
  disabled?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const fragment = graphql`
//   fragment MutationFormFragment on StandardMutationPayload @inline {
//     ...BaseFormFragment
//     ...hasErrorsFragment
//   }
// `;
