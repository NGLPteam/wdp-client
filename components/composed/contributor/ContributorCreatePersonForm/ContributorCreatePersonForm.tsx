import React from "react";

import { graphql } from "react-relay";

import MutationForm, {
  useRenderForm,
  Forms,
} from "components/api/MutationForm";

import type {
  ContributorCreatePersonFormMutation,
  CreatePersonContributorInput,
} from "@/relay/ContributorCreatePersonFormMutation.graphql";

export default function ContributorCreatePersonForm({ onSuccess }: Props) {
  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.contributor.fields.givenName"
          {...register("givenName")}
        />
        <Forms.Input
          label="forms.contributor.fields.familyName"
          {...register("familyName")}
        />
        <Forms.FileUpload label="forms.contributor.fields.image" name="image" />
        <Forms.Input
          label="forms.contributor.fields.title"
          {...register("title")}
        />
        <Forms.Email
          label="forms.contributor.fields.email"
          {...register("email")}
          description="Format: example@email.com"
        />
        <Forms.Input
          label="forms.contributor.fields.affiliation"
          {...register("affiliation")}
        />
        <Forms.Textarea
          label="forms.contributor.fields.bio"
          {...register("bio")}
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
    <MutationForm<ContributorCreatePersonFormMutation, Fields>
      mutation={mutation}
      name="createPersonContributor"
      onSuccess={onSuccess}
      successNotification="forms.community.create.success"
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<React.ComponentProps<typeof MutationForm>, "onSuccess">;

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
