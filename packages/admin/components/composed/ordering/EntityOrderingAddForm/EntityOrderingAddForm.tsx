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

const description = `Select descendants to be included in the ordering. Use Direct
Descendants to select only immediate children, for example journal
issues but not their articles.`;

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

  const getOrder = (sortby: string): OrderDefinitionInput[] => {
    const [property, direction] = sortby.split(",");
    const directionValue = direction === "asc" ? "ASCENDING" : "DESCENDING";

    interface PathOptions extends Record<string, string> {
      name: string;
      updatedAt: string;
      published: string;
    }
    const pathOptions: PathOptions = {
      name: "entity.title",
      updatedAt: "entity.updated_at",
      published: "entity.published_on",
    };
    const path = pathOptions[property];

    return [{ path: path, direction: directionValue }];
  };

  const toVariables = useToVariables<EntityOrderingAddFormMutation, Fields>(
    (data) => {
      const input = {
        entityId: entity?.id || "",
        name: data.name,
        identifier: convertToSlug(data.name ?? undefined),
        order: getOrder(data.sortby),
        select: { direct: data.selectDirect },
      };
      return { input: input };
    },
    []
  );

  const defaultValues = {
    // Flatten select object into separate fields
    selectDirect: "CHILDREN" as OrderingDirectSelection,
  };

  const renderForm = useRenderForm<Fields>(({ form: { register } }) => {
    return (
      <Forms.Grid>
        <Forms.Input
          label={"forms.fields.displayname"}
          required
          {...register("name")}
        />
        <Forms.Select
          label="forms.fields.sortby"
          options={[
            { value: "name, asc", label: "Name, ascending" },
            { value: "name, desc", label: "Name, descending" },
            { value: "updatedAt, asc", label: "Updated at, ascending" },
            { value: "updatedAt, desc", label: "Updated at, descending" },
            {
              value: "published, asc",
              label: "Publication date, ascending",
            },
            {
              value: "published, desc",
              label: "Publication date, descending",
            },
          ]}
          {...register("sortby")}
        />
        <Forms.RadioGroup
          label="forms.fields.include"
          description={description}
          options={[
            { value: "CHILDREN", label: "Direct Descendants" },
            { value: "DESCENDANTS", label: "All Descendants" },
          ]}
          {...register("selectDirect")}
        />
      </Forms.Grid>
    );
  }, []);

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

type Fields = Omit<CreateOrderingInput, "clientMutationId" | "select"> &
  OrderDefinitionInput &
  OrderingSelectDefinitionInput & {
    sortby: string;
    selectDirect: OrderingDirectSelection;
  };

const fragment = graphql`
  fragment EntityOrderingAddFormFragment on Query {
    collection(slug: $entitySlug) {
      id
    }
    item(slug: $entitySlug) {
      id
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
