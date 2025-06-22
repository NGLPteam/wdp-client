import { useTranslation } from "react-i18next";
import { ButtonControlRoute, ButtonControlConfirm } from "components/atomic";
import type { BaseRoute } from "@wdp/lib/routes";

type LinkProps = React.ComponentProps<typeof ButtonControlRoute>;

const DrawerActions = ({ routes, handleDelete, purgeButton }: Props) => {
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
      {purgeButton}
    </>
  );
};

interface Props {
  routes?: (LinkProps & { label?: BaseRoute["label"] })[];
  handleDelete?: () => void;
  purgeButton?: React.ReactNode;
}

export default DrawerActions;
