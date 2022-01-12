import React from "react";
import { graphql, useFragment } from "react-relay";
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
    data
  );

  const toVariables = useToVariables<EntityPageUpdateFormMutation, Fields>(
    (data) => ({ input: { ...data, pageId: page?.id || "" } }),
    []
  );

  const defaultValues = {
    title: page?.title,
    slug: page?.slug,
    body: page?.body,
  };

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input label="forms.fields.title" {...register("title")} />
        <Forms.Input label="forms.fields.slug" {...register("slug")} />
        <Forms.FileUpload
          label="forms.fields.heroImage"
          name="heroImage"
          image={page?.heroImage?.thumb}
          clearName="clearHeroImage"
        />
        <Forms.Textarea label="forms.fields.body" {...register("body")} />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<EntityPageUpdateFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.update.page_success"
      failureNotification="messages.update.page_failure"
      name="updatePage"
      refetchTags={["edges"]}
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
    ... on Community {
      page(slug: $pageSlug) {
        id
        title
        slug
        body
        heroImage {
          thumb {
            png {
              url
              height
              width
              alt
            }
          }
        }
      }
    }
    ... on Collection {
      page(slug: $pageSlug) {
        id
        title
        slug
        body
        heroImage {
          thumb {
            png {
              url
              height
              width
              alt
            }
          }
        }
      }
    }
    ... on Item {
      page(slug: $pageSlug) {
        id
        title
        slug
        body
        heroImage {
          thumb {
            png {
              url
              height
              width
              alt
            }
          }
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
