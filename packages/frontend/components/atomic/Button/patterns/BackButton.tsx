import React from "react";
import { useTranslation } from "react-i18next";
import Button from "..";

type BaseProps = React.ComponentProps<typeof Button>;

/* Simple download text and icon,
 * style can be changed using the className property */
export default function BackButton({ children, ...props }: BaseProps) {
  const { t } = useTranslation();

  return (
    <Button as="a" size="sm" secondary {...props} icon="arrowLeft" iconLeft>
      {children || t("common.back")}
    </Button>
  );
}
