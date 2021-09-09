import React, { useCallback, useEffect, useMemo } from "react";
import { useMutation } from "relay-hooks";
import { useForm, FormProvider } from "react-hook-form";
import { graphql } from "react-relay";
import type {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  UnpackNestedValue,
} from "react-hook-form";
import type { GraphQLTaggedNode, MutationParameters } from "relay-runtime";
import * as Styled from "./MutationForm.styles";
import { useTranslation } from "react-i18next";
import { useNotify, usePageContext } from "hooks";

import { Button, ContentTitle } from "components/atomic";

import type {
  AcceptsToVariables,
  ErrorMap,
  GetErrors,
  IsSuccessPredicate,
  MutationName,
  OnSuccessCallback,
  OnFailureCallback,
  PayloadWithErrors,
  PayloadWithFragments,
  RenderForm,
  VariableTransformer,
} from "./types";

import { extractErrors, hasNoErrors } from "./errors";

import GlobalErrors from "./GlobalErrors";

import useMutationFormState from "./useMutationFormState";

import Watcher from "./Watcher";

/**
 * An attempt at drying up submitting mutations with a collection
 * of standardized hooks.
 *
 * It handles receiving information from the server, delineating success / failure,
 * rendering global form errors, populating attribute-based server API errors, and more.
 *
 * @example <caption>A very reduced example. Real implementations should use hooks to memoize callbacks</caption>
 *    import { AssetCreateFormMutation } from "@/relay/AssetCreateForm.graphql";
 *    import { CreateAssetInput } from "types/graphql-schema";
 *    import MutationForm, { Forms } from "components/api/MutationForm";
 *
 *    type FormValues = Pick<CreateAssetInput, "attachment" | "name" | "caption" | "altText">
 *
 *    const renderForm = ({ form: { register }}) => (
 *          <Forms.Grid>
 *            <Forms.Input label="Name" {...register("name")} />
 *          </Forms.Grid>
 *    );
 *
 *    <MutationForm<AssetCreateFormMutation, FormValues>
 *          children={renderForm}
 *          getErrors={(response) => response.createAsset ?? null}
 *          name="createAsset"
 *          toVariables={(data) => ({ input: { ...data, entityId: "1234" }})} />;
 */
export default function MutationForm<
  M extends MutationParameters,
  T extends FieldValues = FieldValues
>(props: Props<M, T>) {
  const {
    children,
    defaultValues,
    name,
    successNotification,
    failureNotification,
    refetchTags = [],
  } = props;
  const notify = useNotify();
  const { t } = useTranslation();

  const { setTriggeredRefetchTags } = usePageContext();

  const form = useForm<T>({
    criteriaMode: "all",
    defaultValues,
  });

  const [state, dispatch] = useMutationFormState<M, T>({ form, name });

  const [mutate, mutationState] = useMutation<M>(props.mutation);

  useEffect(
    function () {
      if (mutationState.error) {
        dispatch({ type: "error", serverError: mutationState.error });
      }
    },
    [mutationState.error, dispatch]
  );

  const { getErrors, isSuccess, onFailure, onSuccess, toVariables } = props;

  const castVariables = useCallback<VariableTransformer<M, T>>(
    function (data) {
      if (typeof toVariables === "function") {
        return toVariables(data);
      }

      return { input: data };
    },
    [toVariables]
  );

  const extractErrorsRef = useCallback<GetErrors<M>>(
    function (response: M["response"]) {
      if (typeof getErrors === "function") {
        return getErrors(response);
      }

      const payload = response[name];

      if (hasErrors(payload)) {
        return payload;
      }

      return null;
    },
    [getErrors, name]
  );

  const { setError } = form;

  const submitHandler: SubmitHandler<T> = useCallback(
    async (values) => {
      const variables = castVariables(values);

      dispatch({ type: "submit", variables, values });

      const response = await mutate({ variables });

      const errorResponse = extractErrorsRef(response);

      const errors = extractErrors<T>(errorFragment, errorResponse);

      if (checkSuccess<M, T>(response, errors, values, isSuccess)) {
        dispatch({ type: "success", response });

        // First, notify
        if (successNotification) {
          notify.success(t(successNotification));
        }

        // Then set mutated query refetchTags
        setTriggeredRefetchTags(refetchTags);

        if (typeof onSuccess === "function") {
          onSuccess({ response, variables, values });
        }
      } else {
        dispatch({ type: "failure", errors });

        if (failureNotification) {
          notify.error(t(failureNotification));
        }

        console.warn("Failure!");
        /* eslint-disable no-console */
        console.dir({ errors });

        for (const { path, error } of errors.attributes) {
          setError(path, error, { shouldFocus: false });
        }

        if (typeof onFailure === "function") {
          onFailure({
            errors,
            response,
            variables,
            values,
          });
        }
      }
    },
    [
      castVariables,
      dispatch,
      extractErrorsRef,
      isSuccess,
      mutate,
      onFailure,
      onSuccess,
      setError,
      failureNotification,
      notify,
      refetchTags,
      setTriggeredRefetchTags,
      successNotification,
      t,
    ]
  );

  const { handleSubmit } = form;

  const onSubmit = useMemo(() => handleSubmit(submitHandler), [
    handleSubmit,
    submitHandler,
  ]);

  const {
    formState: { isSubmitting, isValidating },
  } = form;

  const submitDisabled = mutationState.loading || isSubmitting || isValidating;

  return (
    <FormProvider {...form}>
      {props.watchInConsole && <Watcher<T> control={form.control} />}

      <form onSubmit={onSubmit}>
        {props.contentTitle && (
          <ContentTitle as="h2">{props.contentTitle}</ContentTitle>
        )}
        <GlobalErrors globalErrors={state.globalErrors} />
        {children({ form })}
        <Styled.Footer className="l-flex l-flex--gap">
          <Button disabled={submitDisabled} type="submit">
            {t("forms.common.save")}
          </Button>
        </Styled.Footer>
      </form>
    </FormProvider>
  );
}

interface BaseProps<M extends MutationParameters, T extends FieldValues> {
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
  children: RenderForm<T>;

  /**
   * An optional title to render
   */
  contentTitle?: string;

  /**
   * Default values for the form. Not extensively tested yet.
   */
  defaultValues?: DefaultValues<T>;

  /**
   * Unfortunately, there's not an easy way to express nested relay response structures
   * with generics in TypeScript. To get around that, we need to specify a simple getter
   * that can pluck out the necessary mutation response. It does double duty by making
   * sure that we are including the `...MutationForm_mutationErrors` fragment, which is
   * necessary.
   *
   * @see useGetErrors to generate type-safely without extra renders
   *
   * @example
   * // must explicitly return null, not undefined
   * const getErrors = (response) => response.createAsset ?? null;
   */
  getErrors?: GetErrors<M>;

  /**
   * The graphql node for our mutation.
   */
  mutation: GraphQLTaggedNode;

  /**
   * The name of the mutation field, for debugging purposes and possible future improved
   * introspection as our typescript-fu increases. It should match the `camelCase` style
   * field, similar to whatever is used with `getErrors`
   *
   * @example
   * "createAsset"
   */
  name: MutationName<M>;

  /**
   * By default, because we're ensuring that we fetch errors when processing a mutation,
   * "success" is determined simply by checking to make sure the response has no errors.
   *
   * Should we need to, we can override with this hook.
   *
   * @see useIsSuccess to generate type-safely without extra renders
   */
  isSuccess?: IsSuccessPredicate<M, T>;

  /**
   * Optionally process the response on a successful mutation. Redirect to another page,
   * pop up a toast notification, etc.
   *
   * "Success" is determined by `isSuccess` prop, or by the mutation response having no errors.
   *
   * @see useOnSuccess to generate type-safely without extra renders
   */
  onSuccess?: OnSuccessCallback<M, T>;

  /**
   * Optionally process the response on a failed mutation. Redirect to another page,
   * pop up a toast notification, etc.
   *
   * "Failure" is determined by the `isSuccess` prop, or by the mutation response having at least one error.
   *
   * @see useOnFailure to generate type-safely without extra renders
   */
  onFailure?: OnFailureCallback<M, T>;

  /**
   * Setting this to true will activate a monitor that will log changes to the form
   * in the browser console.
   */
  watchInConsole?: boolean;

  /**
   * If set, the form will populate a toast notification with this message on success. The
   * value will be passed through localization first.
   */
  successNotification?: string;

  /**
   * If set, the form will populate a toast notification with this message on failure. The
   * value will be passed through localization first.
   */
  failureNotification?: string;

  /**
   * Query refetchTags is an array of strings. When a mutation is successful, the mutated property
   * in the page context will be updated with these refetchTags. The QueryWrapper component can
   * choose to refresh itself if any of its refetchTags match these refetchTags.
   */
  refetchTags?: string[];
}

type Props<M extends MutationParameters, T extends FieldValues> = BaseProps<
  M,
  T
> &
  AcceptsToVariables<M, T>;

function checkSuccess<M extends MutationParameters, T extends FieldValues>(
  response: M["response"],
  errors: ErrorMap<T>,
  data: UnpackNestedValue<T>,
  isSuccess?: IsSuccessPredicate<M, T>
): boolean {
  if (typeof isSuccess === "function") {
    return isSuccess(response, data);
  }

  return hasNoErrors(errors);
}

/**
 * This is a type predicate to check that our mutation payload is valid
 * and has the right error fragments attached.
 *
 * @param payload
 * @returns
 */
function hasErrors<M extends MutationParameters>(
  payload: M["response"][MutationName<M>]
): payload is PayloadWithErrors<M> {
  if (payload && hasFragments<M>(payload) && payload.__fragments) {
    return Boolean(payload.__fragments.MutationForm_mutationErrors);
  }

  return false;
}

function hasFragments<M extends MutationParameters>(
  payload: M["response"][MutationName<M>]
): payload is PayloadWithFragments<M> {
  return "__fragments" in payload;
}

const errorFragment = graphql`
  fragment MutationForm_mutationErrors on StandardMutationPayload @inline {
    attributeErrors {
      path
      type
      messages
    }

    globalErrors {
      message
    }

    errors {
      message
    }
  }
`;
