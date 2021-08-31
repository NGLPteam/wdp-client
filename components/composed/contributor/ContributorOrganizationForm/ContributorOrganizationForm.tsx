import React from "react";
import { graphql, useFragment } from "react-relay";
import { Forms } from "components/api/MutationForm";
import type {
  ContributorOrganizationFormFragment,
  ContributorOrganizationFormFragment$key,
} from "@/relay/ContributorOrganizationFormFragment.graphql";
import type { UseFormRegister } from "react-hook-form";

function ContributorOrganizationForm({ register, data }: Props) {
  const contributor = useFragment(fragment, data);

  return (
    <Forms.Grid>
      <Forms.Input
        defaultValue={contributor?.legalName}
        label="Legal Name"
        {...register("legalName")}
      />
      <Forms.Email
        label="Email"
        defaultValue={contributor?.email}
        {...register("email")}
        description="Format: example@email.com"
      />
      <Forms.FileUpload
        image={contributor?.image?.thumb}
        label="Image"
        name="image"
      />
      <Forms.Input
        defaultValue={contributor?.location}
        label="Location"
        {...register("location")}
      />
      <Forms.Textarea
        defaultValue={contributor?.bio}
        label="Bio"
        {...register("bio")}
      />
      <Forms.Input
        defaultValue={contributor?.url}
        label="Url"
        {...register("url")}
      />
    </Forms.Grid>
  );
}

type Fields = Omit<ContributorOrganizationFormFragment, " $refType">;

interface Props {
  register: UseFormRegister<Partial<Fields>>;
  data: ContributorOrganizationFormFragment$key | null;
}

const fragment = graphql`
  fragment ContributorOrganizationFormFragment on OrganizationContributor {
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
`;

export default ContributorOrganizationForm;
