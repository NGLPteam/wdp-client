import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";
import ContributorCreateOrganizationForm from "../ContributorCreateOrganizationForm";
import Drawer from "components/layout/Drawer";

export default function ContributorCreateOrganizationDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation();

  return (
    <Drawer
      header={t("actions.create.contributor_organization_header")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <ContributorCreateOrganizationForm
        onSuccess={dialog.hide}
        onCancel={dialog.hide}
      />
    </Drawer>
  );
}
