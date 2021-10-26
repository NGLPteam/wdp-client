import React from "react";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import CommunityCreateForm from "components/composed/community/CommunityCreateForm";

export default function CommunityCreateDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation();

  return (
    <Drawer
      label={t("actions.create.community")}
      header={t("actions.create.community_header")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <CommunityCreateForm onSuccess={dialog.hide} />
    </Drawer>
  );
}
