import { useFragment, graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import type {
  EntityPermalinksAddFormMutation,
  PermalinkCreateInput,
} from "@/relay/EntityPermalinksAddFormMutation.graphql";
import type { EntityPermalinksAddFormFragment$key } from "@/relay/EntityPermalinksAddFormFragment.graphql";

export default function EntityPermalinksAddForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const { t } = useTranslation();

  const sourceEntity = useFragment<EntityPermalinksAddFormFragment$key>(
    fragment,
    data,
  );

  const toVariables = useToVariables<EntityPermalinksAddFormMutation, Fields>(
    (data) => ({ input: { ...data, permalinkableId: sourceEntity.id || "" } }),
    [],
  );

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
          description={t("forms.fields.permalink_canonical_description")}
          {...register("canonical")}
        />
      </Forms.Grid>
    ),
    [],
  );

  return (
    <MutationForm<EntityPermalinksAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.add.permalink_success"
      failureNotification="messages.add.permalink_failure"
      name="permalinkCreate"
      refetchTags={["permalinks"]}
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
> & { data: EntityPermalinksAddFormFragment$key };

type Fields = Omit<PermalinkCreateInput, "clientMutationId">;

const fragment = graphql`
  fragment EntityPermalinksAddFormFragment on Entity {
    ... on Collection {
      id
      title
      slug
    }
    ... on Item {
      id
      title
      slug
    }
    ... on Community {
      id
      title
      slug
    }
  }
`;

const mutation = graphql`
  mutation EntityPermalinksAddFormMutation($input: PermalinkCreateInput!) {
    permalinkCreate(input: $input) {
      permalink {
        uri
        canonical
      }
      ...MutationForm_mutationErrors
    }
  }
`;
