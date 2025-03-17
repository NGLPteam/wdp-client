import { useTranslation } from "react-i18next";
import Drawer from "components/layout/Drawer";
import { useDrawerHelper } from "hooks";
import HarvestMappingCreateForm from "../HarvestMappingCreateForm";
import type { DialogProps } from "reakit/Dialog";

export default function HarvestMappingAddDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();

  const { drawerSourceId } = params ?? {};

  if (!drawerSourceId) {
    drawerHelper.close();
    return null;
  }

  return (
    <Drawer
      header={t("actions.add.harvest_mapping_header")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <HarvestMappingCreateForm
        onSuccess={dialog.hide}
        onCancel={dialog.hide}
        sourceId={drawerSourceId}
      />
    </Drawer>
  );
}
