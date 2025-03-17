import { graphql } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { useTranslation } from "react-i18next";
import { convertToSlug } from "helpers";
import type {
  HarvestSourceCreateInput,
  HarvestSourceCreateFormMutation,
} from "@/relay/HarvestSourceCreateFormMutation.graphql";

export default function HarvestSourceCreateForm({
  onSuccess,
  onCancel,
}: Props) {
  const { t } = useTranslation();

  const toVariables = useToVariables<
    HarvestSourceCreateFormMutation,
    HarvestSourceCreateInput
  >(
    (data) => ({
      input: {
        ...data,
        identifier: data.identifier || convertToSlug(data.name),
      },
    }),
    [],
  );

  const renderForm = useRenderForm<HarvestSourceCreateInput>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.name"
          {...register("name")}
          required
          isWide
        />
        <Forms.Slug
          label="forms.fields.identifier"
          description="forms.fields.identifier_description"
          {...register("identifier")}
        />
        <Forms.Input
          label="forms.fields.url"
          {...register("baseURL")}
          isWide
          required
        />
        <Forms.Textarea
          label="forms.fields.description"
          {...register("description")}
          isWide
        />
        <Forms.Select
          label="forms.fields.protocol"
          {...register("protocol")}
          options={[{ label: "OAI-PMH", value: "OAI" }]}
        />
        <Forms.Select
          label="forms.fields.metadata_format"
          {...register("metadataFormat")}
          options={[
            { label: "JATS", value: "JATS" },
            { label: "METS", value: "METS" },
            { label: "MODS", value: "MODS" },
            { label: "OAIDC", value: "OAIDC" },
          ]}
        />
        <Forms.Fieldset label={t("forms.fields.mapping_options")}>
          <Forms.Checkbox
            label="forms.fields.auto_create_vol_iss"
            {...register("mappingOptions.autoCreateVolumesAndIssues")}
          />
          <Forms.Checkbox
            label="forms.fields.link_ids_globally"
            {...register("mappingOptions.linkIdentifiersGlobally")}
          />
          <Forms.Checkbox
            label="forms.fields.metadata_mappings"
            {...register("mappingOptions.useMetadataMappings")}
          />
        </Forms.Fieldset>
        <Forms.Fieldset label={t("forms.fields.read_options")}>
          <Forms.Input
            type="number"
            label="forms.fields.max_records"
            {...register("readOptions.maxRecords", { valueAsNumber: true })}
          />
        </Forms.Fieldset>
      </Forms.Grid>
    ),
    [],
  );

  return (
    <MutationForm<HarvestSourceCreateFormMutation, HarvestSourceCreateInput>
      name="harvestSourceCreate"
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.create.harvest_source_success"
      toVariables={toVariables}
      refetchTags={["harvestSources"]}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onCancel"
  > {}

const mutation = graphql`
  mutation HarvestSourceCreateFormMutation($input: HarvestSourceCreateInput!) {
    harvestSourceCreate(input: $input) {
      harvestSource {
        name
        baseURL
        description
        identifier
        protocol
        metadataFormat
        mappingOptions {
          autoCreateVolumesAndIssues
          linkIdentifiersGlobally
          useMetadataMappings
        }
        readOptions {
          maxRecords
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
