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
  contributableId,
  contributableName,
  onSuccess,
  onCancel,
}: Props) {
  /** Render the form */
  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control } }) => (
      <Forms.Grid>
        <Forms.ContributorTypeahead<Fields>
          control={control}
          name="contributorId"
          label="forms.contribution.fields.contributor"
          required
        />
        <Forms.Input
          name=""
          label="forms.contribution.fields.object"
          disabled
          defaultValue={contributableName}
        />
        <Forms.Input
          label="forms.contribution.fields.role"
          required
          {...register("role")}
        />
        {contributableId && (
          <input type="hidden" {...register("contributableId")} />
        )}
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
  /** The entity that should own the contribution */
  contributableId?: string;
  contributableName: string;
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
