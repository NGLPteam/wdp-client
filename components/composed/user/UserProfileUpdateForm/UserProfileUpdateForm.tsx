import React from "react";
import { graphql, useFragment } from "react-relay";
import { UserProfileUpdateFormFragment$key } from "@/relay/UserProfileUpdateFormFragment.graphql";
import type {
  UpdateViewerSettingsInput as Input,
  UserProfileUpdateFormMutation as Mutation,
} from "@/relay/UserProfileUpdateFormMutation.graphql";
import type { UserProfileInput } from "types/graphql-schema";
import MutationForm, {
  Forms,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";

type Fields = Omit<Input, "profile"> & UserProfileInput;
type MutationFormProps = React.ComponentProps<typeof MutationForm>;

const UserProfileUpdateForm = ({ data, onSuccess, onCancel }: Props) => {
  // eslint-disable-next-line relay/generated-flow-types
  const fieldData = useFragment<UserProfileUpdateFormFragment$key>(
    fragment,
    data
  );

  const toVariables = useToVariables<Mutation, Fields>(
    ({ username, givenName, familyName, email, ...data }) => ({
      input: {
        profile: {
          username: fieldData?.username || "",
          givenName,
          familyName,
          email,
        },
        ...data,
      },
    }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.given_name"
          isWide
          {...register("givenName")}
        />
        <Forms.Input
          label="forms.fields.family_name"
          isWide
          {...register("familyName")}
        />
        <Forms.Email label="forms.fields.email" isWide {...register("email")} />
        <Forms.FileUpload
          label="forms.fields.avatar"
          name="avatar"
          image={fieldData?.avatar?.small}
          clearName="clearAvatar"
        />
      </Forms.Grid>
    ),
    []
  );

  const defaultValues = {
    givenName: fieldData.givenName || "",
    familyName: fieldData.familyName || "",
    email: fieldData.email || "",
  };

  return (
    <MutationForm<Mutation, Fields>
      name="updateViewerSettings"
      successNotification="messages.update.profile_success"
      mutation={mutation}
      toVariables={toVariables}
      defaultValues={defaultValues}
      onSuccess={onSuccess}
      onCancel={onCancel}
    >
      {renderForm}
    </MutationForm>
  );
};

interface Props extends Pick<MutationFormProps, "onSuccess" | "onCancel"> {
  data: UserProfileUpdateFormFragment$key;
}

export default UserProfileUpdateForm;

const mutation = graphql`
  mutation UserProfileUpdateFormMutation($input: UpdateViewerSettingsInput!) {
    updateViewerSettings(input: $input) {
      user {
        ...UserProfileUpdateFormFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment UserProfileUpdateFormFragment on User {
    givenName
    familyName
    email
    username
    avatar {
      small {
        png {
          url
          alt
          height
          width
        }
      }
    }
  }
`;
