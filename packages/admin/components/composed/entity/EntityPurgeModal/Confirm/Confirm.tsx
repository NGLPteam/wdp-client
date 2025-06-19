import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { useDestroyer } from "hooks";
import { Button } from "components/atomic";
import Link from "next/link";
import * as Styled from "../EntityPurgeModal.styles";

type LinkProps = React.ComponentProps<typeof Link>;

type Props = {
  onBack: () => void;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  entityType: "collection" | "item" | "community";
  id: string;
  title: string;
  redirectPath: string | LinkProps["href"];
};

export default function EntityPurgeConfirm({
  onBack,
  id,
  title,
  handleClose,
  entityType,
  redirectPath,
}: Props) {
  const { t } = useTranslation();

  const destroy = useDestroyer();
  const router = useRouter();

  const handlePurge = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (id) {
        destroy.purge(
          { entityId: id },
          title || `glossary.${entityType}`,
          entityType,
        );
        handleClose(e);
        router.replace(redirectPath);
      }
    },
    [id, title, entityType, destroy, router, handleClose, redirectPath],
  );

  return (
    <>
      <Styled.Header>{title}</Styled.Header>
      <div>{t("actions.purge.confirm_body")}</div>
      <Styled.ButtonWrapper>
        <Button $red onClick={handlePurge}>
          {t("actions.purge.button_label")}
        </Button>
        <Button $secondary onClick={onBack}>
          {t("common.back")}
        </Button>
      </Styled.ButtonWrapper>
    </>
  );
}
