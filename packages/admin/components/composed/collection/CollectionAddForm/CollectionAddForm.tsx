import React, { useState, useCallback } from "react";
import { graphql, useFragment } from "react-relay";
import { useRouter } from "next/router";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
  useOnSuccess,
} from "components/api/MutationForm";
import { sanitizeDateField } from "helpers";
import { RouteHelper } from "routes";

import type { CollectionAddFormFragment$key } from "@/relay/CollectionAddFormFragment.graphql";
import type {
  CreateCollectionInput,
  CollectionAddFormMutation,
} from "@/relay/CollectionAddFormMutation.graphql";

export default function AddCollectionForm({
  onSuccess,
  onCancel,
  data,
  parentId,
}: Props) {
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

  const onSuccessWithRedirect = useOnSuccess<CollectionAddFormMutation, Fields>(
    ({
      response,
      variables,
      values,
    }: {
      response: CollectionAddFormMutation["response"];
      variables: CollectionAddFormMutation["variables"];
      values: Fields;
    }) => {
      if (onSuccess) {
        onSuccess({ response, variables, values });
        const routeName = "collection.manage.details";
        if (response?.createCollection?.collection)
          redirect(response.createCollection.collection.slug, routeName);
      }
    },
    [onSuccess, redirect]
  );

  const formData = useFragment<CollectionAddFormFragment$key>(fragment, data);

  const toVariables = useToVariables<CollectionAddFormMutation, Fields>(
    (data) => ({
      input: {
        ...data,
        visibleAfterAt: sanitizeDateField(data.visibleAfterAt),
        visibleUntilAt: sanitizeDateField(data.visibleUntilAt),
        parentId: parentId || data.parentId || "",
      },
    }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, watch } }) => (
      <Forms.Grid>
        {!parentId && (
          <Forms.CommunitySelect
            label="forms.fields.community"
            data={formData}
            required
            {...register("parentId")}
          />
        )}
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
        {formData && (
          <Forms.SchemaSelect
            label="forms.schema.label"
            data={formData}
            required
            {...register("schemaVersionSlug")}
          />
        )}
        <Forms.Input label="forms.fields.doi" {...register("doi")} />
        <Forms.FileUpload label="forms.fields.thumbnail" name="thumbnail" />
        <Forms.FileUpload label="forms.fields.heroImage" name="heroImage" />
        <Forms.Textarea label="forms.fields.summary" {...register("summary")} />
        <Forms.Select
          options={[
            { label: "Visible", value: "VISIBLE" },
            { label: "Hidden", value: "HIDDEN" },
            { label: "Limited", value: "LIMITED" },
          ]}
          label="forms.fields.visibility"
          required
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
        <Forms.VariablePrecisionDateControl
          name="published"
          label="forms.fields.published"
          isWide
        />
        <Forms.VariablePrecisionDateControl
          name="accessioned"
          label="forms.fields.accessioned"
          isWide
        />
        <Forms.VariablePrecisionDateControl
          name="available"
          label="forms.fields.available"
          isWide
        />
        <Forms.VariablePrecisionDateControl
          name="issued"
          label="forms.fields.issued"
          isWide
        />
        <Forms.Checkbox name="redirect" onChange={handleCheck} defaultChecked>
          Open new collection on save
        </Forms.Checkbox>
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<CollectionAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={redirectOnSuccess ? onSuccessWithRedirect : onSuccess}
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
  parentId?: string;
};

type Fields = Omit<CreateCollectionInput, "clientMutationId">;

const fragment = graphql`
  fragment CollectionAddFormFragment on Query {
    # eslint-disable-next-line relay/must-colocate-fragment-spreads
    ...SchemaSelectFragment
    # eslint-disable-next-line relay/must-colocate-fragment-spreads
    ...CommunitySelectFragment
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
