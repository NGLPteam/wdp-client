import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const sourceEntity = useFragment<EntityLinksAddFormFragment$key>(
    fragment,
    data
  );

  const toVariables = useToVariables<EntityLinksAddFormMutation, Fields>(
    (data) => ({ input: { ...data, sourceId: sourceEntity.id || "" } }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control } }) => (
      <Forms.Grid>
        <Forms.LinkTargetTypeahead<Fields>
          control={control}
          name="targetId"
          label="forms.fields.link_target"
          data={sourceEntity?.linkTargetCandidates}
        />
        <Forms.Select
          label="forms.fields.link_type"
          options={[
            { value: "CONTAINS", label: "contains" },
            { value: "REFERENCES", label: "references" },
          ]}
          description={t("forms.fields.link_type_description", {
            name: sourceEntity.title,
          })}
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
      successNotification="messages.add.link_success"
      failureNotification="messages.add.link_failure"
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
      id
      title
      linkTargetCandidates {
        ...LinkTargetTypeaheadFragment
      }
    }
    ... on Item {
      id
      title
      linkTargetCandidates {
        ...LinkTargetTypeaheadFragment
      }
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
