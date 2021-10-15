import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  EntityLinksAddFormMutation,
  LinkEntityInput,
} from "@/relay/EntityLinksAddFormMutation.graphql";
import type { EntityLinksAddFormFragment$key } from "@/relay/EntityLinksAddFormFragment.graphql";

export default function EntityLinksAddForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const sourceEntity = useFragment<EntityLinksAddFormFragment$key>(
    fragment,
    data
  );

  const toVariables = useToVariables<EntityLinksAddFormMutation, Fields>(
    (data) => ({ input: { ...data, sourceId: sourceEntity.entityId || "" } }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control } }) => (
      <Forms.Grid>
        <Forms.ItemTypeahead<Fields>
          control={control}
          name="targetId"
          label="forms.fields.target"
        />
        <Forms.Select
          label="forms.fields.linktype"
          options={[
            { value: "CONTAINS", label: "contains" },
            { value: "REFERENCES", label: "references" },
          ]}
          {...register("operator")}
        />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<EntityLinksAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="forms.link.add.success"
      failureNotification="forms.link.add.failure"
      name="linkEntity"
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
> & { data: EntityLinksAddFormFragment$key };

type Fields = Omit<LinkEntityInput, "clientMutationId">;

const fragment = graphql`
  fragment EntityLinksAddFormFragment on AnyEntity {
    ... on Collection {
      entityId: id
    }
    ... on Item {
      entityId: id
    }
  }
`;

const mutation = graphql`
  mutation EntityLinksAddFormMutation($input: LinkEntityInput!) {
    linkEntity(input: $input) {
      link {
        target {
          ... on Item {
            title
          }
          ... on Collection {
            title
          }
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
