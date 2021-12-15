import React, { useEffect, useMemo } from "react";
import groupBy from "lodash/groupBy";
import { useFragment, useMutation } from "relay-hooks";
import { graphql } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { useForm, useWatch, FormProvider } from "react-hook-form";
import type {
  Control,
  FieldValues,
  MultipleFieldErrors,
  Path,
} from "react-hook-form";

import Actions from "./Actions";
import Context from "./Context";
import type { State } from "./Context";

import type { OnSuccessCallback } from "./types";
import type {
  SchemaInstanceProviderApplyMutation,
  SchemaInstanceProviderApplyMutationResponse as MutationResponse,
  ApplySchemaPropertiesInput,
} from "@/relay/SchemaInstanceProviderApplyMutation.graphql";
import type {
  SchemaInstanceProviderFragment$key,
  SchemaInstanceProviderFragment,
} from "@/relay/SchemaInstanceProviderFragment.graphql";
import { useNotify } from "hooks";

export default function SchemaInstanceProvider({
  successNotification,
  failureNotification,
  ...props
}: Props) {
  const context = useExtractContext(props);
  const notify = useNotify();
  const { t } = useTranslation();

  const [apply] =
    useMutation<SchemaInstanceProviderApplyMutation>(applyMutation);

  const form = useForm({
    defaultValues: context.fieldValues,
    mode: "all",
  });

  const { entityId } = context;

  const { onSuccess, onSaveAndClose, onCancel } = props;

  const { handleSubmit, setError } = form;

  const onSubmit = useMemo(() => {
    return handleSubmit(async function (values, event) {
      if (!entityId) {
        /* eslint-disable no-console */
        console.warn("No entity ID to apply properties to");

        return null;
      }

      const input: ApplySchemaPropertiesInput = {
        entityId,
        propertyValues: values,
      };

      const response = await apply({ variables: { input } });

      if (response && response.applySchemaProperties) {
        const { entity, schemaErrors } = response.applySchemaProperties;

        if (entity) {
          // First, notify
          if (successNotification) {
            notify.success(t(successNotification));
          }

          console.dir(entity);

          if (typeof onSuccess === "function") {
            onSuccess({ values });
          }

          if (
            event?.target.dataset.close &&
            typeof onSaveAndClose === "function"
          ) {
            onSaveAndClose();
          }
        } else if (schemaErrors.length > 0) {
          /* eslint-disable no-console */
          console.error(schemaErrors);

          if (failureNotification) {
            notify.error(t(failureNotification));
          }

          const errors = convertSchemaErrors(schemaErrors);

          for (const { path, error } of errors) {
            setError(path, error);
          }
        }
      }
    });
  }, [
    apply,
    entityId,
    handleSubmit,
    onSuccess,
    onSaveAndClose,
    setError,
    successNotification,
    failureNotification,
    notify,
    t,
  ]);

  return (
    <Context.Provider value={context}>
      <form onSubmit={onSubmit}>
        <FormProvider {...form}>
          {props.watchInConsole && <Watcher control={form.control} />}
          {props.children}
          <Actions
            onCancel={onCancel}
            onSaveAndClose={onSaveAndClose ? onSubmit : undefined}
          />
        </FormProvider>
      </form>
    </Context.Provider>
  );
}

interface Props {
  children: React.ReactNode;
  context: SchemaInstanceProviderFragment$key;
  onSuccess?: OnSuccessCallback;
  onSaveAndClose?: () => void;
  onCancel?: () => void;
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
   * Setting this to true will activate a monitor that will log changes to the form
   * in the browser console.
   */
  watchInConsole?: boolean;
}

function useExtractContext(props: Props): State {
  const raw = useFragment(fragment, props.context);

  return enforceContext(raw);
}

function enforceContext(context: SchemaInstanceProviderFragment): State {
  if (isValidContext(context)) {
    return context;
  } else {
    return {
      assets: [],
      contributors: [],
      defaultValues: {},
      fieldValues: {},
    };
  }
}

function isValidContext(context: unknown): context is State {
  return Boolean(context);
}

function Watcher({ control }: { control: Control }) {
  const formState = useWatch({ control });

  useEffect(
    function watchValues() {
      /* eslint-disable no-console */
      console.dir({ value: formState });
    },
    [formState]
  );

  return null;
}

const fragment = graphql`
  fragment SchemaInstanceProviderFragment on SchemaInstanceContext {
    assets {
      kind
      label
      value
    }

    contributors {
      kind
      label
      value
    }

    defaultValues
    entityId
    fieldValues
    schemaVersionSlug
  }
`;

const applyMutation = graphql`
  mutation SchemaInstanceProviderApplyMutation(
    $input: ApplySchemaPropertiesInput!
  ) {
    applySchemaProperties(input: $input) {
      entity {
        ... on Node {
          id
        }
      }

      schemaErrors {
        hint
        message
        metadata
        path
      }
    }
  }
`;

type SchemaErrors = NonNullable<
  MutationResponse["applySchemaProperties"]
>["schemaErrors"];

function convertSchemaErrors(
  schemaErrors: SchemaErrors
): ConvertedSchemaError[] {
  if (schemaErrors.length === 0) {
    return [];
  }

  const grouped = groupBy(schemaErrors, "path");

  const errors: ConvertedSchemaError[] = [];

  for (const [path, errs] of Object.entries(grouped)) {
    const messages = errs.map(({ message }) => message);

    const types: MultipleFieldErrors = {};

    messages.forEach(function (message, index) {
      types[`error_${index}`] = message;
    });

    if (isPath(path)) {
      errors.push({ path, error: { types } });
    }
  }

  return errors;
}

function isPath(path: string): path is Path<FieldValues> {
  return Boolean(path);
}

type ConvertedSchemaError = {
  path: Path<FieldValues>;

  error: {
    types: MultipleFieldErrors;
  };
};
