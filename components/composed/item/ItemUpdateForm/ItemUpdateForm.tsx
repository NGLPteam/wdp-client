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
import { getDateOnly, sanitizeDateField } from "helpers";

export default function ItemUpdateForm({
  data,
  onSuccess,
  onCancel,
  onSaveAndClose,
}: Props) {
  const {
    itemId = "",
    ...fieldsData
  } = useFragment<ItemUpdateFormFragment$key>(fragment, data);

  const {
    thumbnail,
    visibleAfterAt,
    visibleUntilAt,
    ...values
  } = useFragment<ItemUpdateFormFieldsFragment$key>(fieldsFragment, fieldsData);

  const defaultValues = {
    ...values,
    title: values.title || undefined,
    visibleAfterAt: getDateOnly(visibleAfterAt),
    visibleUntilAt: getDateOnly(visibleUntilAt),
  };

  const toVariables = useToVariables<ItemUpdateFormMutation, Fields>(
    (data) => ({
      input: {
        ...data,
        itemId,
        visibleAfterAt: sanitizeDateField(data.visibleAfterAt),
        visibleUntilAt: sanitizeDateField(data.visibleUntilAt),
      },
    }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, watch } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.item.fields.title"
          {...register("title")}
          isWide
        />
        <Forms.FileUpload
          label="forms.item.fields.thumbnail"
          name="thumbnail"
          image={thumbnail?.thumb}
          clearName="clearThumbnail"
        />
        <Forms.Textarea
          label="forms.item.fields.summary"
          {...register("summary")}
        />
        <Forms.Select
          label="forms.item.fields.visibility"
          options={[
            { label: "Visible", value: "VISIBLE" },
            { label: "Hidden", value: "HIDDEN" },
            { label: "Limited", value: "LIMITED" },
          ]}
          isWide
          {...register("visibility")}
        />
        <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
          <Forms.Datepicker
            label="forms.item.fields.visibleAfterAt"
            {...register("visibleAfterAt")}
          />
        </Forms.HiddenField>
        <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
          <Forms.Datepicker
            label="forms.item.fields.visibleUntilAt"
            {...register("visibleUntilAt")}
          />
        </Forms.HiddenField>
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<ItemUpdateFormMutation, Fields>
      name="updateItem"
      onSuccess={onSuccess}
      onSaveAndClose={onSaveAndClose}
      onCancel={onCancel}
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
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onCancel" | "onSaveAndClose"
  > {
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
