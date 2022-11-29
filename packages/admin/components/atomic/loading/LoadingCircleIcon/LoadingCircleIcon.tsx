import { useTranslation } from "react-i18next";
import * as Styled from "./LoadingCircleIcon.styles";

const LoadingCircleIcon = ({ label, className }: Props) => {
  const { t } = useTranslation("common");

  return (
    <Styled.Circle
      className={className}
      aria-label={t(label || "loading")}
      role="img"
    />
  );
};

interface Props {
  label?: string;
  className?: string;
}

export default LoadingCircleIcon;
