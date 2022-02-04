import React from "react";

import { graphql } from "react-relay";

import MutationForm, {
  useRenderForm,
  Forms,
} from "components/api/MutationForm";

import type {
  CommunityCreateFormMutation,
  CreateCommunityInput,
} from "@/relay/CommunityCreateFormMutation.graphql";

export default function CommunityCreateForm({ onSuccess }: Props) {
  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.title"
          isWide
          required
          {...register("title")}
        />
        <Forms.Input
          label="forms.fields.tagline"
          {...register("tagline")}
          isWide
        />
        <Forms.FileUpload label="forms.fields.logo" name="logo" />
        <Forms.Textarea label="forms.fields.summary" {...register("summary")} />

        <Forms.Fieldset label="Hero">
          <Forms.FileUpload label="forms.fields.hero_image" name="heroImage" />
          <Forms.AltText {...register("heroImageMetadata.alt")} />
          <Forms.Select
            label="forms.fields.hero_layout"
            options={[
              { label: "One Column", value: "ONE_COLUMN" },
              { label: "Two Column", value: "TWO_COLUMN" },
            ]}
            isWide
            required
            defaultValue="ONE_COLUMN"
            {...register("heroImageLayout")}
          />
        </Forms.Fieldset>
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<CommunityCreateFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      successNotification="messages.create.community_success"
      name="createCommunity"
      refetchTags={["communities"]}
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<React.ComponentProps<typeof MutationForm>, "onSuccess">;

type Fields = Omit<CreateCommunityInput, "clientMutationId" | "image">;

const mutation = graphql`
  mutation CommunityCreateFormMutation($input: CreateCommunityInput!) {
    createCommunity(input: $input) {
      community {
        title
      }
      ...MutationForm_mutationErrors
    }
  }
`;
