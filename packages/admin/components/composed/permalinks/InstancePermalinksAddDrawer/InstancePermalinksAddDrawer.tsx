import * as React from "react";
import { useTranslation } from "react-i18next";
import InstancePermalinksAddForm from "components/composed/permalinks/InstancePermalinksAddForm";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";

export default function InstancePermalinksAddDrawer({
  dialog,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();

  return (
    <Drawer
      header={t("actions.add.permalink_header")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <InstancePermalinksAddForm
        onSuccess={dialog.hide}
        onCancel={dialog.hide}
      />
    </Drawer>
  );
}
