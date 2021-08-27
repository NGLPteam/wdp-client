import React from "react";

import { graphql } from "react-relay";

import MutationForm, {
  useGetErrors,
  useOnSuccess,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";

import type {
  ContributorCreatePersonFormMutation,
  CreatePersonContributorInput,
  ContributorCreatePersonFormMutationResponse,
} from "@/relay/ContributorCreatePersonFormMutation.graphql";
import ContributorPersonForm from "../ContributorPersonForm";

type MutationFormProps = React.ComponentProps<typeof MutationForm>;

export default function ContributorCreatePersonForm({
  contentTitle,
  onCreate,
}: Props) {
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
    ({ form: { register } }) => <ContributorPersonForm register={register} />,
    []
  );

  const toVariables = useToVariables<
    ContributorCreatePersonFormMutation,
    FormValues
  >((data) => ({ input: data }), []);

  return (
    <MutationForm<ContributorCreatePersonFormMutation, FormValues>
      contentTitle={contentTitle}
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

interface Props extends Pick<MutationFormProps, "contentTitle"> {
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
    createPersoContributor(input: $input) {
      contributor {
        __typename
        ...ContributorPersonForm
      }
      ...MutationForm_mutationErrors
    }
  }
`;
