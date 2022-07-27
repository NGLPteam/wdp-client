import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import MutationForm, {
  useRenderForm,
  Forms,
} from "components/api/MutationForm";
import { EntitySelector } from "components/forms";
import type {
  UpsertContributionInput,
  ContributionCreateFormMutation,
} from "@/relay/ContributionCreateFormMutation.graphql";

export default function ContributionCreateForm({
  contributorId,
  contributorName,
  contributableId,
  contributableName,
  onSuccess,
  onCancel,
  type,
}: Props) {
  const { t } = useTranslation();

  /** Render the form */
  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control, setValue } }) => {
      const onSelect = (id: string) => setValue("contributableId", id);
      return (
        <Forms.Grid>
          {contributorId ? (
            <>
              <Forms.Input
                name=""
                label="forms.fields.contributor"
                disabled
                defaultValue={contributorName}
              />
              <input
                type="hidden"
                {...register("contributorId")}
                defaultValue={contributorId}
              />
            </>
          ) : (
            <Forms.ContributorTypeahead<Fields>
              control={control}
              name="contributorId"
              label="forms.fields.contributor"
              required
            />
          )}
          {contributableId ? (
            <>
              <Forms.Input
                name=""
                label={`forms.fields.${type}`}
                disabled
                defaultValue={contributableName}
              />
              <input
                type="hidden"
                {...register("contributableId")}
                defaultValue={contributableId}
              />
            </>
          ) : (
            <EntitySelector
              {...register("contributableId", { required: true })}
              onSelect={onSelect}
              label={
                type === "item"
                  ? t("forms.fields.item")
                  : t("forms.fields.collection")
              }
              selectableTypes={{
                kinds: [type === "item" ? "ITEM" : "COLLECTION"],
              }}
            />
          )}
          <Forms.Input
            label="forms.fields.role"
            required
            {...register("role")}
          />
        </Forms.Grid>
      );
    },
    []
  );

  /** Return the mutation form */
  return (
    <MutationForm<ContributionCreateFormMutation, Fields>
      name="upsertContribution"
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.create.contribution_success"
      failureNotification="messages.create.contribution_failure"
      mutation={mutation}
      refetchTags={["contributions"]}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onCancel"
  > {
  /** The contributor */
  contributorId?: string;
  contributorName?: string;
  /** The entity that should own the contribution */
  contributableId?: string;
  contributableName?: string;
  /** The type of entity */
  type: "item" | "collection" | string;
}

type Fields = UpsertContributionInput;

const mutation = graphql`
  mutation ContributionCreateFormMutation($input: UpsertContributionInput!) {
    upsertContribution(input: $input) {
      contribution {
        ... on CollectionContribution {
          role
        }
        ... on ItemContribution {
          role
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
