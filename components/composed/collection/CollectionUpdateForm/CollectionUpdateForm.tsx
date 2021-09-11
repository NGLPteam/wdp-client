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

export default function CollectionUpdateForm({ data, onSuccess }: Props) {
  const {
    collectionId = "",
    ...fieldsData
  } = useFragment<CollectionUpdateFormFragment$key>(fragment, data);

  const values = useFragment<CollectionUpdateFormFieldsFragment$key>(
    fieldsFragment,
    fieldsData
  );
  const defaultValues = { ...values, title: values.title || undefined };

  const toVariables = useToVariables<CollectionUpdateFormMutation, Fields>(
    (data) => ({ input: { ...data, collectionId } }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.collection.fields.title"
          {...register("title")}
        />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<CollectionUpdateFormMutation, Fields>
      name="updateCollection"
      onSuccess={onSuccess}
      successNotification="forms.collection.update.success"
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
  data: CollectionUpdateFormFragment$key;
}

type Fields = Omit<UpdateCollectionInput, "collectionId">;

const fieldsFragment = graphql`
  fragment CollectionUpdateFormFieldsFragment on Collection {
    title
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
    identifier
    ...CollectionUpdateFormFieldsFragment
  }
`;
