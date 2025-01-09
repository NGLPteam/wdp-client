import { useTranslation } from "react-i18next";
import Modal from "components/layout/BaseModal";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./AnnouncementModal.module.css";

type ModalProps = React.ComponentProps<typeof Modal>;

export default function AnnouncementModal({
  children,
  dialog,
  ...modalProps
}: Props) {
  const { t } = useTranslation();

  return (
    <Modal label="Announcement" dialog={dialog} {...modalProps}>
      <div className={styles.wrapper}>
        <button className={styles.button} type="button" onClick={dialog.hide}>
          <IconFactory icon="close" />
          <span className="sr-only">{t("common.close")}</span>
        </button>
        {children}
      </div>
    </Modal>
  );
}

interface Props extends ModalProps {
  children: React.ReactNode;
}
