import React, { useMemo } from "react";

import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { routeQueryArrayToString } from "routes";
import { useAuthenticatedQuery } from "hooks";

// Mutation imports
import MutationForm, {
  useGetErrors,
  useOnSuccess,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";

import type {
  ContributorUpdatePersonFormMutation,
  UpdatePersonContributorInput,
  ContributorUpdatePersonFormMutationResponse,
} from "@/relay/ContributorUpdatePersonFormMutation.graphql";

// Query imports
import { ContributorUpdatePersonFormQuery } from "__generated__/ContributorUpdatePersonFormQuery.graphql";
import ContributorPersonForm from "../ContributorPersonForm";

export default function ContributorUpdatePersonForm({
  contentTitle,
  onCreate,
}: Props) {
  // Get the initial contributor data
  const router = useRouter();
  const { slug } = router.query;

  const { data } = useAuthenticatedQuery<ContributorUpdatePersonFormQuery>(
    query,
    {
      slug: routeQueryArrayToString(slug),
    }
  );

  // Handle errors
  const getErrors = useGetErrors<ContributorUpdatePersonFormMutation>(
    (response) => response.updatePersonContributor ?? null,
    []
  );

  // Handle success
  const onSuccess = useOnSuccess<
    ContributorUpdatePersonFormMutation,
    FormValues
  >(
    function ({ response }) {
      const createdContributor = toUpdatedContributor(response);

      if (createdContributor) {
        if (typeof onCreate === "function") {
          onCreate(createdContributor);
        }
      }
    },
    [onCreate]
  );

  const toVariables = useToVariables<
    ContributorUpdatePersonFormMutation,
    FormValues
  >((data) => ({ input: data }), []);

  // Get the inital values for the form
  const initValues = useMemo(() => {
    // Check if the returned type is what we're expecting
    return data?.contributor?.__typename === "PersonContributor"
      ? data.contributor
      : null;
  }, [data]);

  // Render the form
  const renderForm = useRenderForm<FormValues>(
    ({ form: { register } }) => (
      <ContributorPersonForm register={register} id={initValues?.id} />
    ),
    []
  );

  return (
    <MutationForm<ContributorUpdatePersonFormMutation, FormValues>
      contentTitle={contentTitle}
      getErrors={getErrors}
      mutation={mutation}
      name="updatePersonContributor"
      onSuccess={onSuccess}
      toVariables={toVariables}
      defaultValues={{
        contributorId: initValues?.id,
        givenName: initValues?.givenName,
        familyName: initValues?.familyName,
        title: initValues?.title,
        email: initValues?.email,
        affiliation: initValues?.affiliation,
        bio: initValues?.bio,
      }}
    >
      {renderForm}
    </MutationForm>
  );
}

type MutationFormProps = React.ComponentProps<typeof MutationForm>;

type FormValues = Pick<
  UpdatePersonContributorInput,
  | "contributorId"
  | "givenName"
  | "familyName"
  | "title"
  | "email"
  | "affiliation"
  | "bio"
>;

type UpdatedContributor = NonNullable<
  ContributorUpdatePersonFormMutationResponse["updatePersonContributor"]
>["contributor"];

interface Props extends Pick<MutationFormProps, "contentTitle"> {
  onCreate?: (contributor: UpdatedContributor) => void;
}

function toUpdatedContributor(
  response: ContributorUpdatePersonFormMutationResponse
): UpdatedContributor | null {
  const contributor = response?.updatePersonContributor?.contributor;
  if (contributor) return contributor;
  return null;
}

const mutation = graphql`
  mutation ContributorUpdatePersonFormMutation(
    $input: UpdatePersonContributorInput!
  ) {
    updatePersonContributor(input: $input) {
      contributor {
        __typename
        ...ContributorPersonFormFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const query = graphql`
  query ContributorUpdatePersonFormQuery($slug: Slug!) {
    contributor(slug: $slug) {
      __typename
      ... on PersonContributor {
        id
        ...ContributorPersonFormFragment
      }
    }
  }
`;
