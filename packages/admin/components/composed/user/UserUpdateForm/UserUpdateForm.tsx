import { useFragment, graphql } from "react-relay";
import MutationForm, {
  Forms,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";
import { UserUpdateFormFragment$key } from "@/relay/UserUpdateFormFragment.graphql";
import type {
  UpdateUserInput as Input,
  UserUpdateFormMutation as Mutation,
} from "@/relay/UserUpdateFormMutation.graphql";
import type { UserProfileInput } from "types/graphql-schema";

type Fields = Omit<Input, "profile" | "id" | "username"> & UserProfileInput;

type MutationFormProps = React.ComponentProps<typeof MutationForm>;

const UserUpdateForm = ({ data, onSuccess, onCancel }: Props) => {
  const fieldData = useFragment<UserUpdateFormFragment$key>(fragment, data);

  const toVariables = useToVariables<Mutation, Fields>(
    ({
      userId: _userId,
      username: _username,
      givenName,
      familyName,
      email,
      ...data
    }) => ({
      input: {
        userId: fieldData?.id || "",
        profile: {
          username: fieldData?.username || "",
          givenName,
          familyName,
          email,
        },
        ...data,
      },
    }),
    [],
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.given_name"
          required
          {...register("givenName")}
        />
        <Forms.Input
          label="forms.fields.family_name"
          required
          {...register("familyName")}
        />
        <Forms.Email
          label="forms.fields.email"
          required
          isWide
          {...register("email")}
        />
        <Forms.FileImageUpload
          label="forms.fields.avatar"
          name="avatar"
          data={fieldData?.avatar}
          clearName="clearAvatar"
          isWide
        />
      </Forms.Grid>
    ),
    [],
  );

  const defaultValues = {
    givenName: fieldData.givenName || "",
    familyName: fieldData.familyName || "",
    email: fieldData.email || "",
  };

  return (
    <MutationForm<Mutation, Fields>
      name="updateUser"
      successNotification="messages.update.user_success"
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
  data: UserUpdateFormFragment$key;
}

export default UserUpdateForm;

const mutation = graphql`
  mutation UserUpdateFormMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        ...UserUpdateFormFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment UserUpdateFormFragment on User {
    id
    givenName
    familyName
    email
    username
    avatar {
      ...FileUploadFragment
    }
  }
`;
