import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useGetErrors,
  useToVariables,
} from "components/api/MutationForm";
import ContributorOrganizationForm from "components/composed/contributor/ContributorOrganizationForm";

import type { ContributorUpdateOrganizationFormFragment$key } from "@/relay/ContributorUpdateOrganizationFormFragment.graphql";
import type {
  UpdateOrganizationContributorInput,
  ContributorUpdateOrganizationFormMutation,
} from "@/relay/ContributorUpdateOrganizationFormMutation.graphql";

export default function ContributorUpdateOrganizationForm({ data }: Props) {
  const contributor = useFragment(fragment, data);

  const renderForm = useRenderForm<Fields>(
    ({ form }) => (
      <ContributorOrganizationForm
        data={contributor}
        register={form.register}
      />
    ),
    []
  );

  const getErrors = useGetErrors<ContributorUpdateOrganizationFormMutation>(
    (response) => response.updateOrganizationContributor ?? null,
    []
  );

  const toVariables = useToVariables<
    ContributorUpdateOrganizationFormMutation,
    Fields
  >((data) => {
    const { contributorId } = contributor;
    // TODO: Why does relay think the contributor ID can be unknown?
    if (!contributorId)
      throw new Error("Contributor ID must be present in contributor update");
    return { input: { ...data, contributorId } };
  }, []);

  return (
    <MutationForm<ContributorUpdateOrganizationFormMutation, Fields>
      name="updateOrganizationContributor"
      mutation={mutation}
      getErrors={getErrors}
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

type Fields = Omit<
  UpdateOrganizationContributorInput,
  "contributorId" | "image"
>;

interface Props {
  data: ContributorUpdateOrganizationFormFragment$key;
}

const mutation = graphql`
  mutation ContributorUpdateOrganizationFormMutation(
    $input: UpdateOrganizationContributorInput!
  ) {
    updateOrganizationContributor(input: $input) {
      contributor {
        ...ContributorOrganizationFormFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment ContributorUpdateOrganizationFormFragment on AnyContributor {
    ... on OrganizationContributor {
      contributorId: id
      ...ContributorOrganizationFormFragment
    }
  }
`;
