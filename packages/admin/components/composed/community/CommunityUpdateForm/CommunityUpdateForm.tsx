import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  UpdateCommunityInput,
  CommunityUpdateFormMutation,
} from "@/relay/CommunityUpdateFormMutation.graphql";
import type { CommunityUpdateFormFragment$key } from "@/relay/CommunityUpdateFormFragment.graphql";
import type { CommunityUpdateFormFieldsFragment$key } from "@/relay/CommunityUpdateFormFieldsFragment.graphql";
import SchemaFormFields from "components/api/SchemaFormFields";
import { useSchemaContext, useSchemaProperties } from "components/api/hooks";

export default function CommunityUpdateForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const {
    communityId = "",
    ...fieldsData
  } = useFragment<CommunityUpdateFormFragment$key>(fragment, data);

  const {
    heroImage,
    logo,
    ...values
  } = useFragment<CommunityUpdateFormFieldsFragment$key>(
    fieldsFragment,
    fieldsData
  );

  const schemaProperties = useSchemaProperties(fieldsData);

  const {
    fieldValues: schemaFieldValues,
    defaultValues: schemaDefaultValues,
  } = useSchemaContext(fieldsData.context);

  const toVariables = useToVariables<CommunityUpdateFormMutation, Fields>(
    (data) => ({ input: { ...data, communityId } }),
    []
  );

  const defaultValues = {
    ...values,
    ...schemaDefaultValues,
  };

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <>
        <Forms.Grid>
          <Forms.Input
            label="forms.fields.title"
            {...register("title")}
            isWide
            required
          />
          <Forms.Input
            label="forms.fields.tagline"
            {...register("tagline")}
            isWide
          />
          <Forms.FileUpload
            label="forms.fields.logo"
            name="logo"
            image={logo?.thumb}
            clearName="clearLogo"
          />
          <Forms.Textarea
            label="forms.fields.summary"
            {...register("summary")}
          />
          <Forms.Fieldset label="Hero">
            <Forms.FileUpload
              label="forms.fields.hero_image"
              name="heroImage"
              image={heroImage?.thumb}
              clearName="clearHeroImage"
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
        </Forms.Grid>
        <SchemaFormFields data={fieldsData} schemaKind="COMMUNITY" />
      </>
    ),
    []
  );

  return (
    <MutationForm<CommunityUpdateFormMutation, Fields>
      name="updateCommunity"
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.update.community_success"
      mutation={mutation}
      toVariables={toVariables}
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onCancel"
  > {
  data: CommunityUpdateFormFragment$key;
}

type Fields = Omit<UpdateCommunityInput, "communityId">;

const fieldsFragment = graphql`
  fragment CommunityUpdateFormFieldsFragment on Community {
    title
    tagline
    summary
    heroImageLayout
    heroImage {
      storage
      thumb {
        png {
          alt
          url
        }
      }
    }
    logo {
      storage
      thumb {
        png {
          alt
          url
        }
      }
    }
    heroImageMetadata {
      alt
    }
  }
`;

const mutation = graphql`
  mutation CommunityUpdateFormMutation($input: UpdateCommunityInput!) {
    updateCommunity(input: $input) {
      community {
        ...CommunityUpdateFormFieldsFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment CommunityUpdateFormFragment on Community {
    communityId: id
    ...CommunityUpdateFormFieldsFragment
    ...SchemaFormFieldsFragment
    ...useSchemaPropertiesFragment

    context: schemaInstanceContext {
      ...useSchemaContextFragment
    }
  }
`;
