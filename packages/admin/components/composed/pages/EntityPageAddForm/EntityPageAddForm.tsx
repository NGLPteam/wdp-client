import { useFragment, graphql } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { convertToSlug } from "helpers";
import type {
  EntityPageAddFormMutation,
  CreatePageInput,
} from "@/relay/EntityPageAddFormMutation.graphql";
import type { EntityPageAddFormFragment$key } from "@/relay/EntityPageAddFormFragment.graphql";

export default function EntityPageAddForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const sourceEntity = useFragment<EntityPageAddFormFragment$key>(
    fragment,
    data,
  );

  // Sets the slug to the title if no slug is provided
  const toVariables = useToVariables<EntityPageAddFormMutation, Fields>(
    ({ position, ...data }) => ({
      input: {
        ...data,
        entityId: sourceEntity.id || "",
        slug: data.slug || convertToSlug(data.title),
        position: typeof position === "string" ? parseInt(position) : position,
      },
    }),
    [],
  );

  const renderForm = useRenderForm<Fields>(({ form: { register } }) => {
    return (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.title"
          required
          {...register("title")}
        />
        <Forms.Slug
          label="forms.fields.slug"
          description="forms.fields.page_slug_description"
          {...register("slug")}
        />
        <Forms.FileImageUpload
          label="forms.fields.hero_image"
          name="heroImage"
          description="forms.fields.hero_image_description"
        />
        <Forms.Textarea
          label="forms.fields.body"
          required
          {...register("body")}
        />
        <Forms.Input
          type="number"
          label="forms.fields.position"
          {...register("position")}
        />
      </Forms.Grid>
    );
  }, []);

  return (
    <MutationForm<EntityPageAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.add.page_success"
      failureNotification="messages.add.page_failure"
      name="createPage"
      refetchTags={["pages"]}
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
> & { data: EntityPageAddFormFragment$key };

type Fields = Omit<CreatePageInput, "entityId">;

const fragment = graphql`
  fragment EntityPageAddFormFragment on AnyEntity {
    ... on Community {
      id
    }
    ... on Collection {
      id
    }
    ... on Item {
      id
    }
  }
`;

const mutation = graphql`
  mutation EntityPageAddFormMutation($input: CreatePageInput!) {
    createPage(input: $input) {
      page {
        id
        title
        slug
        thumbnail: heroImage {
          image: medium {
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
