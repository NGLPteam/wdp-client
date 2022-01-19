import React from "react";
import { useTranslation } from "react-i18next";
import Link from "..";

type BaseProps = React.ComponentProps<typeof Link>;

/* Simple download text and icon,
 * style can be changed using the className property */
export default function DownloadLink({
  className = "t-label-lg",
  children,
  ...props
}: BaseProps) {
  const { t } = useTranslation();

  return (
    <Link
      {...props}
      className={className}
      icon="download"
      target="_blank"
      download
    >
      {children || t("common.download")}
    </Link>
  );
}
