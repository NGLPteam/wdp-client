import React from "react";

import { graphql } from "react-relay";

import MutationForm, {
  useGetErrors,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";

import type {
  ContributorCreatePersonFormMutation,
  CreatePersonContributorInput,
} from "@/relay/ContributorCreatePersonFormMutation.graphql";
import ContributorPersonForm from "../ContributorPersonForm";

export default function ContributorCreatePersonForm() {
  const getErrors = useGetErrors<ContributorCreatePersonFormMutation>(
    (response) => response.createPersonContributor ?? null,
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <ContributorPersonForm data={null} register={register} />
    ),
    []
  );

  const toVariables = useToVariables<
    ContributorCreatePersonFormMutation,
    Fields
  >((data) => ({ input: data }), []);

  return (
    <MutationForm<ContributorCreatePersonFormMutation, Fields>
      getErrors={getErrors}
      mutation={mutation}
      name="createPersonContributor"
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

type Fields = Omit<CreatePersonContributorInput, "clientMutationId">;

const mutation = graphql`
  mutation ContributorCreatePersonFormMutation(
    $input: CreatePersonContributorInput!
  ) {
    createPersonContributor(input: $input) {
      contributor {
        __typename
        ...ContributorPersonFormFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;
