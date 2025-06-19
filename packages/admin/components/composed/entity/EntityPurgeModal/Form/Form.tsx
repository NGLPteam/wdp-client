import { Button } from "components/atomic";
import { useTranslation } from "react-i18next";
import * as Styled from "../EntityPurgeModal.styles";

type Props = {
  onPurge: () => void;
  onDelete: () => void;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
};

export default function EntityPurgeForm({
  onPurge,
  onDelete,
  handleClose,
  title,
}: Props) {
  const { t } = useTranslation();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDelete();
  };

  return (
    <>
      <Styled.Header>{title}</Styled.Header>
      <Styled.Instructions>
        <span>Choose how to remove this entity:</span>
        <ul>
          <li>Delete will attempt to remove just the entity itself.</li>
          <li>Purge will remove the entity and all of its descendants.</li>
        </ul>
        <span>
          {`If purge is selected, the process may take some time. Entites to be
          removed will be labeled "marked for purge" until the action completes.`}
        </span>
      </Styled.Instructions>
      <Styled.ButtonWrapper>
        <Button $red onClick={onPurge}>
          {t("actions.purge.button_label")}
        </Button>
        <Button onClick={handleDelete}>{t("common.delete")}</Button>
        <Button $secondary onClick={handleClose}>
          {t("common.cancel")}
        </Button>
      </Styled.ButtonWrapper>
    </>
  );
}
