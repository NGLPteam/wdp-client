import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import compact from "lodash/compact";

import type {
  UpdatePersonContributorInput,
  ContributorUpdatePersonFormMutation,
} from "@/relay/ContributorUpdatePersonFormMutation.graphql";
import type { ContributorUpdatePersonFormFragment$key } from "@/relay/ContributorUpdatePersonFormFragment.graphql";
import type { ContributorUpdatePersonFormFieldsFragment$key } from "@/relay/ContributorUpdatePersonFormFieldsFragment.graphql";

export default function ContributorUpdatePersonForm({
  data,
  onSuccess,
}: Props) {
  const {
    contributorId = "",
    ...fieldsData
  } = useFragment<ContributorUpdatePersonFormFragment$key>(fragment, data);

  const {
    image,
    links,
    ...otherValues
  } = useFragment<ContributorUpdatePersonFormFieldsFragment$key>(
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
    ContributorUpdatePersonFormMutation,
    Fields
  >((data) => ({ input: { ...data, contributorId } }), []);

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.contributor.fields.givenName"
          {...register("givenName")}
          required
        />
        <Forms.Input
          label="forms.contributor.fields.familyName"
          {...register("familyName")}
          required
        />
        <Forms.Input label="Title" {...register("title")} />
        <Forms.Input
          label="forms.contributor.fields.affiliation"
          {...register("affiliation")}
        />
        <Forms.Email
          label="forms.contributor.fields.email"
          description="Format: example@email.com"
          {...register("email")}
        />
        <Forms.FileUpload
          label="forms.contributor.fields.image"
          name="image"
          image={image?.thumb}
          clearName="clearImage"
        />
        <Forms.Textarea
          label="forms.contributor.fields.bio"
          isWide
          {...register("bio")}
        />
        <Forms.LinksRepeater
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
    <MutationForm<ContributorUpdatePersonFormMutation, Fields>
      name="updatePersonContributor"
      mutation={mutation}
      onSuccess={onSuccess}
      successNotification="forms.contributor.update.success"
      toVariables={toVariables}
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<React.ComponentProps<typeof MutationForm>, "onSuccess"> {
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
