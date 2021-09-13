import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  UpdateContributionInput,
  ContributionUpdateFormMutation,
} from "@/relay/ContributionUpdateFormMutation.graphql";
import type { ContributionUpdateFormFragment$key } from "@/relay/ContributionUpdateFormFragment.graphql";
import type { ContributionUpdateFormFieldsFragment$key } from "@/relay/ContributionUpdateFormFieldsFragment.graphql";

export default function ContributionUpdateForm({ data, onSuccess }: Props) {
  const {
    contributionId = "",
    ...fieldsData
  } = useFragment<ContributionUpdateFormFragment$key>(fragment, data);

  const defaultValues = useFragment<ContributionUpdateFormFieldsFragment$key>(
    fieldsFragment,
    fieldsData
  );

  const toVariables = useToVariables<ContributionUpdateFormMutation, Fields>(
    (data) => ({ input: { ...data, contributionId } }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.contribution.fields.role"
          {...register("role")}
        />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<ContributionUpdateFormMutation, Fields>
      name="updateContribution"
      onSuccess={onSuccess}
      successNotification="forms.contribution.update.success"
      mutation={mutation}
      toVariables={toVariables}
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<React.ComponentProps<typeof MutationForm>, "onSuccess"> {
  data: ContributionUpdateFormFragment$key;
}

type Fields = Omit<UpdateContributionInput, "contributionId">;

const fieldsFragment = graphql`
  fragment ContributionUpdateFormFieldsFragment on AnyContribution {
    ... on CollectionContribution {
      role
    }
    ... on ItemContribution {
      role
    }
  }
`;

const mutation = graphql`
  mutation ContributionUpdateFormMutation($input: UpdateContributionInput!) {
    updateContribution(input: $input) {
      contribution {
        ...ContributionUpdateFormFieldsFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment ContributionUpdateFormFragment on AnyContribution {
    ... on CollectionContribution {
      contributionId: id
      ...ContributionUpdateFormFieldsFragment
    }
    ... on ItemContribution {
      contributionId: id
      ...ContributionUpdateFormFieldsFragment
    }
  }
`;
