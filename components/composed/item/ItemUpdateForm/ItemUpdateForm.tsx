import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  UpdateItemInput,
  ItemUpdateFormMutation,
} from "@/relay/ItemUpdateFormMutation.graphql";
import type { ItemUpdateFormFragment$key } from "@/relay/ItemUpdateFormFragment.graphql";
import type { ItemUpdateFormFieldsFragment$key } from "@/relay/ItemUpdateFormFieldsFragment.graphql";

export default function ItemUpdateForm({ data, onSuccess }: Props) {
  const {
    itemId = "",
    ...fieldsData
  } = useFragment<ItemUpdateFormFragment$key>(fragment, data);

  const {
    thumbnail,
    ...values
  } = useFragment<ItemUpdateFormFieldsFragment$key>(fieldsFragment, fieldsData);

  const defaultValues = { ...values, title: values.title || undefined };

  const toVariables = useToVariables<ItemUpdateFormMutation, Fields>(
    (data) => ({ input: { ...data, itemId } }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input label="forms.item.fields.title" {...register("title")} />
        <Forms.FileUpload
          label="forms.item.fields.thumbnail"
          name="image"
          image={thumbnail?.thumb}
          clearName="clearThumbnail"
        />
        <Forms.Select
          label="forms.item.fields.visibility"
          options={[
            { label: "Visible", value: "VISIBLE" },
            { label: "Hidden", value: "HIDDEN" },
            { label: "Limited", value: "LIMITED" },
          ]}
          {...register("visibility")}
        />
        <Forms.Textarea
          label="forms.item.fields.summary"
          {...register("summary")}
        />
        <Forms.Datepicker
          label="forms.item.fields.visibleAfterAt"
          {...register("visibleAfterAt")}
        />
        <Forms.Datepicker
          label="forms.item.fields.visibleUntilAt"
          {...register("visibleUntilAt")}
        />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<ItemUpdateFormMutation, Fields>
      name="updateItem"
      onSuccess={onSuccess}
      successNotification="forms.item.update.success"
      mutation={mutation}
      toVariables={toVariables}
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<React.ComponentProps<typeof MutationForm>, "onSuccess"> {
  data: ItemUpdateFormFragment$key;
}

type Fields = Omit<UpdateItemInput, "itemId">;

const fieldsFragment = graphql`
  fragment ItemUpdateFormFieldsFragment on Item {
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
  mutation ItemUpdateFormMutation($input: UpdateItemInput!) {
    updateItem(input: $input) {
      item {
        ...ItemUpdateFormFieldsFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment ItemUpdateFormFragment on Item {
    itemId: id
    ...ItemUpdateFormFieldsFragment
  }
`;
