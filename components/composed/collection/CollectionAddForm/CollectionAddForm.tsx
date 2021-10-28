import * as React from "react";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { graphql, useFragment } from "react-relay";
import { sanitizeDateField } from "helpers";

import type { CollectionAddFormFragment$key } from "@/relay/CollectionAddFormFragment.graphql";
import type {
  CreateCollectionInput,
  CollectionAddFormMutation,
} from "@/relay/CollectionAddFormMutation.graphql";

export default function AddCollectionForm({
  onSuccess,
  onCancel,
  data,
}: Props) {
  const formData = useFragment<CollectionAddFormFragment$key>(fragment, data);

  const toVariables = useToVariables<CollectionAddFormMutation, Fields>(
    (data) => ({
      input: {
        ...data,
        visibleAfterAt: sanitizeDateField(data.visibleAfterAt),
        visibleUntilAt: sanitizeDateField(data.visibleUntilAt),
        parentId: formData.community?.id ?? formData.collection?.id ?? "",
      },
    }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, watch } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.title"
          required
          {...register("title")}
        />
        {formData && (
          <Forms.Select
            options={formData.schemaVersionOptions.map((option) => ({
              label: option.label,
              value: option.value,
            }))}
            label="forms.schema.label"
            required
            {...register("schemaVersionSlug")}
          />
        )}
        <Forms.Input label="forms.fields.doi" {...register("doi")} />
        <Forms.FileUpload
          label="forms.fields.thumbnail"
          {...register("thumbnail")}
        />
        <Forms.Textarea label="forms.fields.summary" {...register("summary")} />
        <Forms.Select
          options={[
            { label: "Visible", value: "VISIBLE" },
            { label: "Hidden", value: "HIDDEN" },
            { label: "Limited", value: "LIMITED" },
          ]}
          required
          label="forms.fields.visibility"
          {...register("visibility")}
        />
        <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
          <Forms.Datepicker
            label="forms.fields.visible_after"
            {...register("visibleAfterAt")}
          />
        </Forms.HiddenField>
        <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
          <Forms.Datepicker
            label="forms.fields.visible_until"
            {...register("visibleUntilAt")}
          />
        </Forms.HiddenField>
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<CollectionAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      successNotification="messages.create.collection_success"
      onCancel={onCancel}
      name="createCollection"
      refetchTags={["collections"]}
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
> & {
  data: CollectionAddFormFragment$key;
};

type Fields = Omit<CreateCollectionInput, "clientMutationId">;

const fragment = graphql`
  fragment CollectionAddFormFragment on Query {
    schemaVersionOptions(kind: COLLECTION) {
      label
      value
    }
    collection(slug: $parentSlug) {
      id
    }
    community(slug: $parentSlug) {
      id
    }
  }
`;

const mutation = graphql`
  mutation CollectionAddFormMutation($input: CreateCollectionInput!) {
    createCollection(input: $input) {
      collection {
        title
        slug
      }
      ...MutationForm_mutationErrors
    }
  }
`;
