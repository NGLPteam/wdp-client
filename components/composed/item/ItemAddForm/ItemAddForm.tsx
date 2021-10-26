import * as React from "react";
import { graphql } from "react-relay";
import MutationForm, {
  useRenderForm,
  Forms,
} from "components/api/MutationForm";

import type {
  ItemAddFormMutation,
  CreateItemInput,
} from "@/relay/ItemAddFormMutation.graphql";

export default function ItemAddForm({ onSuccess, onCancel }: Props) {
  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.title"
          required
          {...register("title")}
        />
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
        <Forms.Switch text="Hidden" {...register("visibility")} />
        <Forms.Checkbox checked>Open new item on create</Forms.Checkbox>
      </Forms.Grid>
    ),
    []
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
>;

const mutation = graphql`
  mutation ItemAddFormMutation($input: CreateItemInput!) {
    createItem(input: $input) {
      item {
        title
      }
      ...MutationForm_mutationErrors
    }
  }
`;
