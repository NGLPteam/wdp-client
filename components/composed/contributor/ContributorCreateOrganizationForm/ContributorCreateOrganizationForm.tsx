import React from "react";

import { graphql } from "react-relay";

import MutationForm, {
  useGetErrors,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";
import ContributorOrganizationForm from "../ContributorOrganizationForm";

import type {
  ContributorCreateOrganizationFormMutation,
  CreateOrganizationContributorInput,
} from "@/relay/ContributorCreateOrganizationFormMutation.graphql";

export default function ContributorCreateOrganizationForm() {
  const getErrors = useGetErrors<ContributorCreateOrganizationFormMutation>(
    (response) => response.createOrganizationContributor ?? null,
    []
  );

  const toVariables = useToVariables<
    ContributorCreateOrganizationFormMutation,
    Fields
  >((data) => ({ input: data }), []);

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <ContributorOrganizationForm data={null} register={register} />
    ),
    []
  );

  return (
    <MutationForm<ContributorCreateOrganizationFormMutation, Fields>
      getErrors={getErrors}
      mutation={mutation}
      name="createOrganizationContributor"
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

type Fields = Omit<
  CreateOrganizationContributorInput,
  "clientMutationId" | "image"
>;

const mutation = graphql`
  mutation ContributorCreateOrganizationFormMutation(
    $input: CreateOrganizationContributorInput!
  ) {
    createOrganizationContributor(input: $input) {
      contributor {
        identifier
        legalName
        email
        location
        bio
        url
      }
      ...MutationForm_mutationErrors
    }
  }
`;
