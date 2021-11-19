import React, { useState, useCallback } from "react";
import { graphql, useFragment } from "react-relay";
import { useRouter } from "next/router";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
  useOnSuccess,
} from "components/api/MutationForm";
import { RouteHelper } from "routes";

import type {
  ItemAddFormMutation,
  CreateItemInput,
} from "@/relay/ItemAddFormMutation.graphql";
import type { ItemAddFormFragment$key } from "@/relay/ItemAddFormFragment.graphql";
import { sanitizeDateField } from "helpers";

export default function ItemAddForm({ onSuccess, onCancel, data }: Props) {
  const [redirectOnSuccess, setRedirectOnSuccess] = useState(true);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRedirectOnSuccess(e.target.checked);

  const router = useRouter();
  const redirect = useCallback(
    (slug: string, routeName: string) => {
      const newRoute = RouteHelper.findRouteByName(routeName);

      router.replace({
        pathname: newRoute?.path,
        query: { slug },
      });
    },
    [router]
  );

  const onSuccessWithRedirect = useOnSuccess<ItemAddFormMutation, Fields>(
    ({
      response,
      values,
      variables,
    }: {
      response: ItemAddFormMutation["response"];
      values: Fields;
      variables: ItemAddFormMutation["variables"];
    }) => {
      if (onSuccess) onSuccess({ response, variables, values });
      const routeName = "item.manage.details";
      if (response?.createItem?.item)
        redirect(response.createItem.item.slug, routeName);
    },
    [onSuccess, redirect]
  );

  const formData = useFragment<ItemAddFormFragment$key>(fragment, data);

  const toVariables = useToVariables<ItemAddFormMutation, Fields>(
    (data) => ({
      input: {
        ...data,
        visibleAfterAt: sanitizeDateField(data.visibleAfterAt),
        visibleUntilAt: sanitizeDateField(data.visibleUntilAt),
        parentId: formData.item?.id ?? formData.collection?.id ?? "",
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
            required
            label="forms.schema.label"
            {...register("schemaVersionSlug")}
          />
        )}
        <Forms.Input label="forms.fields.doi" {...register("doi")} />
        <Forms.FileUpload label="forms.fields.thumbnail" name="thumbnail" />
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
          required
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
        <Forms.Checkbox defaultChecked name="redirect" onChange={handleCheck}>
          Open new item on save
        </Forms.Checkbox>
      </Forms.Grid>
    ),
    []
  );
  return (
    <MutationForm<ItemAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={redirectOnSuccess ? onSuccessWithRedirect : onSuccess}
      successNotification="messages.add.item_success"
      onCancel={onCancel}
      name="createItem"
      refetchTags={["items"]}
      toVariables={toVariables}
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
  data: ItemAddFormFragment$key;
};

const fragment = graphql`
  fragment ItemAddFormFragment on Query {
    schemaVersionOptions(kind: ITEM) {
      label
      value
    }
    item(slug: $entitySlug) {
      id
    }
    collection(slug: $entitySlug) {
      id
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
