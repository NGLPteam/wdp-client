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
  ContributorCreatePersonFormMutation,
  CreatePersonContributorInput,
  ContributorCreatePersonFormMutationResponse,
} from "@/relay/ContributorCreatePersonFormMutation.graphql";

export default function ContributorCreatePersonForm({ onCreate }: Props) {
  const getErrors = useGetErrors<ContributorCreatePersonFormMutation>(
    (response) => response.createPersonContributor ?? null,
    []
  );

  const onSuccess = useOnSuccess<
    ContributorCreatePersonFormMutation,
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
        <Forms.Input
          label="Given Name"
          {...register("givenName")}
          description="First name"
        />
        <Forms.Input
          label="Family Name"
          {...register("familyName")}
          description="Last name"
        />
        <Forms.Input label="Title" {...register("title")} />
        <Forms.Email
          label="Email"
          {...register("email")}
          description="Format: example@email.com"
        />
        <Forms.Input label="Affiliation" {...register("affiliation")} />
        <Forms.Textarea label="Bio" {...register("bio")} />
      </Forms.Grid>
    ),
    []
  );

  const toVariables = useToVariables<
    ContributorCreatePersonFormMutation,
    FormValues
  >((data) => ({ input: data }), []);

  return (
    <MutationForm<ContributorCreatePersonFormMutation, FormValues>
      contentTitle="Create Person Contributor"
      getErrors={getErrors}
      mutation={mutation}
      name="createPersonContributor"
      onSuccess={onSuccess}
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

type FormValues = Pick<
  CreatePersonContributorInput,
  | "identifier"
  | "givenName"
  | "familyName"
  | "title"
  | "email"
  | "affiliation"
  | "bio"
>;

type CreatedContributor = NonNullable<
  ContributorCreatePersonFormMutationResponse["createPersonContributor"]
>["contributor"];

interface Props {
  onCreate?: (contributor: CreatedContributor) => void;
}

function toCreatedContributor(
  response: ContributorCreatePersonFormMutationResponse
): CreatedContributor | null {
  const contributor = response?.createPersonContributor?.contributor;
  if (contributor) return contributor;
  return null;
}

const mutation = graphql`
  mutation ContributorCreatePersonFormMutation(
    $input: CreatePersonContributorInput!
  ) {
    createPersonContributor(input: $input) {
      contributor {
        __typename
        email
        givenName
        familyName
        suffix
        title
        prefix
        bio
        affiliation
      }
      ...MutationForm_mutationErrors
    }
  }
`;
