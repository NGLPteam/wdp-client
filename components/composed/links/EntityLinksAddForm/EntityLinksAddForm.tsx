import React from "react";

import { graphql } from "react-relay";

import MutationForm, {
  useRenderForm,
  Forms,
} from "components/api/MutationForm";

import type {
  EntityLinksAddFormMutation,
  LinkEntityInput,
} from "@/relay/EntityLinksAddFormMutation.graphql";

export default function EntityLinksAddForm({ onSuccess }: Props) {
  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input label="forms.fields.targetId" {...register("targetId")} />
        <Forms.Select />
      </Forms.Grid>
    ),
    []
  );

  return null;
  // <MutationForm<EntityLinksAddFormMutation, Fields>
  //   mutation={mutation}
  //   onSuccess={onSuccess}
  //   successNotification="forms.community.create.success"
  //   name="createCommunity"
  //   refetchTags={["communities"]}
  // >
  //   {renderForm}
  // </MutationForm>
}

type Props = Pick<React.ComponentProps<typeof MutationForm>, "onSuccess">;

type Fields = Omit<LinkEntityInput, "clientMutationId">;

const mutation = graphql`
  mutation EntityLinksAddFormMutation($input: LinkEntityInput!) {
    linkEntity(input: $input) {
      link {
        source {
          ... on Item {
            title
          }
          ... on Community {
            title
          }
          ... on Collection {
            title
          }
        }
        target {
          ... on Item {
            title
          }
          ... on Community {
            title
          }
          ... on Collection {
            title
          }
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
