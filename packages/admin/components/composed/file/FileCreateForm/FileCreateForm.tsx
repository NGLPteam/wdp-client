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
        <Forms.Input label="forms.fields.name" {...register("name")} />
        <Forms.FileUpload label="forms.fields.attachment" name="attachment" />
        <Forms.Input label="forms.fields.alt_text" {...register("altText")} />
        <Forms.Textarea label="forms.fields.caption" {...register("caption")} />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<FileCreateFormMutation, Fields>
      name="createAsset"
      mutation={mutation}
      onSuccess={onSuccess}
      successNotification="messages.create.file_success"
      toVariables={toVariables}
      refetchTags={["properties", "asset"]}
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
