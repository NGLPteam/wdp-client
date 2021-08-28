import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useGetErrors,
  useToVariables,
} from "components/api/MutationForm";
import ContributorPersonForm from "components/composed/contributor/ContributorPersonForm";

import type {
  UpdatePersonContributorInput,
  ContributorUpdatePersonFormMutation,
} from "@/relay/ContributorUpdatePersonFormMutation.graphql";
import type { ContributorUpdatePersonFormFragment$key } from "@/relay/ContributorUpdatePersonFormFragment.graphql";

export default function ContributorUpdatePersonForm({ data }: Props) {
  const contributor = useFragment(fragment, data);

  const renderForm = useRenderForm<Fields>(
    ({ form }) => (
      <ContributorPersonForm data={contributor} register={form.register} />
    ),
    []
  );

  const getErrors = useGetErrors<ContributorUpdatePersonFormMutation>(
    (response) => response.updatePersonContributor ?? null,
    []
  );

  const toVariables = useToVariables<
    ContributorUpdatePersonFormMutation,
    Fields
  >((data) => {
    const { contributorId } = contributor;
    // TODO: Why does relay think the contributor ID can be unknown?
    if (!contributorId)
      throw new Error("Contributor ID must be present in contributor update");
    return { input: { ...data, contributorId } };
  }, []);

  return (
    <MutationForm<ContributorUpdatePersonFormMutation, Fields>
      name="updatePersonContributor"
      mutation={mutation}
      getErrors={getErrors}
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props {
  data: ContributorUpdatePersonFormFragment$key;
}

type Fields = Omit<UpdatePersonContributorInput, "contributorId">;

const mutation = graphql`
  mutation ContributorUpdatePersonFormMutation(
    $input: UpdatePersonContributorInput!
  ) {
    updatePersonContributor(input: $input) {
      contributor {
        ...ContributorPersonFormFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment ContributorUpdatePersonFormFragment on AnyContributor {
    ... on PersonContributor {
      contributorId: id
      ...ContributorPersonFormFragment
    }
  }
`;
