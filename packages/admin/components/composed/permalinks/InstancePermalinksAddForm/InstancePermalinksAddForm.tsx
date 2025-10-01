import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import EntitySelectorDisclosure from "components/forms/EntitySelector/EntitySelectorDisclosure";
import type {
  InstancePermalinksAddFormMutation,
  PermalinkCreateInput,
} from "@/relay/InstancePermalinksAddFormMutation.graphql";

export default function InstancePermalinksAddForm({
  onSuccess,
  onCancel,
}: Props) {
  const { t } = useTranslation();

  const toVariables = useToVariables<InstancePermalinksAddFormMutation, Fields>(
    (data) => ({ input: data }),
    [],
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, setValue } }) => (
      <Forms.Grid>
        <EntitySelectorDisclosure
          {...register("permalinkableId", { required: true })}
          onSelect={(id: string) => setValue("permalinkableId", id)}
          label={t("forms.fields.permalink_target")}
          description={t("forms.fields.permalink_target_description")}
          selectableTypes={{}}
          required
        />
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
    <MutationForm<InstancePermalinksAddFormMutation, Fields>
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
>;

type Fields = Omit<PermalinkCreateInput, "clientMutationId">;

const mutation = graphql`
  mutation InstancePermalinksAddFormMutation($input: PermalinkCreateInput!) {
    permalinkCreate(input: $input) {
      permalink {
        uri
      }
      ...MutationForm_mutationErrors
    }
  }
`;
