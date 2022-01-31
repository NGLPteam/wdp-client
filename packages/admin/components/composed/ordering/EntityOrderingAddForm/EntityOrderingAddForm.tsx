import * as React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { convertToSlug } from "helpers";

import type {
  EntityOrderingAddFormMutation,
  CreateOrderingInput,
  OrderDefinitionInput,
  OrderingSelectDefinitionInput,
  OrderingDirectSelection,
} from "@/relay/EntityOrderingAddFormMutation.graphql";
import type { EntityOrderingAddFormFragment$key } from "@/relay/EntityOrderingAddFormFragment.graphql";

export default function EntityOrderingAddForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const formData = useFragment<EntityOrderingAddFormFragment$key>(
    fragment,
    data
  );

  const entity = formData.item ?? formData.collection;

  const toVariables = useToVariables<EntityOrderingAddFormMutation, Fields>(
    (data) => {
      let filter = {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let order: any[] = [];

      if (data.filterSchemas) {
        if (typeof data.filterSchemas === "string") {
          filter = {
            schemas: [JSON.parse(data.filterSchemas)],
          };
        } else {
          filter = {
            schemas: data.filterSchemas.map((schema) => JSON.parse(schema)),
          };
        }
      }

      if (data.sortby) {
        order = [JSON.parse(data.sortby)];
      }

      const input = {
        entityId: entity?.id || "",
        name: data.name,
        identifier: convertToSlug(data.name ?? undefined),
        order,
        filter,
      };

      return { input };
    },
    []
  );

  const defaultValues = {
    select: {
      direct: "CHILDREN" as OrderingDirectSelection,
    },
  };

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => {
      return (
        <Forms.Grid>
          <Forms.Input
            label="forms.fields.display_name"
            required
            {...register("name")}
          />
          <Forms.OrderingSortBy {...register("sortby")} />
          <Forms.OrderingDirectSelection {...register("select.direct")} />
          {entity && (
            <Forms.SchemaCheckboxGroup
              data={entity}
              name="filterSchema"
              register={{ ...register("filterSchemas") }}
            />
          )}
        </Forms.Grid>
      );
    },
    [entity]
  );

  return (
    <MutationForm<EntityOrderingAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.add.ordering_success"
      failureNotification="messages.add.ordering_failure"
      name="createOrdering"
      refetchTags={["nodes"]}
      toVariables={toVariables}
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
> & { data: EntityOrderingAddFormFragment$key };

type Fields = Omit<CreateOrderingInput, "clientMutationId"> &
  OrderDefinitionInput &
  OrderingSelectDefinitionInput & {
    sortby: string;
    filterSchemas: string[];
  };

const fragment = graphql`
  fragment EntityOrderingAddFormFragment on Query {
    collection(slug: $entitySlug) {
      id
      ...SchemaCheckboxGroupFragment
    }
    item(slug: $entitySlug) {
      id
      ...SchemaCheckboxGroupFragment
    }
  }
`;

const mutation = graphql`
  mutation EntityOrderingAddFormMutation($input: CreateOrderingInput!) {
    createOrdering(input: $input) {
      ordering {
        name
      }
      ...MutationForm_mutationErrors
    }
  }
`;
