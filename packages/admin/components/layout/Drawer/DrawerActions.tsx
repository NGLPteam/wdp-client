import { useTranslation } from "react-i18next";
import { ButtonControlRoute, ButtonControlConfirm } from "components/atomic";
import { useDestroyer } from "hooks";
import type { BaseRoute } from "@wdp/lib/routes";

type LinkProps = React.ComponentProps<typeof ButtonControlRoute>;

const DrawerActions = ({
  routes,
  handleDelete,
  purgeButton,
  allowedActions,
}: Props) => {
  const { t } = useTranslation();

  function handleDeleteClick() {
    if (handleDelete) handleDelete();
  }

  const { inFlight } = useDestroyer();

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
          allowedActions={allowedActions}
          disabled={inFlight}
        >
          {t("delete")}
        </ButtonControlConfirm>
      )}
      {purgeButton}
    </>
  );
};

interface Props {
  routes?: (LinkProps & { label?: BaseRoute["label"] })[];
  handleDelete?: () => void;
  purgeButton?: React.ReactNode;
  allowedActions?: string[] | readonly string[];
}

export default DrawerActions;
