import React from "react";

import { graphql } from "react-relay";

import MutationForm, {
  useGetErrors,
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

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
      <Forms.Grid>
        <Forms.Input label="Legal Name" {...register("legalName")} />
        <Forms.Email
          label="Email"
          {...register("email")}
          description="Format: example@email.com"
        />
        <Forms.FileUpload label="Image" name="image" />
        <Forms.Input label="Location" {...register("location")} />
        <Forms.Textarea label="Bio" {...register("bio")} />
        <Forms.Input label="Url" {...register("url")} />
      </Forms.Grid>
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
        legalName
        email
        location
        bio
        url
        image {
          thumb {
            png {
              alt
              url
            }
          }
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
