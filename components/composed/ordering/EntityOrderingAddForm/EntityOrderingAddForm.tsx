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
} from "@/relay/EntityOrderingAddFormMutation.graphql";
import type { EntityOrderingAddFormFragment$key } from "@/relay/EntityOrderingAddFormFragment.graphql";

export default function EntityOrderingAddForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const { t } = useTranslation();

  const entity = useFragment<EntityOrderingAddFormFragment$key>(fragment, data);

  const toVariables = useToVariables<EntityOrderingAddFormMutation, Fields>(
    (data) => ({ input: { ...data, entityId: entity.id || "" } }),
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
          label="forms.fields.ordertype"
          /* Placeholder options */
          options={[
            { value: "ALPHA", label: "Alphabetical" },
            { value: "TOC", label: "Table of Contents" },
          ]}
          {...register("order")}
        />
        <Forms.Switch
          text={t("forms.fields.manualtoggle.text")}
          label=""
          disabled
          name="filter" /* Not the correct input arg */
        />
        <Forms.Fieldset label={t("forms.fields.include")}>
          <></>
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

type Fields = Omit<CreateOrderingInput, "clientMutationId">;

const fragment = graphql`
  fragment EntityOrderingAddFormFragment on AnyEntity {
    ... on Collection {
      id
    }
    ... on Item {
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
