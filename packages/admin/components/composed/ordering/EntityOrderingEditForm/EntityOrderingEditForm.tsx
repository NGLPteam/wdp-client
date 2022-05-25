import React, { useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import { MutationForm } from "components/api";
import {
  Forms,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";
import {
  EntityOrderingEditFormMutation as Mutation,
  OrderDefinitionInput,
  OrderingFilterDefinitionInput,
  UpdateOrderingInput,
} from "@/relay/EntityOrderingEditFormMutation.graphql";
import { EntityOrderingEditFormFragment$key } from "@/relay/EntityOrderingEditFormFragment.graphql";

type FormProps = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
>;

type Fields = Omit<UpdateOrderingInput, "clientMutationId" | "filter"> & {
  filterSchemas: string[];
};

export default function EntityOrderingEditForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const entity = useFragment<EntityOrderingEditFormFragment$key>(
    fragment,
    data
  );

  const { ordering } = entity;

  // Convert readonly props to expected input
  const defaultValues = useMemo<Partial<Fields> | undefined>(() => {
    if (ordering) {
      const { id, order, filter, ...values } = ordering;

      return {
        order: order as OrderDefinitionInput[],
        filter: filter as OrderingFilterDefinitionInput,
        filterSchemas: filter.schemas.map((s) =>
          JSON.stringify({
            namespace: s.namespace,
            identifier: s.identifier,
          })
        ),
        ...values,
      };
    }
  }, [ordering]);

  // Return variable values to mutation
  const toVariables = useToVariables<Mutation, Fields>((data) => {
    const { filterSchemas, ...values } = data;

    const input = {
      ...values,
      filter: {
        schemas:
          typeof filterSchemas === "string"
            ? [JSON.parse(filterSchemas)]
            : data.filterSchemas.map((schema) => JSON.parse(schema)),
      },
      orderingId: ordering?.id || "",
    };

    return { input };
  }, []);

  // Render the form
  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => {
      return (
        <Forms.Grid>
          <Forms.Input
            label="forms.fields.display_name"
            required
            {...register("name")}
          />
          {entity && (
            <Forms.OrderDefinitionSelectControl name="order" data={entity} />
          )}
          <Forms.OrderRenderSelect {...register("render.mode")} />
          <Forms.OrderingDirectSelection {...register("select.direct")} />
          <Forms.OrderingLinksSelection
            contains={register("select.links.contains")}
            references={register("select.links.references")}
          />
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
    <MutationForm<Mutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.update.ordering_success"
      failureNotification="messages.update.ordering_failure"
      name="updateOrdering"
      refetchTags={["orderings"]}
      toVariables={toVariables}
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props extends FormProps {
  data: EntityOrderingEditFormFragment$key;
}

const fragment = graphql`
  fragment EntityOrderingEditFormFragment on Entity {
    ...OrderDefinitionSelectControlFragment
    ...SchemaCheckboxGroupFragment
    ordering(identifier: $identifier) {
      id
      name
      render {
        mode
      }
      order {
        path
        direction
      }
      select {
        direct
        links {
          contains
          references
        }
      }
      filter {
        schemas {
          namespace
          identifier
          version
        }
      }
    }
  }
`;

const mutation = graphql`
  mutation EntityOrderingEditFormMutation($input: UpdateOrderingInput!) {
    updateOrdering(input: $input) {
      ordering {
        id
        name
        render {
          mode
        }
        order {
          path
          direction
        }
        select {
          direct
          links {
            contains
            references
          }
        }
        filter {
          schemas {
            namespace
            identifier
            version
          }
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
