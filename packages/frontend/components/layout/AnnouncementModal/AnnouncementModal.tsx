import { useTranslation } from "react-i18next";
import Modal from "components/layout/BaseModal";
import IconFactory from "@/components/factories/IconFactory";
import * as Styled from "./AnnouncementModal.styles";

type ModalProps = React.ComponentProps<typeof Modal>;

export default function AnnouncementModal({
  children,
  dialog,
  ...modalProps
}: Props) {
  const { t } = useTranslation();

  return (
    <Modal label="Announcement" dialog={dialog} {...modalProps}>
      <Styled.Wrapper>
        <Styled.CloseButton type="button" onClick={dialog.hide}>
          <IconFactory icon="close" />
          <span className="a-hidden">{t("common.close")}</span>
        </Styled.CloseButton>
        {children}
      </Styled.Wrapper>
    </Modal>
  );
}

interface Props extends ModalProps {
  children: React.ReactNode;
}
