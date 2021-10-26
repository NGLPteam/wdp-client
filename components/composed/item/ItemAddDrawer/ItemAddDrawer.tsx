import * as React from "react";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/dialog";
import { useTranslation } from "react-i18next";
import ItemAddForm from "components/composed/item/ItemAddForm";

export default function ItemAddDrawer({ dialog }: { dialog: DialogProps }) {
  const { t } = useTranslation();

  return (
    <Drawer
      label={t("actions.add.item")}
      header={t("actions.add.item_header")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <ItemAddForm onSuccess={dialog.hide} onCancel={dialog.hide} />
    </Drawer>
  );
}
