import { useTranslation } from "react-i18next";
import { useFragment, graphql } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { convertToSlug } from "helpers";
import { MessageBlock } from "components/atomic";
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
  const { t } = useTranslation();

  const formData = useFragment<EntityOrderingAddFormFragment$key>(
    fragment,
    data,
  );

  const entity = formData.item ?? formData.collection;

  const toVariables = useToVariables<EntityOrderingAddFormMutation, Fields>(
    (data) => {
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
        entityId: entity?.id || "",
        name: data.name,
        identifier: convertToSlug(data.name ?? undefined),
        order: data.order,
        filter: {
          schemas:
            typeof data.filterSchemas === "string"
              ? [JSON.parse(data.filterSchemas)]
              : data.filterSchemas.map((schema) => JSON.parse(schema)),
        },
        render: data.render,
        select: { direct, links },
      };

      return { input };
    },
    [],
  );

  const defaultValues = {
    render: "FLAT" as OrderingRenderDefinitionInput,
  };

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
          <Forms.OrderDefinitionSelectControl name="order" data={entity} />
          <Forms.OrderRenderSelect {...register("render.mode")} />
        </Forms.Grid>
      );
    },
    [entity],
  );

  if (!entity)
    return (
      <MessageBlock
        name=""
        type="empty"
        message={t("messages.content_error")}
      />
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
    include: {
      descendants: boolean;
      children: boolean;
      links: boolean;
      references: boolean;
      contains: boolean;
    };
  };

const fragment = graphql`
  fragment EntityOrderingAddFormFragment on Query {
    collection(slug: $entitySlug) {
      id
      ...OrderDefinitionSelectControlFragment
    }
    item(slug: $entitySlug) {
      id
      ...OrderDefinitionSelectControlFragment
    }
    ...SchemaCheckboxGroupFragment
  }
`;

const mutation = graphql`
  mutation EntityOrderingAddFormMutation($input: CreateOrderingInput!) {
    createOrdering(input: $input) {
      ordering {
        id
        name
      }
      ...MutationForm_mutationErrors
    }
  }
`;
