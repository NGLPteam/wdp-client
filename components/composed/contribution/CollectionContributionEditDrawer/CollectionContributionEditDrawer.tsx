import React from "react";
import Drawer from "components/layout/Drawer";
import { useTranslation } from "react-i18next";
import { DialogProps } from "reakit/Dialog";

export default function CollectionContributionEditDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation("common");

  // TODO: Pass this into the drawer
  // const onCreate = useCallback(() => {
  //   if (!dialog?.hide) return;
  //   dialog.hide();
  // }, [dialog]);

  return (
    <Drawer
      label={t("actions.edit.collectionContribution")}
      header={t("drawers.editCollectionContribution.title")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      Edit Collection Contribution Form
    </Drawer>
  );
}
