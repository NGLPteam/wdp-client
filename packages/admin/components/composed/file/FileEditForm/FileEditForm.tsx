import React from "react";

import { graphql, useFragment } from "react-relay";

import MutationForm, {
  useRenderForm,
  Forms,
  useToVariables,
} from "components/api/MutationForm";

import type {
  FileEditFormMutation,
  UpdateAssetInput,
} from "@/relay/FileEditFormMutation.graphql";
import { FileEditFormFragment$key } from "@/relay/FileEditFormFragment.graphql";

export default function FileEditForm({ data, onSuccess }: Props) {
  const { id, preview, previewMetadata, kind, fileSize, ...values } =
    useFragment(fragment, data);

  const toVariables = useToVariables<FileEditFormMutation, Fields>(
    (data) => ({
      input: { ...data, assetId: id, attachment: data.attachment || null },
    }),
    [id]
  );

  const defaultValues = {
    ...values,
    altText: previewMetadata?.alt,
  };

  /** Render the form */
  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input label="forms.fields.name" {...register("name")} />
        <Forms.FileUpload
          label="forms.fields.attachment"
          name="attachment"
          image={preview?.thumb}
          kind={kind}
          fileSize={fileSize}
        />
        <Forms.Input label="forms.fields.alt_text" {...register("altText")} />
        <Forms.Textarea label="forms.fields.caption" {...register("caption")} />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<FileEditFormMutation, Fields>
      name="updateAsset"
      mutation={mutation}
      onSuccess={onSuccess}
      successNotification="messages.create.file_success"
      refetchTags={["properties", "asset"]}
      toVariables={toVariables}
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<React.ComponentProps<typeof MutationForm>, "onSuccess"> {
  data: FileEditFormFragment$key;
}

type Fields = Omit<UpdateAssetInput, "entityId">;

const mutation = graphql`
  mutation FileEditFormMutation($input: UpdateAssetInput!) {
    updateAsset(input: $input) {
      asset {
        ... on Asset {
          ...FileEditFormFragment
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment FileEditFormFragment on Asset {
    id
    name
    caption
    kind
    fileSize
    preview {
      alt
      thumb {
        png {
          alt
          url
        }
      }
    }
    previewMetadata {
      alt
    }
  }
`;
