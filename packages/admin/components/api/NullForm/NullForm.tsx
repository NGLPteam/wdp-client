import React, { useCallback, useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import type {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  UnpackNestedValue,
  UseFormReturn,
} from "react-hook-form";

import { useTranslation } from "react-i18next";
import { Button } from "components/atomic";
import { ContentHeader } from "components/layout";

/**
 * Our form inputs need a form context to be set.
 * This allows us to set up null forms that don't actually do
 * anything but still provide the correct environment when necessary.
 */
export default function NullForm<T extends FieldValues = FieldValues>({
  children,
  contentTitle,
  defaultValues,
  onSubmit: onSubmitCallback,
  onCancel: onCancelCallback,
  onReset: onResetCallback,
  resetLabel,
  submitLabel,
}: Props<T>) {
  const { t } = useTranslation();

  const form = useForm<T>({
    criteriaMode: "all",
    defaultValues,
  });

  const { handleSubmit, reset } = form;

  const submitHandler: SubmitHandler<T> = useCallback(
    (data) => {
      if (typeof onSubmitCallback === "function") {
        onSubmitCallback(data);
      }
    },
    [onSubmitCallback]
  );

  const onSubmit = useMemo(
    () => handleSubmit(submitHandler),
    [handleSubmit, submitHandler]
  );

  const onReset = useCallback(() => {
    reset();
    if (onResetCallback) onResetCallback();
  }, [reset, onResetCallback]);

  const {
    formState: { isSubmitting, isValidating },
  } = form;

  const submitDisabled = isSubmitting || isValidating;

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        {contentTitle && (
          <ContentHeader headerStyle="secondary" title={contentTitle} />
        )}
        {children({ form })}
        <div className="l-flex l-flex--gap">
          <Button disabled={submitDisabled} type="submit">
            {t(submitLabel || "common.submit")}
          </Button>
          {onResetCallback && (
            <Button
              disabled={isSubmitting}
              onClick={onReset}
              type="reset"
              secondary
            >
              {t(resetLabel || "common.reset")}
            </Button>
          )}
          <Button type="button" secondary onClick={onCancelCallback}>
            {t("common.cancel")}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

interface Props<T extends FieldValues = FieldValues> {
  children: RenderProps<T>;

  contentTitle?: string;

  defaultValues?: DefaultValues<T>;

  /**
   * Optionally hook into the submit action for this null form.
   */
  onSubmit?: OnSubmitCallback<T>;
  /** Optional callback that runs on cancel */
  onCancel?: () => void;
  /** Adds a reset button that runs this callback */
  onReset?: () => void;
  /** Set the reset button label. Will be translated. */
  resetLabel?: string;
  submitLabel?: string;
}

type RenderProps<T extends FieldValues> = (props: {
  form: UseFormReturn<T>;
}) => JSX.Element;

type OnSubmitCallback<T extends FieldValues = FieldValues> = (
  data: UnpackNestedValue<T>
) => void;
