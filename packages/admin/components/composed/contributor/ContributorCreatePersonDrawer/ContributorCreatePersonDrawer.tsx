import React from "react";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";
import ContributorCreatePersonForm from "../ContributorCreatePersonForm";
import Drawer from "components/layout/Drawer";

export default function ContributorCreatePersonDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation();

  return (
    <Drawer
      header={t("actions.create.contributor_person_header")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <ContributorCreatePersonForm
        onSuccess={dialog.hide}
        onCancel={dialog.hide}
      />
    </Drawer>
  );
}
