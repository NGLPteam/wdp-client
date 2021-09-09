import React from "react";
import { useTranslation } from "react-i18next";
import { DrawerLink, ButtonControl } from "components/atomic";
import { useIsAuthorized, useDrawerHelper } from "hooks";
import { getModelPlural } from "helpers";
import type { ModelNames } from "helpers/models";
import capitalize from "lodash/capitalize";

const ButtonControlAdd = ({ modelName }: Props) => {
  const { validTypes, drawers } = useDrawerHelper();

  const { t } = useTranslation();
  const isAuthorized = useIsAuthorized({
    actions: `${getModelPlural(modelName)}.create`,
  });

  const drawer = `add${capitalize(modelName)}`;
  if (!validTypes.includes(drawer)) return null;

  return isAuthorized ? (
    <DrawerLink drawer={drawer as keyof typeof drawers} passHref>
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
