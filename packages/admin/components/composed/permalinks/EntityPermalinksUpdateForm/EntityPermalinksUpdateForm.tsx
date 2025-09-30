import { useFragment, graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import type {
  EntityPermalinksUpdateFormMutation,
  PermalinkUpdateInput,
} from "@/relay/EntityPermalinksUpdateFormMutation.graphql";
import type { EntityPermalinksUpdateFormFragment$key } from "@/relay/EntityPermalinksUpdateFormFragment.graphql";

export default function EntityPermalinksUpdateForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const { t } = useTranslation();

  const permalink = useFragment<EntityPermalinksUpdateFormFragment$key>(
    fragment,
    data,
  );

  const toVariables = useToVariables<
    EntityPermalinksUpdateFormMutation,
    Fields
  >(
    (data) => ({
      input: {
        ...data,
        permalinkId: permalink?.id || "",
        permalinkableId: permalink?.permalinkable?.id || "",
      },
    }),
    [],
  );

  const defaultValues = {
    uri: permalink?.uri,
    canonical: permalink?.canonical,
  };

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.permalink_uri"
          description={t("forms.fields.permalink_uri_description")}
          required
          {...register("uri")}
        />
        <Forms.Checkbox
          label="forms.fields.permalink_canonical"
          description={t("forms.fields.permalink_canonical_description", {
            name: permalink?.permalinkable?.title || "this resource",
          })}
          {...register("canonical")}
        />
      </Forms.Grid>
    ),
    [],
  );

  return (
    <MutationForm<EntityPermalinksUpdateFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.update.permalink_success"
      failureNotification="messages.update.permalink_failure"
      name="permalinkUpdate"
      refetchTags={["permalinks"]}
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
> & { data: EntityPermalinksUpdateFormFragment$key };

type Fields = Omit<
  PermalinkUpdateInput,
  "clientMutationId" | "permalinkableId"
>;

const fragment = graphql`
  fragment EntityPermalinksUpdateFormFragment on Permalink {
    id
    uri
    canonical
    permalinkable {
      ... on Collection {
        id
        title
      }
      ... on Item {
        id
        title
      }
      ... on Community {
        id
        title
      }
    }
  }
`;

const mutation = graphql`
  mutation EntityPermalinksUpdateFormMutation($input: PermalinkUpdateInput!) {
    permalinkUpdate(input: $input) {
      permalink {
        id
        uri
        canonical
      }
      ...MutationForm_mutationErrors
    }
  }
`;
