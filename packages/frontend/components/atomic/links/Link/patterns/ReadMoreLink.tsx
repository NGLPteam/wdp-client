import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { MaybeLinkRef } from "@castiron/common-types";
import Link from "../Link";
import styles from "../Link.module.css";

function ReadMoreLink(
  { className, ...props }: { className?: string },
  ref: MaybeLinkRef,
) {
  const { t } = useTranslation();

  return (
    <Link
      ref={ref}
      as="span"
      icon="arrowRight"
      className={classNames(styles.readMore, className)}
      {...props}
    >
      {t("common.read_more")}
    </Link>
  );
}

export default forwardRef(ReadMoreLink);
