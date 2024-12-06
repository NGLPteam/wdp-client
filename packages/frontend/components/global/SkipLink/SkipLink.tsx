import { useTranslation } from "react-i18next";
import { Alert } from "components/atomic";
import styles from "./SkipLink.module.css";

interface Props {
  toId: string;
  label?: string;
}

export default function SkipLink({ toId, label }: Props) {
  const { t } = useTranslation();
  const href = `#${toId}`;

  return (
    <a className={styles.link} href={href}>
      <Alert message={label ?? t("nav.skip_to_content")} color="blue" badge />
    </a>
  );
}
