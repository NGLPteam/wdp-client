import { useTranslation } from "react-i18next";

interface Props {
  error?: Error;
  resetErrorBoundary?: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: Props) => {
  const { t } = useTranslation();

  return (
    <div role="alert">
      {t("messages.error_message", { error: error?.message })}
    </div>
  );
};

export default ErrorFallback;
