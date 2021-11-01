import * as React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { useTranslation } from "react-i18next";

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
        /* placeholder */
        identifier: data?.name?.toLowerCase() || "",
        filter: {
          schemas: getFilter(data.directItems, data.directCollections),
        },
      },
    }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.displayname"
          required
          {...register("name")}
        />
        <Forms.Select
          label="forms.fields.orderby"
          /* Placeholder options */
          options={[
            { value: "ALPHA", label: "Alphabetical" },
            { value: "TOC", label: "Table of Contents" },
          ]}
          {...register("path")}
        />
        <Forms.RadioGroup
          label="forms.fields.direction"
          hideLabel
          {...register("direction")}
          options={[
            { value: "ASCENDING", label: "Ascending" },
            { value: "DESCENDING", label: "descending" },
          ]}
        />
        <Forms.Switch
          text={t("forms.fields.manualtoggle.text")}
          label=""
          disabled
          name="manual" /* Not the correct input arg */
        />
        <Forms.Fieldset label={t("forms.fields.include")}>
          <Forms.Description>
            For each type of entity, select with descendants should be included
            in the ordering. Select Direct Descendants to select only immediate
            children, for example journal issues but not their articles.
            Descendants must be included for at least one type of entity.
          </Forms.Description>
          <Forms.RadioGroup
            label="glossary.collections"
            name="directCollections"
            options={[
              { value: "NONE", label: "No Descendants" },
              { value: "CHILDREN", label: "Direct Descendants", default: true },
              { value: "DESCENDANTS", label: "All Descendants" },
            ]}
          />
          <Forms.RadioGroup
            label="glossary.collections"
            name="directItems"
            options={[
              { value: "NONE", label: "No Descendants" },
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
