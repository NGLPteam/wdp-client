import React from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  AppSettingsEditFormMutation,
  UpdateGlobalConfigurationInput,
} from "@/relay/AppSettingsEditFormMutation.graphql";
import type { AppSettingsEditFormFragment$key } from "@/relay/AppSettingsEditFormFragment.graphql";

export default function AppSettingsEditForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const settings = useFragment<AppSettingsEditFormFragment$key>(fragment, data);

  const toVariables = useToVariables<AppSettingsEditFormMutation, Fields>(
    (data) => ({ input: { ...data } }),
    []
  );

  const defaultValues = { ...settings };

  const { t } = useTranslation();

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.provider_name"
          required
          {...register("site.providerName")}
        />
        <Forms.Select
          label="forms.fields.theme_color"
          description={t("forms.fields.theme_color_description")}
          options={[
            { label: "Cream", value: "cream" },
            // { label: "Gray", value: "gray" },
            { label: "Blue", value: "blue" },
          ]}
          required
          {...register("theme.color")}
        />
        <Forms.Select
          label="forms.fields.theme_font"
          description={t("forms.fields.theme_font_description")}
          options={[
            { label: "Ilisarniq", value: "style1" },
            { label: "Switzer", value: "style2" },
            { label: "Sentient", value: "style3" },
          ]}
          required
          {...register("theme.font")}
        />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<AppSettingsEditFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.update.announcement_success"
      failureNotification="messages.update.announcement_failure"
      name="updateGlobalConfiguration"
      refetchTags={["globalConfiguration"]}
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
> & { data: AppSettingsEditFormFragment$key };

type Fields = Omit<UpdateGlobalConfigurationInput, "announcementId">;

const fragment = graphql`
  fragment AppSettingsEditFormFragment on GlobalConfiguration {
    site {
      providerName
    }
    theme {
      color
      font
    }
  }
`;

const mutation = graphql`
  mutation AppSettingsEditFormMutation(
    $input: UpdateGlobalConfigurationInput!
  ) {
    updateGlobalConfiguration(input: $input) {
      globalConfiguration {
        site {
          providerName
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
