import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  UpdateCollectionInput,
  CollectionUpdateFormMutation,
} from "@/relay/CollectionUpdateFormMutation.graphql";
import type { CollectionUpdateFormFragment$key } from "@/relay/CollectionUpdateFormFragment.graphql";
import type { CollectionUpdateFormFieldsFragment$key } from "@/relay/CollectionUpdateFormFieldsFragment.graphql";
import { getDateOnly, sanitizeDateField } from "helpers";

export default function CollectionUpdateForm({
  data,
  onSuccess,
  onSaveAndClose,
  onCancel,
}: Props) {
  const {
    collectionId = "",
    ...fieldsData
  } = useFragment<CollectionUpdateFormFragment$key>(fragment, data);

  const {
    thumbnail,
    visibleAfterAt,
    visibleUntilAt,
    ...values
  } = useFragment<CollectionUpdateFormFieldsFragment$key>(
    fieldsFragment,
    fieldsData
  );

  const defaultValues = {
    ...values,
    title: values.title || undefined,
    visibleAfterAt: getDateOnly(visibleAfterAt),
    visibleUntilAt: getDateOnly(visibleUntilAt),
  };

  const toVariables = useToVariables<CollectionUpdateFormMutation, Fields>(
    (data) => ({
      input: {
        ...data,
        collectionId,
        visibleAfterAt: sanitizeDateField(data.visibleAfterAt),
        visibleUntilAt: sanitizeDateField(data.visibleUntilAt),
      },
    }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, watch } }) => (
      <Forms.Grid>
        <Forms.Input label="forms.fields.title" isWide {...register("title")} />
        <Forms.FileUpload
          label="forms.fields.thumbnail"
          name="thumbnail"
          image={thumbnail?.thumb}
          clearName="clearThumbnail"
        />
        <Forms.Textarea label="forms.fields.summary" {...register("summary")} />
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
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<CollectionUpdateFormMutation, Fields>
      name="updateCollection"
      onSuccess={onSuccess}
      onSaveAndClose={onSaveAndClose}
      onCancel={onCancel}
      successNotification="messages.update.collection_success"
      mutation={mutation}
      toVariables={toVariables}
      defaultValues={defaultValues}
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
    visibility
    summary
    visibleAfterAt
    visibleUntilAt
    thumbnail {
      thumb {
        png {
          alt
          url
        }
      }
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
    }
  }
`;

const fragment = graphql`
  fragment CollectionUpdateFormFragment on Collection {
    collectionId: id
    ...CollectionUpdateFormFieldsFragment
  }
`;
