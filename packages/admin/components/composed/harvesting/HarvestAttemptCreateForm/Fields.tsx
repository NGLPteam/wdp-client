import { useTranslation } from "react-i18next";
import { Forms } from "components/api/MutationForm";
import MockInput from "components/forms/MockInput";
import { useFormContext, type Control } from "react-hook-form";
import { useParams } from "next/navigation";
import startCase from "lodash/startCase";
import ExtractionAttemptTemplateInput from "components/forms/ExtractionMappingTemplateInput";
import { Controller } from "react-hook-form";
import EntitySelectorDisclosure from "components/forms/EntitySelector/EntitySelectorDisclosure";
import HarvestSetTypeahead from "components/forms/HarvestSetTypeahead";
import type { newHarvestAttemptFromMappingQuery } from "@/relay/newHarvestAttemptFromMappingQuery.graphql";
import type { newHarvestAttemptFromSourceQuery } from "@/relay/newHarvestAttemptFromSourceQuery.graphql";
import type { HarvestAttemptFromSourceInput } from "@/relay/FromSourceMutation.graphql";

type Props = {
  harvestMapping?: newHarvestAttemptFromMappingQuery["response"]["harvestMapping"];
  harvestSource?: newHarvestAttemptFromSourceQuery["response"]["harvestSource"];
};

export default function HarvestAttemptCreateFormFields({
  harvestMapping,
  harvestSource,
}: Props) {
  const { t } = useTranslation();
  const { slug } = useParams();
  const { register, control, setValue } = useFormContext();

  const onSelect = (id: string) => setValue("targetEntityId", id);

  return (
    <Forms.Grid>
      {!!harvestMapping && (
        <Forms.Fieldset label={t("harvesting.settings")}>
          <Forms.Grid>
            <MockInput
              label="glossary.harvest_source"
              value={harvestSource?.name ?? harvestMapping?.harvestSource?.name}
            />
            <MockInput
              label="glossary.harvest_set"
              value={harvestMapping?.harvestSet?.identifier}
            />
            <MockInput
              label="forms.fields.target_entity"
              value={harvestMapping?.targetEntity?.title}
            />
            <MockInput
              label="forms.fields.metadata_format"
              value={harvestMapping?.metadataFormat}
            />
          </Forms.Grid>
        </Forms.Fieldset>
      )}
      {!!harvestSource && (
        <>
          <Forms.Fieldset label={t("harvesting.settings")}>
            <Forms.Grid>
              <MockInput
                label="glossary.harvest_source"
                value={
                  harvestSource?.name ?? harvestMapping?.harvestSource?.name
                }
              />
              <MockInput
                label="forms.fields.metadata_format"
                value={harvestSource?.metadataFormat}
              />
            </Forms.Grid>
          </Forms.Fieldset>
          {slug && (
            <HarvestSetTypeahead<HarvestAttemptFromSourceInput>
              control={
                control as unknown as Control<HarvestAttemptFromSourceInput>
              }
              name="harvestSetId"
              label="glossary.harvest_set"
              slug={slug as string}
            />
          )}
          <EntitySelectorDisclosure
            {...register("targetEntityId", { required: true })}
            onSelect={onSelect}
            label={t("forms.fields.target_entity")}
            selectableTypes={{}}
            required
          />
        </>
      )}
      <Controller
        name="extractionMappingTemplate"
        control={control}
        render={({ field }) => (
          <ExtractionAttemptTemplateInput
            label={t("forms.extraction_mapping_template.label")}
            description={t(
              "forms.extraction_mapping_template.attempt_description",
              {
                parent: harvestMapping
                  ? startCase(t("glossary.harvest_mapping"))
                  : startCase(t("glossary.harvest_source")),
              },
            )}
            isAttempt
            {...field}
          />
        )}
      />
      <Forms.Input label="forms.fields.note" {...register("note")} isWide />
    </Forms.Grid>
  );
}
