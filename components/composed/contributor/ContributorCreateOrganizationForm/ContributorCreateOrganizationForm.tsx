import React from "react";

import { graphql } from "react-relay";

import MutationForm, {
  useRenderForm,
  Forms,
} from "components/api/MutationForm";

import type {
  ContributorCreateOrganizationFormMutation,
  CreateOrganizationContributorInput,
} from "@/relay/ContributorCreateOrganizationFormMutation.graphql";

export default function ContributorCreateOrganizationForm({
  onSuccess,
}: Props) {
  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.contributor.fields.legalName"
          {...register("legalName")}
        />
        <Forms.Email
          label="forms.contributor.fields.email"
          {...register("email")}
          description="Format: example@email.com"
        />
        <Forms.FileUpload label="forms.contributor.fields.image" name="image" />
        <Forms.Input
          label="forms.contributor.fields.location"
          {...register("location")}
        />
        <Forms.Textarea
          label="forms.contributor.fields.bio"
          {...register("bio")}
        />
        <Forms.Input
          label="forms.contributor.fields.url"
          {...register("url")}
        />
        <Forms.LinksRepeater<Fields>
          label="forms.contributor.fields.links"
          itemLabel="forms.contributor.fields.link"
          name="links"
          register={register}
          control={control}
        />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<ContributorCreateOrganizationFormMutation, Fields>
      mutation={mutation}
      name="createOrganizationContributor"
      onSuccess={onSuccess}
      successNotification="forms.contributor.create.success"
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<React.ComponentProps<typeof MutationForm>, "onSuccess">;

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
        links {
          title
          url
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
