import React from "react";

import { graphql } from "react-relay";

import MutationForm, {
  useRenderForm,
  Forms,
  useToVariables,
} from "components/api/MutationForm";

import type {
  FileCreateFormMutation,
  CreateAssetInput,
} from "@/relay/FileCreateFormMutation.graphql";

export default function FileCreateForm({ entityId, onSuccess }: Props) {
  /** Convert values to variables, pass in entityId */
  const toVariables = useToVariables<FileCreateFormMutation, Fields>(
    (data) => ({ input: { ...data, entityId } }),
    [entityId]
  );

  /** Render the form */
  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input label="forms.file.fields.name" {...register("name")} />
        <Forms.FileUpload
          label="forms.file.fields.attachment"
          name="attachment"
        />
        <Forms.Input
          label="forms.file.fields.altText"
          {...register("altText")}
        />
        <Forms.Textarea
          label="forms.file.fields.caption"
          {...register("caption")}
        />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<FileCreateFormMutation, Fields>
      name="createAsset"
      mutation={mutation}
      onSuccess={onSuccess}
      successNotification="forms.file.create.success"
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<React.ComponentProps<typeof MutationForm>, "onSuccess"> {
  entityId: string;
}

type Fields = Omit<CreateAssetInput, "entityId">;

const mutation = graphql`
  mutation FileCreateFormMutation($input: CreateAssetInput!) {
    createAsset(input: $input) {
      asset {
        ... on Asset {
          id
          name
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
