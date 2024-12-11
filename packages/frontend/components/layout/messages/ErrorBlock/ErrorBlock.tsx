"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/atomic";
import styles from "./ErrorBlock.module.css";

interface Props {
  /** Optional heading. Default is "A server error occured." */
  heading?: string;
  /** The error message */
  message?: string;
  reset?: () => void;
}

export default function ErrorMessage({ heading, message, reset }: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <p className="t-h3">{heading ?? t("messages.server_error")}</p>
      <p className="a-color-light">{message}</p>
      {reset && (
        <Button onClick={reset} size="sm">
          Try again
        </Button>
      )}
    </div>
  );
}
