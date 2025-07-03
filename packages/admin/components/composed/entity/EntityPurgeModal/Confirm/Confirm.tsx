import { useTranslation } from "react-i18next";
import { useCallback } from "react";
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
  afterPurge?: () => void;
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

  const refetchTag =
    entityType === "community" ? "communities" : `${entityType}s`;
  const redirectPath = "redirectPath" in props ? props.redirectPath : undefined;

  const handlePurge = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (id) {
        destroy.purge(
          { entityId: id },
          title || `glossary.${entityType}`,
          refetchTag,
          redirectPath,
        );
        handleClose(e);
        if ("afterPurge" in props && props.afterPurge) {
          props.afterPurge();
        }
      }
    },
    [
      id,
      title,
      entityType,
      destroy,
      handleClose,
      props,
      refetchTag,
      redirectPath,
    ],
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
