import React from "react";
import { graphql } from "react-relay";
import MutationForm, { Forms } from "components/api/MutationForm";

import type {
  RoleEditAccessFormMutation as Mutation,
  GrantAccessInput as Fields,
} from "@/relay/RoleEditAccessFormMutation.graphql";
import RoleSelect from "components/forms/RoleSelect";
import { useMaybeFragment } from "hooks";
import { RoleEditAccessFormFragment$key } from "@/relay/RoleEditAccessFormFragment.graphql";

const RoleEditAccessForm = ({
  data,
  onSuccess,
  onCancel,
  entityId,
  userId,
  roleId,
}: Props) => {
  const formData = useMaybeFragment(fragment, data);

  const defaultValues = {
    entityId,
    userId,
    roleId,
  };

  return (
    <MutationForm<Mutation, Fields>
      mutation={mutation}
      name="grantAccess"
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="forms.role.create.success"
      defaultValues={defaultValues}
    >
      {({ form: { register } }) => (
        <Forms.Grid>
          <input type="hidden" {...register("entityId")} />
          <input type="hidden" {...register("userId")} />
          <RoleSelect
            label="forms.fields.role"
            data={formData}
            {...register("roleId")}
          />
        </Forms.Grid>
      )}
    </MutationForm>
  );
};

interface Props
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onCancel"
  > {
  entityId?: string;
  userId?: string;
  roleId?: string;
  data?: RoleEditAccessFormFragment$key | null;
}

export default RoleEditAccessForm;

// Load dropdown lists
const fragment = graphql`
  fragment RoleEditAccessFormFragment on Query {
    ...RoleSelectFragment
  }
`;

const mutation = graphql`
  mutation RoleEditAccessFormMutation($input: GrantAccessInput!) {
    grantAccess(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;