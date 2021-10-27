import React, { useState } from "react";
import { graphql } from "react-relay";
import MutationForm, {
  useRenderForm,
  Forms,
} from "components/api/MutationForm";
import { useMaybeFragment } from "hooks";

import type {
  ItemAddFormMutation,
  CreateItemInput,
} from "@/relay/ItemAddFormMutation.graphql";
import type { ItemAddFormSchemaOptionsFragment$key } from "@/relay/ItemAddFormSchemaOptionsFragment.graphql";

export default function ItemAddForm({ onSuccess, onCancel, data }: Props) {
  const [hidden, sethidden] = useState(false);
  const toggleVisibilityFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    sethidden(e.currentTarget.checked);
  };

  const schemaData = useMaybeFragment<ItemAddFormSchemaOptionsFragment$key>(
    fragment,
    data
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.title"
          required
          {...register("title")}
        />
        {schemaData && (
          <Forms.Select
            options={schemaData.schemaVersionOptions.map((option) => ({
              label: option.label,
              value: option.value,
            }))}
            label="forms.schema.label"
            {...register("schemaVersionSlug")}
          />
        )}
        <Forms.Input label="forms.fields.doi" {...register("doi")} />
        <Forms.DatePicker
          label="forms.fields.publication_date"
          {...register("publishedOn")}
        />
        <Forms.FileUpload
          label="forms.fields.thumbnail"
          {...register("thumbnail")}
        />
        <Forms.Textarea label="forms.fields.summary" {...register("summary")} />
        <Forms.Switch
          label="forms.fields.visibility"
          text="Hidden"
          {...register("visibility")}
          onChange={(e) => {
            register("visibility").onChange(e);
            toggleVisibilityFields(e);
          }}
        />
        {!hidden && (
          <Forms.DatePicker
            label="forms.fields.visible_until"
            {...register("visibleUntilAt")}
          />
        )}
        {hidden && (
          <Forms.DatePicker
            label="forms.fields.visible_after"
            {...register("visibleAfterAt")}
          />
        )}
        <Forms.Checkbox checked name="redirect">
          Open new item on create
        </Forms.Checkbox>
      </Forms.Grid>
    ),
    [hidden]
  );
  return (
    <MutationForm<ItemAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      successNotification="messages.add.item_success"
      onCancel={onCancel}
      name="createItem"
      refetchTags={["items"]}
    >
      {renderForm}
    </MutationForm>
  );
}

type Fields = Omit<CreateItemInput, "clientMutationId">;

type Props = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
> & {
  data?: ItemAddFormSchemaOptionsFragment$key;
};

const fragment = graphql`
  fragment ItemAddFormSchemaOptionsFragment on Query {
    schemaVersionOptions(kind: ITEM) {
      label
      value
    }
  }
`;

const mutation = graphql`
  mutation ItemAddFormMutation($input: CreateItemInput!) {
    createItem(input: $input) {
      item {
        title
        slug
      }
      ...MutationForm_mutationErrors
    }
  }
`;
