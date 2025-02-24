import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useFragment, graphql } from "react-relay";
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
  OrderingDirectSelection,
} from "@/relay/EntityOrderingEditFormMutation.graphql";
import { EntityOrderingEditFormFragment$key } from "@/relay/EntityOrderingEditFormFragment.graphql";
import { EntityOrderingEditFormFieldsFragment$key } from "@/relay/EntityOrderingEditFormFieldsFragment.graphql";
type FormProps = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
>;

type Fields = Omit<UpdateOrderingInput, "clientMutationId" | "filter"> & {
  filterSchemas: string[];
  include: {
    descendants: boolean;
    children: boolean;
    links: boolean;
    references: boolean;
    contains: boolean;
  };
};

export default function EntityOrderingEditForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const { t } = useTranslation();

  const formData = useFragment<EntityOrderingEditFormFragment$key>(
    fragment,
    data,
  );

  const entity = formData.item ?? formData.collection;

  const { ordering: orderingData } = entity ?? {};

  const ordering = useFragment<EntityOrderingEditFormFieldsFragment$key>(
    fieldsFragment,
    orderingData,
  );

  const defaultValues = useMemo<Partial<Fields> | undefined>(() => {
    if (ordering) {
      const { id: _id, order, filter, select, ...values } = ordering;

      const include = {
        descendants:
          select.direct === "DESCENDANTS" || select.direct === "CHILDREN",
        children: select.direct === "CHILDREN",
        links: select.links.contains || select.links.references,
        contains: select.links.contains,
        references: select.links.references,
      };

      return {
        order: order as OrderDefinitionInput[],
        filter: filter as OrderingFilterDefinitionInput,
        filterSchemas: filter.schemas.map((s) =>
          JSON.stringify({
            namespace: s.namespace,
            identifier: s.identifier,
          }),
        ),
        include,
        ...values,
      };
    }
  }, [ordering]);

  const toVariables = useToVariables<Mutation, Fields>((data) => {
    const { filterSchemas, include, ...values } = data;

    const direct = (
      !data.include.descendants
        ? "NONE"
        : data.include.children
          ? "CHILDREN"
          : "DESCENDANTS"
    ) as OrderingDirectSelection;
    const links = data.include.links
      ? {
          contains: data.include.contains,
          references: data.include.references,
        }
      : { contains: false, references: false };

    const input = {
      ...values,
      filter: {
        schemas:
          typeof filterSchemas === "string"
            ? [JSON.parse(filterSchemas)]
            : data.filterSchemas.map((schema) => JSON.parse(schema)),
      },
      orderingId: ordering?.id || "",
      select: { direct, links },
    };

    return { input };
  }, []);

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => {
      if (!entity) return <></>;

      return (
        <Forms.Grid>
          <Forms.Input
            label="forms.fields.name"
            required
            {...register("name")}
          />
          <Forms.Fieldset label={t("forms.fields.inclusion_criteria")}>
            <Forms.OrderingInclude name="include" />
            <Forms.SchemaCheckboxGroup
              data={formData}
              name="filterSchema"
              register={{ ...register("filterSchemas") }}
            />
          </Forms.Fieldset>
          <Forms.OrderDefinitionSelectControl name="order" />
          <Forms.OrderRenderSelect {...register("render.mode")} />
        </Forms.Grid>
      );
    },
    [entity],
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

const fieldsFragment = graphql`
  fragment EntityOrderingEditFormFieldsFragment on Ordering {
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
`;

const fragment = graphql`
  fragment EntityOrderingEditFormFragment on Query {
    collection(slug: $slug) {
      id
      ordering(identifier: $identifier) {
        ...EntityOrderingEditFormFieldsFragment
      }
    }
    item(slug: $slug) {
      id
      ordering(identifier: $identifier) {
        ...EntityOrderingEditFormFieldsFragment
      }
    }
    ...SchemaCheckboxGroupFragment
  }
`;

const mutation = graphql`
  mutation EntityOrderingEditFormMutation($input: UpdateOrderingInput!) {
    updateOrdering(input: $input) {
      ordering {
        ...EntityOrderingEditFormFieldsFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;
