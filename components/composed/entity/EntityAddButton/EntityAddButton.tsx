import React from "react";
import { useTranslation } from "react-i18next";
import { DrawerLink, ButtonControl } from "components/atomic";
import { useRouter } from "next/router";
import { useIsAuthorized } from "hooks";

const ButtonControlAdd = ({ entityName }: Props) => {
  const { t } = useTranslation("glossary");
  const { query } = useRouter();
  const isAuthorized = useIsAuthorized({ actions: `${query.entity}.create` });

  return isAuthorized ? (
    <DrawerLink drawer="add" passHref>
      <ButtonControl as="a" icon="plus">
        {t("actions.add", { entity: entityName })}
      </ButtonControl>
    </DrawerLink>
  ) : null;
};

interface Props {
  entityName: string;
}

export default ButtonControlAdd;
