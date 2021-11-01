import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  EntityPageAddFormMutation,
  CreatePageInput,
} from "@/relay/EntityPageAddFormMutation.graphql";
import type { EntityPageAddFormFragment$key } from "@/relay/EntityPageAddFormFragment.graphql";

export default function EntityPageAddForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const sourceEntity = useFragment<EntityPageAddFormFragment$key>(
    fragment,
    data
  );

  const toVariables = useToVariables<EntityPageAddFormMutation, Fields>(
    (data) => ({ input: { ...data, entityId: sourceEntity.id || "" } }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input label="forms.fields.title" {...register("title")} />
        <Forms.Input label="forms.fields.slug" {...register("slug")} />
        <Forms.FileUpload
          label="forms.fields.heroImage"
          {...register("heroImage")}
        />
        <Forms.Textarea label="forms.fields.body" {...register("body")} />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<EntityPageAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.add.link_success"
      failureNotification="messages.add.link_failure"
      name="createPage"
      refetchTags={["edges"]}
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
> & { data: EntityPageAddFormFragment$key };

type Fields = Omit<CreatePageInput, "entityId">;

const fragment = graphql`
  fragment EntityPageAddFormFragment on AnyEntity {
    ... on Community {
      id
    }
    ... on Collection {
      id
    }
    ... on Item {
      id
    }
  }
`;

const mutation = graphql`
  mutation EntityPageAddFormMutation($input: CreatePageInput!) {
    createPage(input: $input) {
      page {
        title
        slug
      }
      ...MutationForm_mutationErrors
    }
  }
`;
