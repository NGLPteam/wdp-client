import React from "react";
import { useTranslation } from "react-i18next";
import type { BaseRoute } from "@wdp/lib/routes";
import { ButtonControlRoute, ButtonControlConfirm } from "components/atomic";

type LinkProps = React.ComponentProps<typeof ButtonControlRoute>;

const DrawerActions = ({ routes, handleDelete }: Props) => {
  const { t } = useTranslation();

  function handleDeleteClick() {
    if (handleDelete) handleDelete();
  }

  return (
    <>
      {routes?.map(({ route, label, query }) => (
        <ButtonControlRoute key={route} route={route} query={query}>
          {t(label || "")}
        </ButtonControlRoute>
      ))}
      {handleDelete && (
        <ButtonControlConfirm
          icon="delete"
          modalLabel={t("messages.delete.confirm_label")}
          modalBody={t("messages.delete.confirm_body")}
          onClick={handleDeleteClick}
          actions="self.delete"
        >
          {t("delete")}
        </ButtonControlConfirm>
      )}
    </>
  );
};

interface Props {
  routes?: (LinkProps & { label?: BaseRoute["label"] })[];
  handleDelete?: () => void;
}

export default DrawerActions;
