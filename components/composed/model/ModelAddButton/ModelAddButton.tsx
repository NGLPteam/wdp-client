import React from "react";
import { useTranslation } from "react-i18next";
import { DrawerLink, ButtonControl } from "components/atomic";
import { useIsAuthorized } from "hooks";
import { getModelPlural } from "helpers";

const ButtonControlAdd = ({ modelName }: Props) => {
  const { t } = useTranslation("glossary");
  const isAuthorized = useIsAuthorized({
    actions: `${getModelPlural(modelName)}.create`,
  });

  return isAuthorized ? (
    <DrawerLink drawer="add" passHref>
      <ButtonControl as="a" icon="plus">
        {t("actions.add", { name: modelName })}
      </ButtonControl>
    </DrawerLink>
  ) : null;
};

interface Props {
  modelName?: string;
}

export default ButtonControlAdd;
