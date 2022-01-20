import * as React from "react";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import AppSettingsEditForm from "components/composed/settings/AppSettingsEditForm";
import Drawer from "components/layout/Drawer";
import { QueryWrapper } from "components/api";

import type { AppSettingsEditDrawerQuery as Query } from "__generated__/AppSettingsEditDrawerQuery.graphql";
import { useViewerContext } from "hooks";

export default function AppSettingsEditDrawer({
  dialog, // params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();

  const { globalAdmin } = useViewerContext();

  return globalAdmin ? (
    <QueryWrapper<Query> query={query}>
      {({ data }) => {
        return (
          <Drawer
            label={t("actions.edit.global_settings")}
            header={t("actions.edit.global_settings_header")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {data?.globalConfiguration && (
              <AppSettingsEditForm
                data={data?.globalConfiguration}
                onSuccess={dialog.hide}
                onCancel={dialog.hide}
              />
            )}
          </Drawer>
        );
      }}
    </QueryWrapper>
  ) : null;
}

const query = graphql`
  query AppSettingsEditDrawerQuery {
    globalConfiguration {
      ...AppSettingsEditFormFragment
    }
  }
`;
