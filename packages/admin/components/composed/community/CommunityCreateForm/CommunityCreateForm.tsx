import { graphql } from "react-relay";
import MutationForm, {
  useRenderForm,
  Forms,
  useToVariables,
} from "components/api/MutationForm";
import {
  communityHeroFieldDescription,
  logoFieldDescription,
} from "helpers/i18n";
import type {
  CommunityCreateFormMutation,
  CreateCommunityInput,
} from "@/relay/CommunityCreateFormMutation.graphql";

export default function CommunityCreateForm({ onSuccess }: Props) {
  const toVariables = useToVariables<CommunityCreateFormMutation, Fields>(
    (data) => {
      const { heroImage, heroImageMetadata, ...inputData } = data;

      return {
        input: {
          ...inputData,
          ...(heroImage && { heroImage, heroImageMetadata }),
        },
      };
    },
    [],
  );

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
        <Forms.FileImageUpload
          label="forms.fields.logo"
          name="logo"
          description={logoFieldDescription}
        />
        <Forms.Textarea label="forms.fields.summary" {...register("summary")} />

        <Forms.Fieldset label="Hero">
          <Forms.FileImageUpload
            label="forms.fields.hero_image"
            name="heroImage"
            description={communityHeroFieldDescription}
          />
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
        <Forms.Input
          type="number"
          label="forms.fields.position"
          {...register("position", {
            valueAsNumber: true,
          })}
        />
      </Forms.Grid>
    ),
    [],
  );

  return (
    <MutationForm<CommunityCreateFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      successNotification="messages.create.community_success"
      name="createCommunity"
      refetchTags={["communities"]}
      toVariables={toVariables}
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
