import { useTranslation } from "react-i18next";

interface Props {
  error?: Error;
}

const ErrorFallback = ({ error }: Props) => {
  const { t } = useTranslation();

  return (
    <div role="alert">
      {t("messages.error_message", { error: error?.message })}
    </div>
  );
};

export default ErrorFallback;
