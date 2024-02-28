import { useTranslation } from "react-i18next";
import Drawer from "components/layout/Drawer";
import ContributorCreateOrganizationForm from "../ContributorCreateOrganizationForm";
import type { DialogProps } from "reakit/Dialog";

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
