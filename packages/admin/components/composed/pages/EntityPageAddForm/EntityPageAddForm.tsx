import { useRef } from "react";
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
  const slugRef = useRef<HTMLInputElement | null>(null);

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
    const { onChange, ...registerTitle } = register("title");
    const { ref, ...registerSlug } = register("slug");

    // Set the slug field's default value when the title changes
    // Setting default value allows the user to change the slug if they need to
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (slugRef.current)
        slugRef.current.defaultValue = convertToSlug(e.target.value);
    };

    return (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.title"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e);
            handleTitleChange(e);
          }}
          {...registerTitle}
        />
        <Forms.Slug
          label="forms.fields.slug"
          required
          ref={(e) => {
            ref(e);
            slugRef.current = e;
          }}
          {...registerSlug}
        />
        <Forms.FileUpload label="forms.fields.hero_image" name="heroImage" />
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
