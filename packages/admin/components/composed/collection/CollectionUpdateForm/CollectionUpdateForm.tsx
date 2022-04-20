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
import { ParentSelector } from "components/forms";

// eslint-disable-next-line camelcase, prettier/prettier
type SchemaErrors = CollectionUpdateForm_schemaErrorsFragment["schemaErrors"];

export default function CollectionUpdateForm({
  data,
  onSuccess,
  onSaveAndClose,
  onCancel,
}: Props) {
  const collection = useFragment<CollectionUpdateFormFragment$key>(
    fragment,
    data
  );
  const { collectionId = "", ...fieldsData } = collection;

  const {
    thumbnail,
    heroImage,
    visibleAfterAt,
    visibleUntilAt,
    published,
    ...values
  } = useFragment<CollectionUpdateFormFieldsFragment$key>(
    fieldsFragment,
    fieldsData
  );

  const mutationName = "updateCollection";

  // eslint-disable-next-line prettier/prettier
  const { fieldValues: schemaFieldValues, defaultValues: schemaDefaultValues } =
    useSchemaContext(fieldsData.context);

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
    ({ form: { register } }) => (
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
          <Forms.VisibilityFields />
          <Forms.Input label="forms.fields.doi" {...register("doi")} />
          <Forms.Input label="forms.fields.issn" {...register("issn")} />
          <Forms.FileUpload
            data={thumbnail}
            label="forms.fields.thumbnail"
            name="thumbnail"
            clearName="clearThumbnail"
          />
          <Forms.FileUpload
            data={heroImage}
            label="forms.fields.hero_image"
            name="heroImage"
            clearName="clearHeroImage"
          />
          <Forms.Textarea
            label="forms.fields.summary"
            isWide
            {...register("summary")}
          />
          <Forms.VariablePrecisionDateControl
            name="published"
            data={published}
            label="forms.fields.published"
            isWide
          />
        </Forms.Grid>
        <SchemaFormFields data={fieldsData} schemaKind="COLLECTION" />
      </>
    ),
    [fieldsData]
  );

  return (
    <>
      <ParentSelector data={collection} />
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
    </>
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
      ...FileUploadFragment
    }
    heroImage {
      ...FileUploadFragment
    }
    published {
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
    ...ParentSelectorFragment

    context: schemaInstanceContext {
      ...useSchemaContextFragment
    }

    ...CollectionUpdateFormFieldsFragment
    ...SchemaFormFieldsFragment
    ...useSchemaPropertiesFragment
  }
`;
