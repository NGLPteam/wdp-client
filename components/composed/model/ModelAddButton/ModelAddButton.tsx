import React from "react";
import { useTranslation } from "react-i18next";
import { DrawerLink, ButtonControl } from "components/atomic";
import { useIsAuthorized } from "hooks";
import { getModelPlural } from "helpers";
import type { ModelNames } from "helpers/models";

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
  modelName: Lowercase<ModelNames>;
}

export default ButtonControlAdd;
