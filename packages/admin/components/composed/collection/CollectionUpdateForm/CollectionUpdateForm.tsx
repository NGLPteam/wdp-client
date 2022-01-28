import React from "react";
import { graphql, useFragment, readInlineData } from "react-relay";
import { getDateOnly } from "@wdp/lib/helpers";
import omit from "lodash/omit";
import pick from "lodash/pick";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
  useIsSuccess,
  useOnFailure,
} from "components/api/MutationForm";
import type {
  UpdateCollectionInput,
  CollectionUpdateFormMutation,
} from "@/relay/CollectionUpdateFormMutation.graphql";
import type { CollectionUpdateFormFragment$key } from "@/relay/CollectionUpdateFormFragment.graphql";
import type { CollectionUpdateFormFieldsFragment$key } from "@/relay/CollectionUpdateFormFieldsFragment.graphql";
import SchemaFormFields from "components/api/SchemaFormFields";
import { useSchemaContext, useSchemaProperties } from "components/api/hooks";
import { sanitizeDateField } from "helpers";
import {
  CollectionUpdateForm_schemaErrorsFragment,
  // eslint-disable-next-line max-len
  CollectionUpdateForm_schemaErrorsFragment$key as SchemaErrorsFragment$key,
} from "@/relay/CollectionUpdateForm_schemaErrorsFragment.graphql";
import { convertSchemaErrors } from "components/api/SchemaInstanceForm/convertSchemaErrors";

// eslint-disable-next-line camelcase, prettier/prettier
type SchemaErrors = CollectionUpdateForm_schemaErrorsFragment["schemaErrors"];

export default function CollectionUpdateForm({
  data,
  onSuccess,
  onSaveAndClose,
  onCancel,
}: Props) {
  // eslint-disable-next-line prettier/prettier
  const {
    collectionId = "",
    ...fieldsData
  } = useFragment<CollectionUpdateFormFragment$key>(fragment, data);

  const {
    thumbnail,
    heroImage,
    visibleAfterAt,
    visibleUntilAt,
    published,
    accessioned,
    available,
    issued,
    ...values
  } = useFragment<CollectionUpdateFormFieldsFragment$key>(
    fieldsFragment,
    fieldsData
  );

  const mutationName = "updateCollection";

  // eslint-disable-next-line prettier/prettier
  const {
    fieldValues: schemaFieldValues,
    defaultValues: schemaDefaultValues,
  } = useSchemaContext(fieldsData.context);

  const schemaProperties = useSchemaProperties(fieldsData);

  const isSuccess = useIsSuccess<CollectionUpdateFormMutation, Fields>(
    function (response) {
      const errors = readInlineData<SchemaErrorsFragment$key>(
        schemaErrorsFragment,
        response[mutationName]
      );

      return !errors?.schemaErrors || errors.schemaErrors.length === 0;
    },
    [mutationName]
  );

  const onFailure = useOnFailure<CollectionUpdateFormMutation, Fields>(
    function ({ response, setError }) {
      const errors = readInlineData<SchemaErrorsFragment$key>(
        schemaErrorsFragment,
        response[mutationName]
      );

      if (errors?.schemaErrors) {
        const convertedErrors = convertSchemaErrors<SchemaErrors>(
          errors.schemaErrors
        );

        for (const { path, error } of convertedErrors) {
          setError(path, error);
        }
      }
    },
    []
  );

  const defaultValues = {
    ...values,
    title: values.title || undefined,
    visibleAfterAt: getDateOnly(visibleAfterAt),
    visibleUntilAt: getDateOnly(visibleUntilAt),
    ...schemaDefaultValues,
    ...schemaFieldValues,
  };

  const toVariables = useToVariables<CollectionUpdateFormMutation, Fields>(
    (data) => {
      const inputValues = omit(data, schemaProperties);

      const schemaValues = pick(data, schemaProperties);

      return {
        input: {
          ...(inputValues as UpdateCollectionInput),
          visibleAfterAt: sanitizeDateField(data.visibleAfterAt),
          visibleUntilAt: sanitizeDateField(data.visibleUntilAt),
          schemaProperties: { ...schemaValues },
          collectionId,
        },
      };
    },
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, watch } }) => (
      <>
        <Forms.Grid>
          <Forms.Input
            label="forms.fields.title"
            isWide
            {...register("title")}
          />
          <Forms.Input
            label="forms.fields.subtitle"
            isWide
            {...register("subtitle")}
          />
          <Forms.Select
            label="forms.fields.visibility"
            options={[
              { label: "Visible", value: "VISIBLE" },
              { label: "Hidden", value: "HIDDEN" },
              { label: "Limited", value: "LIMITED" },
            ]}
            isWide
            {...register("visibility")}
          />
          <Forms.Input label="forms.fields.doi" {...register("doi")} />
          <Forms.Input label="forms.fields.issn" {...register("issn")} />
          <Forms.FileUpload
            label="forms.fields.thumbnail"
            name="thumbnail"
            image={thumbnail?.thumb}
            clearName="clearThumbnail"
          />
          <Forms.FileUpload
            label="forms.fields.hero_image"
            name="heroImage"
            image={heroImage?.thumb}
            clearName="clearHeroImage"
          />
          <Forms.Textarea
            label="forms.fields.summary"
            isWide
            {...register("summary")}
          />
          <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
            <Forms.DatePicker
              label="forms.fields.visible_after"
              {...register("visibleAfterAt")}
            />
          </Forms.HiddenField>
          <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
            <Forms.DatePicker
              label="forms.fields.visible_until"
              {...register("visibleUntilAt")}
            />
          </Forms.HiddenField>
          <Forms.VariablePrecisionDateControl
            name="published"
            data={published}
            label="forms.fields.published"
            isWide
          />
          <Forms.VariablePrecisionDateControl
            name="accessioned"
            data={accessioned}
            label="forms.fields.accessioned"
            isWide
          />
          <Forms.VariablePrecisionDateControl
            name="available"
            data={available}
            label="forms.fields.available"
            isWide
          />
          <Forms.VariablePrecisionDateControl
            name="issued"
            data={issued}
            label="forms.fields.issued"
            isWide
          />
        </Forms.Grid>
        <SchemaFormFields data={fieldsData} schemaKind="COLLECTION" />
      </>
    ),
    [fieldsData]
  );

  return (
    <MutationForm<CollectionUpdateFormMutation, Fields>
      name={mutationName}
      onSuccess={onSuccess}
      onSaveAndClose={onSaveAndClose}
      onCancel={onCancel}
      successNotification="messages.update.collection_success"
      failureNotification="messages.update.collection_failure"
      mutation={mutation}
      toVariables={toVariables}
      defaultValues={defaultValues}
      isSuccess={isSuccess}
      onFailure={onFailure}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onSaveAndClose" | "onCancel"
  > {
  data: CollectionUpdateFormFragment$key;
}

type Fields = Omit<UpdateCollectionInput, "collectionId">;

const fieldsFragment = graphql`
  fragment CollectionUpdateFormFieldsFragment on Collection {
    title
    subtitle
    doi
    issn
    visibility
    summary
    visibleAfterAt
    visibleUntilAt
    thumbnail {
      storage
      thumb {
        png {
          alt
          url
        }
      }
    }
    heroImage {
      storage
      thumb {
        png {
          alt
          url
        }
      }
    }
    published {
      ...VariablePrecisionDateControlFragment
    }
    accessioned {
      ...VariablePrecisionDateControlFragment
    }
    available {
      ...VariablePrecisionDateControlFragment
    }
    issued {
      ...VariablePrecisionDateControlFragment
    }
  }
`;

const mutation = graphql`
  mutation CollectionUpdateFormMutation($input: UpdateCollectionInput!) {
    updateCollection(input: $input) {
      collection {
        ...CollectionUpdateFormFieldsFragment
      }
      ...MutationForm_mutationErrors
      ...CollectionUpdateForm_schemaErrorsFragment
    }
  }
`;

const schemaErrorsFragment = graphql`
  fragment CollectionUpdateForm_schemaErrorsFragment on UpdateCollectionPayload
  @inline {
    schemaErrors {
      hint
      message
      metadata
      path
    }
  }
`;

const fragment = graphql`
  fragment CollectionUpdateFormFragment on Collection {
    collectionId: id

    context: schemaInstanceContext {
      ...useSchemaContextFragment
    }

    ...CollectionUpdateFormFieldsFragment
    ...SchemaFormFieldsFragment
    ...useSchemaPropertiesFragment
  }
`;
