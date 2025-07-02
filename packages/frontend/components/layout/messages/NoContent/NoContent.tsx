"use client";

import classNames from "classnames";
import { useTranslation } from "react-i18next";
import styles from "./NoContent.module.css";

const NoContent = ({ message, inline }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles["wrapper--inline"]]: inline,
      })}
    >
      {message && typeof message !== "string" ? (
        message
      ) : (
        <p className="t-h4">
          {!message
            ? t("common.no_content")
            : typeof message === "string"
              ? t(message)
              : message}
        </p>
      )}
    </div>
  );
};

interface Props {
  /** Override the default message */
  message?: string | React.ReactNode;
  inline?: boolean;
}

export default NoContent;
