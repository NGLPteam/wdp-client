import React, { useState, useCallback } from "react";
import { useFragment, graphql } from "react-relay";
import { useRouter } from "next/router";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
  useOnSuccess,
} from "components/api/MutationForm";
import { RouteHelper } from "routes";
import { useLocalStorage } from "hooks";
import { sanitizeDateField } from "helpers";
import type {
  ItemAddFormMutation,
  CreateItemInput,
} from "@/relay/ItemAddFormMutation.graphql";
import type { ItemAddFormFragment$key } from "@/relay/ItemAddFormFragment.graphql";

export default function ItemAddForm({ onSuccess, onCancel, data }: Props) {
  const [prevRedirectState, setPrevRedirect] = useLocalStorage(
    "nglp::open_entity_on_save",
    true,
  );
  const [redirectOnSuccess, setRedirectOnSuccess] = useState(prevRedirectState);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRedirectOnSuccess(e.target.checked);

  const router = useRouter();
  const redirect = useCallback(
    (slug: string, routeName: string) => {
      const newRoute = RouteHelper.findRouteByName(routeName);

      router.push({
        pathname: newRoute?.path,
        query: { slug },
      });
    },
    [router],
  );

  const onSuccessWithRedirect = useOnSuccess<ItemAddFormMutation, Fields>(
    ({
      response,
    }: {
      response: ItemAddFormMutation["response"];
      values: Fields;
      variables: ItemAddFormMutation["variables"];
    }) => {
      /* Redirect aborts if dialog.hide is called here. */
      /* Leaving this in as a note in case we need more nuanced logic for onSuccess. */
      /* Right now this component is only rendered in one place. */
      // if (onSuccess) onSuccess({ response, variables, values });
      setPrevRedirect(true);
      const routeName = "item.manage.details";
      if (response?.createItem?.item)
        redirect(response.createItem.item.slug, routeName);
    },
    [onSuccess, redirect],
  );
  const onSuccessNoRedirect = ({
    response,
    values,
    variables,
  }: {
    response: ItemAddFormMutation["response"];
    values: Fields;
    variables: ItemAddFormMutation["variables"];
  }) => {
    if (onSuccess) onSuccess({ response, variables, values });
    setPrevRedirect(false);
  };

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
    [],
  );

  const defaultValues = {
    visibility: "VISIBLE" as Fields["visibility"],
  };

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.title"
          required
          isWide
          {...register("title")}
        />
        <Forms.Input
          label="forms.fields.subtitle"
          isWide
          {...register("subtitle")}
        />
        <Forms.VisibilityFields />
        {formData && (
          <Forms.SchemaSelect
            label="forms.schema.label"
            data={formData}
            required
            {...register("schemaVersionSlug")}
          />
        )}
        <Forms.Input label="forms.fields.doi" {...register("doi")} />
        <Forms.FileImageUpload
          label="forms.fields.thumbnail"
          name="thumbnail"
        />
        <Forms.FileImageUpload
          label="forms.fields.hero_image"
          name="heroImage"
          description="forms.fields.hero_image_description"
        />
        <Forms.Textarea label="forms.fields.summary" {...register("summary")} />

        <Forms.VariablePrecisionDateControl
          name="published"
          label="forms.fields.published"
          isWide
        />
        <Forms.Checkbox
          defaultChecked={prevRedirectState}
          name="redirect"
          onChange={handleCheck}
        >
          Open new item on save
        </Forms.Checkbox>
      </Forms.Grid>
    ),
    [],
  );
  return (
    <MutationForm<ItemAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={
        redirectOnSuccess ? onSuccessWithRedirect : onSuccessNoRedirect
      }
      successNotification="messages.add.item_success"
      onCancel={onCancel}
      name="createItem"
      refetchTags={["items"]}
      toVariables={toVariables}
      defaultValues={defaultValues}
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
    # eslint-disable-next-line relay/must-colocate-fragment-spreads
    ...SchemaSelectFragment
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
