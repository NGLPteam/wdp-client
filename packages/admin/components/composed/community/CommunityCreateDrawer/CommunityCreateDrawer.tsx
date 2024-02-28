import { useTranslation } from "react-i18next";
import Drawer from "components/layout/Drawer";
import CommunityCreateForm from "components/composed/community/CommunityCreateForm";
import type { DialogProps } from "reakit/Dialog";

export default function CommunityCreateDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation();

  return (
    <Drawer
      header={t("actions.create.community_header")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <CommunityCreateForm onSuccess={dialog.hide} />
    </Drawer>
  );
}
