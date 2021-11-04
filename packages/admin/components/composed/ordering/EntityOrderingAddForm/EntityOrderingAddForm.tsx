import * as React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { useTranslation } from "react-i18next";
import { convertToSlug } from "helpers";

import type {
  EntityOrderingAddFormMutation,
  CreateOrderingInput,
  OrderDefinitionInput,
  OrderingSelectDefinitionInput,
  OrderingFilterDefinitionInput,
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
    data
  );
  const schemaOptions = formData.schemaVersions;
  const entity = formData.item ?? formData.collection;

  const getFilter = (
    items: string,
    collections: string
  ): OrderingFilterDefinitionInput["schemas"] => {
    if (items !== "NONE" && collections !== "NONE") return null;
    if (items === "NONE")
      return schemaOptions.edges
        .filter((node) => node.node.kind === "ITEM")
        .map((node) => node.node.identifier);
    if (collections === "NONE")
      return schemaOptions.edges
        .filter((node) => node.node.kind === "COLLECTION")
        .map((node) => node.node.identifier);
  };

  const toVariables = useToVariables<EntityOrderingAddFormMutation, Fields>(
    (data) => ({
      input: {
        ...data,
        entityId: entity?.id || "",
        identifier: data.name ? convertToSlug(data.name) : "",
        filter: {
          schemas: getFilter(data.directItems, data.directCollections),
        },
        // order: [{direction: data.sortby[1], path:}]
      },
    }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label={"forms.fields.displayname"}
          required
          {...register("name")}
        />
        <Forms.Select
          label="forms.fields.sortby"
          options={[
            { value: ["name", "asc"], label: "Name, ascending" },
            { value: ["name", "desc"], label: "Name, descending" },
            { value: ["updatedAt", "asc"], label: "Updated at, ascending" },
            { value: ["updatedAt", "desc"], label: "Updated at, descending" },
            {
              value: ["publication", "asc"],
              label: "Publication date, ascending",
            },
            {
              value: ["publication", "desc"],
              label: "Publication date, descending",
            },
          ]}
          name="sortby"
        />
        <Forms.Fieldset label={t("forms.fields.include")} noGap>
          <Forms.Description>
            For each available type of entity, select which descendants should
            be included in the ordering. Select Direct Descendants to select
            only immediate children, for example journal issues but not their
            articles. Descendants must be included for at least one type of
            entity.
          </Forms.Description>
          <Forms.RadioGroup
            label="glossary.collection_plural"
            name="directCollections"
            options={[
              { value: "NONE", label: "None" },
              { value: "CHILDREN", label: "Direct Descendants", default: true },
              { value: "DESCENDANTS", label: "All Descendants" },
            ]}
          />
          <Forms.RadioGroup
            label="glossary.item_plural"
            name="directItems"
            options={[
              { value: "NONE", label: "None" },
              { value: "CHILDREN", label: "Direct Descendants", default: true },
              { value: "DESCENDANTS", label: "All Descendants" },
            ]}
          />
        </Forms.Fieldset>
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<EntityOrderingAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="forms.order.create.success"
      failureNotification="forms.order.create.failure"
      name="createOrdering"
      refetchTags={["nodes"]}
      toVariables={toVariables}
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
    directCollections: string;
    directItems: string;
    sortby: string[];
  };

const fragment = graphql`
  fragment EntityOrderingAddFormFragment on Query {
    collection(slug: $entitySlug) {
      id
    }
    item(slug: $entitySlug) {
      id
    }
    schemaVersions {
      edges {
        node {
          kind
          identifier
        }
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
