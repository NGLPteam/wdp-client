import { useTranslation } from "react-i18next";
import { ButtonControlDrawer } from "components/atomic";

export default function ItemCreateButton({ parentSlug }: Props) {
  const { t } = useTranslation();

  return parentSlug ? (
    <ButtonControlDrawer
      drawer="addItem"
      drawerQuery={{
        drawerSlug: parentSlug,
      }}
      icon="plus"
      actions="items.create"
    >
      {t("actions.add.item")}
    </ButtonControlDrawer>
  ) : null;
}

interface Props {
  parentSlug?: string;
}
