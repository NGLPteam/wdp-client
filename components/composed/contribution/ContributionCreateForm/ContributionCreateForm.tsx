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
import { useMaybeFragment } from "hooks";
import { ContributionCreateFormFragment$key } from "@/relay/ContributionCreateFormFragment.graphql";

export default function ContributionCreateForm({
  data,
  contributorId,
  contributorName,
  contributableId,
  contributableName,
  onSuccess,
  onCancel,
  type,
}: Props) {
  const formData = useMaybeFragment(fragment, data);

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
            data={formData}
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
            data={formData}
          />
        ) : (
          <Forms.CollectionTypeahead<Fields>
            control={control}
            name="contributableId"
            label="forms.fields.collection"
            required
            data={formData}
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
  data: ContributionCreateFormFragment$key;
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

const fragment = graphql`
  fragment ContributionCreateFormFragment on Query {
    # eslint-disable-next-line relay/must-colocate-fragment-spreads
    ...ItemTypeaheadFragment
    # eslint-disable-next-line relay/must-colocate-fragment-spreads
    ...CollectionTypeaheadFragment
    # eslint-disable-next-line relay/must-colocate-fragment-spreads
    ...ContributorTypeaheadFragment
  }
`;

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
