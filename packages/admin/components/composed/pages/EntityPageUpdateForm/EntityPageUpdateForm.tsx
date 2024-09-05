import { useFragment, graphql } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  EntityPageUpdateFormMutation,
  UpdatePageInput,
} from "@/relay/EntityPageUpdateFormMutation.graphql";
import type { EntityPageUpdateFormFragment$key } from "@/relay/EntityPageUpdateFormFragment.graphql";

export default function EntityPageUpdateForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const { page } = useFragment<EntityPageUpdateFormFragment$key>(
    fragment,
    data,
  );

  const toVariables = useToVariables<EntityPageUpdateFormMutation, Fields>(
    ({ position, ...data }) => ({
      input: {
        ...data,
        position: typeof position === "string" ? parseInt(position) : position,
        pageId: page?.id || "",
      },
    }),
    [],
  );

  const defaultValues = {
    title: page?.title,
    slug: page?.slug,
    body: page?.body,
    position: page?.position,
  };

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input label="forms.fields.title" {...register("title")} />
        <Forms.Input label="forms.fields.slug" {...register("slug")} />
        <Forms.FileImageUpload
          label="forms.fields.hero_image"
          name="heroImage"
          data={page?.heroImage}
          clearName="clearHeroImage"
        />
        <Forms.Textarea label="forms.fields.body" {...register("body")} />
        <Forms.Input
          type="number"
          label="forms.fields.position"
          {...register("position")}
        />
      </Forms.Grid>
    ),
    [],
  );

  return (
    <MutationForm<EntityPageUpdateFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.update.page_success"
      failureNotification="messages.update.page_failure"
      name="updatePage"
      refetchTags={["pages"]}
      toVariables={toVariables}
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
> & { data: EntityPageUpdateFormFragment$key };

type Fields = Omit<UpdatePageInput, "pageId">;

const fragment = graphql`
  fragment EntityPageUpdateFormFragment on AnyEntity {
    ... on Entity {
      page(slug: $pageSlug) {
        id
        title
        slug
        body
        position
        heroImage {
          ...FileUploadFragment
        }
      }
    }
  }
`;

const mutation = graphql`
  mutation EntityPageUpdateFormMutation($input: UpdatePageInput!) {
    updatePage(input: $input) {
      page {
        id
        title
        slug
        position
        heroImage {
          medium {
            png {
              url
              height
              width
              alt
            }
          }
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
