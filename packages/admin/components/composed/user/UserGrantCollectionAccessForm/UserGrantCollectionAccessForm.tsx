import React from "react";
import { graphql } from "react-relay";
import MutationForm, { Forms } from "components/api/MutationForm";
import type {
  UserGrantCollectionAccessFormMutation as Mutation,
  GrantAccessInput as Fields,
} from "@/relay/UserGrantCollectionAccessFormMutation.graphql";
import { UserGrantCollectionAccessFormFragment$key } from "@/relay/UserGrantCollectionAccessFormFragment.graphql";
import { NodeRoleSelect } from "components/forms/RoleSelect";

const UserGrantCollectionAccessForm = ({
  onSuccess,
  onCancel,
  userId,
}: Props) => {
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
    >
      {({ form: { register, watch, control } }) => {
        const entityId = watch("entityId");

        return (
          <Forms.Grid>
            <input type="hidden" {...register("userId")} />
            <Forms.CollectionTypeahead
              label="forms.fields.collection"
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
  data?: UserGrantCollectionAccessFormFragment$key | null;
}

export default UserGrantCollectionAccessForm;

const mutation = graphql`
  mutation UserGrantCollectionAccessFormMutation($input: GrantAccessInput!) {
    grantAccess(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;
