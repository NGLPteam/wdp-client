import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonControlDrawer } from "components/atomic";

export default function CollectionCreateButton({ parentSlug }: Props) {
  const { t } = useTranslation();

  return parentSlug ? (
    <ButtonControlDrawer
      drawer="addCollection"
      drawerQuery={{ drawerSlug: parentSlug }}
      icon="plus"
      actions="collections.create"
    >
      {t("actions.add.collection")}
    </ButtonControlDrawer>
  ) : null;
}

interface Props {
  parentSlug?: string;
}
