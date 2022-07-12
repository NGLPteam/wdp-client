import React from "react";
import { useTranslation } from "react-i18next";
import Link from "..";

type BaseProps = React.ComponentProps<typeof Link>;

/* Simple download text and icon,
 * style can be changed using the className property */
export default function ExternalLink({ children, ...props }: BaseProps) {
  const { t } = useTranslation();
  return children ? (
    <Link {...props} target="_blank" rel="noreferrer" icon="linkExternal">
      {children}
      <span className="a-hidden">{t("common.opens_new_window")}</span>
    </Link>
  ) : null;
}
