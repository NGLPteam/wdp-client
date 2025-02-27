import { useTranslation } from "react-i18next";
import Drawer from "components/layout/Drawer";
// import HarvestSourceCreatePersonForm from "../HarvestSourceCreatePersonForm";
import type { DialogProps } from "reakit/Dialog";

export default function HarvestSourceCreatePersonDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation();

  return (
    <Drawer
      header={t("actions.add.harvest_source_header")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <div>Add form here</div>
    </Drawer>
  );
}
