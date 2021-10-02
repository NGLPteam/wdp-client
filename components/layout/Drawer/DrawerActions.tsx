import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonControl, ButtonControlRoute } from "components/atomic";

import type { BaseRoute } from "routes/NextNamedRoutes";
type LinkProps = React.ComponentProps<typeof ButtonControlRoute>;

const DrawerActions = ({ routes, handleDelete }: Props) => {
  const { t } = useTranslation();

  function handleClick() {
    if (handleDelete) handleDelete();
  }

  return (
    <>
      {routes?.map(({ route, label, query }) => (
        <ButtonControlRoute key={route} route={route} query={query}>
          {t(label || "")}
        </ButtonControlRoute>
      ))}
      <ButtonControl icon="delete" onClick={handleClick}>
        {t("delete")}
      </ButtonControl>
    </>
  );
};

interface Props {
  routes?: (LinkProps & { label?: BaseRoute["label"] })[];
  handleDelete?: () => void;
}

export default DrawerActions;
