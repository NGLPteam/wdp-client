import React from "react";
import { useTranslation } from "react-i18next";
import { DrawerLink, ButtonControl } from "components/atomic";
import { useRouter } from "next/router";
import { useIsAuthorized } from "hooks";

const ButtonControlAdd = ({ modelName }: Props) => {
  const { t } = useTranslation("glossary");
  const { query } = useRouter();
  const isAuthorized = useIsAuthorized({ actions: `${query.model}.create` });

  return isAuthorized ? (
    <DrawerLink drawer="add" passHref>
      <ButtonControl as="a" icon="plus">
        {t("actions.add", { name: modelName })}
      </ButtonControl>
    </DrawerLink>
  ) : null;
};

interface Props {
  modelName: string;
}

export default ButtonControlAdd;
