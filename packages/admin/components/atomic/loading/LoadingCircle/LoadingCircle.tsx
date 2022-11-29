import { useTranslation } from "react-i18next";
import LoadingCircleIcon from "../LoadingCircleIcon";
import LoadingSkeleton from "../LoadingSkeleton";

const LoadingCircle = ({ label, className }: Props) => {
  const { t } = useTranslation("common");

  return (
    <LoadingSkeleton
      role="progressbar"
      aria-label={t(label || "loading")}
      noShimmer
      className={className}
    >
      <LoadingCircleIcon />
    </LoadingSkeleton>
  );
};

interface Props {
  label?: string;
  className?: string;
}

export default LoadingCircle;
