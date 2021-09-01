import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useGetErrors,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { LinksRepeater } from "components/atomic/forms";

import type {
  UpdatePersonContributorInput,
  ContributorUpdatePersonFormMutation,
} from "@/relay/ContributorUpdatePersonFormMutation.graphql";
import type { ContributorUpdatePersonFormFragment$key } from "@/relay/ContributorUpdatePersonFormFragment.graphql";
import type { ContributorUpdatePersonFormFieldsFragment$key } from "@/relay/ContributorUpdatePersonFormFieldsFragment.graphql";

export default function ContributorUpdatePersonForm({ data }: Props) {
  const { contributorId, ...fieldsData } = useFragment(fragment, data);

  const {
    image,
    ...defaultValues
  } = useFragment<ContributorUpdatePersonFormFieldsFragment$key>(
    fieldsFragment,
    fieldsData
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
        <LinksRepeater
          label="Links"
          itemLabel="Link"
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
      defaultValues={defaultValues as Fields}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props {
  data: ContributorUpdatePersonFormFragment$key;
}

type Fields = Omit<UpdatePersonContributorInput, "contributorId" | "image">;

const fieldsFragment = graphql`
  fragment ContributorUpdatePersonFormFieldsFragment on AnyContributor {
    ... on PersonContributor {
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

const mutation = graphql`
  mutation ContributorUpdatePersonFormMutation(
    $input: UpdatePersonContributorInput!
  ) {
    updatePersonContributor(input: $input) {
      contributor {
        ...ContributorUpdatePersonFormFieldsFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment ContributorUpdatePersonFormFragment on AnyContributor {
    ... on PersonContributor {
      contributorId: id
      ...ContributorUpdatePersonFormFieldsFragment
    }
  }
`;
