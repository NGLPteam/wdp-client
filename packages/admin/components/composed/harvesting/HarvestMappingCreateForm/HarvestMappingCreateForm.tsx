import { graphql } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import EntitySelectorDisclosure from "components/forms/EntitySelector/EntitySelectorDisclosure";
import HarvestSetTypeahead from "components/forms/HarvestSetTypeahead";
import ExtractionMappingTemplateInput from "components/forms/ExtractionMappingTemplateInput";
import { Controller } from "react-hook-form";
import type {
  HarvestMappingCreateInput,
  HarvestMappingCreateFormMutation,
} from "@/relay/HarvestMappingCreateFormMutation.graphql";

export default function HarvestMappingCreateForm({
  sourceId,
  onSuccess,
  onCancel,
}: Props) {
  const { t } = useTranslation();

  const { slug } = useParams();

  const toVariables = useToVariables<
    HarvestMappingCreateFormMutation,
    HarvestMappingCreateInput
  >(
    (data) => ({
      input: {
        ...data,
        harvestSourceId: sourceId,
      },
    }),
    [],
  );

  const renderForm = useRenderForm<HarvestMappingCreateInput>(
    ({ form: { register, setValue, control } }) => {
      const onSelect = (id: string) => setValue("targetEntityId", id);
      return (
        <Forms.Grid>
          <EntitySelectorDisclosure
            {...register("targetEntityId", { required: true })}
            onSelect={onSelect}
            label={t("forms.fields.target_entity")}
            selectableTypes={{}}
            required
            isWide
          />
          {slug && (
            <HarvestSetTypeahead<HarvestMappingCreateInput>
              control={control}
              name="harvestSetId"
              label="glossary.harvest_set"
              slug={slug as string}
            />
          )}
          <Forms.Select
            label="forms.fields.metadata_format"
            {...register("metadataFormat")}
            options={[
              { label: "JATS", value: "JATS" },
              { label: "METS", value: "METS" },
              { label: "MODS", value: "MODS" },
              { label: "OAIDC", value: "OAIDC" },
            ]}
            required
          />
          <Controller
            name="extractionMappingTemplate"
            control={control}
            render={({ field }) => (
              <ExtractionMappingTemplateInput
                label="Extraction Mapping Template"
                sourceSlug={slug as string}
                {...field}
              />
            )}
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
          <Forms.Input
            label="forms.fields.schedule"
            description="forms.fields.frequency_expression_description"
            {...register("frequencyExpression")}
            isWide
          />
        </Forms.Grid>
      );
    },
    [],
  );

  return (
    <MutationForm<HarvestMappingCreateFormMutation, HarvestMappingCreateInput>
      name="harvestMappingCreate"
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.create.harvest_mapping_success"
      toVariables={toVariables}
      refetchTags={["harvestMappings"]}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onCancel"
  > {
  sourceId: string;
}

const mutation = graphql`
  mutation HarvestMappingCreateFormMutation(
    $input: HarvestMappingCreateInput!
  ) {
    harvestMappingCreate(input: $input) {
      harvestMapping {
        targetEntity {
          slug
          title
        }
        harvestSet {
          id
        }
        metadataFormat
        extractionMappingTemplate
        mappingOptions {
          autoCreateVolumesAndIssues
          linkIdentifiersGlobally
          useMetadataMappings
        }
        readOptions {
          maxRecords
        }
        frequencyExpression
      }
      ...MutationForm_mutationErrors
    }
  }
`;
