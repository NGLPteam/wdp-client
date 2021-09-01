import React from "react";
import ContributorCreatePersonForm from "../ContributorCreatePersonForm";
import Drawer from "components/layout/Drawer";
import { useTranslation } from "react-i18next";
import { DialogProps } from "reakit/Dialog";

export default function ContributorCreatePersonDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation();

  // TODO: Pass this into the drawer
  // const onCreate = useCallback(() => {
  //   if (!dialog?.hide) return;
  //   dialog.hide();
  // }, [dialog]);

  return (
    <Drawer
      label={t("actions.create.contributor.person")}
      header={t("drawers.createPerson.title")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <ContributorCreatePersonForm />
    </Drawer>
  );
}
