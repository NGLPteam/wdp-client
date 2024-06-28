import React from "react";
import { useTranslation } from "react-i18next";
import Link from "..";

type BaseProps = React.ComponentProps<typeof Link> & {
  className?: string;
  filename?: string;
};

/* Simple download text and icon,
 * style can be changed using the className property */
export default function DownloadLink({
  className = "t-label-lg",
  children,
  filename,
  ...props
}: BaseProps) {
  const { t } = useTranslation();

  return (
    <Link
      {...props}
      className={className}
      icon="download"
      target="_blank"
      download={filename || ""}
    >
      {children || t("common.download")}
    </Link>
  );
}
