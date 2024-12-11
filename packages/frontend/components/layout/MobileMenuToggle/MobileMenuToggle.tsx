import { forwardRef, type ComponentProps } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { MaybeButtonRef } from "@castiron/common-types";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./MobileMenuToggle.module.css";

function MobileMenuToggle(
  { className, ...props }: ComponentProps<"button">,
  ref: MaybeButtonRef,
) {
  const { t } = useTranslation();

  return (
    <button
      className={classNames(styles.toggle, className)}
      ref={ref}
      {...props}
    >
      <span className={classNames("t-label-lg", styles.label)}>
        {t("nav.menu")}
      </span>
      <IconFactory icon="hamburger24" role="presentation" />
    </button>
  );
}

export default forwardRef(MobileMenuToggle);
