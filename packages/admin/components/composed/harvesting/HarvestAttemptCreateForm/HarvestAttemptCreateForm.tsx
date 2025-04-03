import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
  useOnSuccess,
} from "components/api/MutationForm";
import MockInput from "components/forms/MockInput";
import { RouteHelper } from "routes";
import { useParams } from "next/navigation";
import ExtractionAttemptTemplateInput from "components/forms/ExtractionMappingTemplateInput";
import { Controller } from "react-hook-form";
import type {
  HarvestAttemptFromMappingInput,
  HarvestAttemptCreateFormFromMappingMutation,
} from "@/relay/HarvestAttemptCreateFormFromMappingMutation.graphql";
import type { newHarvestAttemptFromMappingQuery } from "@/relay/newHarvestAttemptFromMappingQuery.graphql";

export default function HarvestAttemptCreateForm({ harvestMapping }: Props) {
  const { t } = useTranslation();
  const router = useRouter();
  const { slug } = useParams();

  const toVariables = useToVariables<
    HarvestAttemptCreateFormFromMappingMutation,
    HarvestAttemptFromMappingInput
  >(
    (data) => ({
      input: {
        ...data,
        harvestMappingId: harvestMapping?.id ?? "",
      },
    }),
    [],
  );

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

  const onCancel = () =>
    redirect("harvestMapping.harvestAttempts", slug as string);

  const onSuccess = useOnSuccess<
    HarvestAttemptCreateFormFromMappingMutation,
    HarvestAttemptFromMappingInput
  >(
    ({
      response,
    }: {
      response: HarvestAttemptCreateFormFromMappingMutation["response"];
    }) => {
      if (response?.harvestAttemptFromMapping?.harvestAttempt)
        redirect(
          "harvestAttempt.details",
          response.harvestAttemptFromMapping.harvestAttempt.slug,
        );
    },
    [redirect],
  );

  const renderForm = useRenderForm<HarvestAttemptFromMappingInput>(
    ({ form: { register, control } }) => {
      return (
        <Forms.Grid>
          <MockInput
            label="glossary.harvest_source"
            value={harvestMapping?.harvestSource?.name}
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
                      ? "Harvest Mapping"
                      : "Harvest Source",
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
    },
    [],
  );

  return (
    <MutationForm<
      HarvestAttemptCreateFormFromMappingMutation,
      HarvestAttemptFromMappingInput
    >
      name="harvestAttemptFromMapping"
      mutation={mutation}
      defaultValues={{
        extractionMappingTemplate: harvestMapping?.extractionMappingTemplate,
      }}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.create.harvest_attempt_success"
      toVariables={toVariables}
      refetchTags={["harvestAttempts"]}
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
  harvestMapping: newHarvestAttemptFromMappingQuery["response"]["harvestMapping"];
}

const mutation = graphql`
  mutation HarvestAttemptCreateFormFromMappingMutation(
    $input: HarvestAttemptFromMappingInput!
  ) {
    harvestAttemptFromMapping(input: $input) {
      harvestAttempt {
        id
        slug
        currentState
        metadataFormat
        beganAt
        endedAt
        mode
        scheduledAt
        recordCount
        note
        extractionMappingTemplate
      }
      ...MutationForm_mutationErrors
    }
  }
`;
