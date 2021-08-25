import React, { useCallback, useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import type {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  UnpackNestedValue,
  UseFormReturn,
} from "react-hook-form";

import { Button, ContentTitle } from "components/atomic";

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
}: Props<T>) {
  const form = useForm<T>({
    criteriaMode: "all",
    defaultValues,
  });

  const { handleSubmit } = form;

  const submitHandler: SubmitHandler<T> = useCallback(
    (data) => {
      if (typeof onSubmitCallback === "function") {
        onSubmitCallback(data);
      }
    },
    [onSubmitCallback]
  );

  const onSubmit = useMemo(() => handleSubmit(submitHandler), [
    handleSubmit,
    submitHandler,
  ]);

  const {
    formState: { isSubmitting, isValidating },
  } = form;

  const submitDisabled = isSubmitting || isValidating;

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        {contentTitle && <ContentTitle as="h2">{contentTitle}</ContentTitle>}
        {children({ form })}
        <div className="l-flex l-flex--gap">
          <Button disabled={submitDisabled} type="submit">
            Submit
          </Button>
          <Button type="button" secondary>
            Cancel
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
}

type RenderProps<T extends FieldValues> = (props: {
  form: UseFormReturn<T>;
}) => JSX.Element;

type OnSubmitCallback<T extends FieldValues = FieldValues> = (
  data: UnpackNestedValue<T>
) => void;
