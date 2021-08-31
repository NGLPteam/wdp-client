import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useGetErrors,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type { ContributorUpdateOrganizationFormFragment$key } from "@/relay/ContributorUpdateOrganizationFormFragment.graphql";
import type {
  UpdateOrganizationContributorInput,
  ContributorUpdateOrganizationFormMutation,
} from "@/relay/ContributorUpdateOrganizationFormMutation.graphql";

export default function ContributorUpdateOrganizationForm({ data }: Props) {
  const { contributorId, image, ...defaultValues } = useFragment(
    fragment,
    data
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input label="Legal Name" {...register("legalName")} />
        <Forms.Email
          label="Email"
          {...register("email")}
          description="Format: example@email.com"
        />
        <Forms.FileUpload
          label="Image"
          name="image"
          image={image?.thumb}
          existingValue={image !== null}
        />
        <Forms.Input label="Location" {...register("location")} />
        <Forms.Textarea label="Bio" {...register("bio")} />
        <Forms.Input label="Url" {...register("url")} />
      </Forms.Grid>
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
      defaultValues={defaultValues}
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

const fragment = graphql`
  fragment ContributorUpdateOrganizationFormFragment on AnyContributor {
    ... on OrganizationContributor {
      contributorId: id
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
  }
`;
