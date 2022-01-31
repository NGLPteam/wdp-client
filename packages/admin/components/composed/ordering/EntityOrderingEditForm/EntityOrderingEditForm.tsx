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

type Fields = Omit<UpdateOrderingInput, "clientMutationId">;

export default function EntityOrderingEditForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const { ordering } = useFragment<EntityOrderingEditFormFragment$key>(
    fragment,
    data
  );

  // Convert readonly props to expected input
  const defaultValues = useMemo<Partial<Fields> | undefined>(() => {
    if (ordering) {
      const { id, order, filter, ...values } = ordering;

      return {
        order: order as OrderDefinitionInput[],
        filter: filter as OrderingFilterDefinitionInput,
        ...values,
      };
    }
  }, [ordering]);

  // Return variable values to mutation
  const toVariables = useToVariables<Mutation, Fields>((data) => {
    const { ...values } = data;

    const input = {
      ...values,
      orderingId: ordering?.id || "",
    };

    return { input };
  }, []);

  // Render the form
  const renderForm = useRenderForm<Fields>(({ form: { register } }) => {
    return (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.display_name"
          required
          {...register("name")}
        />
        <Forms.OrderingDirectSelection {...register("select.direct")} />
      </Forms.Grid>
    );
  }, []);

  return (
    <MutationForm<Mutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.add.ordering_success"
      failureNotification="messages.add.ordering_failure"
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
    ordering(identifier: $identifier) {
      id
      name
      order {
        path
        direction
      }
      select {
        direct
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
        order {
          path
          direction
        }
        select {
          direct
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
