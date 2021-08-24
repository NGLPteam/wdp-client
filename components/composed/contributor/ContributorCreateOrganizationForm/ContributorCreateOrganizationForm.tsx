import React from "react";

import { graphql } from "react-relay";

import MutationForm, {
  useGetErrors,
  useOnSuccess,
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  ContributorCreateOrganizationFormMutation,
  CreateOrganizationContributorInput,
  ContributorCreateOrganizationFormMutationResponse,
} from "@/relay/ContributorCreateOrganizationFormMutation.graphql";

export default function ContributorCreateOrganizationForm({ onCreate }: Props) {
  const getErrors = useGetErrors<ContributorCreateOrganizationFormMutation>(
    (response) => response.createOrganizationContributor ?? null,
    []
  );

  const onSuccess = useOnSuccess<
    ContributorCreateOrganizationFormMutation,
    FormValues
  >(
    function ({ response }) {
      const createdContributor = toCreatedContributor(response);

      if (createdContributor) {
        if (typeof onCreate === "function") {
          onCreate(createdContributor);
        }
      }
    },
    [onCreate]
  );

  const renderForm = useRenderForm<FormValues>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="Identifier*"
          {...register("identifier", { required: true })}
          description="Unique Identifier"
        />
        <Forms.Input label="Legal Name" {...register("legalName")} />
        <Forms.Email
          label="Email"
          {...register("email")}
          description="Format: example@email.com"
        />
        <Forms.Input label="Location" {...register("location")} />
        <Forms.Textarea label="Bio" {...register("bio")} />
        <Forms.Input label="Url" {...register("url")} />
      </Forms.Grid>
    ),
    []
  );

  const toVariables = useToVariables<
    ContributorCreateOrganizationFormMutation,
    FormValues
  >((data) => ({ input: data }), []);

  return (
    <MutationForm<ContributorCreateOrganizationFormMutation, FormValues>
      contentTitle="Create Organization Contributor"
      getErrors={getErrors}
      mutation={mutation}
      name="createOrganizationContributor"
      onSuccess={onSuccess}
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

type FormValues = Pick<
  CreateOrganizationContributorInput,
  "identifier" | "email" | "legalName" | "location" | "bio" | "url"
>;

type CreatedContributor = NonNullable<
  ContributorCreateOrganizationFormMutationResponse["createOrganizationContributor"]
>["contributor"];

interface Props {
  onCreate?: (contributor: CreatedContributor) => void;
}

function toCreatedContributor(
  response: ContributorCreateOrganizationFormMutationResponse
): CreatedContributor | null {
  const contributor = response?.createOrganizationContributor?.contributor;
  if (contributor) return contributor;
  return null;
}

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
