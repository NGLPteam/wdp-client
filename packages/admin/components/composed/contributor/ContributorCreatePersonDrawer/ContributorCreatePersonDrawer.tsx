import React from "react";
import Drawer from "components/layout/Drawer";
import { useTranslation } from "react-i18next";
import { DialogProps } from "reakit/Dialog";
import ContributorCreatePersonForm from "../ContributorCreatePersonForm";

export default function ContributorCreatePersonDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation();

  return (
    <Drawer
      label={t("actions.create.contributor_person")}
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
