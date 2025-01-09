import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import Link from "..";

type BaseProps = Omit<React.ComponentProps<typeof Link>, "children">;

/* Simple download text and icon,
 * style can be changed using the className property */
export default function ExternalLink({
  children,
  ...props
}: BaseProps & PropsWithChildren) {
  const { t } = useTranslation();
  return children ? (
    <Link {...props} target="_blank" rel="noreferrer" icon="linkExternal">
      {children}
      <span className="sr-only">{t("common.opens_new_window")}</span>
    </Link>
  ) : null;
}
