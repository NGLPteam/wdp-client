import * as React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import GlobalSettingsEditForm from "components/composed/settings/GlobalSettingsEditForm";
import Drawer from "components/layout/Drawer";
import DrawerActions from "components/layout/Drawer/DrawerActions";
import ClearInstanceCache from "components/atomic/buttons/ButtonControl/patterns/ButtonControlClearInstanceCache";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import { useViewerContext } from "contexts";
import type { GlobalSettingsEditDrawerQuery as Query } from "__generated__/GlobalSettingsEditDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

export default function GlobalSettingsEditDrawer({
  dialog, // params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();

  const { globalAdmin } = useViewerContext();

  return globalAdmin ? (
    <LazyLoadQueryWrapper<Query> query={query} variables={{}}>
      {({ data }) => {
        return (
          <Drawer
            header={t("actions.edit.global_settings_header")}
            dialog={dialog}
            hideOnClickOutside={false}
            buttons={
              <DrawerActions clearCacheButton={<ClearInstanceCache />} />
            }
          >
            {data?.globalConfiguration && (
              <GlobalSettingsEditForm
                data={data?.globalConfiguration}
                onSuccess={dialog.hide}
                onCancel={dialog.hide}
              />
            )}
          </Drawer>
        );
      }}
    </LazyLoadQueryWrapper>
  ) : null;
}

const query = graphql`
  query GlobalSettingsEditDrawerQuery {
    globalConfiguration {
      ...GlobalSettingsEditFormFragment
    }
  }
`;
