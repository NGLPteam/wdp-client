import * as React from "react";
import { graphql, useFragment } from "react-relay";
import i18next from "i18next";
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

const SORTING_OPTIONS = [
  {
    value: JSON.stringify({
      path: "entity.title",
      direction: "ASCENDING",
    }),
    label: i18next.t("sort.entity.title.ascending"),
  },
  {
    value: JSON.stringify({
      path: "entity.title",
      direction: "DESCENDING",
    }),
    label: i18next.t("sort.entity.title.descending"),
  },
  {
    value: JSON.stringify({
      path: "entity.updated_at",
      direction: "ASCENDING",
    }),
    label: i18next.t("sort.entity.updated_at.ascending"),
  },
  {
    value: JSON.stringify({
      path: "entity.updated_at",
      direction: "DESCENDING",
    }),
    label: i18next.t("sort.entity.updated_at.descending"),
  },
  {
    value: JSON.stringify({
      path: "entity.published",
      direction: "ASCENDING",
    }),
    label: i18next.t("sort.entity.published.ascending"),
  },
  {
    value: JSON.stringify({
      path: "entity.published",
      direction: "DESCENDING",
    }),
    label: i18next.t("sort.entity.published.descending"),
  },
];

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

      let order: any[] = [];

      if (data.filter?.schemas) {
        filter = {
          schemas: data.filter.schemas.map((schema) => JSON.parse(schema)),
        };
      }

      if (data.sortby) {
        order = [JSON.parse(data.sortby)];
      }

      const input = {
        entityId: entity?.id || "",
        name: data.name,
        identifier: convertToSlug(data.name ?? undefined),
        select: { direct: data.selectDirect },
        order,
        filter,
      };

      return { input };
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
          options={SORTING_OPTIONS}
          {...register("sortby")}
        />
        <Forms.RadioGroup
          label="forms.fields.include_descendants"
          description={"forms.fields.include_descendants_description"}
          options={[
            { value: "CHILDREN", label: "Direct Descendants" },
            { value: "DESCENDANTS", label: "All Descendants" },
          ]}
          {...register("selectDirect")}
        />
        {entity?.schemaRanks && entity.schemaRanks.length > 0 && (
          <Forms.CheckboxGroup
            label="forms.fields.schemas"
            name="filter.schema"
          >
            <>
              {entity.schemaRanks.map(({ name, namespace, identifier }, i) => (
                <Forms.Checkbox
                  key={i}
                  value={JSON.stringify({ namespace, identifier })}
                  {...register("filter.schemas")}
                >
                  {name}
                </Forms.Checkbox>
              ))}
            </>
          </Forms.CheckboxGroup>
        )}
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
      schemaRanks {
        name
        namespace
        identifier
      }
    }
    item(slug: $entitySlug) {
      id
      schemaRanks {
        name
        namespace
        identifier
      }
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
