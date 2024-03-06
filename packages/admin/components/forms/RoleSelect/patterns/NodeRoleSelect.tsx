import { graphql } from "react-relay";
import { useFormContext } from "react-hook-form";
import useAuthenticatedQuery from "@wdp/lib/api/hooks/useAuthenticatedQuery";
import { Forms } from "components/api/MutationForm";
import { NodeRoleSelectQuery as Query } from "@/relay/NodeRoleSelectQuery.graphql";

/**
 * Renders a roles dropdown with options for a specific node.
 * This is used in forms where the entity is unknown until one is selected.
 */
export default function NodeRoleSelect({ nodeId, name, required }: Props) {
  const { register } = useFormContext();

  const data = useAuthenticatedQuery<Query>(
    query,
    // id can't be undefined, so we use an empty string to make typescript happy.
    { id: nodeId || "" },
    // Because an empty string is an invalid id,
    // we only want to run the query if an id is passed to this component.
    { skip: !nodeId },
  );

  return (
    <Forms.RoleSelect
      label="forms.fields.role"
      data={data?.node}
      required={required}
      {...register(name)}
    />
  );
}

interface Props {
  /** The node id, either an entity or a user */
  nodeId?: string;
  /** The form input name for registering with react-hook-form */
  name: string;
  /** If the field is required */
  required?: boolean;
}

// Get the roles for a particular node (collection, item, community, or user)
const query = graphql`
  query NodeRoleSelectQuery($id: ID!) {
    node(id: $id) {
      ...RoleSelectFragment
    }
  }
`;
