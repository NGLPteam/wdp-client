import { graphql } from "relay-runtime";
import MutationForm, { Forms } from "components/api/MutationForm";

import type {
  UserGrantItemAccessFormMutation as Mutation,
  GrantAccessInput as Fields,
} from "@/relay/UserGrantItemAccessFormMutation.graphql";
import { NodeRoleSelect } from "components/forms/RoleSelect";

const UserGrantItemAccessForm = ({ onSuccess, onCancel, userId }: Props) => {
  const defaultValues = {
    userId,
  };

  return (
    <MutationForm<Mutation, Fields>
      mutation={mutation}
      name="grantAccess"
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.add.access_success"
      defaultValues={defaultValues}
      refetchTags={["allAccessGrants"]}
    >
      {({ form: { register, control, watch } }) => {
        const entityId = watch("entityId");

        return (
          <Forms.Grid>
            <input type="hidden" {...register("userId")} />
            <Forms.ItemTypeahead
              label="forms.fields.item"
              name="entityId"
              control={control}
            />
            <NodeRoleSelect nodeId={entityId} name="roleId" required />
          </Forms.Grid>
        );
      }}
    </MutationForm>
  );
};

interface Props
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onCancel"
  > {
  userId?: string;
}

export default UserGrantItemAccessForm;

const mutation = graphql`
  mutation UserGrantItemAccessFormMutation($input: GrantAccessInput!) {
    grantAccess(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;
