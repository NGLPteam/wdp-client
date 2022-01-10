import React from "react";
import { graphql, useFragment } from "react-relay";
import { getDateOnly } from "@wdp/lib/helpers";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { sanitizeDateField } from "helpers";
import type {
  UpdateCollectionInput,
  CollectionUpdateFormMutation,
} from "@/relay/CollectionUpdateFormMutation.graphql";
import type { CollectionUpdateFormFragment$key } from "@/relay/CollectionUpdateFormFragment.graphql";
import type { CollectionUpdateFormFieldsFragment$key } from "@/relay/CollectionUpdateFormFieldsFragment.graphql";

export default function CollectionUpdateForm({
  data,
  onSuccess,
  onSaveAndClose,
  onCancel,
}: Props) {
  const {
    collectionId = "",
    ...fieldsData
  } = useFragment<CollectionUpdateFormFragment$key>(fragment, data);

  const {
    thumbnail,
    heroImage,
    visibleAfterAt,
    visibleUntilAt,
    published,
    accessioned,
    available,
    issued,
    ...values
  } = useFragment<CollectionUpdateFormFieldsFragment$key>(
    fieldsFragment,
    fieldsData
  );

  const defaultValues = {
    ...values,
    title: values.title || undefined,
    visibleAfterAt: getDateOnly(visibleAfterAt),
    visibleUntilAt: getDateOnly(visibleUntilAt),
  };

  const toVariables = useToVariables<CollectionUpdateFormMutation, Fields>(
    (data) => ({
      input: {
        ...data,
        collectionId,
        visibleAfterAt: sanitizeDateField(data.visibleAfterAt),
        visibleUntilAt: sanitizeDateField(data.visibleUntilAt),
      },
    }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, watch } }) => (
      <Forms.Grid>
        <Forms.Input label="forms.fields.title" isWide {...register("title")} />
        <Forms.Input
          label="forms.fields.subtitle"
          isWide
          {...register("subtitle")}
        />
        <Forms.Input label="forms.fields.doi" {...register("doi")} />
        <Forms.Input label="forms.fields.issn" {...register("issn")} />
        <Forms.FileUpload
          label="forms.fields.thumbnail"
          name="thumbnail"
          image={thumbnail?.thumb}
          clearName="clearThumbnail"
        />
        <Forms.FileUpload
          label="forms.fields.heroImage"
          name="heroImage"
          image={heroImage?.thumb}
          clearName="clearHeroImage"
        />
        <Forms.Textarea
          label="forms.fields.summary"
          isWide
          {...register("summary")}
        />
        <Forms.Select
          label="forms.fields.visibility"
          options={[
            { label: "Visible", value: "VISIBLE" },
            { label: "Hidden", value: "HIDDEN" },
            { label: "Limited", value: "LIMITED" },
          ]}
          isWide
          {...register("visibility")}
        />
        <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
          <Forms.DatePicker
            label="forms.fields.visible_after"
            {...register("visibleAfterAt")}
          />
        </Forms.HiddenField>
        <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
          <Forms.DatePicker
            label="forms.fields.visible_until"
            {...register("visibleUntilAt")}
          />
        </Forms.HiddenField>
        <Forms.VariablePrecisionDateControl
          name="published"
          data={published}
          label="forms.fields.published"
          isWide
        />
        <Forms.VariablePrecisionDateControl
          name="accessioned"
          data={accessioned}
          label="forms.fields.accessioned"
          isWide
        />
        <Forms.VariablePrecisionDateControl
          name="available"
          data={available}
          label="forms.fields.available"
          isWide
        />
        <Forms.VariablePrecisionDateControl
          name="issued"
          data={issued}
          label="forms.fields.issued"
          isWide
        />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<CollectionUpdateFormMutation, Fields>
      name="updateCollection"
      onSuccess={onSuccess}
      onSaveAndClose={onSaveAndClose}
      onCancel={onCancel}
      successNotification="messages.update.collection_success"
      mutation={mutation}
      toVariables={toVariables}
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onSaveAndClose" | "onCancel"
  > {
  data: CollectionUpdateFormFragment$key;
}

type Fields = Omit<UpdateCollectionInput, "collectionId">;

const fieldsFragment = graphql`
  fragment CollectionUpdateFormFieldsFragment on Collection {
    title
    subtitle
    doi
    issn
    visibility
    summary
    visibleAfterAt
    visibleUntilAt
    thumbnail {
      storage
      thumb {
        png {
          alt
          url
        }
      }
    }
    heroImage {
      storage
      thumb {
        png {
          alt
          url
        }
      }
    }
    published {
      ...VariablePrecisionDateControlFragment
    }
    accessioned {
      ...VariablePrecisionDateControlFragment
    }
    available {
      ...VariablePrecisionDateControlFragment
    }
    issued {
      ...VariablePrecisionDateControlFragment
    }
  }
`;

const mutation = graphql`
  mutation CollectionUpdateFormMutation($input: UpdateCollectionInput!) {
    updateCollection(input: $input) {
      collection {
        ...CollectionUpdateFormFieldsFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment CollectionUpdateFormFragment on Collection {
    collectionId: id
    ...CollectionUpdateFormFieldsFragment
  }
`;
