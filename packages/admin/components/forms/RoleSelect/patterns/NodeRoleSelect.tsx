import { useDeferredValue, useState, useEffect } from "react";
import { graphql, useRelayEnvironment, fetchQuery } from "react-relay";
import { useFormContext } from "react-hook-form";
import { Forms } from "components/api/MutationForm";
import { NodeRoleSelectQuery as Query } from "@/relay/NodeRoleSelectQuery.graphql";

/**
 * Renders a roles dropdown with options for a specific node.
 * This is used in forms where the entity is unknown until one is selected.
 */
export default function NodeRoleSelect({ nodeId, name, required }: Props) {
  const { register } = useFormContext();

  const [data, setData] = useState<Query["response"]>();

  const env = useRelayEnvironment();

  useEffect(() => {
    const fetchOptions = async () => {
      if (!nodeId) return;

      try {
        fetchQuery<Query>(
          env,
          query,
          { id: nodeId },
          {
            networkCacheConfig: { force: false },
          },
        ).subscribe({
          next: (data) => {
            setData(data);
          },
        });
      } catch (error) {
        /* eslint-disable-next-line no-console */
        console.log(error);
      }
    };

    fetchOptions();
  }, [nodeId, env]);

  const deferred = useDeferredValue(data);

  return (
    <Forms.RoleSelect
      label="forms.fields.role"
      data={deferred?.node}
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
