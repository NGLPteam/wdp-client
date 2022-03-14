import React from "react";
import { graphql } from "react-relay";
import MutationForm, { Forms } from "components/api/MutationForm";

import type {
  UserGrantItemAccessFormMutation as Mutation,
  GrantAccessInput as Fields,
} from "@/relay/UserGrantItemAccessFormMutation.graphql";
import { useMaybeFragment } from "hooks";
import { NodeRoleSelect } from "components/forms/RoleSelect";
import { UserGrantItemAccessFormFragment$key } from "@/relay/UserGrantItemAccessFormFragment.graphql";

const UserGrantItemAccessForm = ({
  data,
  onSuccess,
  onCancel,
  userId,
}: Props) => {
  const formData = useMaybeFragment(fragment, data);

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
      {({ form: { register, control, watch } }) => {
        const entityId = watch("entityId");

        return (
          <Forms.Grid>
            <input type="hidden" {...register("userId")} />
            <Forms.ItemTypeahead
              label="forms.fields.item"
              name="entityId"
              control={control}
              data={formData}
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
  data?: UserGrantItemAccessFormFragment$key | null;
}

export default UserGrantItemAccessForm;

// Load dropdown lists
const fragment = graphql`
  fragment UserGrantItemAccessFormFragment on Query {
    # eslint-disable-next-line relay/must-colocate-fragment-spreads
    ...ItemTypeaheadFragment
  }
`;

const mutation = graphql`
  mutation UserGrantItemAccessFormMutation($input: GrantAccessInput!) {
    grantAccess(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;
