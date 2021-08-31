import React from "react";
import Drawer from "components/layout/Drawer";
import { useTranslation } from "react-i18next";
import { DialogProps } from "reakit/Dialog";

export default function ItemContributionEditDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation("common");

  return (
    <Drawer
      label={t("actions.edit.itemContribution")}
      header={t("drawers.editItemContribution.title")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      Edit Item Contribution Form
    </Drawer>
  );
}
