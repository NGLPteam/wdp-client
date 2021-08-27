import React from "react";
import { graphql } from "react-relay";
import { Forms } from "components/api/MutationForm";

/**
 * Form for creating or updating a Contributor
 * If id is passed, we assume we're updating rather than creating
 */
const ContributorPersonForm = ({ register, id }: Props) => {
  return (
    <Forms.Grid>
      {id && <input {...register("contributorId")} type="hidden" />}
      <Forms.Input
        label="Given Name"
        {...register("givenName")}
        description="First name"
      />
      <Forms.Input
        label="Family Name"
        {...register("familyName")}
        description="Last name"
      />
      <Forms.Input label="Title" {...register("title")} />
      <Forms.Email
        label="Email"
        {...register("email")}
        description="Format: example@email.com"
      />
      <Forms.Input label="Affiliation" {...register("affiliation")} />
      <Forms.Textarea label="Bio" {...register("bio")} />
    </Forms.Grid>
  );
};

interface Props {
  register: any;
  id?: string;
}

export default ContributorPersonForm;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fragment = graphql`
  fragment ContributorPersonFormFragment on PersonContributor {
    email
    givenName
    familyName
    suffix
    title
    prefix
    bio
    affiliation
  }
`;
