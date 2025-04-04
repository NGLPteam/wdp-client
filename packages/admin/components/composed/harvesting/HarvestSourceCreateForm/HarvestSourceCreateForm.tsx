import { useCallback } from "react";
import { useRouter } from "next/router";
import { graphql } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
  useOnSuccess,
} from "components/api/MutationForm";
import { useTranslation } from "react-i18next";
import { convertToSlug } from "helpers";
import { RouteHelper } from "routes";
import ExtractionMappingTemplateInput from "components/forms/ExtractionMappingTemplateInput";
import { Controller } from "react-hook-form";
import type {
  HarvestSourceCreateInput,
  HarvestSourceCreateFormMutation,
} from "@/relay/HarvestSourceCreateFormMutation.graphql";
import { METADATA_FORMAT_OPTS, PROTOCOL_FORMAT_OPTS } from "../constants";

export default function HarvestSourceCreateForm() {
  const { t } = useTranslation();
  const router = useRouter();

  const redirect = useCallback(
    (routeName: string, slug?: string) => {
      const newRoute = RouteHelper.findRouteByName(routeName);

      router.push({
        pathname: newRoute?.path,
        ...(slug ? { query: { slug } } : {}),
      });
    },
    [router],
  );

  const onSuccess = useOnSuccess<
    HarvestSourceCreateFormMutation,
    HarvestSourceCreateInput
  >(
    ({
      response,
    }: {
      response: HarvestSourceCreateFormMutation["response"];
    }) => {
      if (response?.harvestSourceCreate?.harvestSource)
        redirect(
          "harvestSource.details",
          response.harvestSourceCreate.harvestSource.slug,
        );
    },
    [redirect],
  );

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
    ({ form: { register, control } }) => (
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
          isWide
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
          options={PROTOCOL_FORMAT_OPTS}
          required
        />
        <Forms.Select
          label="forms.fields.metadata_format"
          {...register("metadataFormat")}
          options={METADATA_FORMAT_OPTS}
          required
        />
        <Controller
          name="extractionMappingTemplate"
          control={control}
          render={({ field }) => (
            <ExtractionMappingTemplateInput
              label={t("forms.extraction_mapping_template.label")}
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
            description="forms.fields.max_records_description"
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
      onCancel={() => redirect("harvesting")}
      successNotification="messages.create.harvest_source_success"
      toVariables={toVariables}
      refetchTags={["harvestSources"]}
    >
      {renderForm}
    </MutationForm>
  );
}

const mutation = graphql`
  mutation HarvestSourceCreateFormMutation($input: HarvestSourceCreateInput!) {
    harvestSourceCreate(input: $input) {
      harvestSource {
        slug
        name
        baseURL
        description
        identifier
        protocol
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
      ...MutationForm_mutationErrors
    }
  }
`;
