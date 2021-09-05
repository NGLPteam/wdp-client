import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type { ContributorUpdateOrganizationFormFragment$key } from "@/relay/ContributorUpdateOrganizationFormFragment.graphql";
import type {
  UpdateOrganizationContributorInput,
  ContributorUpdateOrganizationFormMutation,
} from "@/relay/ContributorUpdateOrganizationFormMutation.graphql";
import type { ContributorUpdateOrganizationFormFieldsFragment$key } from "@/relay/ContributorUpdateOrganizationFormFieldsFragment.graphql";
import compact from "lodash/compact";

export default function ContributorUpdateOrganizationForm({ data }: Props) {
  const { contributorId = "", ...fieldsData } = useFragment(fragment, data);

  const {
    image,
    links,
    ...otherValues
  } = useFragment<ContributorUpdateOrganizationFormFieldsFragment$key>(
    fieldsFragment,
    fieldsData
  );

  // We need to transform the links value to a mutable value and remove nulls to satisfy
  // our type checker.
  const defaultValues = {
    ...otherValues,
    links: links ? [...compact(links)] : [],
  };

  const toVariables = useToVariables<
    ContributorUpdateOrganizationFormMutation,
    Fields
  >((data) => ({ input: { ...data, contributorId } }), []);

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control } }) => (
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
        <Forms.LinksRepeater
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

  return (
    <MutationForm<ContributorUpdateOrganizationFormMutation, Fields>
      name="updateOrganizationContributor"
      mutation={mutation}
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

const fieldsFragment = graphql`
  fragment ContributorUpdateOrganizationFormFieldsFragment on AnyContributor {
    ... on OrganizationContributor {
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
      links {
        title
        url
      }
    }
  }
`;

const mutation = graphql`
  mutation ContributorUpdateOrganizationFormMutation(
    $input: UpdateOrganizationContributorInput!
  ) {
    updateOrganizationContributor(input: $input) {
      contributor {
        ...ContributorUpdateOrganizationFormFieldsFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment ContributorUpdateOrganizationFormFragment on AnyContributor {
    ... on OrganizationContributor {
      contributorId: id
      ...ContributorUpdateOrganizationFormFieldsFragment
    }
  }
`;
