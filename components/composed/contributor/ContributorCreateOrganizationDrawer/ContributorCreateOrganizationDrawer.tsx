import React, { useCallback } from "react";
import ContributorCreateOrganizationForm from "../ContributorCreateOrganizationForm";
import Drawer from "components/layout/Drawer";
import { useTranslation } from "react-i18next";
import { DialogProps } from "reakit/Dialog";

export default function ContributorCreateOrganizationDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation("common");

  const onCreate = useCallback(() => {
    if (!dialog?.hide) return;
    dialog.hide();
  }, [dialog]);

  return (
    <Drawer
      label={t("actions.create.contributor.organization")}
      header={t("drawers.createOrganization.title")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <ContributorCreateOrganizationForm onCreate={onCreate} />
    </Drawer>
  );
}
