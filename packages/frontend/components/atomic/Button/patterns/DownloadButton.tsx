import React from "react";
import { useTranslation } from "react-i18next";
import Button from "..";

type BaseProps = React.ComponentProps<typeof Button>;

/* Simple download text and icon,
 * style can be changed using the className property */
export default function DownloadButton({ children, ...props }: BaseProps) {
  const { t } = useTranslation();

  return (
    <Button
      as="a"
      size="sm"
      target="_blank"
      download
      {...props}
      icon="download"
    >
      {children || t("common.download")}
    </Button>
  );
}
