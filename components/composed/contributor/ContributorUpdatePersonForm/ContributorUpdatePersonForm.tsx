import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useGetErrors,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import ContributorLinksInput from "../ContributorLinksInput";

import type {
  UpdatePersonContributorInput,
  ContributorUpdatePersonFormMutation,
} from "@/relay/ContributorUpdatePersonFormMutation.graphql";
import type { ContributorUpdatePersonFormFragment$key } from "@/relay/ContributorUpdatePersonFormFragment.graphql";

export default function ContributorUpdatePersonForm({ data }: Props) {
  const { contributorId, image, ...defaultValues } = useFragment(
    fragment,
    data
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control } }) => (
      <Forms.Grid>
        <Forms.Input label="First Name" {...register("givenName")} />
        <Forms.Input label="Last Name" {...register("familyName")} />
        <Forms.FileUpload
          label="Image"
          name="image"
          image={image?.thumb}
          existingValue={image !== null}
        />
        <Forms.Input label="Title" {...register("title")} />
        <Forms.Email
          label="Email"
          description="Format: example@email.com"
          {...register("email")}
        />
        <Forms.Input label="Affiliation" {...register("affiliation")} />
        <Forms.Textarea label="Bio" {...register("bio")} />
        <ContributorLinksInput
          label="Links"
          name="links"
          register={register}
          control={control}
        />
      </Forms.Grid>
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
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props {
  data: ContributorUpdatePersonFormFragment$key;
}

type Fields = Omit<UpdatePersonContributorInput, "contributorId" | "image">;

const mutation = graphql`
  mutation ContributorUpdatePersonFormMutation(
    $input: UpdatePersonContributorInput!
  ) {
    updatePersonContributor(input: $input) {
      contributor {
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

const fragment = graphql`
  fragment ContributorUpdatePersonFormFragment on AnyContributor {
    ... on PersonContributor {
      contributorId: id
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
  }
`;
