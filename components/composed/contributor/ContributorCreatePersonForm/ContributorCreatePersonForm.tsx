import React from "react";

import { graphql } from "react-relay";

import MutationForm, {
  useGetErrors,
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { LinksRepeater } from "components/atomic/forms";

import type {
  ContributorCreatePersonFormMutation,
  CreatePersonContributorInput,
} from "@/relay/ContributorCreatePersonFormMutation.graphql";

export default function ContributorCreatePersonForm() {
  const getErrors = useGetErrors<ContributorCreatePersonFormMutation>(
    (response) => response.createPersonContributor ?? null,
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control } }) => (
      <Forms.Grid>
        <Forms.Input label="First Name" {...register("givenName")} />
        <Forms.Input label="Last Name" {...register("familyName")} />
        <Forms.FileUpload label="Image" name="image" />
        <Forms.Input label="Title" {...register("title")} />
        <Forms.Email
          label="Email"
          {...register("email")}
          description="Format: example@email.com"
        />
        <Forms.Input label="Affiliation" {...register("affiliation")} />
        <Forms.Textarea label="Bio" {...register("bio")} />
        <LinksRepeater<Fields>
          label="Links"
          name="links"
          register={register}
          control={control}
        />
      </Forms.Grid>
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

type Fields = Omit<CreatePersonContributorInput, "clientMutationId" | "image">;

const mutation = graphql`
  mutation ContributorCreatePersonFormMutation(
    $input: CreatePersonContributorInput!
  ) {
    createPersonContributor(input: $input) {
      contributor {
        __typename
        givenName
        familyName
        title
        email
        affiliation
        bio
        image {
          thumb {
            png {
              alt
              url
            }
          }
        }
        links {
          title
          url
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
