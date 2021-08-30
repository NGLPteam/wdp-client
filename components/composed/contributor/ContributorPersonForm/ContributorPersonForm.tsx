import React from "react";
import { graphql, useFragment } from "react-relay";
import { Forms } from "components/api/MutationForm";
import type { UseFormRegister, Control } from "react-hook-form";
import type {
  ContributorPersonFormFragment$key,
  ContributorPersonFormFragment,
} from "@/relay/ContributorPersonFormFragment.graphql";
import ContributorLinksInput from "../ContributorLinksInput";

function ContributorPersonForm({ register, control, data }: Props) {
  const contributor = useFragment(fragment, data);

  return (
    <Forms.Grid>
      <Forms.Input
        defaultValue={contributor?.givenName}
        label="First Name"
        {...register("givenName")}
      />
      <Forms.Input
        defaultValue={contributor?.familyName}
        label="Last Name"
        {...register("familyName")}
      />
      <Forms.FileUpload
        image={contributor?.image?.thumb}
        existingValue={contributor?.image !== null}
        label="Image"
        name="image"
      />
      <Forms.Input
        defaultValue={contributor?.title}
        label="Title"
        {...register("title")}
      />
      <Forms.Email
        label="Email"
        defaultValue={contributor?.email}
        {...register("email")}
        description="Format: example@email.com"
      />
      <Forms.Input
        defaultValue={contributor?.affiliation}
        label="Affiliation"
        {...register("affiliation")}
      />
      <Forms.Textarea
        defaultValue={contributor?.bio}
        label="Bio"
        {...register("bio")}
      />
      <ContributorLinksInput
        defaultValue={contributor?.links}
        label="Links"
        name="links"
        register={register}
        control={control}
      />
    </Forms.Grid>
  );
}

type Fields = Omit<ContributorPersonFormFragment, " $refType">;

interface Props {
  register: UseFormRegister<Partial<Fields>>;
  control: Control<Fields>;
  data: ContributorPersonFormFragment$key | null;
}

const fragment = graphql`
  fragment ContributorPersonFormFragment on PersonContributor {
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
`;

export default ContributorPersonForm;
