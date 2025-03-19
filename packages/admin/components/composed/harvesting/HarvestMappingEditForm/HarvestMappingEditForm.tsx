import { graphql, useFragment } from "react-relay";
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
  HarvestMappingUpdateInput,
  HarvestMappingEditFormMutation,
} from "@/relay/HarvestMappingEditFormMutation.graphql";
import type { HarvestMappingEditFormFragment$key } from "@/relay/HarvestMappingEditFormFragment.graphql";
import type { HarvestMappingEditFormFieldsFragment$key } from "@/relay/HarvestMappingEditFormFieldsFragment.graphql";
import type {
  HarvestMetadataFormat,
  HarvestProtocol,
} from "types/graphql-schema";
import type { EntityOption } from "components/forms/EntitySelector/EntitySelectorController";

export default function HarvestMappingEditForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const { t } = useTranslation();

  const { slug } = useParams();

  const { id, ...fieldsData } = useFragment<HarvestMappingEditFormFragment$key>(
    fragment,
    data,
  );

  const { targetEntity, harvestSet, ...defaultValues } =
    useFragment<HarvestMappingEditFormFieldsFragment$key>(
      fieldsFragment,
      fieldsData,
    );

  const toVariables = useToVariables<HarvestMappingEditFormMutation, Fields>(
    (data) => {
      const { metadataFormat, protocol, ...rest } = data;
      return {
        input: {
          ...rest,
          targetEntityId: data.targetEntityId ?? targetEntity.id,
          harvestMappingId: id,
        },
      };
    },
    [targetEntity],
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, setValue, control } }) => {
      const onSelect = (id: string) => setValue("targetEntityId", id);
      return (
        <Forms.Grid>
          <EntitySelectorDisclosure
            {...register("targetEntityId")}
            onSelect={onSelect}
            startSlug={targetEntity.slug}
            startEntity={targetEntity as EntityOption}
            label={t("forms.fields.target_entity")}
            selectableTypes={{}}
            required
          />
          {slug && (
            <HarvestSetTypeahead<Fields>
              control={control}
              name="harvestSetId"
              label="glossary.harvest_set"
              slug={slug as string}
              disabled
            />
          )}
          <Forms.Select
            label="forms.fields.metadata_format"
            {...register("metadataFormat")}
            disabled
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
        </Forms.Grid>
      );
    },
    [],
  );

  return (
    <MutationForm<HarvestMappingEditFormMutation, Fields>
      name="harvestMappingUpdate"
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.update.harvest_mapping_success"
      toVariables={toVariables}
      defaultValues={defaultValues}
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
  data: HarvestMappingEditFormFragment$key;
}

type Fields = HarvestMappingUpdateInput & {
  protocol: HarvestProtocol;
  metadataFormat: HarvestMetadataFormat;
  harvestSetId: string;
};

const fieldsFragment = graphql`
  fragment HarvestMappingEditFormFieldsFragment on HarvestMapping {
    targetEntity {
      slug
      title

      ... on Community {
        id
      }
      ... on Collection {
        id
      }
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
  }
`;

const mutation = graphql`
  mutation HarvestMappingEditFormMutation($input: HarvestMappingUpdateInput!) {
    harvestMappingUpdate(input: $input) {
      harvestMapping {
        ...HarvestMappingEditFormFieldsFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment HarvestMappingEditFormFragment on HarvestMapping {
    id
    ...HarvestMappingEditFormFieldsFragment
  }
`;
