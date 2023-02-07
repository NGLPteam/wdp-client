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
  onCancel,
}: Props) {
  const renderForm = useRenderForm<Fields>(
    ({ form: { register, control } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.legal_name"
          {...register("legalName")}
        />
        <Forms.Email
          label="forms.fields.email"
          {...register("email")}
          description="Format: example@email.com"
        />
        <Forms.Input
          label="forms.fields.orcid"
          description="forms.fields.orcid_description"
          {...register("orcid")}
        />
        <Forms.FileUpload label="forms.fields.image" name="image" />
        <Forms.Input label="forms.fields.location" {...register("location")} />
        <Forms.Textarea label="forms.fields.bio" {...register("bio")} />
        <Forms.Input label="forms.fields.url" {...register("url")} />
        <Forms.LinksRepeater<Fields>
          label="forms.fields.links"
          itemLabel="forms.fields.link"
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
      onCancel={onCancel}
      successNotification="messages.create.contributor_success"
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
>;

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
        orcid
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
