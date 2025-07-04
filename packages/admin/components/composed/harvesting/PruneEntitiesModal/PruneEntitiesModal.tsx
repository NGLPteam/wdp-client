import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ButtonControl } from "components/atomic";
import Dialog from "components/layout/Dialog";
import PruneEntitiesForm from "./Form";
import PruneEntitiesConfirm from "./Confirm";
import * as Styled from "./PruneEntitiesModal.styles";

export default function PruneEntitiesModal({
  id,
  type,
  title,
}: {
  id: string;
  title: string;
  type: "source" | "attempt";
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [mode, setMode] = useState<string>();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { t } = useTranslation();

  const toggleOnConfirm = () => setShowConfirm(!showConfirm);

  const clearAll = () => {
    setShowConfirm(false);
    setMode(undefined);
    if (formRef.current) formRef.current.reset();
  };

  return (
    <Dialog.Provider
      options={{ modal: true, scrollLockClassName: "has-scroll-lock" }}
    >
      <Dialog.Toggle>
        <ButtonControl icon="delete">
          {t("harvesting.prune.button_label")}
        </ButtonControl>
      </Dialog.Toggle>
      <Styled.Content
        button={(onClose) => {
          const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
            clearAll();
            onClose(e);
          };
          return (
            <ButtonControl icon="close" iconRotate={0} onClick={handleClose}>
              {t("common.close")}
            </ButtonControl>
          );
        }}
      >
        {(onClose) => {
          const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
            clearAll();
            onClose(e);
          };
          return showConfirm && mode ? (
            <PruneEntitiesConfirm
              id={id}
              type={type}
              title={title}
              mode={mode}
              onBack={toggleOnConfirm}
              handleClose={handleClose}
            />
          ) : (
            <PruneEntitiesForm
              formRef={formRef}
              onContinue={toggleOnConfirm}
              handleClose={handleClose}
              onModeSelect={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMode(e.target.value)
              }
              mode={mode}
              type={type}
              title={title}
            />
          );
        }}
      </Styled.Content>
    </Dialog.Provider>
  );
}
