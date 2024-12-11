import classNames from "classnames";
import { useTranslation } from "react-i18next";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./CloseModalButton.module.css";

export default function MobileMenuToggle({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { t } = useTranslation();

  return (
    <button className={classNames(styles.toggle, className)} {...props}>
      <span className={classNames("t-label-lg", styles.label)}>
        {t("common.close")}
      </span>
      <IconFactory icon="close24" role="presentation" />
    </button>
  );
}
