import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonControlRoute, ButtonControlConfirm } from "components/atomic";

import type { BaseRoute } from "routes/NextNamedRoutes";
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
          modalLabel={t("modals.delete.label")}
          modalBody={t("modals.delete.body")}
          onClick={handleDeleteClick}
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
