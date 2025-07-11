import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonControl } from "components/atomic";
import Dialog from "components/layout/Dialog";
import capitalize from "lodash/capitalize";
import Link from "next/link";
import EntityPurgeForm from "./Form";
import EntityPurgeConfirm from "./Confirm";
import * as Styled from "./EntityPurgeModal.styles";

type LinkProps = React.ComponentProps<typeof Link>;

export default function EntityPurgeModal({
  id,
  title,
  entityType,
  handleDelete,
  redirectPath,
  afterPurge,
  hideLabel = false,
  disabled,
}: {
  id: string;
  title: string;
  entityType: "collection" | "item" | "community";
  handleDelete: (closeDialog: () => void) => void;
  redirectPath?: string | LinkProps["href"];
  afterPurge?: () => void;
  hideLabel?: boolean;
  disabled?: boolean;
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const { t } = useTranslation();

  const toggleOnConfirm = () => setShowConfirm(!showConfirm);

  const confirmProps = redirectPath
    ? {
        id,
        title,
        entityType,
        onBack: toggleOnConfirm,
        redirectPath,
      }
    : {
        id,
        title,
        entityType,
        onBack: toggleOnConfirm,
        afterPurge,
      };

  return (
    <Dialog.Provider
      options={{ modal: true, scrollLockClassName: "has-scroll-lock" }}
    >
      <Dialog.Toggle>
        {!hideLabel ? (
          <ButtonControl icon="delete" disabled={disabled}>
            {t("common.delete")}
          </ButtonControl>
        ) : (
          <ButtonControl
            icon="delete"
            aria-label={t("common.delete")}
            disabled={disabled}
          />
        )}
      </Dialog.Toggle>
      <Styled.Content
        button={(onClose) => {
          const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
            setShowConfirm(false);
            onClose(e);
          };
          return (
            <Styled.LabelWrapper>
              <span className="t-label-sm">
                {t("actions.purge.entity_purge_modal_header", {
                  entityType: capitalize(entityType),
                })}
              </span>
              <ButtonControl icon="close" iconRotate={0} onClick={handleClose}>
                {t("common.close")}
              </ButtonControl>
            </Styled.LabelWrapper>
          );
        }}
      >
        {(onClose) => {
          const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
            setShowConfirm(false);
            onClose(e);
          };
          return showConfirm && confirmProps ? (
            <EntityPurgeConfirm {...confirmProps} handleClose={handleClose} />
          ) : (
            <EntityPurgeForm
              onPurge={toggleOnConfirm}
              onDelete={() => handleDelete(onClose)}
              handleClose={handleClose}
              title={title}
            />
          );
        }}
      </Styled.Content>
    </Dialog.Provider>
  );
}
