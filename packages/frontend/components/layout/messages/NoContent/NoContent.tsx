import { useTranslation } from "react-i18next";
import styles from "./NoContent.module.css";

const NoContent = ({ message }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <p className="t-h4">
        {!message
          ? t("common.no_content")
          : typeof message === "string"
            ? t(message)
            : message}
      </p>
    </div>
  );
};

interface Props {
  /** Override the default message */
  message?: string | React.ReactNode;
}

export default NoContent;
