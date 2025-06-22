import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { useDestroyer } from "hooks";
import { Button } from "components/atomic";
import Link from "next/link";
import * as Styled from "../EntityPurgeModal.styles";

type LinkProps = React.ComponentProps<typeof Link>;

type BaseProps = {
  onBack: () => void;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  entityType: "collection" | "item" | "community";
  id: string;
  title: string;
};

type RedirectProps = BaseProps & {
  redirectPath: string | LinkProps["href"];
};

type CallbackProps = BaseProps & {
  afterPurge: () => void;
};

type Props = RedirectProps | CallbackProps;

export default function EntityPurgeConfirm({
  onBack,
  id,
  title,
  handleClose,
  entityType,
  ...props
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
        if ("redirectPath" in props) {
          router.replace(props.redirectPath);
        } else if ("afterPurge" in props) {
          props.afterPurge();
        }
      }
    },
    [id, title, entityType, destroy, router, handleClose, props],
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
