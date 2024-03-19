import * as React from "react";
import { useFragment, graphql } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { convertToSlug } from "helpers";

import { OrderingRenderDefinitionInput } from "types/graphql-schema";
import type {
  EntityOrderingAddFormMutation,
  CreateOrderingInput,
  OrderingSelectDefinitionInput,
  OrderingDirectSelection,
  OrderDefinitionInput,
} from "@/relay/EntityOrderingAddFormMutation.graphql";
import type { EntityOrderingAddFormFragment$key } from "@/relay/EntityOrderingAddFormFragment.graphql";

export default function EntityOrderingAddForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const formData = useFragment<EntityOrderingAddFormFragment$key>(
    fragment,
    data,
  );

  const entity = formData.item ?? formData.collection;

  const toVariables = useToVariables<EntityOrderingAddFormMutation, Fields>(
    (data) => {
      let filter = {};

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

      const selectWithTree =
        data.render?.mode === "TREE"
          ? { ...data.select, direct: "DESCENDANTS" as OrderingDirectSelection }
          : data.select;

      const input = {
        entityId: entity?.id || "",
        name: data.name,
        identifier: convertToSlug(data.name ?? undefined),
        order: data.order,
        filter,
        render: data.render,
        select: selectWithTree,
      };

      return { input };
    },
    [],
  );

  const defaultValues = {
    select: {
      direct: "CHILDREN" as OrderingDirectSelection,
      links: { contains: false, references: false },
    },
    render: "FLAT" as OrderingRenderDefinitionInput,
  };

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, watch } }) => {
      const mode = watch("render.mode");
      const isTree = mode === "TREE";
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
          {!isTree && (
            <Forms.OrderingDirectSelection {...register("select.direct")} />
          )}
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
    [entity],
  );

  return (
    <MutationForm<EntityOrderingAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.add.ordering_success"
      failureNotification="messages.add.ordering_failure"
      name="createOrdering"
      refetchTags={["orderings"]}
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
    filterSchemas: string[];
  };

const fragment = graphql`
  fragment EntityOrderingAddFormFragment on Query {
    collection(slug: $entitySlug) {
      id
      ...OrderDefinitionSelectControlFragment
      ...SchemaCheckboxGroupFragment
    }
    item(slug: $entitySlug) {
      id
      ...OrderDefinitionSelectControlFragment
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
