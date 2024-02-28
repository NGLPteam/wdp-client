import React, { useCallback, useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import type {
  DefaultValues,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

/**
 * Our form inputs need a form context to be set.
 * This allows us to set up null forms that don't actually do
 * anything but still provide the correct environment when necessary.
 */
export default function BaseForm<T extends FieldValues = FieldValues>({
  children,
  defaultValues,
  onSubmit: onSubmitCallback,
}: Props<T>) {
  const form = useForm({
    criteriaMode: "all",
    defaultValues,
  });

  const { handleSubmit } = form;

  const submitHandler = useCallback(
    (data: T) => {
      if (typeof onSubmitCallback === "function") {
        onSubmitCallback(data);
      }
    },
    [onSubmitCallback],
  );

  const onSubmit = useMemo(
    () => handleSubmit(submitHandler),
    [handleSubmit, submitHandler],
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>{children({ form })}</form>
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
}) => React.JSX.Element;

type OnSubmitCallback<T extends FieldValues = FieldValues> = (data: T) => void;
