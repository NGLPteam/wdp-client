import React from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  GlobalSettingsEditFormMutation,
  UpdateGlobalConfigurationInput,
} from "@/relay/GlobalSettingsEditFormMutation.graphql";
import type { GlobalSettingsEditFormFragment$key } from "@/relay/GlobalSettingsEditFormFragment.graphql";

export default function GlobalSettingsEditForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const settings = useFragment<GlobalSettingsEditFormFragment$key>(
    fragment,
    data
  );

  const toVariables = useToVariables<GlobalSettingsEditFormMutation, Fields>(
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
          {...register("site.providerName")}
        />
        <Forms.Input
          label="forms.fields.installation_name"
          {...register("site.installationName")}
        />
        <Forms.Select
          label="forms.fields.theme_color"
          description={t("forms.fields.theme_color_description")}
          options={[
            { label: "Cream", value: "cream" },
            { label: "Gray", value: "gray" },
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
        <Forms.Fieldset label={t("forms.fields.footer")}>
          <Forms.Textarea
            label="forms.fields.footer_description"
            description="forms.fields.footer_description_description"
            {...register("site.footer.description")}
          />
          <Forms.Input
            label="forms.fields.copyright_statement"
            description="forms.fields.copyright_statement_description"
            {...register("site.footer.copyrightStatement")}
          />
        </Forms.Fieldset>
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<GlobalSettingsEditFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.update.global_settings_success"
      failureNotification="messages.update.global_settings_failure"
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
> & { data: GlobalSettingsEditFormFragment$key };

type Fields = Omit<UpdateGlobalConfigurationInput, "announcementId">;

const fragment = graphql`
  fragment GlobalSettingsEditFormFragment on GlobalConfiguration {
    site {
      providerName
      installationName
      footer {
        description
        copyrightStatement
      }
    }
    theme {
      color
      font
    }
  }
`;

const mutation = graphql`
  mutation GlobalSettingsEditFormMutation(
    $input: UpdateGlobalConfigurationInput!
  ) {
    updateGlobalConfiguration(input: $input) {
      globalConfiguration {
        site {
          providerName
          installationName
          footer {
            description
            copyrightStatement
          }
        }
        theme {
          color
          font
        }
      }
      ...MutationForm_mutationErrors
    }
  }
`;
