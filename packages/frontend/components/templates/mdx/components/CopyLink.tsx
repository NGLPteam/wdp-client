import { useTranslation } from "react-i18next";
import Button from "@/components/atomic/Button";
import styles from "./components.module.css";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  label?: string | null;
};

export default function CopyLink({ children, label }: Props) {
  const { t } = useTranslation();

  const content = typeof children === "string" ? children : null;

  return (
    content && (
      <span className={styles.copyLink}>
        <Button
          icon="copy"
          iconLeft
          secondary
          size="sm"
          onClick={() => navigator.clipboard.writeText(content)}
        >
          {label ?? t("actions.copy")}
        </Button>
      </span>
    )
  );
}
