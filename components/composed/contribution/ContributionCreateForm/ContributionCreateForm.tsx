import React from "react";
import { graphql } from "react-relay";
import MutationForm, {
  useRenderForm,
  Forms,
} from "components/api/MutationForm";

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
  /** Render the form */
  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control } }) => (
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
        ) : type === "item" ? (
          <Forms.ItemTypeahead<Fields>
            control={control}
            name="contributableId"
            label="forms.fields.item"
            required
          />
        ) : (
          <Forms.CollectionTypeahead<Fields>
            control={control}
            name="contributableId"
            label="forms.fields.collection"
            required
          />
        )}
        <Forms.Input label="forms.fields.role" required {...register("role")} />
      </Forms.Grid>
    ),
    []
  );

  /** Return the mutation form */
  return (
    <MutationForm<ContributionCreateFormMutation, Fields>
      name="upsertContribution"
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="forms.contribution.create.success"
      mutation={mutation}
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
