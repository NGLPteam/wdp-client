import { graphql } from "react-relay";
import MutationForm, { Forms } from "components/api/MutationForm";

import type {
  RoleGrantAccessFormMutation as Mutation,
  GrantAccessInput as Fields,
} from "@/relay/RoleGrantAccessFormMutation.graphql";
import UserTypeahead from "components/forms/UserTypeahead";
import RoleSelect from "components/forms/RoleSelect";
import { useMaybeFragment } from "hooks";
import { RoleGrantAccessFormRolesFragment$key } from "@/relay/RoleGrantAccessFormRolesFragment.graphql";

const RoleGrantAccessForm = ({
  rolesData,
  onSuccess,
  onCancel,
  entityId,
}: Props) => {
  const roles = useMaybeFragment(rolesFragment, rolesData);

  const defaultValues = {
    entityId,
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
      {({ form: { register, control } }) => (
        <Forms.Grid>
          <input type="hidden" {...register("entityId")} />
          <UserTypeahead
            label="forms.fields.user"
            name="userId"
            control={control}
          />
          <RoleSelect
            label="forms.fields.role"
            data={roles}
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
  rolesData?: RoleGrantAccessFormRolesFragment$key | null;
}

export default RoleGrantAccessForm;

const rolesFragment = graphql`
  fragment RoleGrantAccessFormRolesFragment on Entity {
    ...RoleSelectFragment
  }
`;

const mutation = graphql`
  mutation RoleGrantAccessFormMutation($input: GrantAccessInput!) {
    grantAccess(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;
