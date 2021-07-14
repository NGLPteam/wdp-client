import React from "react";
import { useTranslation } from "react-i18next";
import { DrawerLink, ButtonControl } from "components/atomic";
import { useRouter } from "next/router";
import { AuthorizeActions } from "components/auth";

const ButtonControlAdd = ({ entityName }: Props) => {
  const { t } = useTranslation("glossary");
  const { query } = useRouter();

  return (
    <AuthorizeActions actions={[`${query.entity}.create`]}>
      <DrawerLink drawer="add" passHref>
        <ButtonControl as="a" icon="plus">
          {t("actions.add", { entity: entityName })}
        </ButtonControl>
      </DrawerLink>
    </AuthorizeActions>
  );
};

interface Props {
  entityName: string;
}

export default ButtonControlAdd;
